import React, { useState } from 'react';

const SimpleTest = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const slideStyle = {
    minHeight: '100vh',
    background: 'white',
    padding: '60px 40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif'
  };

  const titleStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '60px',
    color: '#1e293b',
    borderBottom: '4px solid #fbbf24',
    paddingBottom: '20px'
  };

  const subtitleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: '40px',
    textAlign: 'center'
  };

  const cardStyle = {
    background: '#f8fafc',
    padding: '30px',
    borderRadius: '12px',
    border: '2px solid #e2e8f0',
    marginBottom: '30px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const tabStyle = (isActive) => ({
    padding: '15px 30px',
    margin: '0 5px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    background: isActive ? '#fbbf24' : '#e2e8f0',
    color: isActive ? 'white' : '#64748b',
    boxShadow: isActive ? '0 4px 12px rgba(251, 191, 36, 0.3)' : 'none'
  });

  return (
    <div style={{background: '#f1f5f9', minHeight: '100vh'}}>
      {/* Navigation */}
      <div style={{
        background: 'white',
        padding: '20px',
        borderBottom: '2px solid #e2e8f0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px'}}>
          {[
            { id: 'overview', label: '사업 개요' },
            { id: 'business', label: '비즈니스 모델' },
            { id: 'revenue', label: '수익 구조' },
            { id: 'nft', label: 'NFT 담보대출' },
            { id: 'market', label: '시장 분석' },
            { id: 'roadmap', label: '로드맵' }
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
      <div style={slideStyle}>
        
        {/* 사업 개요 */}
        {activeTab === 'overview' && (
          <div>
            <h1 style={titleStyle}>CONFLUENCE BULLION</h1>
            <h2 style={subtitleStyle}>금 수입 대행 및 NFT 담보대출 플랫폼</h2>
            
            <div style={{...cardStyle, textAlign: 'center', background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)'}}>
              <h3 style={{fontSize: '28px', color: '#92400e', marginBottom: '20px'}}>핵심 가치 제안</h3>
              <p style={{fontSize: '20px', color: '#a16207', lineHeight: '1.6'}}>
                개인이 할 수 없는 금 정식 수입을 공동구매로 실현하고,<br/>
                수입된 금을 NFT로 증권화하여 담보대출 서비스 제공
              </p>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px'}}>
              <div style={cardStyle}>
                <h3 style={{fontSize: '24px', color: '#1e293b', marginBottom: '15px', textAlign: 'center'}}>
                  🏭 금 수입 대행
                </h3>
                <ul style={{fontSize: '18px', lineHeight: '1.8', color: '#374151'}}>
                  <li>• 개인 불가능한 대량 금 수입 대행</li>
                  <li>• 13% 관부가세 절약 효과</li>
                  <li>• 99.99% 순도 보장</li>
                  <li>• 투명한 가격 구조</li>
                </ul>
              </div>

              <div style={cardStyle}>
                <h3 style={{fontSize: '24px', color: '#1e293b', marginBottom: '15px', textAlign: 'center'}}>
                  🪙 NFT 증권화
                </h3>
                <ul style={{fontSize: '18px', lineHeight: '1.8', color: '#374151'}}>
                  <li>• 실물 금 기반 NFT 발행</li>
                  <li>• 분할 소유 및 거래 가능</li>
                  <li>• 블록체인 기반 투명성</li>
                  <li>• 즉시 담보대출 가능</li>
                </ul>
              </div>

              <div style={cardStyle}>
                <h3 style={{fontSize: '24px', color: '#1e293b', marginBottom: '15px', textAlign: 'center'}}>
                  🏦 담보대출 서비스
                </h3>
                <ul style={{fontSize: '18px', lineHeight: '1.8', color: '#374151'}}>
                  <li>• NFT 담보 즉시 대출</li>
                  <li>• 5% 저금리 제공</li>
                  <li>• LTV 70% 까지</li>
                  <li>• 유연한 상환 조건</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 비즈니스 모델 */}
        {activeTab === 'business' && (
          <div>
            <h1 style={titleStyle}>비즈니스 모델</h1>
            
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px'}}>
              <div style={{...cardStyle, background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)'}}>
                <h3 style={{fontSize: '28px', color: '#1e40af', marginBottom: '25px', textAlign: 'center'}}>
                  📊 고객 플로우
                </h3>
                <div style={{fontSize: '18px', lineHeight: '2', color: '#1e40af'}}>
                  <div style={{marginBottom: '15px', padding: '15px', background: 'white', borderRadius: '8px'}}>
                    <strong>1단계:</strong> 금 공동구매 참여
                  </div>
                  <div style={{marginBottom: '15px', padding: '15px', background: 'white', borderRadius: '8px'}}>
                    <strong>2단계:</strong> 실물 금 NFT 수령
                  </div>
                  <div style={{marginBottom: '15px', padding: '15px', background: 'white', borderRadius: '8px'}}>
                    <strong>3단계:</strong> NFT 담보대출 신청
                  </div>
                  <div style={{padding: '15px', background: 'white', borderRadius: '8px'}}>
                    <strong>4단계:</strong> 즉시 현금 수령
                  </div>
                </div>
              </div>

              <div style={{...cardStyle, background: 'linear-gradient(135deg, #fecaca 0%, #fca5a5 100%)'}}>
                <h3 style={{fontSize: '28px', color: '#dc2626', marginBottom: '25px', textAlign: 'center'}}>
                  💰 고객 혜택
                </h3>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '48px', fontWeight: 'bold', color: '#dc2626', marginBottom: '10px'}}>13%</div>
                  <div style={{fontSize: '20px', color: '#374151', marginBottom: '10px'}}>관부가세 절약</div>
                  <div style={{fontSize: '16px', color: '#6b7280', marginBottom: '20px'}}>+ 5% 저금리 대출</div>
                  <div style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#dc2626',
                    background: 'white',
                    padding: '15px',
                    borderRadius: '10px'
                  }}>
                    총 18% 금융 혜택
                  </div>
                </div>
              </div>
            </div>

            <div style={{...cardStyle, background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)'}}>
              <h3 style={{fontSize: '28px', color: '#16a34a', marginBottom: '25px', textAlign: 'center'}}>
                🎯 핵심 경쟁력
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
                <div style={{textAlign: 'center', padding: '20px'}}>
                  <div style={{fontSize: '40px', marginBottom: '10px'}}>🏭</div>
                  <h4 style={{color: '#16a34a', marginBottom: '10px'}}>독점적 수입 채널</h4>
                  <p style={{color: '#166534', fontSize: '16px'}}>개인이 불가능한 대량 금 수입 독점 대행</p>
                </div>
                <div style={{textAlign: 'center', padding: '20px'}}>
                  <div style={{fontSize: '40px', marginBottom: '10px'}}>⚡</div>
                  <h4 style={{color: '#16a34a', marginBottom: '10px'}}>즉시 유동성</h4>
                  <p style={{color: '#166534', fontSize: '16px'}}>NFT 담보로 즉시 현금 확보 가능</p>
                </div>
                <div style={{textAlign: 'center', padding: '20px'}}>
                  <div style={{fontSize: '40px', marginBottom: '10px'}}>🛡️</div>
                  <h4 style={{color: '#16a34a', marginBottom: '10px'}}>안전한 투자</h4>
                  <p style={{color: '#166534', fontSize: '16px'}}>실물 금 기반 NFT로 안전성 보장</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 수익 구조 */}
        {activeTab === 'revenue' && (
          <div>
            <h1 style={titleStyle}>수익 구조</h1>
            
            <div style={{...cardStyle, background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', marginBottom: '40px'}}>
              <h3 style={{fontSize: '32px', color: '#92400e', marginBottom: '30px', textAlign: 'center'}}>
                주요 수익원: 관부가세 차익
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px'}}>
                <div style={{background: 'white', padding: '25px', borderRadius: '12px'}}>
                  <h4 style={{fontSize: '24px', color: '#92400e', marginBottom: '15px'}}>일반 소매 구매</h4>
                  <div style={{fontSize: '18px', lineHeight: '1.8', color: '#a16207'}}>
                    <div>• 국제 금시세: 87%</div>
                    <div>• 관부가세: 13%</div>
                    <div>• 소매 마진: 5-10%</div>
                    <div style={{borderTop: '2px solid #fbbf24', paddingTop: '10px', marginTop: '10px', fontWeight: 'bold'}}>
                      총 비용: 105-110%
                    </div>
                  </div>
                </div>
                <div style={{background: 'white', padding: '25px', borderRadius: '12px'}}>
                  <h4 style={{fontSize: '24px', color: '#92400e', marginBottom: '15px'}}>컨플루언스 불리온</h4>
                  <div style={{fontSize: '18px', lineHeight: '1.8', color: '#a16207'}}>
                    <div>• 국제 금시세: 87%</div>
                    <div>• 운송/보험: 1%</div>
                    <div>• 서비스 수수료: 2%</div>
                    <div style={{borderTop: '2px solid #fbbf24', paddingTop: '10px', marginTop: '10px', fontWeight: 'bold'}}>
                      총 비용: 90%
                    </div>
                  </div>
                </div>
              </div>
              <div style={{textAlign: 'center', marginTop: '30px'}}>
                <div style={{fontSize: '36px', fontWeight: 'bold', color: '#dc2626'}}>
                  고객 절약: 15-20% | 회사 수익: 13% 관부가세 차익
                </div>
              </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
              <div style={cardStyle}>
                <h3 style={{fontSize: '24px', color: '#1e293b', marginBottom: '20px', textAlign: 'center'}}>
                  💰 수익원 분석
                </h3>
                <div style={{fontSize: '18px', lineHeight: '2'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                    <span>관부가세 차익</span>
                    <strong style={{color: '#dc2626'}}>85%</strong>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                    <span>대출 이자 수익</span>
                    <strong style={{color: '#dc2626'}}>10%</strong>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                    <span>NFT 거래 수수료</span>
                    <strong style={{color: '#dc2626'}}>3%</strong>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                    <span>기타 서비스</span>
                    <strong style={{color: '#dc2626'}}>2%</strong>
                  </div>
                </div>
              </div>

              <div style={cardStyle}>
                <h3 style={{fontSize: '24px', color: '#1e293b', marginBottom: '20px', textAlign: 'center'}}>
                  📈 수익 시뮬레이션
                </h3>
                <div style={{fontSize: '16px', lineHeight: '1.8', color: '#374151'}}>
                  <div style={{marginBottom: '15px', padding: '15px', background: '#f0fdf4', borderRadius: '8px'}}>
                    <strong>월 거래량 10억원 기준</strong><br/>
                    관부가세 차익: 1.3억원<br/>
                    대출 이자: 1,500만원<br/>
                    <strong style={{color: '#16a34a'}}>월 총 수익: 1.45억원</strong>
                  </div>
                  <div style={{padding: '15px', background: '#fef3c7', borderRadius: '8px'}}>
                    <strong>연간 예상 수익</strong><br/>
                    <span style={{fontSize: '24px', fontWeight: 'bold', color: '#92400e'}}>17.4억원</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* NFT 담보대출 */}
        {activeTab === 'nft' && (
          <div>
            <h1 style={titleStyle}>NFT 담보대출 서비스</h1>
            
            <div style={{...cardStyle, background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)', marginBottom: '40px'}}>
              <h3 style={{fontSize: '32px', color: '#3730a3', marginBottom: '25px', textAlign: 'center'}}>
                핵심 서비스: 즉시 유동성 제공
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px'}}>
                <div style={{textAlign: 'center', padding: '20px', background: 'white', borderRadius: '12px'}}>
                  <div style={{fontSize: '48px', marginBottom: '15px'}}>⚡</div>
                  <h4 style={{color: '#3730a3', marginBottom: '10px'}}>즉시 대출</h4>
                  <p style={{color: '#4338ca'}}>NFT 담보 설정 후<br/>5분 내 현금 지급</p>
                </div>
                <div style={{textAlign: 'center', padding: '20px', background: 'white', borderRadius: '12px'}}>
                  <div style={{fontSize: '48px', marginBottom: '15px'}}>💎</div>
                  <h4 style={{color: '#3730a3', marginBottom: '10px'}}>실물 담보</h4>
                  <p style={{color: '#4338ca'}}>99.99% 순도 금<br/>실물 기반 안전성</p>
                </div>
                <div style={{textAlign: 'center', padding: '20px', background: 'white', borderRadius: '12px'}}>
                  <div style={{fontSize: '48px', marginBottom: '15px'}}>📊</div>
                  <h4 style={{color: '#3730a3', marginBottom: '10px'}}>투명한 평가</h4>
                  <p style={{color: '#4338ca'}}>실시간 금시세 연동<br/>공정한 담보 평가</p>
                </div>
              </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px'}}>
              <div style={cardStyle}>
                <h3 style={{fontSize: '24px', color: '#1e293b', marginBottom: '20px', textAlign: 'center'}}>
                  💳 대출 조건
                </h3>
                <div style={{fontSize: '18px', lineHeight: '2'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px', padding: '10px', background: '#f8fafc', borderRadius: '8px'}}>
                    <span>금리</span>
                    <strong style={{color: '#dc2626'}}>연 5%</strong>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px', padding: '10px', background: '#f8fafc', borderRadius: '8px'}}>
                    <span>LTV</span>
                    <strong style={{color: '#dc2626'}}>최대 70%</strong>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px', padding: '10px', background: '#f8fafc', borderRadius: '8px'}}>
                    <span>최소 대출</span>
                    <strong style={{color: '#dc2626'}}>100만원</strong>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px', padding: '10px', background: '#f8fafc', borderRadius: '8px'}}>
                    <span>대출 기간</span>
                    <strong style={{color: '#dc2626'}}>1-36개월</strong>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f8fafc', borderRadius: '8px'}}>
                    <span>상환 방식</span>
                    <strong style={{color: '#dc2626'}}>원리금균등</strong>
                  </div>
                </div>
              </div>

              <div style={cardStyle}>
                <h3 style={{fontSize: '24px', color: '#1e293b', marginBottom: '20px', textAlign: 'center'}}>
                  🔄 대출 프로세스
                </h3>
                <div style={{fontSize: '16px', lineHeight: '1.8'}}>
                  <div style={{marginBottom: '20px', padding: '15px', background: '#e0f2fe', borderRadius: '8px', borderLeft: '4px solid #0284c7'}}>
                    <strong style={{color: '#0284c7'}}>1단계: NFT 담보 설정</strong><br/>
                    <span style={{color: '#0369a1'}}>보유 금 NFT를 스마트 컨트랙트에 예치</span>
                  </div>
                  <div style={{marginBottom: '20px', padding: '15px', background: '#f0fdf4', borderRadius: '8px', borderLeft: '4px solid #16a34a'}}>
                    <strong style={{color: '#16a34a'}}>2단계: 자동 평가</strong><br/>
                    <span style={{color: '#15803d'}}>실시간 금시세 기반 담보가치 산정</span>
                  </div>
                  <div style={{marginBottom: '20px', padding: '15px', background: '#fef3c7', borderRadius: '8px', borderLeft: '4px solid #d97706'}}>
                    <strong style={{color: '#d97706'}}>3단계: 즉시 승인</strong><br/>
                    <span style={{color: '#b45309'}}>AI 기반 자동 심사 및 승인</span>
                  </div>
                  <div style={{padding: '15px', background: '#fce7f3', borderRadius: '8px', borderLeft: '4px solid #be185d'}}>
                    <strong style={{color: '#be185d'}}>4단계: 현금 지급</strong><br/>
                    <span style={{color: '#9d174d'}}>승인 후 5분 내 계좌 입금</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 시장 분석 */}
        {activeTab === 'market' && (
          <div>
            <h1 style={titleStyle}>시장 분석</h1>
            
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px'}}>
              <div style={{...cardStyle, background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)'}}>
                <h3 style={{fontSize: '28px', color: '#92400e', marginBottom: '25px', textAlign: 'center'}}>
                  📊 국내 금 시장 규모
                </h3>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '48px', fontWeight: 'bold', color: '#92400e', marginBottom: '10px'}}>12조원</div>
                  <div style={{fontSize: '18px', color: '#a16207', marginBottom: '20px'}}>연간 금 거래 규모</div>
                  <div style={{fontSize: '16px', color: '#a16207', lineHeight: '1.6'}}>
                    • 개인 투자자 비중: 65%<br/>
                    • 연평균 성장률: 8.5%<br/>
                    • 온라인 거래 증가율: 15%
                  </div>
                </div>
              </div>

              <div style={{...cardStyle, background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)'}}>
                <h3 style={{fontSize: '28px', color: '#1e40af', marginBottom: '25px', textAlign: 'center'}}>
                  🎯 타겟 시장
                </h3>
                <div style={{fontSize: '18px', lineHeight: '2', color: '#1e40af'}}>
                  <div style={{marginBottom: '15px', padding: '15px', background: 'white', borderRadius: '8px'}}>
                    <strong>1차 타겟:</strong> 금 투자자 (100만명)
                  </div>
                  <div style={{marginBottom: '15px', padding: '15px', background: 'white', borderRadius: '8px'}}>
                    <strong>2차 타겟:</strong> 대출 수요자 (500만명)
                  </div>
                  <div style={{padding: '15px', background: 'white', borderRadius: '8px'}}>
                    <strong>3차 타겟:</strong> NFT 투자자 (50만명)
                  </div>
                </div>
              </div>
            </div>

            <div style={{...cardStyle, background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)'}}>
              <h3 style={{fontSize: '28px', color: '#16a34a', marginBottom: '30px', textAlign: 'center'}}>
                💡 시장 기회
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px'}}>
                <div style={{background: 'white', padding: '25px', borderRadius: '12px'}}>
                  <h4 style={{color: '#16a34a', marginBottom: '15px', fontSize: '20px'}}>🏭 수입 독점 기회</h4>
                  <p style={{color: '#166534', fontSize: '16px', lineHeight: '1.6'}}>
                    개인이 불가능한 대량 금 수입을 독점적으로 대행할 수 있는 
                    유일한 플랫폼으로 시장 선점 가능
                  </p>
                </div>
                <div style={{background: 'white', padding: '25px', borderRadius: '12px'}}>
                  <h4 style={{color: '#16a34a', marginBottom: '15px', fontSize: '20px'}}>💰 관부가세 차익</h4>
                  <p style={{color: '#166534', fontSize: '16px', lineHeight: '1.6'}}>
                    13% 관부가세를 회피할 수 있는 합법적 구조로 
                    고객과 회사 모두에게 윈-윈 모델 구축
                  </p>
                </div>
                <div style={{background: 'white', padding: '25px', borderRadius: '12px'}}>
                  <h4 style={{color: '#16a34a', marginBottom: '15px', fontSize: '20px'}}>🚀 NFT 금융 혁신</h4>
                  <p style={{color: '#166534', fontSize: '16px', lineHeight: '1.6'}}>
                    실물 자산 기반 NFT 담보대출로 
                    새로운 금융 서비스 시장 창출
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 로드맵 */}
        {activeTab === 'roadmap' && (
          <div>
            <h1 style={titleStyle}>사업 로드맵</h1>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
              {[
                { 
                  phase: 'Q1 2024', 
                  title: '플랫폼 구축 및 라이선스 확보', 
                  items: [
                    '금 수입 대행 라이선스 취득',
                    '공동구매 플랫폼 개발',
                    '초기 고객 100명 확보',
                    '첫 1톤 금 수입 실행'
                  ],
                  color: '#3b82f6',
                  target: '목표: 10억원 거래'
                },
                { 
                  phase: 'Q2 2024', 
                  title: 'NFT 증권화 시스템 런칭', 
                  items: [
                    '블록체인 기반 NFT 발행 시스템',
                    '실물 금-NFT 연동 시스템',
                    'NFT 마켓플레이스 오픈',
                    '1,000개 NFT 발행'
                  ],
                  color: '#f59e0b',
                  target: '목표: 50억원 거래'
                },
                { 
                  phase: 'Q3 2024', 
                  title: 'NFT 담보대출 서비스 시작', 
                  items: [
                    '스마트 컨트랙트 기반 대출 시스템',
                    '자동 담보 평가 시스템',
                    '금융권 파트너십 구축',
                    '100억원 대출 실행'
                  ],
                  color: '#10b981',
                  target: '목표: 100억원 대출'
                },
                { 
                  phase: 'Q4 2024', 
                  title: '사업 확장 및 글로벌 진출', 
                  items: [
                    '다양한 귀금속 확장 (은, 백금)',
                    '해외 수입 채널 확보',
                    '아시아 3개국 서비스 확장',
                    'IPO 준비'
                  ],
                  color: '#8b5cf6',
                  target: '목표: 500억원 거래'
                }
              ].map((phase, index) => (
                <div key={index} style={{display: 'flex', alignItems: 'flex-start', gap: '30px'}}>
                  <div style={{
                    minWidth: '120px',
                    padding: '15px',
                    borderRadius: '12px',
                    background: phase.color,
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                    {phase.phase}
                  </div>
                  <div style={{...cardStyle, flex: 1}}>
                    <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#1e293b', marginBottom: '20px'}}>
                      {phase.title}
                    </h3>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginBottom: '20px'}}>
                      {phase.items.map((item, idx) => (
                        <div key={idx} style={{
                          padding: '12px',
                          background: '#f8fafc',
                          borderRadius: '8px',
                          borderLeft: `4px solid ${phase.color}`,
                          fontSize: '16px',
                          color: '#374151'
                        }}>
                          • {item}
                        </div>
                      ))}
                    </div>
                    <div style={{
                      display: 'inline-block',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      background: `${phase.color}20`,
                      color: phase.color,
                      fontSize: '16px',
                      fontWeight: 'bold'
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
    </div>
  );
};

export default SimpleTest; 