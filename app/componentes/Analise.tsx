// app/componentes/Analise.tsx
export default function Analise() {
  return (
    <div style={{
      marginTop: '50px',
      maxWidth: '590px',
      marginLeft: '480px',
      marginRight: 'auto',
    }}>
      {/* Título fora do card */}
      <h2 style={{
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: '#fff', // Cor do título
        marginBottom: '20px', // Espaçamento abaixo do título
      }}>
        Análise
      </h2>
      
      {/* Card */}
      <div style={{
        backgroundColor: '#000000',
        borderRadius: '18px',
        padding: '195px',
        color: '#000000',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
      }}>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.6',
          color: '#dfe6e9'
        }}>
          {/* Seu conteúdo aqui */}
        </p>
      </div>
    </div>
  );
}
