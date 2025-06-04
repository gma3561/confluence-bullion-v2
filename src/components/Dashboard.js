import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaGem,
  FaCoins,
  FaUniversity,
  FaPlus,
  FaArrowUp,
  FaArrowDown,
  FaChartLine,
  FaBell
} from 'react-icons/fa';

const Dashboard = () => {
  const portfolioData = {
    totalValue: 125000000, // 1억 2천 5백만원
    goldNFTs: 12,
    loanAmount: 35000000, // 3천 5백만원
    monthlyReturn: 2.3
  };

  const recentTransactions = [
    { type: 'buy', amount: '1kg', price: '₩8,500,000', date: '2024-06-01' },
    { type: 'loan', amount: '₩2,000,000', rate: '5%', date: '2024-05-28' },
    { type: 'sell', amount: '0.5kg', price: '₩4,200,000', date: '2024-05-25' }
  ];

  const notifications = [
    { type: 'warning', message: '마진콜 알림: LTV 75% 도달', time: '2시간 전' },
    { type: 'info', message: '금 수입 완료: 2kg NFT 발행', time: '1일 전' },
    { type: 'success', message: '대출 승인: ₩5,000,000', time: '3일 전' }
  ];

  return (
    <div className="min-h-screen bg-bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">대시보드</h1>
          <p className="text-text-secondary">포트폴리오 현황을 한눈에 확인하세요</p>
        </motion.div>

        {/* 포트폴리오 요약 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center">
                <FaGem className="text-gold-primary text-xl" />
              </div>
              <FaArrowUp className="text-green-400" />
            </div>
            <h3 className="text-text-secondary text-sm mb-1">총 자산 가치</h3>
            <p className="text-2xl font-bold text-white">
              ₩{(portfolioData.totalValue / 100000000).toFixed(1)}억
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <FaCoins className="text-blue-400 text-xl" />
              </div>
              <span className="text-text-secondary text-sm">{portfolioData.goldNFTs}개</span>
            </div>
            <h3 className="text-text-secondary text-sm mb-1">보유 NFT</h3>
            <p className="text-2xl font-bold text-white">{portfolioData.goldNFTs}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                <FaUniversity className="text-red-400 text-xl" />
              </div>
              <span className="text-red-400 text-sm">5%</span>
            </div>
            <h3 className="text-text-secondary text-sm mb-1">대출 잔액</h3>
            <p className="text-2xl font-bold text-white">
              ₩{(portfolioData.loanAmount / 10000).toFixed(0)}만
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                <FaChartLine className="text-green-400 text-xl" />
              </div>
              <FaArrowUp className="text-green-400" />
            </div>
            <h3 className="text-text-secondary text-sm mb-1">월 수익률</h3>
            <p className="text-2xl font-bold text-white">+{portfolioData.monthlyReturn}%</p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 빠른 액션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6">빠른 액션</h2>
              <div className="space-y-4">
                <Link
                  to="/gold-import"
                  className="flex items-center justify-between p-4 bg-bg-secondary rounded-lg hover:bg-gold-primary/10 transition-colors duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gold-primary/10 rounded-lg flex items-center justify-center group-hover:bg-gold-primary/20">
                      <FaGem className="text-gold-primary" />
                    </div>
                    <span className="text-white font-medium">금 수입 신청</span>
                  </div>
                  <FaPlus className="text-text-secondary group-hover:text-gold-primary" />
                </Link>

                <Link
                  to="/collateral-loan"
                  className="flex items-center justify-between p-4 bg-bg-secondary rounded-lg hover:bg-blue-500/10 transition-colors duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20">
                      <FaUniversity className="text-blue-400" />
                    </div>
                    <span className="text-white font-medium">담보대출 신청</span>
                  </div>
                  <FaPlus className="text-text-secondary group-hover:text-blue-400" />
                </Link>

                <Link
                  to="/physical-exchange"
                  className="flex items-center justify-between p-4 bg-bg-secondary rounded-lg hover:bg-green-500/10 transition-colors duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20">
                      <FaCoins className="text-green-400" />
                    </div>
                    <span className="text-white font-medium">실물 교환</span>
                  </div>
                  <FaPlus className="text-text-secondary group-hover:text-green-400" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* 최근 거래 내역 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6">최근 거래</h2>
              <div className="space-y-4">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-bg-secondary rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        transaction.type === 'buy' ? 'bg-green-500/20' :
                        transaction.type === 'sell' ? 'bg-red-500/20' : 'bg-blue-500/20'
                      }`}>
                        {transaction.type === 'buy' ? (
                          <FaArrowDown className="text-green-400 text-sm" />
                        ) : transaction.type === 'sell' ? (
                          <FaArrowUp className="text-red-400 text-sm" />
                        ) : (
                          <FaUniversity className="text-blue-400 text-sm" />
                        )}
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">
                          {transaction.type === 'buy' ? '구매' : 
                           transaction.type === 'sell' ? '판매' : '대출'}
                        </p>
                        <p className="text-text-secondary text-xs">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-sm font-medium">
                        {transaction.amount}
                      </p>
                      <p className="text-text-secondary text-xs">
                        {transaction.price || transaction.rate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 알림 센터 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="lg:col-span-1"
          >
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">알림</h2>
                <FaBell className="text-text-secondary" />
              </div>
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <div key={index} className="p-3 bg-bg-secondary rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        notification.type === 'warning' ? 'bg-yellow-400' :
                        notification.type === 'success' ? 'bg-green-400' : 'bg-blue-400'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-white text-sm">{notification.message}</p>
                        <p className="text-text-secondary text-xs mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 