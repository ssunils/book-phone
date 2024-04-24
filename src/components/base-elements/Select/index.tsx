import { ChangeEvent } from "react";

interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    /**
     * Optional click handler
     */
    onChange?: (ev: ChangeEvent<HTMLSelectElement>) => void;
    children: any;
    className?: string;
}

export const Select = (props: ButtonProps) => {
    const sizeClass = `${props.size === 'small' ? 'px-2 py-1 text-xs rounded' : props.size === 'large' ? 'px-8 py-2 text-lg rounded-xl' : 'px-4 py-2 rounded-lg'}`
    const baseStyle = `${sizeClass} bg-gray-400 bg-opacity-20 border-gray-400 border text-white font-medium focus:outline-none focus:ring-4 focus:ring-gray-600`;

    const className = `${baseStyle} ${props.className}`;
    return (
        <select onChange={props.onChange} className={className}>
            {props.children}
        </select>
    );
}