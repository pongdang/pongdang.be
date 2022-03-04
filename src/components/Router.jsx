import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HelloPage from "../pages/Hello/HelloPage";
import DailyPage from "../pages/Daily/DailyPage";
// Study 페이지
import StudyPage from "../pages/Study";
import StudyListPage from "../pages/Study/ListPage";
import StudyPostPage from "../pages/Study/PostPage";

export default function Router() {
  return (
    <Routes>
      <Route exact path='/' element={<HelloPage />} />
      <Route path='/study' element={<StudyPage />}>
        <Route index element={<Navigate replace to='/study/frontend' />} />
        {/* 리스트 페이지 */}
        <Route path='frontend' element={<StudyListPage />} />
        <Route path='coding-test' element={<StudyListPage />} />
        {/* 상세 페이지 */}
        <Route path='frontend/:id' element={<StudyPostPage />} />
        <Route path='coding-test/:id' element={<StudyPostPage />} />
      </Route>
      <Route path='/contact' element={<DailyPage />} />
    </Routes>
  );
}
