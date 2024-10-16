import React from "react";

// custom properties and also native HTML button properties
type buttonProps = {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className }: buttonProps) => {
    return <button
        className={`
            bg-[#2D5BFF] rounded-[8px] px-[32px] py-[12px] text-[#FFF]
            ${className}
        `}
    >
        {children}
    </button>
}