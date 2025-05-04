import Card from './componentes/Card';
import Header from './componentes/Header';

export default function Home() {
  return (
    <div style={{ 
      backgroundColor: '#2d3436', 
      color: 'white', 
      minHeight: '100vh', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Header />

      {/* Ícone de adicionar flutuante */}
      <div style={{ position: 'relative', height: '0' }}>
        <img
          src="/mais.png"
          alt="Adicionar"
          style={{
            position: 'absolute',
            right: '230px',
            top: '-60px',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            zIndex: 100
          }}
        />
      </div>

      {/* Grade de Cards */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '30px',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px',
          width: '100%',
          maxWidth: '900px'
        }}>
          <Card 
            title="Entrada" 
            amount="+R$7.840,56" 
            color="green" 
            showIcon={true}
            iconType="default"
          />
          
          <Card 
            title="Saída" 
            amount="-R$1.580,45" 
            color="red"
            showIcon={true}
            iconType="baixo"
          />
          
          <Card 
            title="Balanço" 
            amount="R$6.260,11" 
            color="green"
            showIcon={true}
            iconType="default"
          />
        </div>
      </div>
    </div>
  );
}