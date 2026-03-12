import React, { useEffect, useRef } from "react";
import { useLanguage } from '../i18n/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Cooperation Mode Section */}
      <section 
        ref={(el) => (sectionsRef.current[0] = el)} 
        className="py-16 bg-gray-50 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{language === 'zh' ? '合作模式' : 'Cooperation Mode'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg shadow-sm transition-all duration-500 hover:shadow-md hover:translate-y-[-5px]">
                <h3 className="text-xl font-semibold mb-4">{language === 'zh' ? '共创计划' : 'Co-creation Plan'}</h3>
                <ul className="text-left space-y-3">
                  <li className="text-gray-700">• {language === 'zh' ? '免费提供工作空间、设备与基础材料' : 'Free provision of workspace, equipment and basic materials'}</li>
                  <li className="text-gray-700">• {language === 'zh' ? '全博士团队高效沟通，共同探索多轴工艺' : 'Efficient communication with all-PhD team, jointly exploring multi-axis technology'}</li>
                  <li className="text-gray-700">• {language === 'zh' ? '作品署名归艺术家所有' : 'Works are signed by the artist'}</li>
                  <li className="text-gray-700">• {language === 'zh' ? '如有销售，按协议友好分成' : 'If there are sales, friendly profit sharing according to agreement'}</li>
                  <li className="text-gray-700">• {language === 'zh' ? '额外材料成本双方透明分担' : 'Transparent sharing of additional material costs'}</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg shadow-sm transition-all duration-500 hover:shadow-md hover:translate-y-[-5px]">
                <h3 className="text-xl font-semibold mb-4">{language === 'zh' ? '联合展演 & 发展基金' : 'Joint Exhibition & Development Fund'}</h3>
                <ul className="text-left space-y-3">
                  <li className="text-gray-700">• {language === 'zh' ? '联合申请美术馆展览、品牌赞助、创作基金' : 'Joint application for art gallery exhibitions, brand sponsorships, and creation funds'}</li>
                  <li className="text-gray-700">• {language === 'zh' ? '万向三维®承担生产与技术维护，艺术家专注创作与叙事' : 'AxisWise® undertakes production and technical maintenance, artists focus on creation and narration'}</li>
                  <li className="text-gray-700">• {language === 'zh' ? '赞助款 & 版税：艺术家 70% / 万向三维® 30%' : 'Sponsorship & royalties: Artist 70% / AxisWise® 30%'}</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg shadow-sm transition-all duration-500 hover:shadow-md hover:translate-y-[-5px]">
                <h3 className="text-xl font-semibold mb-4">{language === 'zh' ? '附加支持' : 'Additional Support'}</h3>
                <ul className="text-left space-y-3">
                  <li className="text-gray-700">• {language === 'zh' ? '媒体宣传（拍摄纪录片/社媒推广）' : 'Media promotion (documentary shooting/social media promotion)'}</li>
                  <li className="text-gray-700">• {language === 'zh' ? '收藏家与画廊对接' : 'Collector and gallery connection'}</li>
                  <li className="text-gray-700">• {language === 'zh' ? '后续作品维护与技术升级' : 'Subsequent work maintenance and technical upgrading'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section 
        ref={(el) => (sectionsRef.current[1] = el)} 
        className="py-16 bg-white transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{language === 'zh' ? '联系方式' : 'Contact Details'}</h2>
            <div className="text-center mb-8">
              <p className="text-gray-700 mb-2 transition-all duration-300 hover:text-blue-600">{language === 'zh' ? '联系人：戴澄恺 (万向三维 CEO)' : 'Contact Person: Chengkai Dai'}</p>
              <p className="text-gray-700 mb-2 transition-all duration-300 hover:text-blue-600">{language === 'zh' ? '电话：+86 137 7125 2570 (内地) / +852 1234 5678 (香港)' : 'Phone: +86 137 7125 2570 (Mainland) / +852 1234 5678 (Hong Kong)'}</p>
              <p className="text-gray-700 transition-all duration-300 hover:text-blue-600">{language === 'zh' ? '邮箱：daichengkai@outlook.com' : 'Email: daichengkai@outlook.com'}</p>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
