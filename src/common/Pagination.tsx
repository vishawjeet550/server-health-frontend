import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-end items-end mt-4 pl-2 pb-2">
      <button
        className={`p-2 rounded-full ${
          currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-600 cursor-pointer'
        }`}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <FiChevronLeft className="w-5 h-5 text-white" />
      </button>
      <span className="px-4 text-gray-700 font-bold">{currentPage}</span>
      <button
        className={`p-2 rounded-full ${
          currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-600 cursor-pointer'
        }`}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <FiChevronRight className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default Pagination;
