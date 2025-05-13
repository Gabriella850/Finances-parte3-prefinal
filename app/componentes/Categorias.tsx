export default function Categorias() {
  return (
    <div style={{ marginTop: '11px' }}>
      <h3 style={{
        fontSize: '0rem',  // Diminui o tamanho da fonte do título
        color: '#b2bec3',
        marginBottom: '15px'
      }}></h3>

      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',  // Diminui a largura mínima dos cards
        gap: '2px'  // Diminui o espaço entre os cards
      }}>
        {/* Item 1 */}
        <div key="item-1" style={{ 
          backgroundColor: '#2d3436',
          borderRadius: '8px',
          padding: '0.2px'  // Diminui o padding do card
        }}>
          <p style={{ 
            color: '#fff', 
            fontWeight: 'bold',
            marginBottom: '1px',
            fontSize: '0.8rem'  // Diminui o tamanho da fonte dentro do card
          }}>Alimentação</p>
          <p style={{ color: '#b2bec3', fontSize: '0.9rem' }}>10</p>  {/* Diminui o tamanho da fonte */}
          <p style={{ color: '#e74c3c', fontSize: '0.9rem' }}>R$ 1508,15</p>  {/* Diminui o tamanho da fonte */}
        </div>

        {/* Item 2 */}
        <div key="item-2" style={{ 
          backgroundColor: '#2d3436',
          borderRadius: '8px',
          padding: '0.2px'  // Diminui o padding do card
        }}>
          <p style={{ 
            color: '#fff', 
            fontWeight: 'bold',
            marginBottom: '1px',
            fontSize: '0.8rem'  // Diminui o tamanho da fonte dentro do card
          }}>Mercado</p>
          <p style={{ color: '#b2bec3', fontSize: '0.9rem' }}>8</p>  {/* Diminui o tamanho da fonte */}
          <p style={{ color: '#e74c3c', fontSize: '0.9rem' }}>R$ 508,80</p>  {/* Diminui o tamanho da fonte */}
        </div>

        {/* Itens 3-5 (repetidos conforme imagem) */}
        {[3, 4, 5].map((item, index) => (
          <div key={`item-${index + 3}`} style={{ 
            backgroundColor: '#2d3436',
            borderRadius: '8px',
            padding: '0.2px'  // Diminui o padding do card
          }}>
            <p style={{ 
              color: '#fff', 
              fontWeight: 'bold',
              marginBottom: '1px',
              fontSize: '0.8rem'  // Diminui o tamanho da fonte dentro do card
            }}>Alimentação</p>
            <p style={{ color: '#b2bec3', fontSize: '0.9rem' }}>10</p>  {/* Diminui o tamanho da fonte */}
            <p style={{ color: '#e74c3c', fontSize: '0.9rem' }}>R$ 1508,15</p>  {/* Diminui o tamanho da fonte */}
          </div>
        ))}
      </div>
    </div>
  );
}
