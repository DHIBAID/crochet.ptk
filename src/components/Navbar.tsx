import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div>
      <Image src="/logo.png" alt="logo" width={40} height={40} />
      </div>
      <div>
      <a href="/" style={{ margin: '0 1rem' }}>Home</a>
      <a href="/order" style={{ margin: '0 1rem' }}>Order</a>
      <a href="/contact" style={{ margin: '0 1rem' }}>Contact</a>
      </div>
    </nav>
);
};

export default Navbar;