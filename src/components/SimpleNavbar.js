import React from 'react';
import { Link } from 'react-router-dom';

const SimpleNavbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">
              Confluence Bullion
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              홈
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">
              대시보드
            </Link>
            <Link to="/gold-import" className="text-gray-700 hover:text-blue-600 font-medium">
              금 수입
            </Link>
            <Link to="/nft-marketplace" className="text-gray-700 hover:text-blue-600 font-medium">
              NFT 마켓
            </Link>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
            시작하기
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;