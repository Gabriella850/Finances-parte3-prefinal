import Card from './componentes/Card';
import Header from './componentes/Header';
import Analise from './componentes/Analise';
import Categorias from './componentes/Categorias';

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

      {/* Seção de Análise e Categorias lado a lado */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'flex-start',
        marginTop: '30px'
      }}>
        {/* Seção de Análise */}
        <div style={{ flex: '1 1 0%', maxWidth: '60%' }}>
          <Analise />
        </div>

        {/* Seção de Categorias */}
        <div style={{ 
          width: '300px',
          marginLeft: '-25px',
           marginTop: '58px' // <<< ADICIONE ESTA LINHA
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: '10px'
          }}>
            Categorias
          </h2>
          <div style={{
            backgroundColor: '#111',
            borderRadius: '12px',
            padding: '25px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
          }}>
            <Categorias />
          </div>
        </div>
      </div>

      {/* Seção de Transações */}
      <div style={{ marginTop: '30px', marginBottom: '20px', textAlign: 'center' }}>
        <h2 style={{
          fontSize: '1.8rem',  // Tamanho de fonte consistente com outros títulos
          fontWeight: 'bold',  // Mantém o peso da fonte consistente
          color: '#fff',  // Cor branca
          marginBottom: '20px',  // Espaçamento abaixo do título
        }}>
          Transações
        </h2>

        {/* Transações Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginBottom: '10px',
          fontWeight: 'bold', 
          color: 'white',
          textTransform: 'uppercase', 
        }}>
          <div style={{ flex: 1 }}>Descrição</div>
          <div style={{ flex: 1 }}>Tipo</div>
          <div style={{ flex: 1 }}>Valor</div>
          <div style={{ flex: 1 }}>Banco</div>
          <div style={{ flex: 1 }}>Data</div>
          <div style={{ flex: 1 }}>Parcelas</div>
        </div>

        {/* Transações Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#444', padding: '10px', borderRadius: '8px' }}>
            <div style={{ flex: 1 }}>Supermercado Big Master</div>
            <div style={{ flex: 1 }}>Crédito</div>
            <div style={{ flex: 1 }}>R$896,00</div>
            <div style={{ flex: 1 }}>Nubank</div>
            <div style={{ flex: 1 }}>21/03/2024</div>
            <div style={{ flex: 1 }}>2/2</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#444', padding: '10px', borderRadius: '8px' }}>
            <div style={{ flex: 1 }}>Supermercado Big Master</div>
            <div style={{ flex: 1 }}>Crédito</div>
            <div style={{ flex: 1 }}>R$896,00</div>
            <div style={{ flex: 1 }}>Nubank</div>
            <div style={{ flex: 1 }}>21/03/2024</div>
            <div style={{ flex: 1 }}>1/2</div>
          </div>
        </div>
      </div>
    </div>
  );
}
