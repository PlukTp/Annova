import React, { useState } from "react";
import { FaHome, FaEnvelope, FaBars } from "react-icons/fa";

const languages = [
  { code: "th", name: "ไทย", flag: "/flags/thailand.jpg" },
  { code: "en", name: "English", flag: "/flags/Eng.png" },
  { code: "vi", name: "Tiếng Việt", flag: "/flags/Vietnam.jpg" },
  { code: "zh", name: "中文", flag: "/flags/cn.png" },
  { code: "ko", name: "한국어", flag: "/flags/kn.jpg" },
];

const Navbar = ({ currentLanguage, setCurrentLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);

  const handleLanguageChange = (langCode) => {
    setCurrentLanguage(langCode);
    setIsLanguageMenuOpen(false);
  };

  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.getElementById("contact-section");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const currentLang = languages.find((lang) => lang.code === currentLanguage);

  return (
    <nav className="bg-blue-900 p-4">
      <div className="md:hidden">
        <div className="flex justify-between items-center">
          <button onClick={toggleMenu} className="text-white z-10">
            <FaBars size={24} />
          </button>
          <div className="absolute left-0 right-0 mx-auto w-full flex justify-center">
            <img
              src="/annova-nha-trang-hotel-logo.png"
              alt="Annova Hotel Logo"
              className="h-10"
            />
          </div>
          <div className="relative z-10">
            <button
              onClick={toggleLanguageMenu}
              className="text-white flex items-center"
            >
              <img
                src={currentLang.flag}
                alt={currentLang.name}
                className="w-6 h-4 mr-2"
              />
              
            </button>
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-md shadow-xl z-20">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left flex items-center"
                  >
                    <img
                      src={lang.flag}
                      alt={lang.name}
                      className="w-6 h-4 mr-2"
                    />
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4">
            <NavItem href="/" icon={<FaHome />} text="หน้าหลัก" mobile />
            <NavItem
              href="#contact-section"
              icon={<FaEnvelope />}
              text="ติดต่อ"
              onClick={scrollToFooter}
              mobile
            />
          </div>
        )}
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex justify-between items-center">
        <img
          src="/annova-nha-trang-hotel-logo.png"
          alt="Annova Hotel Logo"
          className="h-10"
        />
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <NavItem href="/" icon={<FaHome />} text="หน้าหลัก" />
            <NavItem
              href="#contact-section"
              icon={<FaEnvelope />}
              text="ติดต่อ"
              onClick={scrollToFooter}
            />
          </ul>
          <div className="relative">
            <button
              className="text-white flex items-center"
              onClick={toggleLanguageMenu}
            >
              <img
                src={currentLang.flag}
                alt={currentLang.name}
                className="w-6 h-4 mr-2"
              />
              
            </button>
            {isLanguageMenuOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => handleLanguageChange(lang.code)}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full text-left flex items-center"
                    >
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="w-6 h-4 mr-2"
                      />
                      {lang.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, icon, text, onClick, mobile }) => (
  <div className={mobile ? "py-2" : ""}>
    <a
      href={href}
      className="text-white hover:text-blue-200 flex items-center"
      onClick={onClick}
    >
      {React.cloneElement(icon, { className: "mr-2" })} {text}
    </a>
  </div>
);

export { Navbar };
