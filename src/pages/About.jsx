import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import image81 from '../assets/images/image8-1.png';
import image82 from '../assets/images/image8-2.png';
import image83 from '../assets/images/image8-3.png';
import image84 from '../assets/images/image8-4.png';
import image85 from '../assets/images/image8-5.png';

const About = () => {
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


      {/* Founders Team Section */}
      <section 
        id="founders"
        ref={(el) => (sectionsRef.current[0] = el)} 
        className="py-16 bg-white transition-all duration-1000 h-[638px] flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{language === 'zh' ? '万向三维®创始人团队' : 'AxisWise® Founder Team'}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-white p-4 rounded-xl shadow-md transition-all duration-500 hover:shadow-lg hover:translate-y-[-8px] border border-gray-100">
                <div className="w-40 h-56 mx-auto mb-4 overflow-hidden rounded-lg border-2 border-gray-200">
                  <img 
                    src={image81} 
                    alt="戴澄恺 博士" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <h4 className="font-semibold mb-2 text-center">{language === 'zh' ? '戴澄恺 博士' : 'Dr. Chengkai Dai'}</h4>
                <p className="text-gray-500 text-xs text-center">
                  {language === 'zh' ? 
                    '现为香港中文大学博智感知智能研究中心博士后，博士毕业于荷兰代尔夫特理工大学，深耕多轴3D打印多年，所研发技术已在清华大学，米兰理工大学，中科院等多个机构落地' : 
                    'Postdoctoral Fellow at the Centre for Perceptual and Interactive Intelligence, The Chinese University of Hong Kong (CUHK). PhD from The Chinese University of Hong Kong, with extensive experience in multi-axis 3D printing. His developed technologies have been adopted by institutions including MIT and the Chinese Academy of Sciences.'
                  }
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md transition-all duration-500 hover:shadow-lg hover:translate-y-[-8px] border border-gray-100">
                <div className="w-40 h-56 mx-auto mb-4 overflow-hidden rounded-lg border-2 border-gray-200">
                  <img 
                    src={image82} 
                    alt="方国鑫 博士" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <h4 className="font-semibold mb-2 text-center">{language === 'zh' ? '方国鑫 博士' : 'Dr. Guoxin Fang'}</h4>
                <p className="text-gray-500 text-xs text-center">
                  {language === 'zh' ? 
                    '现为香港中文大学机械自动化工程助理教授，博士毕业于荷兰代尔夫特理工大学，在顶级期刊/会议发表近10篇多轴3D打印相关论文，其中一项工作获SIGGRAPH Asia最佳论文奖' : 
                    'Assistant Professor in Mechanical and Automation Engineering at CUHK. PhD from Delft University of Technology, with academic background at Tsinghua University and Michigan State University. Published nearly 10 papers on multi-axis 3D printing in leading journals and conferences, with one awarded Best Paper at SIGGRAPH Asia.'
                  }
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md transition-all duration-500 hover:shadow-lg hover:translate-y-[-8px] border border-gray-100">
                <div className="w-40 h-56 mx-auto mb-4 overflow-hidden rounded-lg border-2 border-gray-200">
                  <img 
                    src={image83} 
                    alt="任扬 博士" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <h4 className="font-semibold mb-2 text-center">{language === 'zh' ? '任扬 博士' : 'Dr. Yeung Yam'}</h4>
                <p className="text-gray-500 text-xs text-center">
                  {language === 'zh' ? 
                    '现为香港中文大学深圳研究院院长及香港中文大学机械与自动化工程学系研究教授' : 
                    'Professor at the Department of Mechanical and Automation Engineering, CUHK Dean of CUHK Shenzhen Research Institute.'
                  }
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md transition-all duration-500 hover:shadow-lg hover:translate-y-[-8px] border border-gray-100">
                <div className="w-40 h-56 mx-auto mb-4 overflow-hidden rounded-lg border-2 border-gray-200">
                  <img 
                    src={image84} 
                    alt="王昌凌 博士" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <h4 className="font-semibold mb-2 text-center">{language === 'zh' ? '王昌凌 博士' : 'Dr. Charlie C.L. Wang'}</h4>
                <p className="text-gray-500 text-xs text-center">
                  {language === 'zh' ? 
                    '现为英国曼彻斯特大学机械系教授及曼彻斯特大学智能制造中心主任' : 
                    'Professor of Mechanical Engineering at The University of Manchester, UK, and Director of the Manchester Centre for Digital Fabrication.'
                  }
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md transition-all duration-500 hover:shadow-lg hover:translate-y-[-8px] border border-gray-100">
                <div className="w-40 h-56 mx-auto mb-4 overflow-hidden rounded-lg border-2 border-gray-200">
                  <img 
                    src={image85} 
                    alt="孙羽" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <h4 className="font-semibold mb-2 text-center">{language === 'zh' ? '孙羽' : 'Yu Sun'}</h4>
                <p className="text-gray-500 text-xs text-center">
                  {language === 'zh' ? 
                    '曾在汇丰银行、恒生银行及花旗银行等国际顶尖金融机构任职' : 
                    'Has worked in top international financial institutions such as HSBC, Hang Seng Bank, and Citibank'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cooperation Mode Section */}
      <section 
        id="cooperation"
        ref={(el) => (sectionsRef.current[1] = el)} 
        className="py-16 bg-gray-50 transition-all duration-1000 h-[638px] flex items-center"
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
        id="contact"
        ref={(el) => (sectionsRef.current[2] = el)} 
        className="py-16 bg-white transition-all duration-1000 h-[638px] flex items-center"
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

export default About;
