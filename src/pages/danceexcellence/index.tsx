export default function Home() {
    return (
        <div className="w-full h-full flex-col justify-start items-start gap-[8rem] inline-flex px-20 mt-20 mb-20">
            <div className="self-stretch text-white text-9xl font-bold font-['Hikasami']">Dance Excellence Award</div>
            <div className="self-stretch h-full flex-col justify-start items-start gap-24 flex">
              <div className="self-stretch justify-between items-start inline-flex">
                <div className="w-full flex-col justify-start items-start gap-2.5 inline-flex max-w-[60rem]">
                  <div className="self-stretch text-[#ffcf6a] text-7xl font-medium font-['Hikasami']">Katie LeBlanc 2024</div>
                  <div className="self-stretch text-white/70 text-2xl font-medium font-['Hikasami']">Katie is thrilled to be the recipient of the 2024 Overall Dance Excellence Award. Starting ballet and tap when she was three, Katie has always had a passion for dance. She is now in grade 12 and has been competing in the Prince George Dance Festival for many years and she will miss this tradition after she graduates. She’s currently training at Judy Russell’s Enchainement Dance Centre and has begun a youth apprenticeship at Method Dance Society. She is grateful to Method for helping her navigate the start of her modern/contemporary dance education which she plans to continue to study post-secondary. While she hopes to pursue a career in contemporary dance and choreography, tap will forever and always be her favourite style of dance. Katie would like to extend her thanks to the many teachers and choreographers who have helped her throughout her dance journey. She would also like to thank all the volunteers and sponsors of the Prince George Dance Festival who make this wonderful event possible. Katie would like to wish all the dancers good luck this year, and she hopes you all make some amazing memories.</div>
                </div>
                <img className="w-[45rem] h-[45rem] z-10" src="/awards/KatieLeBlanc.png" />
              </div>
              <div className="text-white text-7xl font-medium font-['Hikasami']">Previous Winners</div>
              <div className="self-stretch justify-start items-start gap-20 inline-flex">
                <img className="w-[45rem] h-[55rem] z-10" src="/awards/image.png" />
                <div className="text-white/70 text-3xl font-medium font-['Hikasami']">2023    Keira Anderson<br/>2022    Brielle Hamelin<br/>2021    Kendra Hamelin<br/>2019    Caitlin McCormick<br/>2018    Makenna Thiffault<br/>2017    Shayla Dyble<br/>2016    Abigael McCormick<br/>2015    Kennedy Heitman<br/>2014    Amber Downie-Back<br/>2013    Tristan Ghostkeeper<br/>2012    Tristan Ghostkeeper<br/>2011    Margaret Keery<br/>2010    Mathew Cluff<br/>2009    Olivia Herman<br/>2008    Izaak Smith<br/>2007    Izaak Smith<br/>2006    Kaitlin Mathis<br/>2005    Merdith Page    <br/>2004    Cai Glover<br/>2003    Shawna Jacobs<br/>2002    Shawna Jacobs<br/>2001    Megan Thwaites<br/>2000    Megan Thwaites<br/>1999    Eira Glover<br/>1998    Eira Glover</div>
              </div>
            </div>
        </div>
    )
}