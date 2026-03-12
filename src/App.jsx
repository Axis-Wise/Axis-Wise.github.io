import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Brochure from './pages/Brochure';
import TechRoute from './pages/TechRoute';
import BusinessCard from './pages/BusinessCard';

// 路由变化时处理滚动的组件
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    // 检查URL中是否包含锚点
    const hash = location.hash;
    if (hash) {
      // 有锚点时，滚动到对应的元素
      const element = document.querySelector(hash);
      if (element) {
        // 考虑导航栏高度（65px），避免内容被遮挡
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetTop = elementTop - 65;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    } else {
      // 无锚点时，滚动到顶部
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return null;
};

import { config } from '../config';

function App() {
  return (
    <Router basename={config.publicPath}>
      <ScrollToTop />
      <Routes>
        {/* 重定向根路径到中文首页 */}
        <Route path="/" element={<Navigate to="/zh" replace />} />
        {/* 带语言前缀的路由 */}
        <Route path="/:lang">
          <Route element={<LanguageProvider><Navbar /><Outlet /><Footer /></LanguageProvider>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="tech-route" element={<TechRoute />} />
          </Route>
          <Route element={<LanguageProvider><Outlet /></LanguageProvider>}>
            <Route path="brochure" element={<Brochure />} />
            <Route path="business-card" element={<BusinessCard />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;