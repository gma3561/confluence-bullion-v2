import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGem, FaCalculator, FaShippingFast, FaCheckCircle } from 'react-icons/fa';

const GoldImport = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    weight: '',
    purity: '99.9',
    address: '',
    phone: ''
  });

  const steps = [
    { id: 1, title: '수량 선택', icon: FaGem },
    { id: 2, title: '비용 계산', icon: FaCalculator },
    { id: 3, title: '배송 정보', icon: FaShippingFast },
    { id: 4, title: '신청 완료', icon: FaCheckCircle }
  ];

  const weightOptions = [
    { value: '1', label: '1kg', price: 85000000 },
    { value: '5', label: '5kg', price: 425000000 },
    { value: '10', label: '10kg', price: 850000000 },
    { value: 'custom', label: '직접 입력', price: 0 }
  ];

  const calculateCost = (weight) => {
    const goldPrice = 85000000; // 1kg 기준 8천 5백만원
    const totalCost = goldPrice * weight;
    const tariff = totalCost * 0.13; // 13% 관부가세
    const serviceFee = totalCost * 0.02; // 2% 서비스 수수료
    const savings = tariff; // 절약되는 관부가세
    
    return {
      totalCost,
      tariff,
      serviceFee,
      savings,
      finalCost: totalCost + serviceFee
    };
  };

  return (
    <div className="min-h-screen bg-bg-primary py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">금 수입 신청</h1>
          <p className="text-text-secondary">13% 관부가세를 절약하는 금 수입 서비스</p>
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
              <h2 className="text-xl font-bold text-white mb-6">수입할 금 수량을 선택하세요</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {weightOptions.map((option) => (
                  <motion.div
                    key={option.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setFormData({...formData, weight: option.value})}
                    className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      formData.weight === option.value
                        ? 'border-gold-primary bg-gold-primary/10'
                        : 'border-gray-600 bg-bg-secondary hover:border-gold-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">{option.label}</h3>
                      <FaGem className="text-gold-primary" />
                    </div>
                    {option.price > 0 && (
                      <p className="text-text-secondary">
                        ₩{(option.price / 100000000).toFixed(1)}억원
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {formData.weight === 'custom' && (
                <div className="mt-6">
                  <label className="block text-white text-sm font-medium mb-2">
                    수량 입력 (kg)
                  </label>
                  <input
                    type="number"
                    className="input-field w-full"
                    placeholder="원하는 수량을 입력하세요"
                  />
                </div>
              )}

              <div className="mt-6">
                <label className="block text-white text-sm font-medium mb-2">
                  금 순도 선택
                </label>
                <select
                  value={formData.purity}
                  onChange={(e) => setFormData({...formData, purity: e.target.value})}
                  className="input-field w-full"
                >
                  <option value="99.9">99.9% (24K)</option>
                  <option value="99.99">99.99% (순금)</option>
                </select>
              </div>

              <button
                onClick={() => setCurrentStep(2)}
                disabled={!formData.weight}
                className="btn-primary w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                다음 단계
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6">비용 계산</h2>
              {formData.weight && formData.weight !== 'custom' && (
                <div className="space-y-4">
                  {(() => {
                    const weight = parseFloat(formData.weight);
                    const costs = calculateCost(weight);
                    
                    return (
                      <>
                        <div className="bg-bg-secondary p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-text-secondary">금 가격 ({weight}kg)</span>
                            <span className="text-white font-medium">
                              ₩{(costs.totalCost / 100000000).toFixed(1)}억원
                            </span>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-text-secondary">서비스 수수료 (2%)</span>
                            <span className="text-white font-medium">
                              ₩{(costs.serviceFee / 10000).toFixed(0)}만원
                            </span>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-green-400">절약되는 관부가세 (13%)</span>
                            <span className="text-green-400 font-medium">
                              -₩{(costs.savings / 10000).toFixed(0)}만원
                            </span>
                          </div>
                          <hr className="border-gray-600 my-3" />
                          <div className="flex justify-between items-center">
                            <span className="text-white font-semibold">총 비용</span>
                            <span className="text-gold-primary font-bold text-xl">
                              ₩{(costs.finalCost / 100000000).toFixed(1)}억원
                            </span>
                          </div>
                        </div>
                        
                        <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                          <p className="text-green-400 font-medium">
                            💰 총 절약액: ₩{(costs.savings / 10000).toFixed(0)}만원
                          </p>
                          <p className="text-text-secondary text-sm mt-1">
                            개인 수입 대비 13% 관부가세를 절약할 수 있습니다.
                          </p>
                        </div>
                      </>
                    );
                  })()}
                </div>
              )}
              
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
              <h2 className="text-xl font-bold text-white mb-6">배송 정보 입력</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    배송 주소
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
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
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="input-field w-full"
                    placeholder="010-0000-0000"
                  />
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                  <p className="text-yellow-400 font-medium mb-2">📋 필요 서류</p>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• 신분증 사본</li>
                    <li>• 자금 출처 증명서</li>
                    <li>• 수입 신고서 (자동 작성)</li>
                  </ul>
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
                  disabled={!formData.address || !formData.phone}
                  className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  신청 완료
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
              
              <h2 className="text-2xl font-bold text-white mb-4">신청이 완료되었습니다!</h2>
              <p className="text-text-secondary mb-6">
                신청서가 접수되었으며, 24시간 내에 담당자가 연락드릴 예정입니다.
              </p>
              
              <div className="bg-bg-secondary p-4 rounded-lg mb-6">
                <p className="text-white font-medium mb-2">신청 번호: #CB-2024-001234</p>
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

export default GoldImport; 