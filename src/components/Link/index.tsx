import React from "react"

export type LinkProps = {
  children: React.ReactNode;
  disabled?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({ children, href, disabled, className, ...rest }: LinkProps) => {
  return <a
    href={disabled ? undefined : href}
    aria-disabled={disabled}
    className={`text-md font-extrabold text-primary aria-disabled:text-disabled ${className}`}
    {...rest}
  >
    {children}
  </a>;
}

export default Link;