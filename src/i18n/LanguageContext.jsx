import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('zh');

  // 监听URL变化，更新语言状态
  useEffect(() => {
    const updateLanguageFromUrl = () => {
      const pathSegments = window.location.pathname.split('/').filter(Boolean);
      // 找到语言代码的位置（可能在子路径之后）
      const langIndex = pathSegments.findIndex(segment => ['zh', 'en'].includes(segment));
      if (langIndex !== -1) {
        setLanguage(pathSegments[langIndex]);
      }
    };

    // 初始化时更新
    updateLanguageFromUrl();

    // 监听popstate事件（浏览器前进/后退）
    window.addEventListener('popstate', updateLanguageFromUrl);

    // 清理事件监听器
    return () => {
      window.removeEventListener('popstate', updateLanguageFromUrl);
    };
  }, []);

  const changeLanguage = (newLang) => {
    // 先更新语言状态
    setLanguage(newLang);

    // 然后更新URL路径，保持当前页面不变，只改变语言前缀
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    // 找到语言代码的位置
    const langIndex = pathSegments.findIndex(segment => ['zh', 'en'].includes(segment));
    
    let newPathSegments;
    if (langIndex !== -1) {
      // 如果找到语言代码，替换它
      newPathSegments = [...pathSegments];
      newPathSegments[langIndex] = newLang;
    } else {
      // 如果没有找到语言代码，添加到路径中
      newPathSegments = [...pathSegments, newLang];
    }
    
    // 构建新的路径，确保以/开头
    const newPath = '/' + newPathSegments.join('/');
    window.history.pushState({}, '', newPath);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
