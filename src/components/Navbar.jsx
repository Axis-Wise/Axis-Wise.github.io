import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const { language, changeLanguage } = useLanguage();

  // 多语言导航链接
  const navLinks = language === 'zh' ? [
    { name: '技术路线', path: 'tech-route' },
    { name: '关于我们', path: 'about' },
  ] : [
    { name: 'Tech Route', path: 'tech-route' },
    { name: 'About', path: 'about' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to={`/${language}`} className="flex-shrink-0 flex items-center">
              <img src={logo} alt="AxisWise Logo" className="h-8 w-auto mr-2" />
              <span className="text-2xl font-bold text-gray-900">{language === 'zh' ? '万向三维®' : 'AxisWise®'}</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={`/${language}/${link.path}`}
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                onClick={() => changeLanguage(language === 'zh' ? 'en' : 'zh')}
                className="bg-gray-100 p-2 rounded-md text-gray-700 hover:bg-gray-200"
              >
                {language === 'zh' ? 'English' : '中文'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
