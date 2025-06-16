import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const TopBar = () => {
  return (
    <div className="bg-gray-900 text-white py-2 px-4 hidden sm:block">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center text-sm">
        
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span className="flex items-center gap-2">
            <span className="font-semibold">Contact:</span> 
            <a href="tel:+14694718146" className="hover:text-indigo-400">+1 (469) 471 8146</a>
          </span>
          <span className="flex items-center gap-2">
            <span className="font-semibold">Email:</span> 
            <a href="mailto:j2me.nanda@gmail.com" className="hover:text-indigo-400">info@kramatas.com</a>
          </span>
        </div>

        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
            <FaInstagram />
          </a>
          <a href="https://wa.me/14694718146" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};
