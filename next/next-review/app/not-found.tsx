import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '4rem', color: '#f00' }}>404</h1>
      <p style={{ fontSize: '1.2rem' }}>页面不存在</p>
      <Link 
        href="/" 
        style={{ 
          color: '#00f', 
          textDecoration: 'underline',
          display: 'inline-block',
          marginTop: '20px'
        }}
      >
        回到首页
      </Link>
    </div>
  );
}
