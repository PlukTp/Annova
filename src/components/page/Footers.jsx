import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact-section" className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <FaPhone className="mr-2 w-5" />
                <span>Phone: +84 258 390 5555</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 w-5" />
                <a
                  href="mailto:info@annovahotel.com"
                  className="hover:text-blue-300"
                >
                  Email: info@annovahotel.com
                </a>
              </div>
              <div className="flex items-center">
                <FaGlobe className="mr-2 w-5" />
                <a
                  href="https://www.annovahotel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300"
                >
                  Website: www.annovahotel.com
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Address</h2>
            <div className="flex items-start">
              <FaMapMarkerAlt className="mr-2 mt-1 w-5 flex-shrink-0" />
              <a
                href="https://www.google.com/maps/place/Annova+Nha+Trang+Hotel/@12.2474435,109.19423,17z/data=!3m1!4b1!4m9!3m8!1s0x31706701a3720121:0xc98e896b26eca4ab!5m2!4m1!1i2!8m2!3d12.2474435!4d109.19423!16s%2Fg%2F11s2lnrplc?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition duration-300"
              >
                <p>
                  5 Lý Tự Trọng, Lộc Thọ, Nha Trang, Khánh Hòa 650000
                </p>
              </a>
            </div>
            <div className="mt-8 flex justify-center md:justify-start space-x-6">
              <a
                href="https://www.facebook.com/Annovanhatranghotel"
                className="text-white hover:text-blue-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/annovanhatrang/"
                className="text-white hover:text-blue-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@annovanhatranghotel?fbclid=IwY2xjawFSoHRleHRuA2FlbQIxMAABHcUFeG4t0WkNgWqgvv1pjMUJADgZlR59eIl9yg01sHNWnBB9ye7npDsYhQ_aem_aMFdDaueQ6tEztj928cfrQ"
                className="text-white hover:text-blue-300"
              >
                <FaTiktok size={20} />
              </a>
              <a
                href="https://www.youtube.com/@AnnovaHotel"
                className="text-white hover:text-blue-300"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
