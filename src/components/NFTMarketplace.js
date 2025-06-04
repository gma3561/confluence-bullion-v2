import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGem, FaFilter, FaSearch, FaHeart, FaEye } from 'react-icons/fa';

const NFTMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterWeight, setFilterWeight] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const nftData = [
    {
      id: 1,
      name: '순금 1kg NFT #001',
      weight: '1kg',
      purity: '99.99%',
      location: '홍콩 금고',
      price: 85000000,
      image: '/api/placeholder/300/300',
      likes: 24,
      views: 156,
      available: true
    },
    {
      id: 2,
      name: '순금 5kg NFT #002',
      weight: '5kg',
      purity: '99.9%',
      location: '한국 금고',
      price: 420000000,
      image: '/api/placeholder/300/300',
      likes: 18,
      views: 89,
      available: true
    },
    {
      id: 3,
      name: '순금 2kg NFT #003',
      weight: '2kg',
      purity: '99.99%',
      location: '홍콩 금고',
      price: 170000000,
      image: '/api/placeholder/300/300',
      likes: 31,
      views: 203,
      available: false
    }
  ];

  const filteredNFTs = nftData.filter(nft => {
    const matchesSearch = nft.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesWeight = filterWeight === 'all' || nft.weight.includes(filterWeight);
    return matchesSearch && matchesWeight;
  });

  return (
    <div className="min-h-screen bg-bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">NFT 마켓플레이스</h1>
          <p className="text-text-secondary">실물 금으로 뒷받침된 NFT를 거래하세요</p>
        </motion.div>

        {/* 검색 및 필터 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card mb-8"
        >
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
              <input
                type="text"
                placeholder="NFT 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field w-full pl-10"
              />
            </div>
            
            <select
              value={filterWeight}
              onChange={(e) => setFilterWeight(e.target.value)}
              className="input-field"
            >
              <option value="all">모든 무게</option>
              <option value="1kg">1kg</option>
              <option value="2kg">2kg</option>
              <option value="5kg">5kg</option>
              <option value="10kg">10kg</option>
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-field"
            >
              <option value="latest">최신순</option>
              <option value="price-low">가격 낮은순</option>
              <option value="price-high">가격 높은순</option>
              <option value="popular">인기순</option>
            </select>
            
            <button className="btn-secondary flex items-center justify-center">
              <FaFilter className="mr-2" />
              필터
            </button>
          </div>
        </motion.div>

        {/* NFT 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNFTs.map((nft, index) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card group cursor-pointer"
            >
              {/* NFT 이미지 */}
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <div className="w-full h-48 bg-gradient-to-br from-gold-primary to-gold-secondary flex items-center justify-center">
                  <FaGem className="text-6xl text-black opacity-50" />
                </div>
                
                {/* 오버레이 */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="btn-primary">
                    상세 보기
                  </button>
                </div>
                
                {/* 상태 배지 */}
                <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
                  nft.available 
                    ? 'bg-green-500 text-white' 
                    : 'bg-red-500 text-white'
                }`}>
                  {nft.available ? '판매중' : '판매완료'}
                </div>
              </div>

              {/* NFT 정보 */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white group-hover:text-gold-primary transition-colors">
                  {nft.name}
                </h3>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-text-secondary">무게:</span>
                    <span className="text-white ml-1">{nft.weight}</span>
                  </div>
                  <div>
                    <span className="text-text-secondary">순도:</span>
                    <span className="text-white ml-1">{nft.purity}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-text-secondary">보관:</span>
                    <span className="text-white ml-1">{nft.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-secondary text-sm">현재 가격</p>
                    <p className="text-xl font-bold text-gold-primary">
                      ₩{(nft.price / 100000000).toFixed(1)}억
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <FaHeart className="text-sm" />
                      <span className="text-xs">{nft.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaEye className="text-sm" />
                      <span className="text-xs">{nft.views}</span>
                    </div>
                  </div>
                </div>

                {/* 담보대출 정보 */}
                <div className="bg-bg-secondary p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary text-sm">담보대출 가능</span>
                    <span className="text-green-400 font-medium">
                      ₩{((nft.price * 0.7) / 100000000).toFixed(1)}억
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary mt-1">LTV 70% 기준</p>
                </div>

                {/* 액션 버튼 */}
                <div className="flex space-x-2">
                  <button 
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                      nft.available
                        ? 'btn-primary'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!nft.available}
                  >
                    {nft.available ? '구매하기' : '판매완료'}
                  </button>
                  <button className="btn-secondary px-4">
                    <FaHeart />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 빈 상태 */}
        {filteredNFTs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <FaGem className="text-6xl text-text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              검색 결과가 없습니다
            </h3>
            <p className="text-text-secondary">
              다른 검색어나 필터를 시도해보세요
            </p>
          </motion.div>
        )}

        {/* 통계 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          <div className="card text-center">
            <h3 className="text-2xl font-bold text-gold-primary mb-2">156</h3>
            <p className="text-text-secondary">총 NFT 수</p>
          </div>
          <div className="card text-center">
            <h3 className="text-2xl font-bold text-gold-primary mb-2">₩127억</h3>
            <p className="text-text-secondary">총 거래량</p>
          </div>
          <div className="card text-center">
            <h3 className="text-2xl font-bold text-gold-primary mb-2">2,847kg</h3>
            <p className="text-text-secondary">총 금 보유량</p>
          </div>
          <div className="card text-center">
            <h3 className="text-2xl font-bold text-gold-primary mb-2">1,234</h3>
            <p className="text-text-secondary">활성 거래자</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NFTMarketplace; 