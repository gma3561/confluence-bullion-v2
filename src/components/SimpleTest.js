import React, { useState } from 'react';

const SimpleTest = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabStyle = (isActive) => ({
    padding: '12px 24px',
    margin: '0 4px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    background: isActive ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)' : '#f8fafc',
    color: isActive ? 'white' : '#64748b',
    boxShadow: isActive ? '0 4px 12px rgba(251, 191, 36, 0.3)' : 'none'
  });

  const cardStyle = {
    background: 'white',
    padding: '24px',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px'
  };

  return (
    <div style={{minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'}}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '56px',
          fontWeight: 'bold',
          margin: '0 0 16px 0',
          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          CONFLUENCE BULLION
        </h1>
        <p style={{fontSize: '20px', margin: '0 0 32px 0', opacity: 0.9}}>
          개인이 할 수 없는 금 정식 수입, 우리가 함께 모여 가능하게 합니다
        </p>
        <div>
          <button style={{
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
            color: 'white',
            padding: '14px 28px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginRight: '12px',
            boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)'
          }}>
            투자 시작하기
          </button>
          <button style={{
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            padding: '14px 28px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            자세히 알아보기
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div style={{
        background: 'white',
        padding: '0 20px',
        borderBottom: '1px solid #e2e8f0',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'center', padding: '16px 0'}}>
          {[
            { id: 'overview', label: '🏛️ 사업 개요' },
            { id: 'business', label: '💼 비즈니스 모델' },
            { id: 'pricing', label: '💰 가격 구조' },
            { id: 'products', label: '🥇 상품 구성' },
            { id: 'roadmap', label: '🚀 로드맵' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={tabStyle(activeTab === tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '40px 20px'}}>
        
        {/* 사업 개요 */}
        {activeTab === 'overview' && (
          <div>
            <h2 style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#1e293b'}}>
              컨플루언스 불리온 사업 개요
            </h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px'}}>
              <div style={cardStyle}>
                <div style={{fontSize: '48px', textAlign: 'center', marginBottom: '16px'}}>💎</div>
                <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '12px', color: '#1e293b'}}>프리미엄 서비스</h3>
                <p style={{color: '#64748b', lineHeight: '1.6'}}>
                  한국 소비자들이 기존에 지불해왔던 높은 금 소매 프리미엄을 제거하고, 
                  국제 금 시세에 근접한 가격으로 투명하게 고품질 금을 구매할 수 있습니다.
                </p>
              </div>
              
              <div style={cardStyle}>
                <div style={{fontSize: '48px', textAlign: 'center', marginBottom: '16px'}}>🤝</div>
                <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '12px', color: '#1e293b'}}>공동구매 혁신</h3>
                <p style={{color: '#64748b', lineHeight: '1.6'}}>
                  개인이 불가능한 대량 수입을 공동구매를 통해 실현하여, 
                  모든 참여자가 도매가격의 혜택을 누릴 수 있는 혁신적인 시스템입니다.
                </p>
              </div>
            </div>

            <div style={{...cardStyle, background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)'}}>
              <h3 style={{fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '24px', color: '#92400e'}}>
                핵심 가치 제안
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
                {[
                  { icon: '🏭', title: '개인이 불가능한 직수입', desc: '복잡한 국제 금 수입 과정을 전문적으로 대행' },
                  { icon: '📊', title: '투명한 가격 구조', desc: '모든 비용 요소와 마진을 공개하는 완전 투명 정책' },
                  { icon: '💪', title: '공동구매의 힘', desc: '소비자 집단의 구매력을 하나로 모아 가격 경쟁력 확보' },
                  { icon: '🛡️', title: '신뢰할 수 있는 품질', desc: '엄격한 인증 과정을 통한 품질 보증' }
                ].map((item, index) => (
                  <div key={index} style={{textAlign: 'center'}}>
                    <div style={{fontSize: '32px', marginBottom: '8px'}}>{item.icon}</div>
                    <h4 style={{fontWeight: 'bold', marginBottom: '8px', color: '#92400e'}}>{item.title}</h4>
                    <p style={{fontSize: '14px', color: '#a16207'}}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 비즈니스 모델 */}
        {activeTab === 'business' && (
          <div>
            <h2 style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#1e293b'}}>
              비즈니스 모델
            </h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px'}}>
              <div style={{...cardStyle, background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)'}}>
                <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#1e40af'}}>
                  💰 주요 수익원
                </h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  {[
                    { label: '수입 대행 수수료', value: '2%' },
                    { label: 'NFT 거래 수수료', value: '1%' },
                    { label: '대출 이자 마진', value: '2%' },
                    { label: '실물 교환 수수료', value: '0.5%' }
                  ].map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '12px',
                      background: 'white',
                      borderRadius: '8px',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                    }}>
                      <span style={{color: '#374151'}}>{item.label}</span>
                      <span style={{fontWeight: 'bold', color: '#1e40af'}}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{...cardStyle, background: 'linear-gradient(135deg, #fecaca 0%, #fca5a5 100%)'}}>
                <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#dc2626'}}>
                  🎯 고객 절약 효과
                </h3>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '64px', fontWeight: 'bold', color: '#dc2626', marginBottom: '8px'}}>13%</div>
                  <div style={{fontSize: '20px', color: '#374151', marginBottom: '8px'}}>관부가세 절약</div>
                  <div style={{color: '#6b7280', marginBottom: '16px'}}>1억원 투자 시</div>
                  <div style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#dc2626',
                    background: 'white',
                    padding: '16px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}>
                    1,300만원 절약
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 가격 구조 */}
        {activeTab === 'pricing' && (
          <div>
            <h2 style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#1e293b'}}>
              투명한 가격 구조
            </h2>
            
            <div style={cardStyle}>
              <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#1e293b'}}>
                비용 구조 상세 (1억원 투자 기준)
              </h3>
              <div style={{overflowX: 'auto'}}>
                <table style={{width: '100%', borderCollapse: 'collapse'}}>
                  <thead>
                    <tr style={{background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', color: 'white'}}>
                      <th style={{padding: '16px', textAlign: 'left', borderRadius: '8px 0 0 0'}}>항목</th>
                      <th style={{padding: '16px', textAlign: 'center'}}>비율</th>
                      <th style={{padding: '16px', textAlign: 'right', borderRadius: '0 8px 0 0'}}>금액</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { item: '국제 금 시세', ratio: '87%', amount: '8,700만원', bg: 'white' },
                      { item: '운송/보험', ratio: '1%', amount: '100만원', bg: '#f8fafc' },
                      { item: '수입 대행 수수료', ratio: '2%', amount: '200만원', bg: 'white' },
                      { item: '총 비용', ratio: '90%', amount: '9,000만원', bg: '#dbeafe', bold: true },
                      { item: '절약 금액', ratio: '10%', amount: '1,000만원', bg: '#dcfce7', bold: true, color: '#16a34a' }
                    ].map((row, index) => (
                      <tr key={index} style={{background: row.bg}}>
                        <td style={{padding: '12px', fontWeight: row.bold ? 'bold' : 'normal', color: row.color || '#374151'}}>{row.item}</td>
                        <td style={{padding: '12px', textAlign: 'center', fontWeight: row.bold ? 'bold' : 'normal', color: row.color || '#374151'}}>{row.ratio}</td>
                        <td style={{padding: '12px', textAlign: 'right', fontWeight: row.bold ? 'bold' : 'normal', color: row.color || '#374151'}}>{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 상품 구성 */}
        {activeTab === 'products' && (
          <div>
            <h2 style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#1e293b'}}>
              상품 구성
            </h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px'}}>
              {[
                { 
                  icon: '🥇', 
                  title: '금 수입 대행', 
                  features: ['1kg 이상 대량 수입', '99.99% 순도 보장', '안전한 보관 서비스', '품질 인증서 제공']
                },
                { 
                  icon: '🪙', 
                  title: 'NFT 증권화', 
                  features: ['실물 금 기반 NFT', '분할 소유 가능', '투명한 소유권', '즉시 거래 가능']
                },
                { 
                  icon: '🏦', 
                  title: '담보대출', 
                  features: ['5% 저금리', 'LTV 70% 까지', '즉시 대출 실행', '유연한 상환 조건']
                }
              ].map((service, index) => (
                <div key={index} style={{...cardStyle, textAlign: 'center', transition: 'transform 0.3s ease'}}>
                  <div style={{fontSize: '48px', marginBottom: '16px'}}>{service.icon}</div>
                  <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1e293b'}}>{service.title}</h3>
                  <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{
                        color: '#64748b',
                        marginBottom: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span style={{
                          width: '6px',
                          height: '6px',
                          background: '#fbbf24',
                          borderRadius: '50%',
                          marginRight: '8px'
                        }}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 로드맵 */}
        {activeTab === 'roadmap' && (
          <div>
            <h2 style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#1e293b'}}>
              개발 로드맵
            </h2>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
              {[
                { 
                  phase: '1', 
                  title: 'Phase 1: 플랫폼 구축', 
                  period: 'Q1 2024', 
                  desc: '기본 플랫폼 개발, 금 수입 대행 서비스 시작, 초기 고객 확보',
                  target: '목표: 100명 고객, 1톤 금 수입',
                  color: '#3b82f6'
                },
                { 
                  phase: '2', 
                  title: 'Phase 2: NFT 증권화', 
                  period: 'Q2 2024', 
                  desc: '실물 금 NFT 발행, 마켓플레이스 오픈, 분할 소유 서비스',
                  target: '목표: 1,000개 NFT 발행, 활성 거래',
                  color: '#f59e0b'
                },
                { 
                  phase: '3', 
                  title: 'Phase 3: 담보대출 서비스', 
                  period: 'Q3 2024', 
                  desc: 'NFT 담보 대출 서비스 런칭, 금융 파트너십 구축',
                  target: '목표: 50억원 대출 실행',
                  color: '#10b981'
                },
                { 
                  phase: '4', 
                  title: 'Phase 4: 글로벌 확장', 
                  period: 'Q4 2024', 
                  desc: '해외 시장 진출, 다국가 서비스 확장, 글로벌 파트너십',
                  target: '목표: 아시아 3개국 서비스 확장',
                  color: '#8b5cf6'
                }
              ].map((phase, index) => (
                <div key={index} style={{display: 'flex', alignItems: 'flex-start', gap: '20px'}}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: phase.color,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>
                    {phase.phase}
                  </div>
                  <div style={{...cardStyle, flex: 1}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px'}}>
                      <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#1e293b', margin: 0}}>{phase.title}</h3>
                      <span style={{fontSize: '16px', fontWeight: 'bold', color: phase.color}}>{phase.period}</span>
                    </div>
                    <p style={{color: '#64748b', marginBottom: '12px', lineHeight: '1.6'}}>{phase.desc}</p>
                    <div style={{
                      display: 'inline-block',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      background: `${phase.color}20`,
                      color: phase.color,
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      {phase.target}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <h3 style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '16px'}}>
          CONFLUENCE BULLION
        </h3>
        <p style={{marginBottom: '24px', opacity: 0.8}}>
          금융의 미래를 함께 만들어갑니다
        </p>
        <div>
          <button style={{
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginRight: '12px'
          }}>
            지금 시작하기
          </button>
          <button style={{
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            padding: '12px 24px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            문의하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleTest; 