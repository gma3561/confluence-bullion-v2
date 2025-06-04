import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaGem, FaCalculator, FaExclamationTriangle } from 'react-icons/fa';

const CollateralLoan = () => {
  const [selectedNFTs, setSelectedNFTs] = useState([]);
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanPeriod, setLoanPeriod] = useState(12);

  const userNFTs = [
    { id: 1, name: '순금 1kg NFT #001', weight: '1kg', value: 85000000, selected: false },
    { id: 2, name: '순금 2kg NFT #003', weight: '2kg', value: 170000000, selected: false },
    { id: 3, name: '순금 5kg NFT #002', weight: '5kg', value: 420000000, selected: false }
  ];

  const calculateLoanDetails = () => {
    const totalCollateral = selectedNFTs.reduce((sum, nft) => sum + nft.value, 0);
    const maxLoan = totalCollateral * 0.7; // LTV 70%
    const monthlyRate = 0.05 / 12; // 연 5%를 월 이율로
    const monthlyPayment = loanAmount * monthlyRate;
    const liquidationPrice = totalCollateral * 0.8; // 청산 기준 80%
    
    return {
      totalCollateral,
      maxLoan,
      monthlyPayment,
      liquidationPrice,
      ltv: totalCollateral > 0 ? (loanAmount / totalCollateral) * 100 : 0
    };
  };

  const toggleNFTSelection = (nft) => {
    const isSelected = selectedNFTs.find(selected => selected.id === nft.id);
    if (isSelected) {
      setSelectedNFTs(selectedNFTs.filter(selected => selected.id !== nft.id));
    } else {
      setSelectedNFTs([...selectedNFTs, nft]);
    }
  };

  const loanDetails = calculateLoanDetails();

  return (
    <div className="min-h-screen bg-bg-primary py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">NFT 담보대출</h1>
          <p className="text-text-secondary">보유한 금 NFT를 담보로 5% 저금리 대출을 받으세요</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 왼쪽: NFT 선택 및 대출 설정 */}
          <div className="space-y-6">
            {/* NFT 선택 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <FaGem className="mr-2 text-gold-primary" />
                담보 NFT 선택
              </h2>
              
              <div className="space-y-3">
                {userNFTs.map((nft) => {
                  const isSelected = selectedNFTs.find(selected => selected.id === nft.id);
                  return (
                    <motion.div
                      key={nft.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleNFTSelection(nft)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        isSelected
                          ? 'border-gold-primary bg-gold-primary/10'
                          : 'border-gray-600 bg-bg-secondary hover:border-gold-primary/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-medium">{nft.name}</h3>
                          <p className="text-text-secondary text-sm">{nft.weight}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium">
                            ₩{(nft.value / 100000000).toFixed(1)}억
                          </p>
                          <p className="text-green-400 text-sm">
                            대출가능: ₩{((nft.value * 0.7) / 100000000).toFixed(1)}억
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* 대출 조건 설정 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <FaCalculator className="mr-2 text-blue-400" />
                대출 조건 설정
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    대출 금액: ₩{(loanAmount / 100000000).toFixed(1)}억원
                  </label>
                  <input
                    type="range"
                    min="0"
                    max={loanDetails.maxLoan}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-text-secondary mt-1">
                    <span>₩0</span>
                    <span>최대: ₩{(loanDetails.maxLoan / 100000000).toFixed(1)}억</span>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    대출 기간
                  </label>
                  <select
                    value={loanPeriod}
                    onChange={(e) => setLoanPeriod(Number(e.target.value))}
                    className="input-field w-full"
                  >
                    <option value={6}>6개월</option>
                    <option value={12}>12개월</option>
                    <option value={24}>24개월</option>
                    <option value={36}>36개월</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    상환 방식
                  </label>
                  <select className="input-field w-full">
                    <option value="interest-only">이자만 납부</option>
                    <option value="equal-payment">원리금균등상환</option>
                  </select>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 오른쪽: 대출 계산 결과 및 리스크 */}
          <div className="space-y-6">
            {/* 대출 계산 결과 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card"
            >
              <h2 className="text-xl font-bold text-white mb-4">대출 계산 결과</h2>
              
              <div className="space-y-4">
                <div className="bg-bg-secondary p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-text-secondary">담보 가치</span>
                      <p className="text-white font-medium">
                        ₩{(loanDetails.totalCollateral / 100000000).toFixed(1)}억
                      </p>
                    </div>
                    <div>
                      <span className="text-text-secondary">최대 대출</span>
                      <p className="text-green-400 font-medium">
                        ₩{(loanDetails.maxLoan / 100000000).toFixed(1)}억
                      </p>
                    </div>
                    <div>
                      <span className="text-text-secondary">신청 금액</span>
                      <p className="text-gold-primary font-medium">
                        ₩{(loanAmount / 100000000).toFixed(1)}억
                      </p>
                    </div>
                    <div>
                      <span className="text-text-secondary">현재 LTV</span>
                      <p className={`font-medium ${
                        loanDetails.ltv > 70 ? 'text-red-400' : 'text-white'
                      }`}>
                        {loanDetails.ltv.toFixed(1)}%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-bg-secondary p-4 rounded-lg">
                  <h3 className="text-white font-medium mb-2">월 상환 정보</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-text-secondary">월 이자</span>
                      <p className="text-white font-medium">
                        ₩{(loanDetails.monthlyPayment / 10000).toFixed(0)}만원
                      </p>
                    </div>
                    <div>
                      <span className="text-text-secondary">연 이율</span>
                      <p className="text-white font-medium">5.0%</p>
                    </div>
                  </div>
                </div>

                {/* LTV 게이지 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-text-secondary text-sm">LTV 비율</span>
                    <span className="text-white text-sm">{loanDetails.ltv.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-300 ${
                        loanDetails.ltv > 80 ? 'bg-red-500' :
                        loanDetails.ltv > 70 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${Math.min(loanDetails.ltv, 100)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-text-secondary mt-1">
                    <span>0%</span>
                    <span className="text-yellow-400">70%</span>
                    <span className="text-red-400">80%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 리스크 알림 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <FaExclamationTriangle className="mr-2 text-yellow-400" />
                리스크 안내
              </h2>
              
              <div className="space-y-3">
                <div className="bg-yellow-500/10 border border-yellow-500/20 p-3 rounded-lg">
                  <p className="text-yellow-400 font-medium text-sm">⚠️ 마진콜 (LTV 75%)</p>
                  <p className="text-text-secondary text-xs mt-1">
                    금가 하락으로 LTV가 75%에 도달하면 추가 담보 제공이 필요합니다.
                  </p>
                </div>
                
                <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
                  <p className="text-red-400 font-medium text-sm">🚨 자동 청산 (LTV 80%)</p>
                  <p className="text-text-secondary text-xs mt-1">
                    LTV가 80%에 도달하면 담보 NFT가 자동으로 청산됩니다.
                  </p>
                </div>
                
                <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-lg">
                  <p className="text-blue-400 font-medium text-sm">💡 안전 운용 팁</p>
                  <p className="text-text-secondary text-xs mt-1">
                    LTV 50% 이하로 유지하시면 안전하게 운용할 수 있습니다.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 신청 버튼 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button
                disabled={selectedNFTs.length === 0 || loanAmount === 0 || loanDetails.ltv > 70}
                className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {selectedNFTs.length === 0 ? 'NFT를 선택하세요' :
                 loanAmount === 0 ? '대출 금액을 설정하세요' :
                 loanDetails.ltv > 70 ? 'LTV가 70%를 초과합니다' :
                 '대출 신청하기'}
              </button>
              
              {selectedNFTs.length > 0 && loanAmount > 0 && loanDetails.ltv <= 70 && (
                <p className="text-text-secondary text-sm text-center mt-2">
                  스마트 컨트랙트를 통해 즉시 처리됩니다
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollateralLoan; 