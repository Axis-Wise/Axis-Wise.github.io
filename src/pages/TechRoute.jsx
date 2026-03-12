import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import image31 from '../assets/images/image3-1.png';
import image32 from '../assets/images/image3-2.png';
import image41 from '../assets/images/image4-1.png';
import image42 from '../assets/images/image4-2.png';
import image51 from '../assets/images/image5-1.png';
import image52 from '../assets/images/image5-2.png';
import image53 from '../assets/images/image5-3.png';
import image54 from '../assets/images/image5-4.png';
import image61 from '../assets/images/image6-1.png';
import image62 from '../assets/images/image6-2.png';
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';

const TechRoute = () => {
  const { language } = useLanguage();
  const sectionsRef = useRef([]);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Traditional 3D Printing Section */}
      <section 
        id="traditional"
        ref={(el) => (sectionsRef.current[0] = el)} 
        className="py-16 relative overflow-hidden transition-all duration-1000 h-[940px] flex items-center"
      >
        {/* 视频背景 */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
          >
            <source src={video1} type="video/mp4" />
            {/* 占位视频，实际使用时替换为真实视频链接 */}
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">{language === 'zh' ? '传统3D打印技术' : 'Traditional 3D Printing'}</h2>
            <h3 className="text-xl text-white mb-6">{language === 'zh' ? '最大的挑战：材料堆叠方向单一' : 'Biggest challenge: single, planar deposition direction'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-lg transition-all duration-500 hover:translate-y-[-5px]">
                <h3 className="text-xl font-semibold mb-4 text-white">{language === 'zh' ? '支撑依赖' : 'Support Structures'}</h3>
                <p className="text-white">{language === 'zh' ? '悬挑必须加支撑 → 材料浪费、拆除留痕' : 'Overhangs require supports → material waste, removal artifacts'}</p>
              </div>
              <div className="p-8 rounded-lg transition-all duration-500 hover:translate-y-[-5px]">
                <h3 className="text-xl font-semibold mb-4 text-white">{language === 'zh' ? '审美表达受限' : 'Aesthetic constraints'}</h3>
                <p className="text-white">{language === 'zh' ? '纹理方向被迫跟随Z轴、形态被迫妥协' : 'orientation is locked to the Z-axis; texture are forced to compromise'}</p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="w-full">
                <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={image31} 
                    alt={language === 'zh' ? '传统3D打印技术' : 'Traditional 3D Printing'} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={image32} 
                    alt={language === 'zh' ? '传统3D打印技术' : 'Traditional 3D Printing'} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-axis 3D Printing Section */}
      <section 
        id="multi-axis"
        ref={(el) => (sectionsRef.current[1] = el)} 
        className="py-16 relative overflow-hidden transition-all duration-1000 h-[940px] flex items-center"
      >
        {/* 视频背景 */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
          >
            <source src={video2} type="video/mp4" />
            {/* 占位视频，实际使用时替换为真实视频链接 */}
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">{language === 'zh' ? '多轴3D打印技术' : 'Multi-Axis 3D Printing'}</h2>
            <h3 className="text-xl text-white mb-6">{language === 'zh' ? '不再只向上“堆”，而是让喷头在空间任意舞动' : 'Beyond stacking layers vertically — a printhead that moves freely in 3D space.'}</h3>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
              <div className="p-6 rounded-lg transition-all duration-500 hover:translate-y-[-5px]">
                <p className="text-lg text-white">{language === 'zh' ? '多自由度控制沉积方向，打印头任意姿态，任意路径 在空间中自由表达' : 'Freeform toolpaths for true spatial expression'}</p>
              </div>
            </div>  
            {/* Images */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="w-full">
                <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={image41} 
                    alt={language === 'zh' ? '多轴3D打印技术' : 'Multi-Axis 3D Printing'} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={image42} 
                    alt={language === 'zh' ? '多轴3D打印技术' : 'Multi-Axis 3D Printing'} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            
            {/* Advantages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg transition-all duration-500 hover:translate-y-[-5px]">
                <h4 className="font-semibold mb-2 text-white">{language === 'zh' ? '支撑最小化' : 'Minimal supports'}</h4>
                <p className="text-white">{language === 'zh' ? '悬挑直接打印' : 'Overhangs no more exists'}</p>
              </div>
              <div className="p-6 rounded-lg transition-all duration-500 hover:translate-y-[-5px]">
                <h4 className="font-semibold mb-2 text-white">{language === 'zh' ? '形态自由' : 'High quality'}</h4>
                <p className="text-white">{language === 'zh' ? '复杂曲面/纤细结构可行' : 'lower staircase effect'}</p>
              </div>
              <div className="p-6 rounded-lg transition-all duration-500 hover:translate-y-[-5px]">
                <h4 className="font-semibold mb-2 text-white">{language === 'zh' ? '表面可控' : 'texture, by design'}</h4>
                <p className="text-white">{language === 'zh' ? '纹理/层纹方向可设计' : 'Design the layer flow as part of the look'}</p>
              </div>
              <div className="p-6 rounded-lg transition-all duration-500 hover:translate-y-[-5px]">
                <h4 className="font-semibold mb-2 text-white">{language === 'zh' ? '性能优化' : 'Mechanical Optimization'}</h4>
                <p className="text-white">{language === 'zh' ? '强度各向可调，多材料融合' : 'Tailor strength, stiffness, and toughness via toolpath'}</p>
              </div>
              <div className="p-6 rounded-lg transition-all duration-500 hover:translate-y-[-5px]">
                <h4 className="font-semibold mb-2 text-white">{language === 'zh' ? '后处理更少' : 'On-object printing'}</h4>
                <p className="text-white">{language === 'zh' ? '少拆支撑、少打磨' : 'Build onto existing parts'}</p>
              </div>
              <div className="p-6 rounded-lg transition-all duration-500 hover:translate-y-[-5px]">
                <h4 className="font-semibold mb-2 text-white">{language === 'zh' ? '效率提升' : 'Cost Efficiency'}</h4>
                <p className="text-white">{language === 'zh' ? '迭代更快、材料更省' : 'Lower material usage, Lower laboring for post processing'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages Section */}
      <section 
        id="core-advantages"
        ref={(el) => (sectionsRef.current[2] = el)} 
        className="py-16 relative overflow-hidden transition-all duration-1000 h-[940px] flex items-center"
      >
        {/* 视频背景 */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
          >
            <source src={video2} type="video/mp4" />
            {/* 占位视频，实际使用时替换为真实视频链接 */}
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">{language === 'zh' ? '万向三维®核心优势' : 'Our Moat'}</h2>
            <h3 className="text-xl text-white mb-6">{language === 'zh' ? '自研框架，从三维模型设计到多轴打印成品全流程打通' : 'A proprietary end-to-end framework connecting the entire pipleline from 3D model design to printed output'}</h3>
            <p className="text-lg text-white max-w-3xl mx-auto mb-8">
              {language === 'zh' ? '通过硬件系统的创新设计，配合3D打印切片策略与机械臂运动控制上的一系列自研算法，最大化释放多轴优势，确保设计意图精准落地' : 'Through innovative hardware design, combined with a suite of slicing strategies and robotic control algorithms, we fully unlock the advantages of multi-axis 3D printing and ensure design intent is delivered with precision.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="w-full aspect-square">
                <img 
                  src={image51} 
                  style={{background: 'white', borderRadius: '0.5rem'}}
                  alt={language === 'zh' ? '万向三维®核心优势' : 'Our Moat'} 
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="w-full aspect-square">
                <img 
                  src={image52} 
                  style={{background: 'white', borderRadius: '0.5rem'}}
                  alt={language === 'zh' ? '万向三维®核心优势' : 'Our Moat'} 
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="w-full aspect-square">
                <img 
                  src={image53} 
                  alt={language === 'zh' ? '万向三维®核心优势' : 'Our Moat'} 
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="w-full aspect-square">
                <img 
                  src={image54} 
                  alt={language === 'zh' ? '万向三维®核心优势' : 'Our Moat'} 
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value for Artists Section */}
      <section 
        id="value"
        ref={(el) => (sectionsRef.current[3] = el)} 
        className="py-16 relative overflow-hidden transition-all duration-1000 h-[940px] flex items-center"
      >
        {/* 视频背景 */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
          >
            <source src={video2} type="video/mp4" />
            {/* 占位视频，实际使用时替换为真实视频链接 */}
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">{language === 'zh' ? '对艺术家的价值' : 'Value for Artists'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="w-full h-64">
                <img 
                  src={image61} 
                  alt={language === 'zh' ? '对艺术家的价值' : 'Value for Artists'} 
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="w-full h-64">
                <img 
                  src={image62} 
                  alt={language === 'zh' ? '对艺术家的价值' : 'Value for Artists'} 
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg transition-all duration-500 hover:translate-y-[-5px]">
                <h4 className="font-semibold mb-2 text-white">{language === 'zh' ? '尺度灵活' : 'Full-scale capability'}</h4>
                <p className="text-white">{language === 'zh' ? '从珠宝级微型到装置级 1 m 尺度，灵感可随想法放大/缩小' : 'Thin shells, lattice struts, and solid geometry all benefit from our techniques.'}</p>
              </div>
              <div className="p-6 rounded-lg transition-all duration-500 hover:translate-y-[-5px]">
                <h4 className="font-semibold mb-2 text-white">{language === 'zh' ? '形态自由' : 'High quality'}</h4>
                <p className="text-white">{language === 'zh' ? '悬挑、纤细结构、流动曲线皆可实现' : 'Overhangs, slender structures, flowing curves all achievable'}</p>
              </div>
              <div className="p-6 rounded-lg transition-all duration-500 hover:translate-y-[-5px]">
                <h4 className="font-semibold mb-2 text-white">{language === 'zh' ? '纹理与方向控制' : 'Multi-material compatibility'}</h4>
                <p className="text-white">{language === 'zh' ? '结构强度、光影、触感都可设计' : 'Polymers, composites, translucent, flexible, and reinforced materials, enabling both aesthetic expression and functional performance.'}</p>
              </div>
              <div className="p-6 rounded-lg transition-all duration-500 hover:translate-y-[-5px]">
                <h4 className="font-semibold mb-2 text-white">{language === 'zh' ? '材料多样' : 'Multi-process integration'}</h4>
                <p className="text-white">{language === 'zh' ? '多色高透度聚合物、树脂、陶瓷、碳纤维、复合材料等保证美感及功能性一体化表达' : 'FDM, DLP, and even hybrid manufacturing for for different artistic objectives.'}</p>
              </div>
              <div className="p-6 rounded-lg transition-all duration-500 hover:translate-y-[-5px]">
                <h4 className="font-semibold mb-2 text-white">{language === 'zh' ? '快速迭代' : 'Rapid Iteration'}</h4>
                <p className="text-white">{language === 'zh' ? '从数字草图到原型的周期缩短' : 'Shorter cycle from digital sketch to prototype'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechRoute;