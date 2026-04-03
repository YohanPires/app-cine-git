import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Grainient from "./component/Grainient"
import Loader from "./component/Loader"
import AnimatedShinyText from './component/AnimatedShinyText'
import SplitText from './component/SplitText'
import Settings from './component/Settings'

export default function App() {
  const [page, setPage] = useState(1)
  const [showText1, setShowText1] = useState(false)
  const [showText2, setShowText2] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setPage(2), 2000) // tempo perfeito 7000
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (page !== 2) return
    const t1 = setTimeout(() => setShowText1(true), 1500)
    return () => clearTimeout(t1)
  }, [page])

  const handleText1Complete = () => {
    setTimeout(() => setShowText2(true), 0)
  }

  const handleText2Complete = () => {
    setTimeout(() => setShowButton(true), 200)
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden">

      {/* BACKGROUND — fica fixo, nunca some */}
      <div className="absolute inset-0 -z-10">
        <Grainient
          color1="#ff3432"
          color2="#ff6f43"
          color3="#ff8f4d"
          timeSpeed={4.30}
          colorBalance={0}
          warpStrength={1.15}
          warpFrequency={5.5}
          warpSpeed={3.2}
          warpAmplitude={55}
          blendAngle={-9}
          blendSoftness={0.31}
          rotationAmount={730}
          noiseScale={0.55}
          grainAmount={0.10}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.75}
        />
      </div>

      {/* CONTEÚDO — só esse faz fade */}

      <div className="relative flex items-center justify-center h-full">
        <AnimatePresence mode="wait">

          {page === 1 && (
            <motion.div
              key="page1"
              className="relative grid grid-cols-1 md:gap-y-[10rem] xl:gap-y-[18rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {/* Logo */}
              <div className="relative z-10 flex items-center justify-center">
                <AnimatedShinyText shimmerWidth={150} className="font-[Poppins] z-10 tracking-tighter font-black md:text-[80px] xl:text-[150px]">
                  Miguel
                </AnimatedShinyText>
                <div className="inline-block bg-gradient-to-r from-[#ff914d]/10 via-[#ff914d]/55 to-[#ff914d]/90 pl-5 py-0.2
                  md:text-[14px] md:-mb-20 md:-ml-33
                  xl:text-[25px] xl:-mb-37 xl:-ml-43.5">
                  <div className="relative font-[Montserrat] text-white z-20 font-semibold">
                    COMPANION.AI
                  </div>
                </div>
              </div>

              {/* Loader — aparece 1.5s depois */}
              <motion.div
                className="relative z-20 justify-items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5, ease: 'easeInOut' }}
              >
                <Loader />
              </motion.div>
            </motion.div>
          )}

          {page === 2 && (
            <motion.div
              key="page2"
              className="flex flex-col items-center md:gap-3 xl:gap-10 mb-18"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <div className="h-16 flex items-center justify-center">
                {showText1 && (
                  <SplitText
                    text="Bem-vinda, Isabela!"
                    className="font-[Poppins] text-[#f1f1f1] font-bold text-center whitespace-nowrap md:text-5xl xl:text-7xl"
                    splitType="chars"
                    from={{ opacity: 0, y: 20 }}
                    to={{ opacity: 1, y: 0 }}
                    delay={40}
                    duration={1.5}
                    ease="power3.out"
                    threshold={0}
                    rootMargin="0px"
                    tag="p"
                    onLetterAnimationComplete={handleText1Complete}
                  />
                )}
              </div>
              
              <div className="h-8 flex items-center justify-center">
                {showText2 && (
                  <SplitText
                    text="Seu companheiro está aguardando você..."
                    className="font-[Montserrat] text-[#f1f1f1] text-center whitespace-nowrap md:text-[18px] xl:text-[24px]"
                    splitType="chars"
                    from={{ opacity: 0, y: 20 }}
                    to={{ opacity: 1, y: 0 }}
                    delay={25}
                    duration={1.1}
                    ease="power3.out"
                    threshold={0}
                    rootMargin="0px"
                    tag="p"
                    onLetterAnimationComplete={handleText2Complete}
                  />
                )}
              </div>
              
              <div className="h-16 flex items-center justify-center md:mt-12 xl:mt-20">
                {showButton && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  >
                    <button
                      onClick={() => setPage(3)}
                      className="md:px-10 xl:px-12 py-4 font-[Montserrat] font-semibold text-[#f1f1f1] text-lg
                        border border-white/80 rounded-full
                        bg-white/10 backdrop-blur-sm
                        hover:bg-white/20 hover:border-white hover:scale-110
                        transition-all duration-300 cursor-pointer"
                    >
                      Entrar
                    </button>
                  </motion.div>
                )}
              </div>
              
              {/* Botões canto inferior direito */}
              {showButton && (
                <motion.div
                  className="fixed bottom-15 right-15 flex flex-col gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
                >
                  {/* Notificações */}
                  <div className="relative hover:scale-110 transition-all duration-300 cursor-pointer">
                    <button className="w-15 h-15 rounded-full border border-white/80
                      bg-white/10 backdrop-blur-sm flex items-center justify-center
                      hover:bg-white/20 hover:border-white
                      transition-all duration-300 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                        viewBox="0 0 24 24" fill="none" stroke="white"
                        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                      </svg>
                    </button>
                    {/* Badge de notificações */}
                    <div className="absolute -top-2 -right-1 w-8 h-7 rounded-full bg-red-500
                      flex items-center justify-center">
                      <span className="text-white text-[16px] text-center font-semibold">+3</span>
                    </div>
                    <div className="absolute -top-2 -right-1 w-8 h-7 animate-ping rounded-full bg-red-500
                      flex items-center justify-center duration-15000 transition-all opacity-70">
                    </div>
                  </div>
              
                  {/* Configurações */}
                  <button
                    onClick={() => setPage(3)}
                    className="w-15 h-15 rounded-full border border-white/80
                      bg-white/10 backdrop-blur-sm flex items-center justify-center
                      hover:bg-white/20 hover:border-white hover:scale-110
                      transition-all duration-300 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                      viewBox="0 0 24 24" fill="none" stroke="white"
                      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                    </svg>
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}          

          {page === 3 && (
            <motion.div
              key="page3"
              className="relative w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <Settings onCancel={() => setPage(1)} />
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  )
}