import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'components';
import { Home } from 'views';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
