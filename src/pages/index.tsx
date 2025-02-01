import Image from 'next/image'

export default function Home() {

    return (
    <div>
        <div className="w-full h-full relative z-10 border-b-2 border-white/20">
            <div className="!image-wrapper">
                <Image src={"/image.png"} alt='PGDF Photo' width={1920} height={1080} className='w-full'/>
            </div>
            <div className="absolute flex flex-col items-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-max">
                <span className="text-white text-9xl font-bold font-['Hikasami']">PRINCE GEORGE</span>
                <span className="text-[#ffcf6a] text-9xl font-bold font-['Hikasami']">DANCE FESTIVAL</span>
            </div>
        </div>
        <div className="w-full px-12 py-16 border-b-2 border-white/20 justify-center items-center gap-2.5 inline-flex">
            <div className="grow shrink basis-0 text-center text-white text-3xl font-[400] font-['Hikasami']">Once again, a huge thank you to sponsors, volunteers, dancers, studios, coaches, parents, and everyone helping make this event a success.​ The 2025 Syllabus and registration information will be posted on this website by early November!</div>
        </div>


        <div className="h-full p-12 flex-col justify-start items-start gap-7 inline-flex">
            <div className="self-stretch text-[#ffcf6a] text-3xl font-bold font-['Hikasami']">Latest News</div>
            <div className="justify-start items-center gap-12 inline-flex overflow-hidden">
    
                <div className="w-96 h-[28rem] flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
                  <div className="h-full w-full relative bg-gradient-to-br from-[#ffcf6a] to-[#fabf3e]" />
                  <div className="self-stretch py-2.5 border-t border-b border-white/30 justify-between items-center inline-flex">
                    <div className="w-20 h-6 text-white text-base font-bold font-['Hikasami'] uppercase leading-snug">14.10.24</div>
                    <div className="w-9 h-6 text-white text-xs font-bold font-['Hikasami'] uppercase leading-snug">News</div>
                  </div>
                  <div className="self-stretch text-white text-3xl font-bold font-['Hikasami'] leading-9">PGDF AGM on Saturday October 26</div>
                </div>

                <div className="w-96 h-[28rem] flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
                  <div className="h-full w-full relative bg-gradient-to-br from-[#ffcf6a] to-[#fabf3e]" />
                  <div className="self-stretch py-2.5 border-t border-b border-white/30 justify-between items-center inline-flex">
                    <div className="w-20 h-6 text-white text-base font-bold font-['Hikasami'] uppercase leading-snug">14.10.24</div>
                    <div className="w-9 h-6 text-white text-xs font-bold font-['Hikasami'] uppercase leading-snug">News</div>
                  </div>
                  <div className="self-stretch text-white text-3xl font-bold font-['Hikasami'] leading-9">PGDF AGM on Saturday October 26</div>
                </div>

                <div className="w-96 h-[28rem] flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
                  <div className="h-full w-full relative bg-gradient-to-br from-[#ffcf6a] to-[#fabf3e]" />
                  <div className="self-stretch py-2.5 border-t border-b border-white/30 justify-between items-center inline-flex">
                    <div className="w-20 h-6 text-white text-base font-bold font-['Hikasami'] uppercase leading-snug">14.10.24</div>
                    <div className="w-9 h-6 text-white text-xs font-bold font-['Hikasami'] uppercase leading-snug">News</div>
                  </div>
                  <div className="self-stretch text-white text-3xl font-bold font-['Hikasami'] leading-9">PGDF AGM on Saturday October 26</div>
                </div>

                <div className="w-96 h-[28rem] flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
                  <div className="h-full w-full relative bg-gradient-to-br from-[#ffcf6a] to-[#fabf3e]" />
                  <div className="self-stretch py-2.5 border-t border-b border-white/30 justify-between items-center inline-flex">
                    <div className="w-20 h-6 text-white text-base font-bold font-['Hikasami'] uppercase leading-snug">14.10.24</div>
                    <div className="w-9 h-6 text-white text-xs font-bold font-['Hikasami'] uppercase leading-snug">News</div>
                  </div>
                  <div className="self-stretch text-white text-3xl font-bold font-['Hikasami'] leading-9">PGDF AGM on Saturday October 26</div>
                </div>

                <div className="w-96 h-[28rem] flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
                  <div className="h-full w-full relative bg-gradient-to-br from-[#ffcf6a] to-[#fabf3e]" />
                  <div className="self-stretch py-2.5 border-t border-b border-white/30 justify-between items-center inline-flex">
                    <div className="w-20 h-6 text-white text-base font-bold font-['Hikasami'] uppercase leading-snug">14.10.24</div>
                    <div className="w-9 h-6 text-white text-xs font-bold font-['Hikasami'] uppercase leading-snug">News</div>
                  </div>
                  <div className="self-stretch text-white text-3xl font-bold font-['Hikasami'] leading-9">PGDF AGM on Saturday October 26</div>
                </div>

            </div>
        </div>

    </div>
    )
}