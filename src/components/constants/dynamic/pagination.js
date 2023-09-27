// components/Pagination.js
import Link from 'next/link';

function Pagination({ currentPage, totalPages }) {
  let pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className='pagination items-center'>
        <div>
      {pages.map((page) => (
        <Link key={page} href={`/homestays?page=${page}`} className={`${['pagination-item']} ${currentPage === page ? 'active' : ''}`}>
          {page}
        </Link>
      ))}
      </div>
    </div>
  );
}

export default Pagination;
