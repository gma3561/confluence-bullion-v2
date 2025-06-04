import React from 'react';

const SimpleTest = () => {
  return (
    <div style={{padding: '20px', fontFamily: 'Arial, sans-serif'}}>
      <h1 style={{color: '#d97706', fontSize: '48px', textAlign: 'center'}}>
        CONFLUENCE BULLION
      </h1>
      <h2 style={{color: '#1e293b', textAlign: 'center', marginBottom: '40px'}}>
        컨플루언스 불리온 사업 개요
      </h2>
      
      <div style={{maxWidth: '800px', margin: '0 auto', lineHeight: '1.6'}}>
        <p style={{fontSize: '18px', color: '#475569'}}>
          개인이 할 수 없는 금 정식 수입, 우리가 함께 모여 가능하게 합니다
        </p>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '40px'}}>
          <div style={{background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0'}}>
            <h3 style={{color: '#1e293b', marginBottom: '10px'}}>🏛️ 사업 개요</h3>
            <p style={{color: '#64748b'}}>여러 흐름이 하나로 모이듯, 개인들의 구매력을 하나로 모아 금 정식 수입을 실현하는 혁신적인 플랫폼</p>
          </div>
          
          <div style={{background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0'}}>
            <h3 style={{color: '#1e293b', marginBottom: '10px'}}>💼 비즈니스 모델</h3>
            <p style={{color: '#64748b'}}>공동구매를 통한 대량 수입으로 관세 절약 및 투명한 가격 구조 제공</p>
          </div>
          
          <div style={{background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0'}}>
            <h3 style={{color: '#1e293b', marginBottom: '10px'}}>💰 가격 구조</h3>
            <p style={{color: '#64748b'}}>국제 금시세 + 최소 마진으로 투명하고 합리적인 가격 제공</p>
          </div>
          
          <div style={{background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0'}}>
            <h3 style={{color: '#1e293b', marginBottom: '10px'}}>🥇 상품 구성</h3>
            <p style={{color: '#64748b'}}>다양한 크기의 금괴와 NFT 증권화 서비스</p>
          </div>
        </div>
        
        <div style={{textAlign: 'center', marginTop: '40px'}}>
          <button style={{
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginRight: '10px'
          }}>
            투자 시작하기
          </button>
          <button style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            자세히 알아보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleTest; 