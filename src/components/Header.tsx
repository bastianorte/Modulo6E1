import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode; // children puede ser cualquier cosa: texto, componentes, listas, etc.
}

const Header: React.FC<ContainerProps> = ({ children }) => {
  return (
<div className="header-style">
{children}
</div>
  );
};

export default Header;