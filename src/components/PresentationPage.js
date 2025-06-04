import React, { useState } from 'react';

const PresentationPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-50 via-white to-gold-50">
      {/* 럭셔리 헤더 */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-luxury-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gold-600/20 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-6xl font-display font-bold text-white mb-4 tracking-tight">
              CONFLUENCE
              <span className="block text-gold-300">BULLION</span>
            </h1>
            <p className="text-xl text-luxury-200 max-w-3xl mx-auto leading-relaxed">
              개인이 할 수 없는 금 정식 수입, 우리가 함께 모여 가능하게 합니다
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <button className="btn-primary">
                투자 시작하기
              </button>
              <button className="btn-secondary">
                자세히 알아보기
              </button>
            </div>
          </div>
        </div>
        {/* 장식적 요소 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl"></div>
      </header>

      {/* 프리미엄 탭 네비게이션 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-luxury-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center space-x-1">
            {[
              { id: 'overview', label: '사업 개요', icon: '🏛️' },
              { id: 'business-model', label: '비즈니스 모델', icon: '💼' },
              { id: 'price-structure', label: '가격 구조', icon: '💰' },
              { id: 'products', label: '상품 구성', icon: '🥇' },
              { id: 'roadmap', label: '로드맵', icon: '🚀' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium text-sm transition-all duration-300 relative ${
                  activeTab === tab.id
                    ? 'text-gold-600 bg-gold-50 border-b-2 border-gold-500'
                    : 'text-luxury-600 hover:text-gold-600 hover:bg-gold-50/50'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-gradient"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 메인 콘텐츠 */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* 사업 개요 */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-luxury-800 mb-4">
                컨플루언스 불리온 <span className="text-gradient">사업 개요</span>
              </h2>
              <p className="text-xl text-luxury-600 max-w-4xl mx-auto">
                여러 흐름이 하나로 모이듯, 개인들의 구매력을 하나로 모아 금 정식 수입을 실현하는 혁신적인 플랫폼
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="card-luxury p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💎</span>
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-luxury-800">프리미엄 서비스</h3>
                </div>
                <p className="text-luxury-600 leading-relaxed">
                  한국 소비자들이 기존에 지불해왔던 높은 금 소매 프리미엄을 제거하고, 
                  국제 금 시세에 근접한 가격으로 투명하게 고품질 금을 구매할 수 있습니다.
                </p>
              </div>

              <div className="card-luxury p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-luxury-800">공동구매 혁신</h3>
                </div>
                <p className="text-luxury-600 leading-relaxed">
                  개인이 불가능한 대량 수입을 공동구매를 통해 실현하여, 
                  모든 참여자가 도매가격의 혜택을 누릴 수 있는 혁신적인 시스템입니다.
                </p>
              </div>
            </div>

            <div className="card-luxury p-8 bg-gradient-to-r from-gold-50 to-blue-50 border-gold-200">
              <h3 className="text-2xl font-display font-bold text-luxury-800 mb-6 text-center">
                핵심 가치 제안
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: '🏭', title: '개인이 불가능한 직수입', desc: '복잡한 국제 금 수입 과정을 전문적으로 대행' },
                  { icon: '📊', title: '투명한 가격 구조', desc: '모든 비용 요소와 마진을 공개하는 완전 투명 정책' },
                  { icon: '💪', title: '공동구매의 힘', desc: '소비자 집단의 구매력을 하나로 모아 가격 경쟁력 확보' },
                  { icon: '🛡️', title: '신뢰할 수 있는 품질', desc: '엄격한 인증 과정을 통한 품질 보증' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="font-semibold text-luxury-800 mb-2">{item.title}</h4>
                    <p className="text-sm text-luxury-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 비즈니스 모델 */}
        {activeTab === 'business-model' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-luxury-800 mb-4">
                <span className="text-gradient">비즈니스 모델</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="card-luxury p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <h3 className="text-2xl font-display font-bold text-blue-800 mb-6 flex items-center">
                  <span className="text-3xl mr-3">💰</span>
                  주요 수익원
                </h3>
                <div className="space-y-4">
                  {[
                    { label: '수입 대행 수수료', value: '2%', color: 'blue' },
                    { label: 'NFT 거래 수수료', value: '1%', color: 'blue' },
                    { label: '대출 이자 마진', value: '2%', color: 'blue' },
                    { label: '실물 교환 수수료', value: '0.5%', color: 'blue' }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm">
                      <span className="font-medium text-luxury-700">{item.label}</span>
                      <span className="font-bold text-blue-600 text-lg">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-luxury p-8 bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                <h3 className="text-2xl font-display font-bold text-red-800 mb-6 flex items-center">
                  <span className="text-3xl mr-3">🎯</span>
                  고객 절약 효과
                </h3>
                <div className="text-center">
                  <div className="text-6xl font-bold text-red-600 mb-4">13%</div>
                  <div className="text-xl text-luxury-700 mb-2">관부가세 절약</div>
                  <div className="text-luxury-600 mb-4">1억원 투자 시</div>
                  <div className="text-3xl font-bold text-red-600 bg-white rounded-xl p-4 shadow-lg">
                    1,300만원 절약
                  </div>
                </div>
              </div>
            </div>

            <div className="card-luxury p-8">
              <h3 className="text-2xl font-display font-bold text-luxury-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">⚙️</span>
                공동구매 시스템
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: '1', title: '예약 참여', desc: '계약금 20% 결제' },
                  { step: '2', title: '목표 달성', desc: '국제 금 시세로 가격 확정' },
                  { step: '3', title: '잔금 결제', desc: '오프라인 수령 또는 배송' },
                  { step: '4', title: '안전 보장', desc: '모집 실패 시 전액 환불' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {item.step}
                    </div>
                    <h4 className="font-semibold text-luxury-800 mb-2">{item.title}</h4>
                    <p className="text-sm text-luxury-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 가격 구조 */}
        {activeTab === 'price-structure' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-luxury-800 mb-4">
                투명한 <span className="text-gradient">가격 구조</span>
              </h2>
            </div>

            <div className="card-luxury p-8 mb-8">
              <h3 className="text-2xl font-display font-bold text-luxury-800 mb-6">
                비용 구조 상세 (1억원 투자 기준)
              </h3>
              <div className="overflow-hidden rounded-2xl border border-luxury-200">
                <table className="w-full">
                  <thead className="bg-luxury-gradient text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">항목</th>
                      <th className="px-6 py-4 text-center font-semibold">비율</th>
                      <th className="px-6 py-4 text-right font-semibold">금액</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-luxury-200">
                    {[
                      { item: '국제 금 시세', ratio: '87%', amount: '8,700만원', bg: 'bg-white' },
                      { item: '운송/보험', ratio: '1%', amount: '100만원', bg: 'bg-white' },
                      { item: '수입 대행 수수료', ratio: '2%', amount: '200만원', bg: 'bg-white' },
                      { item: '총 비용', ratio: '90%', amount: '9,000만원', bg: 'bg-blue-50 font-bold' },
                      { item: '절약 금액', ratio: '10%', amount: '1,000만원', bg: 'bg-green-50 font-bold text-green-600' }
                    ].map((row, index) => (
                      <tr key={index} className={row.bg}>
                        <td className="px-6 py-4">{row.item}</td>
                        <td className="px-6 py-4 text-center">{row.ratio}</td>
                        <td className="px-6 py-4 text-right">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card-luxury p-8 bg-gradient-to-r from-blue-50 to-gold-50">
              <h3 className="text-2xl font-display font-bold text-luxury-800 mb-6">
                실시간 금 가격 대시보드
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: '국제 금가격 (1kg)', value: '₩152,048,215', change: '+2.3%', color: 'blue' },
                  { label: '한국 금거래소', value: '₩176,533,333', change: '+1.8%', color: 'gray' },
                  { label: '절약 효과', value: '₩24,485,118', change: '-14%', color: 'green' },
                  { label: '컨플루언스 불리온', value: '₩157,200,000', change: '-11%', color: 'gold' }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                    <p className="text-sm text-luxury-600 mb-2">{item.label}</p>
                    <p className="text-xl font-bold text-luxury-800 mb-1">{item.value}</p>
                    <p className={`text-sm font-medium ${
                      item.color === 'green' ? 'text-green-600' : 
                      item.color === 'gold' ? 'text-gold-600' : 'text-blue-600'
                    }`}>
                      {item.change}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 상품 구성 */}
        {activeTab === 'products' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-luxury-800 mb-4">
                <span className="text-gradient">상품 구성</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {[
                { 
                  icon: '🥇', 
                  title: '금 수입 대행', 
                  color: 'blue',
                  features: ['1kg 이상 대량 수입', '99.99% 순도 보장', '안전한 보관 서비스', '품질 인증서 제공']
                },
                { 
                  icon: '🪙', 
                  title: 'NFT 증권화', 
                  color: 'purple',
                  features: ['실물 금 기반 NFT', '분할 소유 가능', '투명한 소유권', '즉시 거래 가능']
                },
                { 
                  icon: '🏦', 
                  title: '담보대출', 
                  color: 'green',
                  features: ['5% 저금리', 'LTV 70% 까지', '즉시 대출 실행', '유연한 상환 조건']
                }
              ].map((service, index) => (
                <div key={index} className="card-luxury p-8 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-display font-bold text-luxury-800 mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-luxury-600 flex items-center justify-center">
                        <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="card-luxury p-8">
              <h3 className="text-2xl font-display font-bold text-luxury-800 mb-6">
                공동구매 상품 라인업
              </h3>
              <div className="overflow-hidden rounded-2xl border border-luxury-200">
                <table className="w-full">
                  <thead className="bg-gold-gradient text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">상품</th>
                      <th className="px-6 py-4 text-center font-semibold">목표 인원</th>
                      <th className="px-6 py-4 text-center font-semibold">마진</th>
                      <th className="px-6 py-4 text-right font-semibold">예상 가격</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-luxury-200">
                    {[
                      { product: '1kg 골드바', people: '5명', margin: '6%', price: '₩152,048,215' },
                      { product: '500g 골드바', people: '10명', margin: '6.5%', price: '₩76,024,107' },
                      { product: '100g 골드바', people: '50명', margin: '7%', price: '₩15,204,821' },
                      { product: '50g 골드바', people: '100명', margin: '7.5%', price: '₩7,602,410' }
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-gold-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-luxury-800">{row.product}</td>
                        <td className="px-6 py-4 text-center text-luxury-600">{row.people}</td>
                        <td className="px-6 py-4 text-center text-luxury-600">{row.margin}</td>
                        <td className="px-6 py-4 text-right font-semibold text-luxury-800">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 로드맵 */}
        {activeTab === 'roadmap' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-luxury-800 mb-4">
                개발 <span className="text-gradient">로드맵</span>
              </h2>
            </div>

            <div className="space-y-8">
              {[
                { 
                  phase: '1', 
                  title: 'Phase 1: 플랫폼 구축', 
                  period: 'Q1 2024', 
                  desc: '기본 플랫폼 개발, 금 수입 대행 서비스 시작, 초기 고객 확보',
                  target: '목표: 100명 고객, 1톤 금 수입',
                  color: 'blue'
                },
                { 
                  phase: '2', 
                  title: 'Phase 2: NFT 증권화', 
                  period: 'Q2 2024', 
                  desc: '실물 금 NFT 발행, 마켓플레이스 오픈, 분할 소유 서비스',
                  target: '목표: 1,000개 NFT 발행, 활성 거래',
                  color: 'yellow'
                },
                { 
                  phase: '3', 
                  title: 'Phase 3: 담보대출 서비스', 
                  period: 'Q3 2024', 
                  desc: 'NFT 담보 대출 서비스 런칭, 금융 파트너십 구축',
                  target: '목표: 50억원 대출 실행',
                  color: 'green'
                },
                { 
                  phase: '4', 
                  title: 'Phase 4: 글로벌 확장', 
                  period: 'Q4 2024', 
                  desc: '해외 시장 진출, 다국가 서비스 확장, 글로벌 파트너십',
                  target: '목표: 아시아 3개국 서비스 확장',
                  color: 'purple'
                }
              ].map((phase, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ${
                    phase.color === 'blue' ? 'bg-blue-gradient' :
                    phase.color === 'yellow' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                    phase.color === 'green' ? 'bg-gradient-to-r from-green-400 to-green-600' :
                    'bg-gradient-to-r from-purple-400 to-purple-600'
                  }`}>
                    {phase.phase}
                  </div>
                  <div className="flex-1 card-luxury p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h3 className="text-2xl font-display font-bold text-luxury-800">{phase.title}</h3>
                      <span className="text-lg font-semibold text-gold-600">{phase.period}</span>
                    </div>
                    <p className="text-luxury-600 mb-4 leading-relaxed">{phase.desc}</p>
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                      phase.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                      phase.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' :
                      phase.color === 'green' ? 'bg-green-100 text-green-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {phase.target}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* 푸터 */}
      <footer className="bg-luxury-gradient text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-display font-bold mb-4">
            CONFLUENCE BULLION
          </h3>
          <p className="text-luxury-200 mb-6">
            금융의 미래를 함께 만들어갑니다
          </p>
          <div className="flex justify-center space-x-4">
            <button className="btn-primary">
              지금 시작하기
            </button>
            <button className="bg-white/20 text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/30 transition-all duration-300">
              문의하기
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PresentationPage; 