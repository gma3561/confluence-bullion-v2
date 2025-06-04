import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaGem,
  FaCoins,
  FaUniversity,
  FaArrowRight,
  FaArrowUp,
  FaShieldAlt,
  FaGlobe,
  FaChartLine,
  FaUsers,
  FaDollarSign
} from 'react-icons/fa';

const HomePage = () => {
  const [goldPrice, setGoldPrice] = useState(2045.67);
  const [priceChange, setPriceChange] = useState(+12.34);

  // 실시간 금가 시뮬레이션
  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 10;
      setGoldPrice(prev => Math.max(prev + change, 1800));
      setPriceChange(change);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: FaGem,
      title: '금 수입 대행',
      description: '개인이 불가능한 대량 금 수입을 대신 처리하여 13% 관부가세를 절약합니다.',
      benefits: ['13% 관부가세 절약', '대량 수입 가능', '안전한 보관'],
      color: 'from-blue-500 to-purple-600',
      link: '/gold-import'
    },
    {
      icon: FaCoins,
      title: 'NFT 증권화',
      description: '실물 금을 NFT로 디지털화하여 분할 소유와 거래를 가능하게 합니다.',
      benefits: ['분할 소유 가능', '즉시 거래', '투명한 소유권'],
      color: 'from-gold-primary to-gold-secondary',
      link: '/nft-marketplace'
    },
    {
      icon: FaUniversity,
      title: '담보대출',
      description: '증권화된 금을 담보로 5% 저금리 대출 서비스를 제공합니다.',
      benefits: ['5% 저금리', '즉시 대출', 'LTV 70%'],
      color: 'from-green-500 to-emerald-600',
      link: '/collateral-loan'
    }
  ];

  const stats = [
    { label: '총 수입 금량', value: '2,847', unit: 'kg', icon: FaGem },
    { label: '발행된 NFT', value: '15,234', unit: '개', icon: FaCoins },
    { label: '대출 잔액', value: '₩8.9', unit: '억', icon: FaDollarSign },
    { label: '활성 사용자', value: '3,456', unit: '명', icon: FaUsers }
  ];

  const features = [
    {
      icon: FaShieldAlt,
      title: '안전한 보관',
      description: '홍콩과 한국의 공인 금고에서 안전하게 보관'
    },
    {
      icon: FaGlobe,
      title: '글로벌 접근',
      description: '전 세계 어디서나 24/7 거래 가능'
    },
    {
      icon: FaChartLine,
      title: '실시간 시세',
      description: '국제 금가와 연동된 실시간 가격 정보'
    },
    {
      icon: FaArrowUp,
      title: '수익 최적화',
      description: '관부가세 절약과 담보대출로 수익 극대화'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-gradient">개인이 불가능한</span>
              <br />
              <span className="text-white">금 수입을 대행하여</span>
              <br />
              <span className="text-gradient">증권화</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto"
            >
              13% 관부가세를 절약하고, 실물 금을 NFT로 증권화하여 
              5% 저금리 담보대출까지 받을 수 있는 혁신적인 플랫폼
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/gold-import" className="btn-primary">
                금 수입 신청하기
                <FaArrowRight className="ml-2" />
              </Link>
              <Link to="/nft-marketplace" className="btn-secondary">
                NFT 마켓 둘러보기
              </Link>
            </motion.div>
          </div>

          {/* 실시간 금가 위젯 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 max-w-md mx-auto"
          >
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-text-secondary mb-2">
                실시간 금가 (1온스)
              </h3>
              <div className="text-3xl font-bold text-gold-primary mb-2">
                ${goldPrice.toFixed(2)}
              </div>
              <div className={`flex items-center justify-center space-x-1 ${
                priceChange >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                <FaArrowUp className={priceChange < 0 ? 'rotate-180' : ''} />
                <span>{priceChange >= 0 ? '+' : ''}${priceChange.toFixed(2)}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 서비스 카드 섹션 */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              핵심 서비스
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              개인이 접근하기 어려운 금 투자를 쉽고 안전하게 만들어드립니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="card group cursor-pointer"
                >
                  <Link to={service.link} className="block">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-2xl text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-text-secondary mb-4">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-text-secondary">
                          <div className="w-1.5 h-1.5 bg-gold-primary rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center text-gold-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                      자세히 보기
                      <FaArrowRight className="ml-2 text-sm" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              플랫폼 현황
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-gold-primary to-gold-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-2xl text-black" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                    <span className="text-lg text-gold-primary ml-1">{stat.unit}</span>
                  </div>
                  <div className="text-text-secondary text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              왜 Confluence Bullion인가?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-xl text-gold-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-gold-primary to-gold-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              지금 시작하세요
            </h2>
            <p className="text-xl text-black/80 mb-8">
              개인이 불가능했던 금 투자의 새로운 패러다임을 경험해보세요
            </p>
            <Link 
              to="/gold-import"
              className="inline-flex items-center bg-black text-gold-primary font-semibold py-4 px-8 rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105"
            >
              금 수입 신청하기
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 