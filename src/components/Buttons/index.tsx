import { MouseEventHandler } from "react";


interface ButtonProps {
    /**
     * What background color to use
     */
    variant?: 'primary' | 'secondary';
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Optional click handler
     */
    onClick?: () => void;
    children: any
}

export const Button = (props: ButtonProps) => {
    const sizeClass = `${props.size === 'small' ? 'px-2 py-1 text-xs rounded' : props.size === 'large' ? 'px-8 py-2 text-lg rounded-xl' : 'px-4 py-2 rounded-lg'}`
    const baseStyle = `${sizeClass}  font-medium focus:outline-none focus:ring`;
    const variantStyles = {
        primary: 'bg-sky-500 text-white hover:bg-sky-600 border-sky-500 border',
        secondary: 'bg-white border-sky-500 border text-sky-600 hover:bg-gray-50',
    };
    const className = `${baseStyle} ${variantStyles[props.variant || 'primary']}`;
    return (
        <button onClick={props.onClick} className={className}>
            {props.children}
        </button>
    );
}