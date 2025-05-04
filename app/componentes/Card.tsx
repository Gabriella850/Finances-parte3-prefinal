import React from "react";

interface CardProps {
  title: string;
  amount: string;
  color?: "green" | "red";
  showIcon?: boolean;
  iconType?: 'default' | 'baixo';
}

const Card: React.FC<CardProps> = ({ title, amount, color, showIcon = false, iconType = 'default' }) => {
  const amountColor = color === "green" ? "#2ecc71" : color === "red" ? "#e74c3c" : "#ffffff";

  // Configurações de ícone personalizadas
  const iconConfig = {
    default: {
      src: "/ícone.png",
      size: { width: '60px', height: '60px' }, // Ícone padrão maior
      position: { top: '12px', right: '12px' }
    },
    baixo: {
      src: "/iconebaixo.png",
      size: { width: '38px', height: '38px' }, // Ícone de saída normal
      position: { top: '15px', right: '15px' }
    }
  };

  const currentIcon = iconConfig[iconType];

  return (
    <div style={{
      backgroundColor: '#111',
      color: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      position: 'relative',
      minHeight: '140px' // Altura mínima para manter consistência
    }}>
      {showIcon && (
        <img
          src={currentIcon.src}
          alt="Ícone"
          style={{
            position: 'absolute',
            ...currentIcon.position,
            ...currentIcon.size,
            filter: 'brightness(0) invert(1)',
            objectFit: 'contain',
            transition: 'all 0.3s ease'
          }}
        />
      )}
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: 'bold',
        marginRight: showIcon ? '40px' : '0' // Espaço para ícones grandes
      }}>
        {title}
      </h2>
      <p style={{ 
        fontSize: '1.25rem', 
        marginTop: '10px', 
        color: amountColor,
        fontWeight: 'bold'
      }}>
        {amount}
      </p>
    </div>
  );
};

export default Card;