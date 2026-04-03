// component/Settings.jsx
import { useState } from 'react'
import ScrollDown from './ScrollDown'
import { motion } from 'framer-motion'
import Loader from './Loader'

const sliders = [
  { label: 'HUMOR', value: 60 },
  { label: 'AFETO', value: 80 },
  { label: 'AUTONOMIA', value: 75 },
  { label: 'SENSIBILIDADE', value: 85 },
  { label: 'DEPENDÊNCIA', value: 80 },
  { label: 'CRIATIVIDADE', value: 70 },
]

const areas = [
  'Português', 'Literatura', 'Matemática', 'Saúde', 'Geek', 'Física',
  'Artes', 'Programação', 'Música', 'Política', 'Esporte', 'Astronomia',
  'Cinema', 'Filosofia', 'Gastronomia', 'Biologia',
]

const conta = ['Chamadas de Vídeo', 'Chamadas de Voz', 'Ligações Espontâneas', 'Mensagens']

const checklist = [
  'Permitir uso de dados para treino',
  'Permitir acesso ao sistema',
  'Controle de segurança',
  'Atualização automática',
  'Salvar informações',
]

export default function Settings({onCancel}) {
  const [sliderValues, setSliderValues] = useState(
    Object.fromEntries(sliders.map(s => [s.label, s.value]))
  )

  const [toggledAreas, setToggledAreas] = useState({
    'Português': true, 'Literatura': true, 'Matemática': false,
    'Saúde': false, 'Geek': true, 'Física': false, 'Artes': true,
    'Programação': false, 'Música': true, 'Política': false,
    'Esporte': false, 'Astronomia': false, 'Cinema': true,
    'Filosofia': true, 'Gastronomia': false, 'Biologia': false,
  })

  const [toggledConta, setToggledConta] = useState({
    'Chamadas de Vídeo': true, 'Chamadas de Voz': true,
    'Ligações Espontâneas': true, 'Mensagens': true,
  })

  const [checkedItems, setCheckedItems] = useState({
    'Permitir uso de dados para treino': true,
    'Permitir acesso ao sistema': true,
    'Controle de segurança': false,
    'Atualização automática': false,
    'Salvar informações': true,
  })

  const toggleArea = (area) => setToggledAreas(p => ({ ...p, [area]: !p[area] }))
  const toggleConta = (item) => setToggledConta(p => ({ ...p, [item]: !p[item] }))
  const toggleCheck = (item) => setCheckedItems(p => ({ ...p, [item]: !p[item] }))
  
  const [showCancelPopup, setShowCancelPopup] = useState(false)

  const [cancelPhase, setCancelPhase] = useState(null) // null | 'loading' | 'done'

  const handleConfirmCancel = () => { ///tempo do loader
    setCancelPhase('loading')
    setTimeout(() => {
      setCancelPhase('done')
    }, 3000)
  }

  return (
    <div className="w-full h-full hide-scrollbar overflow-y-auto px-6 py-8 text-[#f1f1f1] font-[Montserrat]">

      <h1 className="text-center lg:text-2xl xl:text-4xl font-bold lg:mb-8 xl:mb-15 lg:mt-8 xl:mt-15 tracking-wide">
        Ajustes
      </h1>

      <div className="grid grid-cols-2 lg:gap-8 xl:gap-20 max-w-6xl mx-auto">

        {/* Configurações do Companion */}
        <div className=''>
          <p className="lg:text-base xl:text-2xl font-semibold text-white/80 mb-6 text-center tracking-wider ">
            Configurações do Companion
          </p>
          <div className='h-0.5 w-full max-w-104 bg-[#ff914d] rounded-full mb-10 mx-auto'></div>

          <div className="flex flex-col text-center mt-10 lg:ml-2 xl:ml-5 lg:mr-2 xl:mr-5 lg:gap-6 xl:gap-12 ">
            {sliders.map(({ label }) => (
              <div key={label} className="flex flex-col lg:gap-2 xl:gap-5">
                <span className="lg:text-[11px] xl:text-[17px] font-semibold text-white/70 tracking-widest">{label}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={sliderValues[label]}
                  onChange={e => setSliderValues(p => ({ ...p, [label]: Number(e.target.value) }))}
                  style={{
                    background: `linear-gradient(to right,
                      rgba(255,255,255,0.9) 0%,
                      rgba(255,255,255,0.9) ${sliderValues[label]}%,
                      rgba(255,255,255,0.25) ${sliderValues[label]}%,
                      rgba(255,255,255,0.25) 100%)`
                  }}
                  className="w-full rounded-full cursor-pointer appearance-none h-0.75"
                />
              </div>
            ))}

            {/* Slider bugado */}
            <div className='flex flex-col lg:gap-2 xl:gap-5'>
              <div
                  className="glitch lg:text-[11px] xl:text-[17px] font-semibold text-[#ffc2be] tracking-widest"
                  data-text="RACIONALIDAD£"
                  style={{
                        "--g-top": "3.2s",
                        "--g-bottom": "2.7s",
                        animationDelay: "-15s",
                        animationDuration: "10s"
                        }}
                >RACIONALIDAD£
              </div>
              <div className='flex items-center'>
                <div className='relative flex w-full h-1.25 bg-[#a32a2a]/80 items-center rounded-full'>
                  <div className='absolute flex ml-128 w-4.5 h-4.5 bg-[#a32a2a]/80 rounded-[50%] hover:scale-110 duration-300 cursor-pointer '></div>
                </div>
              </div>
            </div>

            <div className='flex flex-col lg:gap-2 xl:gap-5'>
              <div
                  className="glitch lg:text-[11px] xl:text-[17px] font-semibold text-[#ffc2be] tracking-widest"
                  data-text="EMP4TIA"
                  style={{
                        "--g-top": "2.2s",
                        "--g-bottom": "1.7s",
                        animationDelay: "-5s",
                        animationDuration: "5s"
                        }}
                >
                  EMP4TIA
              </div>
              <div className='flex items-center'>
                <div className='relative w-189 h-1.25 bg-[#a32a2a]/80 rounded-tl-full rounded-bl-full'></div>
                <div className='relative flex w-full h-1.25 bg-[#da3737] items-center rounded-full'>
                  <div className='absolute ml-[-8px] mt-10 w-4.5 h-4.5 bg-[#a32a2a]/80 rounded-[50%] hover:scale-110 duration-300 cursor-pointer'></div>
                </div>
              </div>
            </div>

            <div className='flex flex-col lg:gap-2 xl:gap-5'>
              <div
                className="glitch lg:text-[11px] xl:text-[17px] font-semibold text-[#ffc2be] tracking-widest"
                data-text="INTERPRET4ÇÃO EM0CIONAL..?"
                style={{
                        "--g-top": "1.2s",
                        "--g-bottom": "0.7s",
                        animationDelay: "-0.5s",
                        animationDuration: "0.5s"
                        }}
              >
                INTERPRET4ÇÃO EM0CIONAL..?
              </div>
              <div className='flex items-center'>
                <div className='w-40 h-1.25 bg-[#a32a2a]/80 rounded-tl-full rounded-bl-full'></div>
                <div className='relative flex w-full h-1.25 bg-[#da3737] items-center rounded-full'>
                  <div className='absolute ml-60 mt-15 w-4.5 h-4.5 bg-[#a32a2a]/80 rounded-[50%] hover:scale-110 duration-300 cursor-pointer'></div>
                </div>
              </div>
            </div>


            <ScrollDown className="mt-6 ml-[50%] mr-[50%]" />
          </div>
        </div>

        {/* Áreas do Conhecimento */}
        <div className='flex flex-col items-center'>
          <p className="lg:text-base xl:text-2xl font-semibold text-white/80 mb-6 text-center tracking-wider">
            Áreas do Conhecimento
          </p>
          <div className='h-0.5 w-full max-w-104 bg-[#ff914d] rounded-full mb-10 mx-auto'></div>

          <div className="flex flex-col lg:mt-4 xl:mt-9 lg:gap-3 xl:gap-6">
            {areas.map(area => (
              <div key={area} className="flex items-center lg:gap-4 xl:gap-12">
                <button
                  onClick={() => toggleArea(area)}
                  className={`lg:w-10 xl:w-14 lg:h-6 xl:h-8 rounded-full transition-all duration-300 relative cursor-pointer flex-shrink-0 ${
                    toggledAreas[area] ? 'bg-white/80' : 'bg-white/20'
                  }`}
                >
                  <span className={`absolute top-0.5 lg:w-5 xl:w-7 lg:h-5 xl:h-7 rounded-full transition-all duration-300 ${
                    toggledAreas[area] ? 'lg:left-4 xl:left-6.5 bg-orange-500' : 'left-1 bg-white/60'
                  }`} />
                </button>
                <span className="lg:text-[13px] xl:text-[18px] text-white/90">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Configurações da conta */}
      <div className="max-w-4xl mx-auto lg:mt-16 xl:mt-30 pb-100">
        <p className="lg:text-base xl:text-2xl font-semibold text-white/80 mb-6 text-center tracking-wider">
          Configurações da conta
        </p>
        <div className='h-0.5 w-full max-w-104 bg-[#ff914d] rounded-full mb-15 mx-auto'></div>

        <div className="grid grid-cols-2 lg:gap-8 xl:gap-20 items-start lg:pl-10 xl:pl-25">

          {/* Toggles */}
          <div className="flex flex-col lg:gap-3 xl:gap-4">
            {conta.map(item => (
              <div key={item} className="flex items-center gap-3">
                <button
                  onClick={() => toggleConta(item)}
                  className={`lg:w-10 xl:w-14 lg:h-6 xl:h-8 rounded-full transition-all duration-300 relative cursor-pointer flex-shrink-0 ${
                    toggledConta[item] ? 'bg-white/80' : 'bg-white/20'
                  }`}
                >
                  <span className={`absolute top-0.5 lg:w-5 xl:w-7 lg:h-5 xl:h-7 rounded-full transition-all duration-300 ${
                    toggledConta[item] ? 'lg:left-4 xl:left-6.5 bg-orange-500' : 'left-1 bg-white/60'
                  }`} />
                </button>
                <span className="lg:text-[13px] xl:text-[18px] text-white/90">{item}</span>
              </div>
            ))}
          </div>

          {/* Checklist */}
          <div className="flex flex-col lg:gap-3 xl:gap-4">
            {checklist.map(item => (
              <div key={item} className="flex items-center gap-3 cursor-pointer" onClick={() => toggleCheck(item)}>
                <div className={`lg:w-5 xl:w-6 lg:h-5 xl:h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  checkedItems[item] ? 'border-white/80 bg-white/20' : 'border-white/60 bg-transparent'
                }`}>
                  {checkedItems[item] && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <span className="lg:text-[12px] xl:text-[16px] text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card plano + botões */}
        <div className="flex flex-col items-center lg:mt-16 xl:mt-40 lg:gap-6 xl:gap-10">
          <div className="w-full max-w-xs border-2 border-white/60 rounded-2xl lg:p-4 xl:p-6 bg-white/4 backdrop-blur-sm hover:scale-102 transition-all duration-300 hover:shadow-[4px_4px_7px_#ff3131,-2px_-2px_7px_#ff914d]">
            <p className="lg:text-sm xl:text-md text-white/60 mb-1">Ouro Plus</p>
            <p className="lg:text-base xl:text-xl font-bold mt-2 text-center">Miguel</p>
            <p className="text-xs font-semibold text-white/60 mb-3 text-center">Companion Agent</p>
            <div className="flex justify-between items-end mt-4">
              <p className="lg:text-base xl:text-xl font-semibold">$ 198</p>
              <p className="text-xs text-white/50">Anual</p>
            </div>
          </div>

          <div className="flex lg:gap-6 xl:gap-10 lg:mt-4 xl:mt-10">
            <button className="lg:px-8 xl:px-11 py-3 rounded-full border-2 border-white/60 text-white font-semibold lg:text-xs xl:text-sm
              hover:bg-yellow-400/30 hover:scale-105 transition-all duration-300 cursor-pointer tracking-widest">
              UPGRADE
            </button>
            <button 
              onClick={() => setShowCancelPopup(true)}
              className="lg:px-8 xl:px-10 py-3 rounded-full border-2 border-red-800/80 text-red-800/80 font-semibold lg:text-xs xl:text-sm
              hover:bg-red-500/20 hover:scale-105 transition-all duration-300 cursor-pointer tracking-widest">
              CANCELAR
            </button>
          </div>
        </div>
      </div>

      {/* Popup cancelar */}
      {showCancelPopup && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Overlay com blur */}
          <motion.div
            className="absolute inset-0 backdrop-blur-sm bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            onClick={() => setShowCancelPopup(false)}
          />

          {/* Card do popup */}
          <motion.div
            className="relative z-10 border border-white/50 rounded-2xl p-8 bg-white/10 backdrop-blur-md
              flex flex-col items-center gap-6 lg:w-80 xl:w-96"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {cancelPhase === 'loading' ? (
              <div className="flex items-center justify-center py-6">
                <Loader />
              </div>

              ) : cancelPhase === 'done' ? (
              <motion.div
                className="flex flex-col items-center gap-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {/* Ícone de sucesso */}
                <div className="w-12 h-12 rounded-full border border-white/40 bg-white/10
                  flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                    viewBox="0 0 24 24" fill="none" stroke="white"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
            
                <p className="font-[Poppins] font-bold text-white lg:text-base xl:text-lg text-center">
                  <span>Companion </span>
                  <span 
                      className='glitch font-[Poppins] font-bold text-white/90 lg:text-base xl:text-lg text-center tracking-widest'
                      data-text=" deletado"
                      style={{
                        "--g-top": "1.2s",
                        "--g-bottom": "0.7s",
                        animationDelay: "-0.5s",
                        animationDuration: "0.5s"
                        }}
                  > deletado</span> <span> com sucesso.</span> 
                </p>
            
                <button
                  onClick={onCancel}
                  className="px-10 py-3 rounded-full border border-white/40 text-white
                    font-[Montserrat] font-semibold text-xs bg-white/10
                    hover:bg-white/20 hover:border-white/80 hover:scale-105
                    transition-all duration-300 cursor-pointer tracking-widest">
                  SAIR
                </button>
              </motion.div>

            ) : (
              <>
                {/* Ícone */}
                <div className="w-12 h-12 rounded-full border border-red-400/80 bg-red-500/40 animate-pulse-fast
                  flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                    viewBox="0 0 24 24" fill="none" stroke="white"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
            
                <div className="flex flex-col items-center gap-2 text-center">
                  <p className="font-[Poppins] font-bold text-white lg:text-base xl:text-lg">
                    Tem certeza que deseja cancelar a assinatura?
                  </p>
                  <p className="font-[Montserrat] text-white/60 lg:text-xs xl:text-sm mb-3">
                    Todas as memórias serão perdidas.
                  </p>
                </div>
            
                <div className="flex gap-4 w-full">
                  <button
                    onClick={() => setShowCancelPopup(false)}
                    className="flex-1 py-3 rounded-full border border-white/40 text-white font-[Montserrat] font-semibold text-xs
                      bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer tracking-widest">
                    VOLTAR
                  </button>
                  <button
                    onClick={handleConfirmCancel}
                    className="flex-1 py-3 rounded-full border-2 border-red-800/80 text-red-800/80 font-[Montserrat] font-semibold text-xs
                      hover:bg-red-500/20 hover:scale-105 transition-all duration-300 cursor-pointer tracking-widest">
                    CONFIRMAR
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}

    </div>
  )
}