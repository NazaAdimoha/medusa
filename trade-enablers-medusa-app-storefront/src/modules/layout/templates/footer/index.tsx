import Image from "next/image";
import Logo from "@modules/common/icons/footer-te.svg";
import { Twitter, Instagram } from "lucide-react";
import { Github, Facebook } from "@medusajs/icons"
import { Button } from "@medusajs/ui";


export default function Footer() {
  return (
    <footer className="bg-[#F8F9FB] border-t border-gray-200 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex justify-start flex-col items-start text-center py-10">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Launch Your E-Commerce today with our ready-made template.
          </h2>

          <Button variant="secondary" className="flex-1">
          <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
          className="flex items-center"
        >
            View on GitHub
            <Github />
          </a>  
          </Button>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-10"></div>

        {/* Footer Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-gray-600">
          <div className="col-span-1">
            <Image src={Logo} alt="TE Store Logo" width={80} height={80} />
            <p className="mt-4 text-gray-500 text-sm">TE Store</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Product</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Overview</li>
              <li>Features</li>
              <li>Solution</li>
              <li>Tutorials</li>
              <li>Releases</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Categories</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Apparel</li>
              <li>Furniture</li>
              <li>Electronics</li>
              <li>Beauty</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Legals</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Licenses</li>
              <li>Settings</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Socials</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>©2024 Trade Enablers. All rights reserved</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-gray-800" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="hover:text-gray-800" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} className="hover:text-gray-800" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} className="hover:text-gray-800" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

