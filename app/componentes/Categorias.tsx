export default function Categorias() {
  const categorias = [
    { nome: 'Alimentação', numero: 10, valor: 'R$ 1508,15', icone: '/hamburger.svg' },
    { nome: 'Mercado', numero: 8, valor: 'R$ 508,80', icone: '/carro.svg' },
    { nome: 'Transporte', numero: 5, valor: 'R$ 800,00', icone: '/carro.svg' },
    { nome: 'Lazer', numero: 6, valor: 'R$ 1200,00', icone: '/coqueiro.svg' },
    { nome: 'Saúde', numero: 4, valor: 'R$ 950,00', icone: '/comprimido.svg' },
    { nome: 'Educação', numero: 7, valor: 'R$ 1100,00', icone: '/educacao.svg' },
  ];

  return (
    <div style={{ marginTop: '11px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 180px)',
          gap: '6px',
          justifyContent: 'start',
        }}
      >
        {categorias.map((cat, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#2d3436',
              borderRadius: '8px',
              padding: '5px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              height: '50px',
              boxSizing: 'border-box',
              width: '180px',
            }}
          >
            <img
              src={cat.icone}
              alt={`${cat.nome} ícone`}
              style={{ width: 18, height: 18, objectFit: 'contain' }}
            />
            <div>
              <p
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  marginBottom: '1px',
                  fontSize: '0.8rem',
                  lineHeight: 1.1,
                }}
              >
                {cat.nome}
              </p>
              <p style={{ color: '#b2bec3', fontSize: '0.7rem', margin: 0 }}>{cat.numero}</p>
              <p style={{ color: '#e74c3c', fontSize: '0.7rem', margin: 0 }}>{cat.valor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
