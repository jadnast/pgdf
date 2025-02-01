import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { usePathname } from 'next/navigation';
import { HikasamiSans }  from '@shared/lib/font';
import { useEffect } from 'react';

import { Header } from '@shared/ui/Header'
import { Footer } from '@/shared/ui/Footer';
 
const App = ({ Component, pageProps }: AppProps) => {
  const pathname = usePathname()
  const splitted = pathname?.split("/");
  //console.log(splitted)

  useEffect(() => {
    document.documentElement.classList.add(HikasamiSans.variable);
    return () => {
      document.documentElement.classList.remove(HikasamiSans.variable);
    };
  }, []);

  return (<>
    <NextNProgress color="#FFD06A" stopDelayMs={200} height={3} showOnShallow={true} />
    <Header/>
    <main className={"min-h-screen bg-background font-sans antialiased mt-20"} data-ph={splitted ? splitted[1] : ''}>
        <Component {...pageProps} />
    </main>
    <Footer/>
    <div className="noise-bg"></div>
  </>)
}

export default App;