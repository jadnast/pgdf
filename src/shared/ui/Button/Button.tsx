import React, { FC } from 'react';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({ children, icon, onClick, href }) => {
  return href ? (
    <a href={href} className={`h-14 ${icon ? 'px-4': 'px-3.5'} p-3.5 bg-[#1E1E1E] rounded-[.8rem] border border-[#4B4B4B] justify-start items-center gap-3.5 inline-flex z-10`} onClick={onClick}>
      <div className="text-white text-sm font-bold">
        {icon && icon}
      </div>
      {children && (
        <div className="text-white text-sm font-bold font-['Hikasami'] uppercase leading-snug">
          {children}
        </div>
      )}
    </a>
  ) : (
    <button className={`h-14 ${icon ? 'px-4': 'px-3.5'} p-3.5 bg-[#1E1E1E] rounded-[.8rem] border border-[#4B4B4B] justify-start items-center gap-3.5 inline-flex z-10`} onClick={onClick}>
      <div className="text-white text-sm font-bold">
        {icon && icon}
      </div>
      {children && (
        <div className="text-white text-sm font-bold font-['Hikasami'] uppercase leading-snug">
          {children}
        </div>
      )}
    </button>
  );
};