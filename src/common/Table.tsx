import React from 'react';
import Caption from './semantic_tags/Caption';
import Paragraph from './semantic_tags/Paragraph';

interface TableProps {
    heading: string;
    caption?: string;
    data: Record<string, any>[];
    headers: Record<string, any>[];
    className?: string;
    tableColumnWrapper: Function;
}

const Table: React.FC<TableProps> = ({ data, headers, heading, caption, className, tableColumnWrapper }: TableProps) => {
    return (
        <div className={`relative overflow-x-auto bg-white sm:rounded-lg ${className}`}>
            <table className="w-full text-sm text-left bg-white text-gray-500">
                <Caption className="p-5 pl-2 text-lg font-semibold text-left">
                    {heading}
                    {caption && <Paragraph className="mt-1 text-sm font-normal text-gray-500">{caption}</Paragraph>}
                </Caption>
                <thead className='text-xs text-gray-700 uppercase bg-gray-700 text-white'>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="px-6 py-3">
                                {header.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="bg-white">
                            {headers.map((header, cellIndex) => (
                                <td key={cellIndex} className="px-2 py-2 text-[8px] whitespace-nowrap">
                                    {tableColumnWrapper(header.value, row[header.value])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody >
            </table >
        </div >
    );
};

export default Table;
