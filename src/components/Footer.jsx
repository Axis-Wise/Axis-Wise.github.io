import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_3fr] gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{language === 'zh' ? '万向三维®' : 'AxisWise®'}</h3>
            <p className="text-gray-400">{language === 'zh' ? '多轴3D打印共创计划' : 'Multi-axis 3D Printing Co-creation Plan'}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{language === 'zh' ? '快速链接' : 'Quick Links'}</h3>
            <ul className="space-y-2">
              <li><Link to={`/${language}`} className="text-gray-400 hover:text-white">{language === 'zh' ? '首页' : 'Home'}</Link></li>
              <li><Link to={`/${language}/tech-route`} className="text-gray-400 hover:text-white">{language === 'zh' ? '技术路线' : 'Tech Route'}</Link></li>
              <li><Link to={`/${language}/about`} className="text-gray-400 hover:text-white">{language === 'zh' ? '关于我们' : 'About'}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{language === 'zh' ? '联系我们' : 'Contact Us'}</h3>
            <p className="text-gray-400">{language === 'zh' ? '戴澄恺 (万向三维 CEO)' : 'Chengkai Dai (AxisWise CEO)'}</p>
            <p className="text-gray-400">{language === 'zh' ? '电话：+86 137 7125 2570（内地）/ +852 1234 5678（香港）' : 'Phone: +86 137 7125 2570 (Mainland) / +852 1234 5678 (Hong Kong)'}</p>
            <p className="text-gray-400">{language === 'zh' ? '邮箱：daichengkai@outlook.com' : 'Email: daichengkai@outlook.com'}</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>{language === 'zh' ? '© 2026 万向三维®. 保留所有权利.' : '© 2026 AxisWise®. All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
