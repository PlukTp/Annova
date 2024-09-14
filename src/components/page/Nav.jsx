import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaEnvelope, FaGlobe,FaBars } from 'react-icons/fa';

const languages = [
  { code: "th", name: "ไทย" },
  { code: "en", name: "English" },
  { code: "zh", name: "中文" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
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

  return (
    <nav className="bg-blue-900 p-4">
      <div className="md:hidden">
        <div className="flex justify-between items-center">
          <button onClick={toggleMenu} className="text-white">
            <FaBars size={24} />
          </button>
          <img src="/annova-nha-trang-hotel-logo.png" alt="Annova Hotel Logo" className="h-10" />
          <div className="relative">
            <button onClick={toggleLanguageMenu} className="text-white">
              {languages.find(lang => lang.code === currentLanguage).name}
            </button>
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-24 bg-white rounded-md shadow-xl z-20">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
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
            <NavItem href="/about" icon={<FaInfoCircle />} text="เกี่ยวกับเรา" mobile />
            <NavItem href="/contact" icon={<FaEnvelope />} text="ติดต่อ" mobile />
          </div>
        )}
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex justify-between items-center">
      <img src="/annova-nha-trang-hotel-logo.png" alt="Annova Hotel Logo" className="h-10" />
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <NavItem href="/" icon={<FaHome />} text="หน้าหลัก" />
            <NavItem href="/about" icon={<FaInfoCircle />} text="เกี่ยวกับเรา" />
            <NavItem href="/contact" icon={<FaEnvelope />} text="ติดต่อ" />
          </ul>
          <div className="relative">
            <button 
              className="text-white flex items-center"
              onClick={toggleLanguageMenu}
            >
              <FaGlobe className="mr-2" />
              {languages.find(lang => lang.code === currentLanguage).name}
            </button>
            {isLanguageMenuOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => handleLanguageChange(lang.code)}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full text-left"
                    >
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

const NavItem = ({ href, icon, text, mobile }) => (
  <div className={mobile ? "py-2" : ""}> {/* แก้ li เป็น div */}
    <a href={href} className="text-white hover:text-blue-200 flex items-center">
      {React.cloneElement(icon, { className: "mr-2" })} {text}
    </a>
  </div>
);

export { Navbar };