import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="text-center bg-primary lg:text-left bottom-0">
      <div className="flex w-full max-w-48 flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between mx-auto">
          <a href="#" className="text-lg font-medium text-white hover:underline pb-2"><FaInstagram /></a>
          <a href="#" className="text-lg font-medium text-white hover:underline pb-2"><FaXTwitter /></a>
          <a href="#" className="text-lg font-medium text-white hover:underline pb-2"><FaFacebookF /></a>
      </div>
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © 2024 PuntoSalud Copyright

      </div>
    </footer>
  );
}