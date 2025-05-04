// app/componentes/Header.tsx
import Image from "next/image";

export default function Header() {
  return (
    <header style={{ backgroundColor: '#2d3436', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: 'white', fontSize: '2.5rem' }}>Finance Tracker</h1>
      <Image
  src="/porquinhonovo.png"
  alt="Cofrinho"
  width={50}
  height={50}
  style={{ marginTop: '30px', 
    marginLeft:'230px'
  }}
/>

    </header>
  );
}