import React, { FC } from 'react';
import { FooterProps } from './Footer.types';
import NextLink from 'next/link';
import { Button } from '@shared/ui/Button';

import { BookOpen, PersonPlus } from '@gravity-ui/icons';

export const Footer: FC<FooterProps> = ({}) => {
  return (
  <div className="w-full h-full px-7 py-9 border-t-2 border-white/20 flex-col justify-start items-start gap-14 inline-flex overflow-hidden z-20 sticky">
  <div className="self-stretch justify-between items-start inline-flex">
    <div className="w-96 h-96 flex-col justify-between items-start inline-flex overflow-hidden">
      <div className="flex-col justify-start items-start gap-5 flex">
        <div className="flex-col justify-start items-start gap-3.5 flex">
          <NextLink className="w-56 h-16 relative logo" href={"/"}>
            <div className="h-11 left-[26px] top-[10px] absolute flex-col justify-center items-center gap-1 inline-flex">
              <div className="text-[#ffcf6a] text-2xl font-bold font-['Hikasami'] leading-tight">Prince George</div>
              <div className="text-[#ffcf6a] text-2xl font-bold font-['Hikasami'] leading-tight">Dance Festival</div>
            </div>
          </NextLink>
        </div>
        <NextLink href="" className="justify-start items-center gap-1 inline-flex text-center hover:text-[#ffcf6a] transition-colors duration-300">
            <span className="text-white text-sm font-normal font-['Hikasami'] leading-tight tracking-wide">Designed by </span>
            <svg width="49" height="29" viewBox="0 0 49 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.509766" width="49" height="28" rx="12" fill="#FF1852"/>
              <path d="M6.40588 9.99177C6.44988 9.94777 6.66988 9.80843 7.06588 9.57377C7.46188 9.32443 7.69655 9.19977 7.76988 9.19977C7.88722 9.21443 8.11455 9.5811 8.45188 10.2998C8.78922 11.0038 9.03855 11.6491 9.19988 12.2358C9.27322 12.5291 9.35388 12.9251 9.44188 13.4238L9.57388 14.1278L9.92588 14.1058C10.5712 14.0764 11.0699 13.8124 11.4219 13.3138C11.7739 12.8151 11.9499 12.1844 11.9499 11.4218C11.9499 11.1578 11.9645 10.9964 11.9939 10.9378C12.0672 10.8351 12.5585 10.7104 13.4679 10.5638L13.7319 10.5198L13.7759 10.9158C13.7759 10.9598 13.7759 11.0184 13.7759 11.0918C13.7905 11.1651 13.7979 11.2164 13.7979 11.2458C13.7979 12.2284 13.5852 13.1304 13.1599 13.9518C13.0132 14.2304 12.8005 14.5164 12.5219 14.8098C12.2432 15.0884 11.9645 15.3011 11.6859 15.4478C11.3779 15.6091 11.2239 15.7044 11.2239 15.7338C11.2239 15.7924 11.3485 15.9391 11.5979 16.1738C11.8472 16.3938 12.0965 16.5844 12.3459 16.7458C13.2405 17.3178 14.2012 17.6624 15.2279 17.7798C15.3599 17.7944 15.4479 17.8091 15.4919 17.8238C15.5505 17.8238 15.6019 17.8384 15.6459 17.8678C15.7045 17.8971 15.7339 17.9338 15.7339 17.9778C15.7485 18.0218 15.7559 18.0951 15.7559 18.1978C15.7559 18.2271 15.7485 18.3078 15.7339 18.4398C15.7339 18.5718 15.7339 18.6891 15.7339 18.7918L15.6899 19.6498L15.2059 19.6058C13.2552 19.4444 11.5832 18.7111 10.1899 17.4058C9.91122 17.1418 9.74988 17.0098 9.70588 17.0098C9.67655 17.0098 9.66188 17.0391 9.66188 17.0978C9.39788 19.3124 9.19255 20.4491 9.04588 20.5078H9.02388C8.92122 20.5078 8.63522 20.4491 8.16588 20.3318C7.69655 20.2144 7.43988 20.1338 7.39588 20.0898C7.38122 20.0751 7.37388 20.0458 7.37388 20.0018C7.37388 19.9284 7.41055 19.7304 7.48388 19.4078C7.68922 18.4984 7.79188 17.4791 7.79188 16.3498V15.8438C7.76255 14.7731 7.67455 13.8931 7.52788 13.2038C7.38122 12.4998 7.10988 11.7224 6.71388 10.8718C6.49388 10.3878 6.38388 10.1164 6.38388 10.0578C6.38388 10.0284 6.39122 10.0064 6.40588 9.99177ZM16.1563 10.4538C16.0976 10.0724 16.083 9.8671 16.1123 9.83776C16.1416 9.80843 16.3983 9.72043 16.8823 9.57377C17.381 9.41243 17.6596 9.33176 17.7183 9.33176C17.8356 9.34643 17.953 9.85243 18.0703 10.8498L18.2023 11.7518C18.217 11.7664 18.2536 11.7298 18.3123 11.6418L18.3343 11.6198C18.4516 11.4438 18.6276 11.2458 18.8623 11.0258C19.097 10.8058 19.2876 10.6591 19.4343 10.5858C19.889 10.3364 20.373 10.2118 20.8863 10.2118C21.8103 10.2118 22.595 10.5564 23.2403 11.2458C24.1056 12.1551 24.5383 13.5484 24.5383 15.4258C24.5383 16.5551 24.3843 17.8678 24.0763 19.3638C23.9883 19.8184 23.9223 20.0971 23.8783 20.1998C23.849 20.2878 23.7903 20.3318 23.7023 20.3318C23.5556 20.3318 23.2623 20.2731 22.8223 20.1558C22.3823 20.0238 22.1623 19.9284 22.1623 19.8698C22.1623 19.7231 22.2136 19.3564 22.3163 18.7698C22.551 17.5084 22.6683 16.4084 22.6683 15.4698C22.6683 14.5458 22.6243 13.9371 22.5363 13.6438C22.463 13.3798 22.375 13.1378 22.2723 12.9178C22.0523 12.5218 21.7883 12.2651 21.4803 12.1478C21.363 12.1038 21.1943 12.0818 20.9743 12.0818C20.6663 12.0818 20.461 12.1111 20.3583 12.1698C20.1676 12.2724 19.9623 12.5144 19.7423 12.8958C19.537 13.2771 19.3756 13.7098 19.2583 14.1938C18.921 15.5431 18.7523 17.2738 18.7523 19.3858V19.9358H16.9483V19.4298C16.9483 18.7111 16.8456 17.2298 16.6403 14.9858C16.4496 12.7271 16.2883 11.2164 16.1563 10.4538ZM24.986 9.99177C25.03 9.94777 25.25 9.80843 25.646 9.57377C26.042 9.32443 26.2766 9.19977 26.35 9.19977C26.4673 9.21443 26.6946 9.5811 27.032 10.2998C27.3693 11.0038 27.6186 11.6491 27.78 12.2358C27.8533 12.5291 27.934 12.9251 28.022 13.4238L28.154 14.1278L28.506 14.1058C29.1513 14.0764 29.65 13.8124 30.002 13.3138C30.354 12.8151 30.53 12.1844 30.53 11.4218C30.53 11.1578 30.5446 10.9964 30.574 10.9378C30.6473 10.8351 31.1386 10.7104 32.048 10.5638L32.312 10.5198L32.356 10.9158C32.356 10.9598 32.356 11.0184 32.356 11.0918C32.3706 11.1651 32.378 11.2164 32.378 11.2458C32.378 12.2284 32.1653 13.1304 31.74 13.9518C31.5933 14.2304 31.3806 14.5164 31.102 14.8098C30.8233 15.0884 30.5446 15.3011 30.266 15.4478C29.958 15.6091 29.804 15.7044 29.804 15.7338C29.804 15.7924 29.9286 15.9391 30.178 16.1738C30.4273 16.3938 30.6766 16.5844 30.926 16.7458C31.8206 17.3178 32.7813 17.6624 33.808 17.7798C33.94 17.7944 34.028 17.8091 34.072 17.8238C34.1306 17.8238 34.182 17.8384 34.226 17.8678C34.2846 17.8971 34.314 17.9338 34.314 17.9778C34.3286 18.0218 34.336 18.0951 34.336 18.1978C34.336 18.2271 34.3286 18.3078 34.314 18.4398C34.314 18.5718 34.314 18.6891 34.314 18.7918L34.27 19.6498L33.786 19.6058C31.8353 19.4444 30.1633 18.7111 28.77 17.4058C28.4913 17.1418 28.33 17.0098 28.286 17.0098C28.2566 17.0098 28.242 17.0391 28.242 17.0978C27.978 19.3124 27.7726 20.4491 27.626 20.5078H27.604C27.5013 20.5078 27.2153 20.4491 26.746 20.3318C26.2766 20.2144 26.02 20.1338 25.976 20.0898C25.9613 20.0751 25.954 20.0458 25.954 20.0018C25.954 19.9284 25.9906 19.7304 26.064 19.4078C26.2693 18.4984 26.372 17.4791 26.372 16.3498V15.8438C26.3426 14.7731 26.2546 13.8931 26.108 13.2038C25.9613 12.4998 25.69 11.7224 25.294 10.8718C25.074 10.3878 24.964 10.1164 24.964 10.0578C24.964 10.0284 24.9713 10.0064 24.986 9.99177ZM38.3784 11.5098C38.1584 11.4658 37.953 11.4438 37.7624 11.4438C37.2197 11.4438 36.765 11.5831 36.3984 11.8618C36.061 12.1258 35.8117 12.6244 35.6504 13.3578C35.577 13.6511 35.5404 14.1058 35.5404 14.7218C35.5404 15.3378 35.577 15.7558 35.6504 15.9758C35.841 16.6944 36.215 17.2811 36.7724 17.7358C37.3297 18.1758 37.953 18.3958 38.6424 18.3958C38.6717 18.3958 38.723 18.3958 38.7964 18.3958C38.8697 18.3811 38.921 18.3738 38.9504 18.3738C39.625 18.3151 40.109 18.0291 40.4024 17.5158C40.7104 16.9878 40.8644 16.1884 40.8644 15.1178C40.8644 14.4431 40.791 13.9078 40.6444 13.5118C40.5124 13.1158 40.2557 12.7271 39.8744 12.3458C39.449 11.9204 38.9504 11.6418 38.3784 11.5098ZM36.6624 9.72776C36.853 9.6691 37.161 9.63976 37.5864 9.63976C38.0557 9.63976 38.5104 9.68376 38.9504 9.77176C39.9184 10.0211 40.7397 10.5344 41.4144 11.3118C42.089 12.0891 42.4997 13.0058 42.6464 14.0618C42.6757 14.2378 42.6904 14.5824 42.6904 15.0958C42.6904 15.8731 42.6464 16.4744 42.5584 16.8998C42.1917 18.6598 41.2604 19.7304 39.7644 20.1118C39.4417 20.1851 39.0824 20.2218 38.6864 20.2218C38.1877 20.2218 37.777 20.1778 37.4544 20.0898C36.4864 19.8258 35.6724 19.3271 35.0124 18.5938C34.3524 17.8604 33.9344 16.9804 33.7584 15.9538C33.7144 15.6898 33.6924 15.3671 33.6924 14.9858C33.6924 14.0031 33.8024 13.1304 34.0224 12.3678C34.4624 10.9304 35.3424 10.0504 36.6624 9.72776Z" fill="white"/>
            </svg>
            <span className="text-[#ff1852] text-sm font-normal font-['Hikasami'] leading-tight tracking-wide">Kononenko Nikita</span>
        </NextLink>
      </div>
      <Button icon={<BookOpen />}>Print Program</Button>
    </div>
    <div className="grow shrink basis-0 h-96 px-12 border-l-2 border-white/20 flex-col justify-between items-start inline-flex overflow-hidden">
      <div className="flex-col justify-start items-start gap-5 flex">
        <div className="text-center text-white text-3xl font-bold font-['Hikasami']">Contact Us</div>
        <div className="flex-col justify-start items-start gap-1 flex">
          <div className="text-center text-white text-2xl font-medium font-['Hikasami']">Mailing Address</div>
          <div className="text-white/60 text-base font-normal font-['Hikasami']">PO Box 2202, V2N 2J6<br/>Prince George, BC </div>
        </div>
        <div className="flex-col justify-start items-start gap-1 flex">
          <div className="text-center text-white text-2xl font-medium font-['Hikasami']">Questions Regarding Adjudicators</div>
          <NextLink href="malito:pgdfadjudicator@gmail.com" className="text-white/60 text-base font-normal font-['Hikasami'] hover:text-[#ffcf6a] transition-colors duration-300">pgdfadjudicator@gmail.com</NextLink>
        </div>
        <div className="flex-col justify-start items-start gap-1 flex">
          <div className="text-center text-white text-2xl font-medium font-['Hikasami']">Questions Regarding Music</div>
          <NextLink href="malito:pgdfmusic@gmail.com" className="text-white/60 text-base font-normal font-['Hikasami'] hover:text-[#ffcf6a] transition-colors duration-300">pgdfmusic@gmail.com</NextLink>
        </div>
      </div>
      <Button href='/contact' icon={<PersonPlus />}>More Contacts</Button>
    </div>
    <div className="w-96 h-96 px-12 border-l-2 border-white/20 flex-col justify-start items-start gap-3.5 inline-flex overflow-hidden">
      <div className="text-center text-white text-3xl font-bold font-['Hikasami']">Social media</div>
      <Button 
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z" fill="white"/>
          </svg>
        }/>
    </div>
  </div>
  <div className="self-stretch py-7 border-t-2 border-white/20 justify-between items-start inline-flex">
    <div className="justify-start items-start gap-12 flex">
      <img className="w-24 h-14" src="/sponsors/harbour.png" />
      <div className="text-white text-2xl font-medium font-['Hikasami'] leading-[1.5rem]">Nordic<br/>Repair</div>
      <div className="text-white text-2xl font-medium font-['Hikasami'] leading-[1.5rem]">Sandra and Nicholas <br/>Lamb</div>
      <div className="text-white text-2xl font-medium font-['Hikasami'] leading-[1.5rem]">Lo Elliott</div>
    </div>
    <div className="text-white text-xl font-[400] font-['Hikasami'] leading-[1.5rem]">Copyright © PGDF 2025</div>
  </div>
</div>
  );
};