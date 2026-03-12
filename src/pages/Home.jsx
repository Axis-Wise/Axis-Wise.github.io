import React, { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Link } from "react-router-dom";
import image11 from "../assets/images/image1-1.png";
import emailjs from '@emailjs/browser';
import { config } from '../../config';

const Home = () => {
  const { language } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [expandedLink, setExpandedLink] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // 处理表单输入变化
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // 清除错误信息
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // 表单验证
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = language === "zh" ? "请输入姓名" : "Please enter your name";
    }
    if (!formData.email.trim()) {
      newErrors.email = language === "zh" ? "请输入邮箱" : "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email =
        language === "zh" ? "请输入有效的邮箱地址" : "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = language === "zh" ? "请输入留言" : "Please enter a message";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 处理表单提交
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // 设置 loading 状态
      setIsLoading(true);
      
      // 使用 emailjs 发送表单数据
      const { publicKey, serviceId, templateId } = config.emailJsConfig;
      
      emailjs.send(serviceId, templateId, formData, publicKey)
        .then((response) => {
          console.log('Form submitted successfully:', response);
          // 重置表单
          setFormData({ name: "", email: "", message: "" });
          // 关闭弹窗
          setShowModal(false);
          alert(language === 'zh' ? '提交成功！' : 'Submission successful!');
        })
        .catch((error) => {
          console.error('Error submitting form:', error);
          alert(language === 'zh' ? '提交失败，请稍后重试' : 'Submission failed, please try again later');
        })
        .finally(() => {
          // 重置 loading 状态
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-white py-16 relative overflow-hidden" style={{ minHeight: "calc(100vh - 65px)" }}>
        <div
          className="absolute inset-0 opacity-20 z-0"
          style={{ background: `url(${image11}) no-repeat center center/ 1200px` }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="pt-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {language === "zh" ? "万向三维® × 艺术家" : "AxisWise® × Artists"}
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {language === "zh" ? "多轴3D打印共创计划" : "Multi-axis 3D Printing Co-creation Plan"}
            </h1>
          </div>
        </div>
        {/* 中心锚点布局 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-between items-start mt-12" style={{paddingRight: '3rem'}}>
          {/* 左侧：现在开始你的创作按钮 */}
          <div className="flex flex-col">
            <button
              onClick={() => {
                setShowModal(true);
                // 重置错误状态
                setErrors({});
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-md mt-64"
            >
              {language === "zh" ? "现在开始你的创作" : "Start Your Creation Now"}
            </button>
          </div>

          {/* 右侧：目录 */}
          <div className="flex flex-col gap-6 mt-28" style={{ width: '240px' }}>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setExpandedLink(expandedLink === "tech" ? null : "tech")}
                className="text-blue-600 hover:text-blue-800 font-medium transition-all duration-300 text-left flex items-center justify-between group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">{language === "zh" ? "技术路线" : "Tech Route"}</span>
                <span className={`text-blue-600 transition-transform duration-300 ${expandedLink === "tech" ? "rotate-180" : ""}`}>▼</span>
              </button>
              {expandedLink === "tech" && (
                <div className="ml-4 mt-2 space-y-2 text-gray-700 transition-all duration-500 transform origin-top animate-fade-in">
                  <Link to={`/${language}/tech-route#traditional`} className="transition-all duration-300 hover:text-blue-600 hover:translate-x-2 block">{language === "zh" ? "传统3D打印技术" : "Traditional 3D Printing"}</Link>
                  <Link to={`/${language}/tech-route#multi-axis`} className="transition-all duration-300 hover:text-blue-600 hover:translate-x-2 block">{language === "zh" ? "多轴3D打印技术" : "Multi-Axis 3D Printing"}</Link>
                  <Link to={`/${language}/tech-route#core-advantages`} className="transition-all duration-300 hover:text-blue-600 hover:translate-x-2 block">{language === "zh" ? "万向三维®核心优势" : "AxisWise® Core Advantages"}</Link>
                  <Link to={`/${language}/tech-route#value`} className="transition-all duration-300 hover:text-blue-600 hover:translate-x-2 block">{language === "zh" ? "对艺术家的价值" : "Value for Artists"}</Link>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setExpandedLink(expandedLink === "about" ? null : "about")}
                className="text-blue-600 hover:text-blue-800 font-medium transition-all duration-300 text-left flex items-center justify-between group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">{language === "zh" ? "关于我们" : "About Us"}</span>
                <span className={`text-blue-600 transition-transform duration-300 ${expandedLink === "about" ? "rotate-180" : ""}`}>▼</span>
              </button>
              {expandedLink === "about" && (
                <div className="ml-4 mt-2 space-y-2 text-gray-700 transition-all duration-500 transform origin-top animate-fade-in">
                  <Link to={`/${language}/about#founders`} className="transition-all duration-300 hover:text-blue-600 hover:translate-x-2 block">{language === "zh" ? "万向三维®创始人团队" : "AxisWise® Founder Team"}</Link>
                  <Link to={`/${language}/about#cooperation`} className="transition-all duration-300 hover:text-blue-600 hover:translate-x-2 block">{language === "zh" ? "合作模式" : "Cooperation Mode"}</Link>
                  <Link to={`/${language}/about#contact`} className="transition-all duration-300 hover:text-blue-600 hover:translate-x-2 block">{language === "zh" ? "联系方式" : "Contact Details"}</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 弹窗 */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black bg-opacity-70"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full p-8">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
              {language === "zh" ? "开始你的创作" : "Start Your Creation"}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  {language === "zh" ? "姓名" : "Name"}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  {language === "zh" ? "邮箱" : "Email"}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">
                  {language === "zh" ? "留言" : "Message"}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg ${errors.message ? "border-red-500" : "border-gray-300"}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {isLoading && (
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {language === "zh" ? (isLoading ? "提交中..." : "提交") : (isLoading ? "Submitting..." : "Submit")}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
