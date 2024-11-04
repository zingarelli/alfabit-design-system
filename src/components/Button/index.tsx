import React from "react";

// custom properties and also native HTML button properties
export type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'tertiary'
    children: React.ReactNode;    
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function getVariantStyles(variant: ButtonProps['variant'], disabled: ButtonProps['disabled']) {    
    switch (variant) {
        case 'primary':
            return disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white';
        case 'secondary':
            return disabled ? 'bg-disabled text-disabled' : 'bg-quaternary text-primary';
        case 'tertiary':
            return disabled ? 'bg-light text-disabled' : 'bg-light text-primary'
        default:
            return disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white';        
    }
}

export const Button = ({ variant = 'primary', children, className, disabled, ...rest }: ButtonProps) => {
    const generalStyle = 'rounded-md px-lg py-2xs text-lg';
    return <button
        className={`${generalStyle} ${getVariantStyles(variant, disabled)} ${className}`}
        {...rest}
        disabled={disabled}
    >
        {children}
    </button>
}