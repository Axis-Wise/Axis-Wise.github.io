import React from "react";
import logo from '../assets/images/logo.png';
import { useLanguage } from '../i18n/LanguageContext';
const BusinessCard = () => {
  const { language, changeLanguage } = useLanguage();
  // 90mm * 54mm 的实际尺寸
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* 语言切换按钮 */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => changeLanguage(language === 'zh' ? 'en' : 'zh')}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-sm text-sm"
        >
          {language === 'zh' ? 'EN' : '中文'}
        </button>
      </div>
      <div
        className="bg-white border border-gray-200 relative overflow-hidden"
        style={{
          width: "99mm",
          height: "59.4mm",
        }}
      >
        {/* 装饰元素 */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-100 z-0" style={{backgroundColor: 'rgb(37 99 235)'}}></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-50 rounded-tr-full opacity-50 z-0"></div>
        {/* 名片内容 */}
        <div className="p-4 h-full flex flex-col relative z-10">
          <div className="flex items-center mb-1">
            <div className="w-14 h-14 rounded-sm flex items-center justify-center text-white font-bold text-lg">
              <img src={logo} alt="" className="w-12 h-12 object-contain" />
            </div>
            <div className="ml-4">
              <h1 className="text-lg font-bold text-gray-800">{language === 'zh' ? '万向三维' : 'AxisWise'}</h1>
              <p className="text-xs text-gray-500">{language === 'zh' ? '多轴3D打印' : 'Multi-Axis 3D Printing'}</p>
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-1">
              <p className="font-semibold text-sm text-gray-700">{language === 'zh' ? '戴澄恺 / CEO' : 'Dr.Dai Chengkai / CEO'}</p>
            </div>
            <div className="border-t border-gray-100 pt-2 space-y-2" style={{width: '80%'}}>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">📞</span>
                <div>
                  <p className="text-sm text-gray-600">{language === 'zh' ? '电话: +8613771252570 (内地)' : 'Phone: +8613771252570 (Mainland)'}</p>
                  <p className="text-sm text-gray-600"><span style={{opacity: 0}}>{language === 'zh' ? '电话: ' : 'Phone: '}</span>{language === 'zh' ? '+85263530570 (香港)' : '+85263530570 (Hong Kong)'}</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2" style={{transform: 'translateY(-2px)'}}>✉️</span>
                <p className="text-sm text-gray-600">{language === 'zh' ? '邮箱: daichengkai@outlook.com' : 'Email: daichengkai@outlook.com'}</p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2"  style={{transform: 'translateY(-3px)'}}>🌐</span>
                <p className="text-sm text-gray-600">{language === 'zh' ? '网站: https://axis-wise.github.io' : 'Website: https://axis-wise.github.io'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
