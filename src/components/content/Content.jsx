import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

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
    ],
  },
  zh: {
    coverImage: "/api/placeholder/300/400?text=Chinese+Book",
    title: "中文书籍",
    pages: ["第1页 中文", "第2页 中文", "第3页 中文", "第4页 中文"],
  },
  ja: {
    coverImage: "/api/placeholder/300/400?text=Japanese+Book",
    title: "日本語の本",
    pages: [
      "ページ1 日本語",
      "ページ2 日本語",
      "ページ3 日本語",
      "ページ4 日本語",
    ],
  },
  ko: {
    coverImage: "/api/placeholder/300/400?text=Korean+Book",
    title: "한국어 책",
    pages: [
      "페이지 1 한국어",
      "페이지 2 한국어",
      "페이지 3 한국어",
      "페이지 4 한국어",
    ],
  },
};

const MultiImageLanguageBook = ({ currentLanguage }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const content = bookContents[currentLanguage];
  const containerRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setCurrentPage(0);
  }, [currentLanguage]);

  const flipPage = (direction) => {
    if (direction === "next" && currentPage < content.pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
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
        className="bg-yellow-100 rounded-lg shadow-lg overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
        style={{
          width: 'auto',
          height: 'auto',
          maxWidth: '100%',
          maxHeight: 'calc(100vh - 6rem)',
          aspectRatio: '1414 / 2000',
        }}
      >
        <div className="relative w-full h-full">
          <img
            src={content.pages[currentPage].image}
            alt={`${content.title} - Page ${currentPage + 1}`}
            className="w-full h-full object-contain select-none"
            draggable="false"
          />
          <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 p-2">
            <p className="text-white text-sm sm:text-base text-center">
              {content.pages[currentPage].text}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-4 w-full max-w-md">
        <button
          onClick={() => flipPage("prev")}
          disabled={currentPage === 0}
          className="bg-gray-200 p-2 rounded-full disabled:opacity-50"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => flipPage("next")}
          disabled={currentPage >= content.pages.length - 1}
          className="bg-gray-200 p-2 rounded-full disabled:opacity-50"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default MultiImageLanguageBook;
