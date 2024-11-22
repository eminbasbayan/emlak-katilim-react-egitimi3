import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Company Name</h2>
            <p className="text-gray-400">
              We provide the best services to help your business grow. Stay
              connected and let us make your life easier.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-200 transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-200 transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-200 transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-200 transition"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.326v21.348c0 .732.593 1.326 1.325 1.326h11.494v-9.284h-3.125v-3.622h3.125v-2.672c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.793.715-1.793 1.762v2.313h3.587l-.467 3.622h-3.12v9.284h6.116c.732 0 1.325-.594 1.325-1.326v-21.348c0-.733-.593-1.326-1.325-1.326z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-300 transition"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.927 2.207-4.927 4.927 0 .386.044.762.128 1.124-4.092-.205-7.719-2.166-10.148-5.144-.424.729-.666 1.575-.666 2.476 0 1.708.87 3.217 2.188 4.102-.807-.026-1.566-.248-2.228-.617v.062c0 2.388 1.697 4.384 3.946 4.838-.413.112-.849.172-1.296.172-.317 0-.626-.031-.928-.088.627 1.956 2.445 3.379 4.6 3.419-1.685 1.321-3.809 2.108-6.114 2.108-.398 0-.79-.023-1.176-.069 2.179 1.397 4.768 2.213 7.548 2.213 9.051 0 14-7.5 14-14 0-.213-.005-.425-.014-.637.961-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500 transition"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.259.058 2.077.248 2.55.417a5.033 5.033 0 011.746 1.115 5.033 5.033 0 011.115 1.746c.169.473.359 1.291.417 2.55.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.058 1.259-.248 2.077-.417 2.55a5.033 5.033 0 01-1.115 1.746 5.033 5.033 0 01-1.746 1.115c-.473.169-1.291.359-2.55.417-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.259-.058-2.077-.248-2.55-.417a5.033 5.033 0 01-1.746-1.115 5.033 5.033 0 01-1.115-1.746c-.169-.473-.359-1.291-.417-2.55-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.058-1.259.248-2.077.417-2.55a5.033 5.033 0 011.115-1.746 5.033 5.033 0 011.746-1.115c.473-.169 1.291-.359 2.55-.417 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.013-4.947.072-1.281.058-2.171.258-2.936.512-.879.273-1.622.639-2.358 1.375a6.984 6.984 0 00-1.375 2.358c-.254.765-.454 1.655-.512 2.936-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.058 1.281.258 2.171.512 2.936.273.879.639 1.622 1.375 2.358a6.984 6.984 0 002.358 1.375c.765.254 1.655.454 2.936.512 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.281-.058 2.171-.258 2.936-.512.879-.273 1.622-.639 2.358-1.375a6.984 6.984 0 001.375-2.358c.254-.765.454-1.655.512-2.936.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.058-1.281-.258-2.171-.512-2.936a6.984 6.984 0 00-1.375-2.358 6.984 6.984 0 00-2.358-1.375c-.765-.254-1.655-.454-2.936-.512-1.28-.059-1.688-.072-4.947-.072z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-400">
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
