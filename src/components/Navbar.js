import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaCoins, 
  FaBars, 
  FaTimes, 
  FaWallet,
  FaChartLine,
  FaExchangeAlt,
  FaGem,
  FaUniversity
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: '홈', icon: FaCoins },
    { path: '/dashboard', label: '대시보드', icon: FaChartLine },
    { path: '/gold-import', label: '금 수입', icon: FaGem },
    { path: '/nft-marketplace', label: 'NFT 마켓', icon: FaExchangeAlt },
    { path: '/collateral-loan', label: '담보대출', icon: FaUniversity },
  ];

  const connectWallet = async () => {
    // 실제 지갑 연결 로직은 나중에 구현
    setIsWalletConnected(!isWalletConnected);
  };

  return (
    <nav className="bg-bg-secondary/95 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 bg-gradient-to-r from-gold-primary to-gold-secondary rounded-full flex items-center justify-center"
            >
              <FaCoins className="text-black text-lg" />
            </motion.div>
            <span className="text-xl font-bold text-gradient">
              Confluence Bullion
            </span>
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-gold-primary bg-gold-primary/10'
                      : 'text-text-secondary hover:text-gold-primary hover:bg-gold-primary/5'
                  }`}
                >
                  <Icon className="text-sm" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* 지갑 연결 버튼 */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={connectWallet}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isWalletConnected
                  ? 'bg-green-600 text-white'
                  : 'btn-primary'
              }`}
            >
              <FaWallet className="text-sm" />
              <span>
                {isWalletConnected ? '연결됨' : '지갑 연결'}
              </span>
            </motion.button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-secondary hover:text-gold-primary transition-colors duration-300"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-gold-primary bg-gold-primary/10'
                      : 'text-text-secondary hover:text-gold-primary hover:bg-gold-primary/5'
                  }`}
                >
                  <Icon className="text-lg" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={connectWallet}
              className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                isWalletConnected
                  ? 'bg-green-600 text-white'
                  : 'btn-primary'
              }`}
            >
              <FaWallet className="text-sm" />
              <span>
                {isWalletConnected ? '지갑 연결됨' : '지갑 연결'}
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar; 