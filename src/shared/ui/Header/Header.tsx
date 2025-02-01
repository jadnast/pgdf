import React, { FC } from 'react';
import { HeaderProps } from './Header.types';
import NextLink from 'next/link';
import { useRouter } from "next/router";

export const Header: FC<HeaderProps> = ({}) => {
    const router = useRouter();

    return (
      <div className="w-full h-28 p-5 border-b-2 border-white/20 justify-between items-center inline-flex z-20 fixed backdrop-blur-[20px] top-0">
      <div className="justify-start items-center gap-12 flex">
        <NextLink className="w-56 h-16 relative logo" href={"/"}>
          <div className="h-11 left-[22.48px] top-[10px] absolute flex-col justify-center items-center gap-1 inline-flex">
            <div className="text-white text-xl font-bold font-['Hikasami'] leading-tight">PG Dance Festival</div>
            <div className="text-[#ffcf6a] text-xl font-normal font-['Hikasami'] leading-tight">March 15-21, 2025</div>
          </div>
        </NextLink>
        <NextLink href="/danceexcellence" className={`${router.pathname === '/danceexcellence' ? "text-[#ffcf6a] hover:cursor-not-allowed" : "text-white hover:text-[#ffcf6a]"} text-xl font-bold font-['Hikasami'] leading-tight transition-colors duration-300`}>Dance Excellence</NextLink>
        <NextLink href="/adjudicators" className={`${router.pathname === '/adjudicators' ? "text-[#ffcf6a] hover:cursor-not-allowed" : "text-white hover:text-[#ffcf6a]"} text-xl font-bold font-['Hikasami'] leading-tight transition-colors duration-300`}>Adjudicators</NextLink>
        <NextLink href="/sponsors" className={`${router.pathname === '/sponsors' ? "text-[#ffcf6a] hover:cursor-not-allowed" : "text-white hover:text-[#ffcf6a]"} text-xl font-bold font-['Hikasami'] leading-tight transition-colors duration-300`}>Sponsors</NextLink>
        <NextLink href="/volunteers" className={`${router.pathname === '/volunteers' ? "text-[#ffcf6a] hover:cursor-not-allowed" : "text-white hover:text-[#ffcf6a]"} text-xl font-bold font-['Hikasami'] leading-tight transition-colors duration-300`}>Volunteers</NextLink>
      </div>
      <div className="self-stretch justify-start items-center gap-3.5 flex">
        <div className="w-16 self-stretch px-3.5 flex-col justify-center items-center gap-1 inline-flex">
          <div className="self-stretch h-1 bg-white" />
          <div className="self-stretch h-1 bg-white" />
          <div className="self-stretch h-1 bg-white" />
        </div>
      </div>
    </div>
    );
};