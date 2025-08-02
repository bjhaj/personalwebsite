import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="text-center w-full perspective-1000">
          <div className="transform-3d">
            <h1 className="text-[12rem] sm:text-[16rem] md:text-[22rem] lg:text-[28rem] xl:text-[36rem] 2xl:text-[42rem] font-black text-white leading-[0.7] uppercase text-3d-enhanced">
              BAAZ
            </h1>
            <h1 className="text-[12rem] sm:text-[16rem] md:text-[22rem] lg:text-[28rem] xl:text-[36rem] 2xl:text-[42rem] font-black text-white leading-[0.7] uppercase text-3d-enhanced -mt-10 md:-mt-14 lg:-mt-20 xl:-mt-24 2xl:-mt-28">
              JHAJ
            </h1>
          </div>
        </div>
      </section>
    </div>
  )
}
