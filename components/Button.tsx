import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  animated?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  animated = true,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm group overflow-hidden tracking-wide";
  
  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  // The "BAM Reveal" Mask Animation Logic
  const maskKeyframes = `
    @keyframes mask-ani-enter {
      from { -webkit-mask-position: 0 0; mask-position: 0 0; }
      to { -webkit-mask-position: 100% 0; mask-position: 100% 0; }
    }
    @keyframes mask-ani-exit {
      from { -webkit-mask-position: 100% 0; mask-position: 100% 0; }
      to { -webkit-mask-position: 0 0; mask-position: 0 0; }
    }
    .mask-btn-layer {
      -webkit-mask-image: url('https://raw.githubusercontent.com/pizza3/asset/master/natureSmaller.png');
      mask-image: url('https://raw.githubusercontent.com/pizza3/asset/master/natureSmaller.png');
      -webkit-mask-size: 7100% 100%;
      mask-size: 7100% 100%;
      animation: mask-ani-exit 0.7s steps(70) forwards;
      pointer-events: none;
    }
    .group:hover .mask-btn-layer {
      animation: mask-ani-enter 0.7s steps(70) forwards;
    }
  `;

  if (variant === 'primary' && animated) {
    return (
      <>
        <style>{maskKeyframes}</style>
        <button 
          className={`${baseStyles} ${sizes[size]} ${widthStyle} bg-[#265A4A] text-white border border-[#265A4A] shadow-md hover:shadow-xl ${className}`}
          {...props}
        >
          {/* BOTTOM LAYER: Visible when hovered (Target State) */}
          <span className="relative z-10 flex items-center justify-center gap-2">
            {children}
          </span>

          {/* TOP LAYER: Initial state, animated away via mask on hover */}
          <span 
              className="mask-btn-layer absolute inset-0 z-20 flex items-center justify-center gap-2 bg-white text-[#265A4A] w-[101%]" 
          >
              {children}
          </span>
        </button>
      </>
    );
  }

  // Fallback for standard non-animated variants
  const variants = {
    primary: "bg-[#265A4A] text-white hover:bg-[#1e483b] focus:ring-[#265A4A]",
    secondary: "bg-[#5E7A86] text-white hover:bg-[#4a616b] focus:ring-[#5E7A86]",
    outline: "bg-transparent border-2 border-[#265A4A] text-[#265A4A] hover:bg-[#265A4A] hover:text-white focus:ring-[#265A4A]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};