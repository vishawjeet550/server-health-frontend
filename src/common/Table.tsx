import React, { useState } from 'react';
import Pagination from './Pagination';

interface TableProps {
    data: Record<string, any>[];
    headers: Record<string, any>[];
    className?: string;
    tableColumnWrapper: Function;
    showPagination?: boolean;
    itemsPerPage?: number;
    children?: React.ReactElement;
}

const Table: React.FC<TableProps> = ({
    data,
    headers,
    className,
    tableColumnWrapper,
    showPagination = false,
    itemsPerPage = 10,
    children
}: TableProps) => {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className={`relative overflow-x-scroll bg-white sm:rounded-lg ${className}`}>
            <table className="w-full text-sm text-left bg-white text-gray-500">
                {children}
                <thead className="text-xs text-gray-700 uppercase bg-gray-700 text-white">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="px-6 py-3">
                                {header.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {currentItems.map((row, rowIndex) => (
                        <tr key={rowIndex} className="bg-white">
                            {headers.map((header, cellIndex) => (
                                <td key={cellIndex} className="px-2 py-2 text-[8px] whitespace-nowrap">
                                    {tableColumnWrapper(header.value, row[header.value])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {showPagination && <Pagination currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange} />}
        </div>
    );
};

export default Table;
