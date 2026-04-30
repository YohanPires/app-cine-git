// component/Login.jsx
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedShinyText from './AnimatedShinyText'

export default function Login({ onComplete }) {
  const [showTitle, setShowTitle] = useState(false)
  const [showCard, setShowCard] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [glitching, setGlitching] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowTitle(true), 600)
    const t2 = setTimeout(() => setShowCard(true), 1800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  useEffect(() => {
    const glitchTimer = setTimeout(() => setGlitching(true), 10000)
    const exitTimer = setTimeout(() => onComplete(), 11500)
    return () => { clearTimeout(glitchTimer); clearTimeout(exitTimer) }
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* Logo — fixo no topo, nunca se move */}
      {showTitle && (
        <motion.div
          className="absolute top-0 left-0 right-0 flex flex-col items-center md:pt-10 xl:pt-16 2xl:pt-40"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative flex items-end justify-center">
            <AnimatedShinyText
              shimmerWidth={150}
              className="font-[Poppins] z-10 tracking-tighter font-black md:text-[80px] xl:text-[150px]"
            >
              Miguel
            </AnimatedShinyText>

            {/* Badge COMPANION.AI — posicionado absolutamente no canto inferior direito do texto */}
            <div className="absolute md:left-38 xl:bottom-5 xl:left-73.5 ml-1
              bg-linear-to-r from-[#ff914d]/10 via-[#ff914d]/55 to-[#ff914d]/90
              pl-3 pr-2 py-0.5">
              <span className="font-[Montserrat] text-white font-semibold whitespace-nowrap
                md:text-[11px] xl:text-[22px]">
                COMPANION.AI
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Card + mensagem — centralizados na tela */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
        <AnimatePresence>
          {showCard && (
            <motion.div
              className="flex flex-col items-center gap-5 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Mensagem acima do card */}
              <p className="font-[Montserrat] text-[#f1f1f1] xl:text-[18px] md:text-[14px] font-semibold tracking-widest">
                Acesse ou crie sua conta
              </p>

              {/* Card */}
              <motion.div
                className="border border-white/30 rounded-2xl bg-white/5 backdrop-blur-md md:w-80 xl:w-120"
                animate={glitching ? {
                  opacity: [1, 0.6, 1, 0.3, 0],
                  x: [0, -4, 6, -3, 0],
                } : {}}
                transition={glitching ? { duration: 1.5, ease: 'linear' } : {}}
              >
                {/* Toggle */}
                <div className="flex border-b border-white/10 relative">
                  <button
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 md:py-3.5 xl:py-5 font-[Montserrat] font-semibold md:text-xs xl:text-[15px] tracking-widest transition-all duration-300
                      ${isLogin ? 'text-white' : 'text-white/50 hover:text-white/60'}`}
                  >
                    ENTRAR
                  </button>
                  <div className="w-px bg-white/5" />
                  <button
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 md:py-3.5 xl:py-5 font-[Montserrat] font-semibold md:text-xs xl:text-[15px] tracking-widest transition-all duration-300
                      ${!isLogin ? 'text-white' : 'text-white/50 hover:text-white/60'}`}
                  >
                    CRIAR CONTA
                  </button>

                  <motion.div
                    className="absolute bottom-0 h-0.75 rounded-full w-1/2 bg-[#ff914d]"
                    animate={{ left: isLogin ? '0%' : '50%' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                </div>

                {/* Formulário */}
                <div className="p-7">
                  <AnimatePresence mode="wait">
                    {isLogin ? (
                      <motion.div
                        key="login"
                        className="flex flex-col gap-4"
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 12 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="flex flex-col md:gap-1.5 xl:gap-2.5">
                          <span className="font-[Montserrat] text-white md:text-[10px] xl:text-[13px] tracking-widest pl-1">EMAIL</span>
                          <div className="w-full h-10 rounded-full bg-white/3 border border-white/30 flex items-center px-4">
                            <span className="text-white/25 text-xs font-mono">usuario@email.com</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="font-[Montserrat] text-white md:text-[10px] xl:text-[13px] tracking-widest pl-1">SENHA</span>
                          <div className="w-full h-10 rounded-full bg-white/3 border border-white/30 flex items-center px-4">
                            <span className="text-white/25 text-xs font-mono">••••••••••</span>
                          </div>
                        </div>
                        <span className="font-[Montserrat] text-white/80 md:text-[10px] xl:text-[14px] text-right pr-1 cursor-pointer hover:text-white/50 transition-all">
                          Esqueci minha senha
                        </span>
                        <div className="flex justify-center mt-1">
                          <button className="px-10 py-3 rounded-full border border-[#ff914d] text-white
                            font-[Montserrat] font-semibold text-xs bg-[#f74b01]
                            hover:bg-white/20 hover:border-white/70 hover:scale-105
                            transition-all duration-300 cursor-pointer tracking-widest">
                            ACESSAR
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="register"
                        className="flex flex-col gap-4"
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -12 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="flex flex-col md:gap-1.5 xl:gap-2.5">
                          <span className="font-[Montserrat] text-white md:text-[10px] xl:text-[13px] tracking-widest pl-1">NOME</span>
                          <div className="w-full h-10 rounded-full bg-white/3 border border-white/30 flex items-center px-4">
                            <span className="text-white/25 text-xs font-mono">Seu nome</span>
                          </div>
                        </div>
                        <div className="flex flex-col md:gap-1.5 xl:gap-2.5">
                          <span className="font-[Montserrat] text-white md:text-[10px] xl:text-[13px] tracking-widest pl-1">EMAIL</span>
                          <div className="w-full h-10 rounded-full bg-white/3 border border-white/30 flex items-center px-4">
                            <span className="text-white/25 text-xs font-mono">usuario@email.com</span>
                          </div>
                        </div>
                        <div className="flex flex-col md:gap-1.5 xl:gap-2.5">
                          <span className="font-[Montserrat] text-white md:text-[10px] xl:text-[13px] tracking-widest pl-1">SENHA</span>
                          <div className="w-full h-10 rounded-full bg-white/3 border border-white/30 flex items-center px-4">
                            <span className="text-white/25 text-xs font-mono">••••••••••</span>
                          </div>
                        </div>
                        <div className="flex justify-center mt-2">
                          <button className="px-10 py-4 mt-2 rounded-full border border-[#ff914d] text-white
                            font-[Montserrat] font-semibold text-xs bg-[#f74b01]
                            hover:bg-white/20 hover:border-white/70 hover:scale-105
                            transition-all duration-300 cursor-pointer tracking-widest">
                            REGISTRAR
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Glitch nas letras */}
      {glitching && (
        <div className="absolute inset-0 pointer-events-none z-20 flex items-start justify-center md:pt-16 xl:pt-40 ml-9">
          <span
            className="glitch font-[Poppins] font-black text-white tracking-tighter md:text-[80px] xl:text-[150px]"
            data-text="Miguel"
            style={{
              '--g-top': '0.2s',
              '--g-bottom': '0.15s',
              animationDelay: '0s',
              animationDuration: '0.3s',
            }}
          >
            Miguel
          </span>
        </div>
      )}

      {/* Rodapé */}
      {showCard && (
        <motion.p
          className="font-[Montserrat] text-white/50 text-xs tracking-widest absolute bottom-8 left-0 right-0 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          COMPANION.AI © 2026 — SISTEMA SEGURO
        </motion.p>
      )}
    </div>
  )
}