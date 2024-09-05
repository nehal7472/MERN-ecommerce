import { Link } from "react-router-dom";
import PhoneLogo from "../assets/phone-icon.png";
import EmailLogo from "../assets/email-icon.png";
import InstaLogo from "../assets/insta-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#030712] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <h1 className="text-2xl text-white font-semibold">Books Store</h1>
            <p>
              Discover a world of literature at your fingertips. From timeless classics to modern masterpieces.
            </p>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                className="text-[#DA4544] text-lg"
                icon={faLocation}
              />
              <span>Taltola, Sylhet, Bangladesh</span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                className="text-[#DA4544] text-lg"
                icon={faPhone}
              />
              <span>+880 1717-971341</span>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="tel:+8801717971341">
                <img src={PhoneLogo} alt="Phone" className="w-6 h-6" />
              </a>
              <a href="mailto:info@booksstore.com">
                <img src={EmailLogo} alt="Email" className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/booksstore" target="_blank" rel="noopener noreferrer">
                <img src={InstaLogo} alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Important Links</h2>
              <ul className="space-y-2">
                <li className="hover:text-[#DA4A54] transition-colors">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-[#DA4A54] transition-colors">
                  <Link to="/about">About</Link>
                </li>
                <li className="hover:text-[#DA4A54] transition-colors">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="hover:text-[#DA4A54] transition-colors">
                  <Link to="/registration">Registration</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Helpful Links</h2>
              <ul className="space-y-2">
                <li className="hover:text-[#DA4A54] transition-colors">
                  <Link to="/faqs">FAQs</Link>
                </li>
                <li className="hover:text-[#DA4A54] transition-colors">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="hover:text-[#DA4A54] transition-colors">
                  <Link to="/terms">Terms of Service</Link>
                </li>
                <li className="hover:text-[#DA4A54] transition-colors">
                  <Link to="/support">Support</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
              <ul className="space-y-2">
                <li className="hover:text-[#DA4A54] transition-colors">
                  <a href="https://facebook.com/booksstore" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
                <li className="hover:text-[#DA4A54] transition-colors">
                  <a href="https://twitter.com/booksstore" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </li>
                <li className="hover:text-[#DA4A54] transition-colors">
                  <a href="https://instagram.com/booksstore" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li className="hover:text-[#DA4A54] transition-colors">
                  <a href="https://linkedin.com/company/booksstore" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Books Store. All rights reserved.
            <span className="text-[#DA4A54]"> ❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
