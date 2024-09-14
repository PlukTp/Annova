const Footer = () => {
    return (
      <footer className="bg-blue-900 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm sm:text-base">&copy; 2024 ชื่อบริษัทของคุณ. สงวนลิขสิทธิ์.</p>
          <div className="mt-2 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <a href="/privacy" className="hover:text-blue-300 text-sm sm:text-base">นโยบายความเป็นส่วนตัว</a>
            <a href="/terms" className="hover:text-blue-300 text-sm sm:text-base">ข้อกำหนดการใช้งาน</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export { Footer };