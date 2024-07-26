import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    [x: string]: any;
}

const Input: React.FC<InputProps> = ({ label, className,  ...rest }: InputProps) => {
    return (
        <div className="flex flex-col w-full">
            {label && <label className="mb-1">{label}</label>}
            <input
                className={`border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 ${className}`}
                {...rest}
            />
        </div>
    );
};

export default Input;
