import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExchangeAlt, FaGem, FaShippingFast, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const PhysicalExchange = () => {
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [deliveryMethod, setDeliveryMethod] = useState('pickup');
  const [currentStep, setCurrentStep] = useState(1);

  const exchangeableNFTs = [
    { 
      id: 1, 
      name: '순금 1kg NFT #001', 
      weight: '1kg', 
      purity: '99.99%', 
      location: '한국 금고',
      exchangeable: true,
      fee: 50000
    },
    { 
      id: 2, 
      name: '순금 2kg NFT #003', 
      weight: '2kg', 
      purity: '99.9%', 
      location: '한국 금고',
      exchangeable: true,
      fee: 100000
    },
    { 
      id: 3, 
      name: '순금 5kg NFT #002', 
      weight: '5kg', 
      purity: '99.99%', 
      location: '홍콩 금고',
      exchangeable: false,
      fee: 0
    }
  ];

  const steps = [
    { id: 1, title: 'NFT 선택', icon: FaGem },
    { id: 2, title: '배송 정보', icon: FaShippingFast },
    { id: 3, title: '본인 확인', icon: FaShieldAlt },
    { id: 4, title: '교환 완료', icon: FaCheckCircle }
  ];

  return (
    <div className="min-h-screen bg-bg-primary py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">실물 교환</h1>
          <p className="text-text-secondary">NFT를 실물 금으로 교환하세요</p>
        </motion.div>

        {/* 진행 단계 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                    isCompleted ? 'bg-green-500 border-green-500' :
                    isActive ? 'bg-gold-primary border-gold-primary' :
                    'bg-bg-secondary border-gray-600'
                  }`}>
                    <Icon className={`text-lg ${
                      isCompleted ? 'text-white' :
                      isActive ? 'text-black' : 'text-text-secondary'
                    }`} />
                  </div>
                  <div className="ml-3">
                    <p className={`text-sm font-medium ${
                      isActive ? 'text-gold-primary' : 'text-text-secondary'
                    }`}>
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 mx-4 ${
                      isCompleted ? 'bg-green-500' : 'bg-gray-600'
                    }`}></div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 단계별 컨텐츠 */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="card"
        >
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6">교환할 NFT를 선택하세요</h2>
              
              <div className="space-y-4">
                {exchangeableNFTs.map((nft) => (
                  <motion.div
                    key={nft.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => nft.exchangeable && setSelectedNFT(nft)}
                    className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                      !nft.exchangeable 
                        ? 'border-gray-600 bg-gray-800/50 cursor-not-allowed opacity-50'
                        : selectedNFT?.id === nft.id
                        ? 'border-gold-primary bg-gold-primary/10 cursor-pointer'
                        : 'border-gray-600 bg-bg-secondary hover:border-gold-primary/50 cursor-pointer'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-gold-primary to-gold-secondary rounded-lg flex items-center justify-center">
                          <FaGem className="text-2xl text-black" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{nft.name}</h3>
                          <p className="text-text-secondary">{nft.weight} • {nft.purity}</p>
                          <p className="text-text-secondary text-sm">{nft.location}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        {nft.exchangeable ? (
                          <>
                            <p className="text-green-400 font-medium">교환 가능</p>
                            <p className="text-text-secondary text-sm">
                              수수료: ₩{nft.fee.toLocaleString()}
                            </p>
                          </>
                        ) : (
                          <div>
                            <p className="text-red-400 font-medium">교환 불가</p>
                            <p className="text-text-secondary text-sm">해외 보관</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                <p className="text-blue-400 font-medium mb-2">📍 교환 가능 조건</p>
                <ul className="text-text-secondary text-sm space-y-1">
                  <li>• 한국 내 금고에 보관된 NFT만 교환 가능</li>
                  <li>• 교환 수수료는 무게에 따라 차등 적용</li>
                  <li>• 교환 후 NFT는 소각됩니다</li>
                </ul>
              </div>

              <button
                onClick={() => setCurrentStep(2)}
                disabled={!selectedNFT}
                className="btn-primary w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                다음 단계
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6">배송 정보 입력</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-3">
                    수령 방법 선택
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setDeliveryMethod('pickup')}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        deliveryMethod === 'pickup'
                          ? 'border-gold-primary bg-gold-primary/10'
                          : 'border-gray-600 bg-bg-secondary hover:border-gold-primary/50'
                      }`}
                    >
                      <div className="text-center">
                        <FaShieldAlt className="text-2xl text-gold-primary mx-auto mb-2" />
                        <h3 className="text-white font-medium">직접 수령</h3>
                        <p className="text-text-secondary text-sm mt-1">
                          서울 강남구 금고 방문
                        </p>
                        <p className="text-green-400 text-sm font-medium mt-2">무료</p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setDeliveryMethod('delivery')}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        deliveryMethod === 'delivery'
                          ? 'border-gold-primary bg-gold-primary/10'
                          : 'border-gray-600 bg-bg-secondary hover:border-gold-primary/50'
                      }`}
                    >
                      <div className="text-center">
                        <FaShippingFast className="text-2xl text-blue-400 mx-auto mb-2" />
                        <h3 className="text-white font-medium">보안 배송</h3>
                        <p className="text-text-secondary text-sm mt-1">
                          전국 보안 배송 서비스
                        </p>
                        <p className="text-yellow-400 text-sm font-medium mt-2">₩100,000</p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {deliveryMethod === 'delivery' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        배송 주소
                      </label>
                      <textarea
                        className="input-field w-full h-24"
                        placeholder="상세 주소를 입력하세요"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        연락처
                      </label>
                      <input
                        type="tel"
                        className="input-field w-full"
                        placeholder="010-0000-0000"
                      />
                    </div>
                  </div>
                )}

                {deliveryMethod === 'pickup' && (
                  <div className="bg-bg-secondary p-4 rounded-lg">
                    <h3 className="text-white font-medium mb-2">수령 장소 정보</h3>
                    <p className="text-text-secondary text-sm mb-2">
                      📍 서울특별시 강남구 테헤란로 123, 골드타워 지하 1층
                    </p>
                    <p className="text-text-secondary text-sm mb-2">
                      🕒 운영시간: 평일 09:00 - 18:00
                    </p>
                    <p className="text-text-secondary text-sm">
                      📞 문의전화: 02-1234-5678
                    </p>
                  </div>
                )}

                <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                  <p className="text-yellow-400 font-medium mb-2">⚠️ 중요 안내</p>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• 본인 확인을 위해 신분증이 필요합니다</li>
                    <li>• 교환 신청 후 취소는 불가능합니다</li>
                    <li>• 실물 수령 시 무게와 순도를 재확인합니다</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="btn-secondary flex-1"
                >
                  이전
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="btn-primary flex-1"
                >
                  다음 단계
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6">본인 확인</h2>
              
              <div className="space-y-6">
                <div className="bg-bg-secondary p-6 rounded-lg">
                  <h3 className="text-white font-medium mb-4">교환 요약</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">NFT</span>
                      <span className="text-white">{selectedNFT?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">무게/순도</span>
                      <span className="text-white">{selectedNFT?.weight} • {selectedNFT?.purity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">수령 방법</span>
                      <span className="text-white">
                        {deliveryMethod === 'pickup' ? '직접 수령' : '보안 배송'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">교환 수수료</span>
                      <span className="text-white">₩{selectedNFT?.fee.toLocaleString()}</span>
                    </div>
                    {deliveryMethod === 'delivery' && (
                      <div className="flex justify-between">
                        <span className="text-text-secondary">배송비</span>
                        <span className="text-white">₩100,000</span>
                      </div>
                    )}
                    <hr className="border-gray-600" />
                    <div className="flex justify-between font-medium">
                      <span className="text-white">총 비용</span>
                      <span className="text-gold-primary">
                        ₩{(selectedNFT?.fee + (deliveryMethod === 'delivery' ? 100000 : 0)).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    신분증 업로드
                  </label>
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                    <FaShieldAlt className="text-4xl text-text-secondary mx-auto mb-4" />
                    <p className="text-text-secondary mb-2">신분증 사진을 업로드하세요</p>
                    <button className="btn-secondary">파일 선택</button>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span className="text-text-secondary text-sm">
                      교환 약관에 동의합니다
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span className="text-text-secondary text-sm">
                      개인정보 처리방침에 동의합니다
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span className="text-text-secondary text-sm">
                      교환 후 NFT 소각에 동의합니다
                    </span>
                  </label>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="btn-secondary flex-1"
                >
                  이전
                </button>
                <button
                  onClick={() => setCurrentStep(4)}
                  className="btn-primary flex-1"
                >
                  교환 신청
                </button>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <FaCheckCircle className="text-white text-3xl" />
              </motion.div>
              
              <h2 className="text-2xl font-bold text-white mb-4">교환 신청이 완료되었습니다!</h2>
              <p className="text-text-secondary mb-6">
                신청이 접수되었으며, 본인 확인 후 처리됩니다.
              </p>
              
              <div className="bg-bg-secondary p-6 rounded-lg mb-6">
                <h3 className="text-white font-medium mb-4">처리 일정</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">본인 확인</span>
                    <span className="text-white">1-2 영업일</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">실물 준비</span>
                    <span className="text-white">2-3 영업일</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">
                      {deliveryMethod === 'pickup' ? '수령 가능' : '배송 완료'}
                    </span>
                    <span className="text-white">3-5 영업일</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-bg-secondary p-4 rounded-lg mb-6">
                <p className="text-white font-medium mb-2">교환 번호: #EX-2024-001234</p>
                <p className="text-text-secondary text-sm">
                  이 번호로 진행 상황을 확인하실 수 있습니다.
                </p>
              </div>
              
              <button
                onClick={() => window.location.href = '/dashboard'}
                className="btn-primary"
              >
                대시보드로 이동
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PhysicalExchange; 