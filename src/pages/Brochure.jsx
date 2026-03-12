import React, { useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import logo from '../assets/images/logo.png';
import image11 from '../assets/images/image1-1.png';
import image21 from '../assets/images/image2-1.png';
import image41 from '../assets/images/image4-1.png';
import image42 from '../assets/images/image4-2.png';
import image51 from '../assets/images/image5-1.png';
import image52 from '../assets/images/image5-2.png';
import image53 from '../assets/images/image5-3.png';
import image54 from '../assets/images/image5-4.png';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Brochure = () => {
  const { language, changeLanguage } = useLanguage();
  const frontCoverRef = useRef(null);
  const backCoverRef = useRef(null);

  const handleDownloadPDF = async () => {
    try {
      // 生成正面折页的Canvas
      const frontCanvas = await html2canvas(frontCoverRef.current, {
        scale: 2, // 提高分辨率
        useCORS: true, // 允许加载跨域图片
        logging: false
      });

      // 生成背面折页的Canvas
      const backCanvas = await html2canvas(backCoverRef.current, {
        scale: 2, // 提高分辨率
        useCORS: true, // 允许加载跨域图片
        logging: false
      });

      // 创建PDF，使用A4横向格式（与折页尺寸匹配）
      const pdf = new jsPDF('l', 'mm', 'a4');
      const imgWidth = 297; // A4横向宽度
      const imgHeight = 210; // A4横向高度

      // 添加正面折页
      const frontImgData = frontCanvas.toDataURL('image/png');
      pdf.addImage(frontImgData, 'PNG', 0, 0, imgWidth, imgHeight);

      // 添加背面折页
      pdf.addPage();
      const backImgData = backCanvas.toDataURL('image/png');
      pdf.addImage(backImgData, 'PNG', 0, 0, imgWidth, imgHeight);

      // 保存PDF
      pdf.save(language === 'zh' ? '万向三维双折页.pdf' : 'AxisWise Brochure.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };




  return (
    <div className="min-h-screen bg-gray-100">
      {/* Download PDF and Language switch buttons */}
      <div className="fixed top-4 right-4 z-50 flex space-x-4">
        <button
          style={{ display: 'none' }}
          onClick={handleDownloadPDF}
          className="bg-blue-600 text-white px-4 py-2 shadow-md hover:bg-blue-700 transition-colors"
        >
          {language === 'zh' ? '下载PDF' : 'Download PDF'}
        </button>
        <button
          onClick={() => changeLanguage(language === 'zh' ? 'en' : 'zh')}
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition-colors"
        >
          {language === 'zh' ? 'English' : '中文'}
        </button>
      </div>

      {/* Brochure container - A4 size (297mm x 210mm) */}
      <div 
        className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8"
      >
        {/* Brochure wrapper with exact A4 dimensions for printing */}
        <div 
          className="overflow-hidden"
          style={{
            width: '297mm',
            margin: '0 auto',
          }}
        >
          {/* Brochure content - 4 panels (front, inside left, inside right, back) */}
          <div ref={frontCoverRef} className="flex flex-col md:flex-row h-full relative">
            {/* Inside left - Contact */}
            <div 
              className="w-full md:w-1/2 p-8 bg-gradient-to-br from-blue-600 to-indigo-800 text-white flex flex-col justify-between relative overflow-hidden"
              style={{ height: '210mm' }}
            >
              {/* Background image */}
              <div className="absolute opacity-10 pointer-events-none" style={{left: 0, top: 0}}>
                <img 
                  src={image21} 
                  alt="Background" 
                  className="h-auto"
                />
              </div>
              
              <div className="flex-1 relative z-10">
                <h2 className="text-3xl font-bold mb-4">{language === 'zh' ? '关于我们' : 'About Us'}</h2>
                
                {/* Founder Team Section */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-4 text-blue-100">{language === 'zh' ? '创始人团队' : 'Founder Team'}</h3>
                  <div className="bg-blue-900/30 p-3 rounded-lg">
                    <ul className={`space-y-${language === 'zh' ? '2' : '1.5'} text-xs text-blue-100`}>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>{language === 'zh' ? '戴澄恺 博士：香港中文大学博智感知智能研究中心博士后' : 'Dr. Chengkai Dai: Postdoctoral Fellow at CUHK'}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>{language === 'zh' ? '方国鑫 博士：香港中文大学机械自动化工程助理教授' : 'Dr. Guoxin Fang: Assistant Professor at CUHK'}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>{language === 'zh' ? '任扬 博士：香港中文大学深圳研究院院长' : 'Dr. Yeung Yam: Dean of CUHK Shenzhen Research Institute'}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>{language === 'zh' ? '王昌凌 博士：英国曼彻斯特大学机械系教授' : 'Dr. Charlie C.L. Wang: Professor at Manchester Univ.'}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>{language === 'zh' ? '孙羽：曾在汇丰银行、恒生银行及花旗银行任职' : 'Yu Sun: Ex-banker at HSBC, Hang Seng, Citibank'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-100">{language === 'zh' ? '合作模式' : 'Cooperation Mode'}</h3>
                  
                  <div className="mb-4 pl-4 border-l-2 border-blue-400">
                    <h4 className="text-base font-semibold mb-2">{language === 'zh' ? '共创计划' : 'Co-creation Plan'}</h4>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-blue-100">
                      <li>{language === 'zh' ? '免费提供工作空间、设备与基础材料' : 'Free provision of workspace, equipment and basic materials'}</li>
                      <li>{language === 'zh' ? '全博士团队高效沟通，共同探索多轴工艺' : 'Efficient communication with all-PhD team'}</li>
                      <li>{language === 'zh' ? '作品署名归艺术家所有' : 'Works are signed by the artist'}</li>
                      <li>{language === 'zh' ? '如有销售，按协议友好分成' : 'Friendly profit sharing according to agreement'}</li>
                    </ul>
                  </div>
                  
                  <div className="mb-4 pl-4 border-l-2 border-blue-400">
                    <h4 className="text-base font-semibold mb-2">{language === 'zh' ? '联合展演 & 发展基金' : 'Joint Exhibition & Development Fund'}</h4>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-blue-100">
                      <li>{language === 'zh' ? '联合申请美术馆展览、品牌赞助、创作基金' : 'Joint application for art gallery exhibitions, brand sponsorships'}</li>
                      <li>{language === 'zh' ? '万向三维®承担生产与技术维护，艺术家专注创作与叙事' : 'AxisWise® undertakes production and technical maintenance'}</li>
                      <li>{language === 'zh' ? '赞助款 & 版税：艺术家 70% / 万向三维® 30%' : 'Sponsorship & royalties: Artist 70% / AxisWise® 30%'}</li>
                    </ul>
                  </div>
                  
                  <div className="pl-4 border-l-2 border-blue-400">
                    <h4 className="text-base font-semibold mb-2">{language === 'zh' ? '附加支持' : 'Additional Support'}</h4>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-blue-100">
                      <li>{language === 'zh' ? '专业摄影与文案策划' : 'Professional photography and copywriting'}</li>
                      <li>{language === 'zh' ? '展览场地推荐与对接' : 'Exhibition venue recommendations and connections'}</li>
                      <li>{language === 'zh' ? '媒体宣传与推广' : 'Media promotion and marketing'}</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-0 pt-4 border-t border-blue-400/30 relative z-10">
                <h3 className="text-base font-semibold mb-3 text-blue-100">{language === 'zh' ? '联系方式' : 'Contact Details'}</h3>
                <ul className="space-y-1 text-xs text-blue-100">
                  <li><strong>{language === 'zh' ? '联系人：' : 'Contact Person: '}</strong>{language === 'zh' ? '戴澄恺 (万向三维 CEO)' : 'Chengkai Dai'}</li>
                  <li><strong>{language === 'zh' ? '电话：' : 'Phone: '}</strong>{language === 'zh' ? '+86 137 7125 2570 (大陆) / +852 1234 5678 (香港)' : '+86 137 7125 2570 (Mainland) / +852 1234 5678 (Hong Kong)'}</li>
                  <li><strong>{language === 'zh' ? '邮箱：' : 'Email: '}</strong>daichengkai@outlook.com</li>
                </ul>
              </div>
            </div>

            {/* Front cover */}
            <div 
              className="w-full md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-8 flex flex-col justify-between"
              style={{ height: '210mm' }}
            >
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-start">
                  <img src={logo} alt="AxisWise Logo" className="w-24 mb-6" />
                  <h1 className="text-4xl md:text-4xl font-bold mb-6 leading-tight ml-2">{language === 'zh' ? '多轴3D打印共创计划' : 'Multi-axis 3D Printing Co-creation Plan'}</h1>
                </div>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100">{language === 'zh' ? '用多轴3D打印，共创新型艺术表达' : 'Multi-Axis 3D Printing for Artistic Fabrication'}</p>
                <div className="mt-6 flex-1 flex items-center justify-center pr-2" style={{transform: `translate(17px, ${language === 'zh' ? -16 : -37}px) scale(1.1)`}}>
                  <div className="aspect-square">
                    <img 
                      src={image11} 
                      alt={language === 'zh' ? '多轴3D打印技术' : 'Multi-axis 3D Printing'} 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gap between front and back covers */}
          <div className="h-4"></div>

          {/* Back cover */}
          <div ref={backCoverRef} className="flex flex-col md:flex-row border-t border-gray-200 relative" style={{ height: '210mm' }}>
            {/* Back left - Technology */}
            <div 
              className="w-full md:w-1/2 p-8 bg-white flex flex-col"
              style={{ height: '210mm' }}
            >
              <div className="flex-1">
                {/* Traditional 3D Printing Section */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-6 text-blue-700 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-.77-1.667-1.732-3-1.732H3.732c-1.333 0-2.268.867-2.268 2v18c0 1.333.935 2 2.268 2z" />
                      </svg>
                    </span>
                    {language === 'zh' ? '传统3D打印技术' : 'Traditional 3D Printing'}
                  </h3>
                  <div className="bg-gray-50 p-3 rounded-lg shadow-sm border-l-4 border-red-400 mb-6">
                    <h4 className="font-semibold mb-2 text-gray-800 text-sm">{language === 'zh' ? '最大的挑战：材料堆叠方向单一' : 'Biggest Challenge: Single Deposition Direction'}</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold mb-1 text-gray-800 text-sm">{language === 'zh' ? '支撑依赖' : 'Support Structures'}</h4>
                      <p className="text-xs text-gray-600">{language === 'zh' ? '悬挑必须加支撑 → 材料浪费、拆除留痕' : 'Overhangs require supports → material waste, removal artifacts'}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold mb-1 text-gray-800 text-sm">{language === 'zh' ? '审美表达受限' : 'Aesthetic Constraints'}</h4>
                      <p className="text-xs text-gray-600">{language === 'zh' ? '纹理方向被迫跟随Z轴、形态被迫妥协' : 'Orientation locked to Z-axis; limited aesthetic expression'}</p>
                    </div>
                  </div>
                </div>
                
                {/* Multi-Axis 3D Printing Section */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-6 text-blue-700 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </span>
                    {language === 'zh' ? '多轴3D打印技术' : 'Multi-Axis 3D Printing'}
                  </h3>
                  <div className="bg-blue-50 p-3 rounded-lg shadow-sm border-l-4 border-blue-500 mb-6">
                    <h4 className="font-semibold mb-2 text-gray-800 text-sm">{language === 'zh' ? '不再只向上"堆"，而是让喷头在空间任意舞动' : 'Beyond Stacking — 3D Printhead Movement Freedom'}</h4>
                    <p className="text-xs text-gray-600">{language === 'zh' ? '多自由度控制沉积方向，打印头任意姿态，任意路径 在空间中自由表达' : 'Multi-degree-of-freedom control of deposition direction, print head in any posture, any path - free expression in space'}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    <div className="aspect-video rounded-lg overflow-hidden shadow-md" style={{aspectRatio: language === 'zh' ? '1 / 0.79' : '1 / 0.6'}}>
                      <img 
                        src={image41} 
                        alt={language === 'zh' ? '多轴3D打印技术' : 'Multi-Axis 3D Printing'} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-video rounded-lg overflow-hidden shadow-md" style={{aspectRatio: language === 'zh' ? '1 / 0.79' : '1 / 0.6'}}>
                      <img 
                        src={image42} 
                        alt={language === 'zh' ? '多轴3D打印技术' : 'Multi-Axis 3D Printing'} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-blue-200 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold mb-1 text-blue-700 text-sm">{language === 'zh' ? '支撑最小化' : 'Minimal Supports'}</h4>
                      <p className="text-xs text-gray-600">{language === 'zh' ? '悬挑直接打印' : 'Overhangs no more exists'}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-blue-200 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold mb-1 text-blue-700 text-sm">{language === 'zh' ? '形态自由' : 'High Quality'}</h4>
                      <p className="text-xs text-gray-600">{language === 'zh' ? '复杂曲面/纤细结构可行' : 'Lower staircase effect'}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-blue-200 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold mb-1 text-blue-700 text-sm">{language === 'zh' ? '表面可控' : 'Texture, by Design'}</h4>
                      <p className="text-xs text-gray-600">{language === 'zh' ? '纹理/层纹方向可设计' : 'Design the layer flow as part of the look'}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-blue-200 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold mb-1 text-blue-700 text-sm">{language === 'zh' ? '性能优化' : 'Mechanical Optimization'}</h4>
                      <p className="text-xs text-gray-600">{language === 'zh' ? '强度各向可调，多材料融合' : 'Tailor strength, stiffness, and toughness via toolpath'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back right - About */}
            <div 
              className="w-full md:w-1/2 p-8 bg-white flex flex-col"
              style={{ height: '210mm' }}
            >
              <div className="flex-1">
                {/* Core Advantages Section */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-6 text-blue-700 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    {language === 'zh' ? '核心优势' : 'Core Advantages'}
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-blue-500 mb-6">
                    <p className="text-gray-700 text-sm mb-3">{language === 'zh' ? '自研框架，从三维模型设计到多轴打印成品全流程打通' : 'A proprietary end-to-end framework connecting the entire pipeline from 3D model design to printed output'}</p>
                    <p className="text-gray-700 text-sm">{language === 'zh' ? '通过硬件系统的创新设计，配合3D打印切片策略与机械臂运动控制上的一系列自研算法，最大化释放多轴优势，确保设计意图精准落地' : 'Through innovative hardware design, combined with a suite of slicing strategies and robotic control algorithms, we fully unlock the advantages of multi-axis 3D printing and ensure design intent is delivered with precision'}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="aspect-square rounded-lg overflow-hidden shadow-md" style={{aspectRatio: language === 'zh' ? '1 / 1.26' : '1 / 0.96'}}>
                      <img 
                        src={image53} 
                        alt={language === 'zh' ? '核心优势' : 'Core Advantages'} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden shadow-md" style={{aspectRatio: language === 'zh' ? '1 / 1.26' : '1 / 0.96'}}>
                      <img 
                        src={image54} 
                        alt={language === 'zh' ? '核心优势' : 'Core Advantages'} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Value for Artists Section */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-6 text-blue-700 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </span>
                    {language === 'zh' ? '对艺术家的价值' : 'Value for Artists'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold mb-1 text-gray-800 text-sm">{language === 'zh' ? '尺度灵活' : 'Full-scale Capability'}</h4>
                      <p className="text-xs text-gray-600">{language === 'zh' ? '从珠宝级微型到装置级 1 m 尺度' : 'From jewelry-scale to 1m installation-scale'}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold mb-1 text-gray-800 text-sm">{language === 'zh' ? '形态自由' : 'Design Freedom'}</h4>
                      <p className="text-xs text-gray-600">{language === 'zh' ? '悬挑、纤细结构、流动曲线皆可实现' : 'Overhangs, slender structures, flowing curves'}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold mb-1 text-gray-800 text-sm">{language === 'zh' ? '纹理与方向控制' : 'Texture Control'}</h4>
                      <p className="text-xs text-gray-600">{language === 'zh' ? '结构强度、光影、触感都可设计' : 'Structure, light, shadow, and texture design'}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold mb-1 text-gray-800 text-sm">{language === 'zh' ? '材料多样' : 'Multi-material Options'}</h4>
                      <p className="text-xs text-gray-600">{language === 'zh' ? '多色高透度聚合物、树脂、陶瓷、碳纤维等' : 'Polymers, resins, ceramics, carbon fiber composites'}</p>
                    </div>
                  </div>
                </div>
                

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
            background: white;
          }
          
          .fixed {
            display: none;
          }
          
          .max-w-7xl {
            max-width: 100%;
            padding: 0;
          }
          
          .shadow-xl {
            box-shadow: none;
          }
          
          /* Ensure exact A4 size */
          @page {
            size: A4;
            margin: 0;
          }
          

        }
      `}</style>
    </div>
  );
};

export default Brochure;