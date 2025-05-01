import React from 'react';

interface Props {
  currentPage: number;
  onPageChange: (p: number) => void;
}

export default function Pagination({ currentPage, onPageChange }: Props) {
  const pages = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <nav>
      {pages.map(p => (
        <button
          key={p}
          disabled={p === currentPage}
          onClick={() => onPageChange(p)}
          style={{ margin: '0 4px' }}
        >
          {p}
        </button>
      ))}
    </nav>
  );
}
