/* eslint-disable @next/next/no-img-element */
'use client';

import { Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {/* Logo + brand */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 lg:w-10 lg:h-10 rounded-xl  flex items-center justify-center overflow-hidden">
                <img
                  src="https://vms-admin.pragatiutrack.com/logo.svg"
                  alt="UTrack Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold  text-white dark:text-white">
                UTrack
              </h1>
            </div>
          </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Smart Fleet, GPS & Logistics Control for Modern Businesses. End-to-end vehicle, trip, warehouse, and accounts control.
            </p>
            <p className="text-sm text-gray-500">
              Powered by RAMKI Technologies Pvt Ltd
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#modules" className="text-gray-400 hover:text-white transition-colors">
                  Modules
                </a>
              </li>
              <li>
                <a href="#tracking" className="text-gray-400 hover:text-white transition-colors">
                  Tracking
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>

            <p className="text-sm text-gray-400">
              © 2024 UTrack by RAMKI Technologies Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
