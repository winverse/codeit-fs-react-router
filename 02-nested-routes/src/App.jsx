import { Routes, Route } from 'react-router';
import { HomePage } from './features/home/HomePage';
import { CommunityPage } from './features/community/CommunityPage';
import { HomeLayout } from './layouts/HomeLayout/HomeLayout';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index={true} element={<HomePage />} />
        <Route path="community" element={<CommunityPage />} />
      </Route>
    </Routes>
  );
}
