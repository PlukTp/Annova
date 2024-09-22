import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import styles from "./MultiImageLanguageBook.module.css";
const bookContents = {
  th: {
    title: "หนังสือภาษาไทย",
    pages: [
      { image: "../coverImage/Thai/1.jpg", text: "หน้าที่ 1 ภาษาไทย" },
      { image: "../coverImage/Thai/(ภาษาไทย).jpg", text: "หน้าที่ 2 ภาษาไทย" },
      { image: "../coverImage/Thai/(ภาษาไทย) (2).jpg", text: "หน้าที่ 3 ภาษาไทย" },
      { image: "../coverImage/Thai/(ภาษาไทย) (3).jpg", text: "หน้าที่ 4 ภาษาไทย" },
      { image: "../coverImage/Thai/(ภาษาไทย) (4).jpg", text: "หน้าที่ 5 ภาษาไทย" },
      { image: "../coverImage/Thai/(ภาษาไทย) (5).jpg", text: "หน้าที่ 6 ภาษาไทย" },
      { image: "../coverImage/Thai/(ภาษาไทย) (6).jpg", text: "หน้าที่ 7 ภาษาไทย" },
      { image: "../coverImage/Thai/(ภาษาไทย) (7).jpg", text: "หน้าที่ 8 ภาษาไทย" },
      { image: "../coverImage/Thai/(ภาษาไทย) (8).jpg", text: "หน้าที่ 9 ภาษาไทย" },
      { image: "../coverImage/Thai/(ภาษาไทย) (9).jpg", text: "หน้าที่ 10 ภาษาไทย" },
      { image: "../coverImage/Thai/(ภาษาไทย) (10).jpg", text: "หน้าที่ 11 ภาษาไทย" },
    ],
  },
  en: {
    title: "English Book",
    pages: [
      { image: "../coverImage/Eng/1.jpg", text: "Page 1 English" },
      { image: "../coverImage/Eng/2.jpg", text: "Page 2 English" },
      { image: "../coverImage/Eng/3.jpg", text: "Page 3 English" },
      { image: "../coverImage/Eng/4.jpg", text: "Page 4 English" },
      { image: "../coverImage/Eng/5.jpg", text: "Page 5 English" },
      { image: "../coverImage/Eng/6.jpg", text: "Page 6 English" },
      { image: "../coverImage/Eng/7.jpg", text: "Page 7 English" },
      { image: "../coverImage/Eng/8.jpg", text: "Page 8 English" },
      { image: "../coverImage/Eng/9.jpg", text: "Page 9 English" },
      { image: "../coverImage/Eng/10.jpg", text: "Page 10 English" },
      { image: "../coverImage/Eng/11.jpg", text: "Page 11 English" },
    ],
  },
  vi: {
    title: "Vietnam Book",
    pages: [
      { image: "../coverImage/Vietnam/(ภาษาเวียดนาม).jpg", text: "Trang 1 Việt Nam" },
      { image: "../coverImage/Vietnam/(ภาษาเวียดนาม) (2).jpg", text: "Trang 2 Việt Nam" },
      { image: "../coverImage/Vietnam/(ภาษาเวียดนาม) (3).jpg", text: "Trang 3 Việt Nam" },
      { image: "../coverImage/Vietnam/(ภาษาเวียดนาม) (4).jpg", text: "Trang 4 Việt Nam" },
      { image: "../coverImage/Vietnam/(ภาษาเวียดนาม) (5).jpg", text: "Trang 5 Việt Nam" },
      { image: "../coverImage/Vietnam/(ภาษาเวียดนาม) (6).jpg", text: "Trang 6 Việt Nam" },
      { image: "../coverImage/Vietnam/(ภาษาเวียดนาม) (7).jpg", text: "Trang 7 Việt Nam" },
      { image: "../coverImage/Vietnam/(ภาษาเวียดนาม) (8).jpg", text: "Trang 8 Việt Nam" },
      { image: "../coverImage/Vietnam/(ภาษาเวียดนาม) (9).jpg", text: "Trang 9 Việt Nam" },
      { image: "../coverImage/Vietnam/(ภาษาเวียดนาม) (10).jpg", text: "Trang 10 Việt Nam" },
      { image: "../coverImage/Vietnam/(ภาษาเวียดนาม) (11).jpg", text: "Trang 11 Việt Nam" },
    ],
  },
  zh: {
    title: "China Book",
    pages: [
      { image: "../coverImage/China/China.jpg", text: "第1頁 中國" },
      { image: "../coverImage/China/China(2).jpg", text: "第2頁 中國" },
      { image: "../coverImage/China/China(3).jpg", text: "第3頁 中國" },
      { image: "../coverImage/China/China(4).jpg", text: "第4頁 中國" },
      { image: "../coverImage/China/China(5).jpg", text: "第5頁 中國" },
      { image: "../coverImage/China/China(6).jpg", text: "第6頁 中國" },
      { image: "../coverImage/China/China(7).jpg", text: "第7頁 中國" },
      { image: "../coverImage/China/China(8).jpg", text: "第8頁 中國" },
      { image: "../coverImage/China/China(9).jpg", text: "第9頁 中國" },
      { image: "../coverImage/China/China(10).jpg", text: "第10頁 中國" },
      { image: "../coverImage/China/China(11).jpg", text: "第11頁 中國" },
    ],
  },
  ko: {
    title: "Korea Book",
    pages: [
      { image: "../coverImage/Korea/(ภาษาเกาหลี).jpg", text: "페이지 1 한국어" },
      { image: "../coverImage/Korea/(ภาษาเกาหลี) (2).jpg", text: "페이지 2 한국어" },
      { image: "../coverImage/Korea/(ภาษาเกาหลี) (3).jpg", text: "페이지 3 한국어" },
      { image: "../coverImage/Korea/(ภาษาเกาหลี) (4).jpg", text: "페이지 4 한국어" },
      { image: "../coverImage/Korea/(ภาษาเกาหลี) (5).jpg", text: "페이지 5 한국어" },
      { image: "../coverImage/Korea/(ภาษาเกาหลี) (6).jpg", text: "페이지 6 한국어" },
      { image: "../coverImage/Korea/(ภาษาเกาหลี) (7).jpg", text: "페이지 7 한국어" },
      { image: "../coverImage/Korea/(ภาษาเกาหลี) (8).jpg", text: "페이지 8 한국어" },
      { image: "../coverImage/Korea/(ภาษาเกาหลี) (9).jpg", text: "페이지 9 한국어" },
      { image: "../coverImage/Korea/(ภาษาเกาหลี) (10).jpg", text: "페이지 10 한국어" },
      { image: "../coverImage/Korea/(ภาษาเกาหลี) (11).jpg", text: "페이지 11 한국어" },
    ],
  },
};

const MultiImageLanguageBook = ({ currentLanguage }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState("next");
  const content = bookContents[currentLanguage];
  const containerRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setCurrentPage(0);
  }, [currentLanguage]);

  const flipPage = (direction) => {
    if (isFlipping) return;

    setIsFlipping(true);
    setFlipDirection(direction);

    setTimeout(() => {
      if (direction === "next" && currentPage < content.pages.length - 1) {
        setCurrentPage(currentPage + 1);
      } else if (direction === "prev" && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
      setIsFlipping(false);
    }, 1500);
  };

  const handleDragStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    const x = clientX;
    const walk = (x - startX) * 2;
    if (walk > 50) {
      flipPage("prev");
      setIsDragging(false);
    } else if (walk < -50) {
      flipPage("next");
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => flipPage("next"),
    onSwipedRight: () => flipPage("prev"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <div
        {...handlers}
        ref={containerRef}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
        className={`bg-yellow-100 rounded-lg shadow-lg overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y ${styles.book}`}
        style={{
          width: 'auto',
          height: 'auto',
          maxWidth: '100%',
          maxHeight: 'calc(100vh - 6rem)',
          aspectRatio: '1414 / 2000',
        }}
      >
        <div className={`relative w-full h-full ${styles.page} ${isFlipping ? (flipDirection === "next" ? styles.flipRightToLeft : styles.flipLeftToRight) : ''}`}>
          <img
            src={content.pages[currentPage].image}
            alt={`${content.title} - Page ${currentPage + 1}`}
            className="w-full h-full object-contain select-none"
            draggable="false"
          />
          <div className={`absolute top-0 right-0 w-full h-full ${styles.pageBack}`}>
            <img
              src={flipDirection === "next" 
                ? content.pages[Math.min(currentPage + 1, content.pages.length - 1)].image
                : content.pages[Math.max(currentPage - 1, 0)].image}
              alt={flipDirection === "next" ? `${content.title} - Next Page` : `${content.title} - Previous Page`}
              className="w-full h-full object-contain select-none"
              draggable="false"
            />
          </div>
          {/* แถบสีเทาที่มีข้อความสำหรับหน้าจอขนาดใหญ่ */}
          <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 p-2 hidden md:block">
            <p className="text-white text-sm sm:text-base text-center">
              {content.pages[currentPage].text}
            </p>
          </div>
        </div>
      </div>

      {/* แถบสีเทาที่มีข้อความสำหรับหน้าจอขนาดเล็ก (โทรศัพท์) */}
      <div className="w-full bg-gray-200 p-2 mt-2 md:hidden">
        <p className="text-black text-sm sm:text-base text-center">
          {content.pages[currentPage].text}
        </p>
      </div>

      <div className="flex justify-between mt-4 w-full max-w-md">
        <button
          onClick={() => flipPage("prev")}
          disabled={currentPage === 0 || isFlipping}
          className="bg-gray-200 p-2 rounded-full disabled:opacity-50"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => flipPage("next")}
          disabled={currentPage >= content.pages.length - 1 || isFlipping}
          className="bg-gray-200 p-2 rounded-full disabled:opacity-50"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default MultiImageLanguageBook;