// component/Settings.jsx
import { useState } from 'react'
import ScrollDown from './ScrollDown'

const sliders = [
  { label: 'HUMOR', value: 60 },
  { label: 'AFETO', value: 80 },
  { label: 'AUTONOMIA', value: 75 },
  { label: 'SENSIBILIDADE', value: 85 },
  { label: 'DEPENDÊNCIA', value: 80 },
  { label: 'RACIONALIDADE', value: 100 },
  { label: 'EMPATIA', value: 60 },
  { label: 'INTERPRETAÇÃO EMOCIONAL', value: 23 },
]

const areas = [
  'Português', 'Literatura', 'Matemática', 'Saúde', 'Geek', 'Física',
  'Artes', 'Programação', 'Música', 'Política', 'Esporte', 'Astronomia',
  'Cinema', 'Filosofia', 'Gastronomia', 'Biologia',
]

const conta = ['Chamadas de Vídeo', 'Chamadas de Voz', 'Ligações Espontâneas', 'Mensagens']

export default function Settings() {
  const [sliderValues, setSliderValues] = useState(
    Object.fromEntries(sliders.map(s => [s.label, s.value]))
  )

  const [toggledAreas, setToggledAreas] = useState({
    'Português': true,
    'Literatura': true,
    'Matemática': false,
    'Saúde': false,
    'Geek': true,
    'Física': false,
    'Artes': true,
    'Programação': false,
    'Música': true,
    'Política': false,
    'Esporte': false,
    'Astronomia': false,
    'Cinema': true,
    'Filosofia': true,
    'Gastronomia': false,
    'Biologia': false,
  })

  const [toggledConta, setToggledConta] = useState({
    'Chamadas de Vídeo': true,
    'Chamadas de Voz': true,
    'Ligações Espontâneas': true,
    'Mensagens': true,
  })

  const toggleArea = (area) => setToggledAreas(p => ({ ...p, [area]: !p[area] }))
  const toggleConta = (item) => setToggledConta(p => ({ ...p, [item]: !p[item] }))

  return (
    <div className="w-full h-full hide-scrollbar overflow-y-auto px-6 py-8 text-[#f1f1f1] font-[Montserrat]">

      <h1 className="text-center text-4xl font-bold mb-15 mt-15 tracking-wide">
        Ajustes
      </h1>

      <div className="grid grid-cols-2 gap-20 max-w-6xl mx-auto">

        {/* Configurações do Companion */}
        <div>
          <p className="text-2xl font-semibold text-white/80 mb-6 text-center tracking-wider">
            Configurações do Companion
          </p>
          
          
          <div className="flex flex-col text-center mt-10 ml-5 mr-5 gap-12">
            {sliders.map(({ label }) => (
              <div key={label} className="flex flex-col gap-5">
                <span className="text-[17px] font-semibold text-white/70 tracking-widest">{label}</span>
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
                  className="w-full rounded-full cursor-pointer appearance-none h-[3px]"
                />
              </div>
            ))}
          <ScrollDown className="mt-6 ml-[50%] mr-[50%]" />
          </div>
        </div>

        {/* Áreas do Conhecimento */}
        <div className='flex flex-col items-center'>
          <p className="text-2xl font-semibold text-white/80 mb-6 text-center tracking-wider">
            Áreas do Conhecimento
          </p>
          <div className="flex flex-col mt-9 gap-6">
            {areas.map(area => (
              <div key={area} className="flex items-center gap-12">
                <button
                  onClick={() => toggleArea(area)}
                  className={`w-14 h-8 rounded-full transition-all duration-300 relative cursor-pointer flex-shrink-0 ${
                    toggledAreas[area] ? 'bg-white/80' : 'bg-white/20'
                  }`}
                >
                  <span className={`absolute top-0.5 w-7 h-7 rounded-full transition-all duration-300 ${
                    toggledAreas[area] ? 'left-6.5 bg-orange-500' : 'left-1 bg-white/60'
                  }`} />
                </button>
                <span className="text-[18px] text-white/90">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Configurações da conta */}
      <div className="max-w-4xl mx-auto mt-30">
        <p className="text-2xl font-semibold text-white/80 mb-6 text-center tracking-wider">
          Configurações da conta
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

          <div className="flex flex-col gap-4">
            {conta.map(item => (
              <div key={item} className="flex items-center gap-3">
                <button
                  onClick={() => toggleConta(item)}
                  className={`w-10 h-5 rounded-full transition-all duration-300 relative cursor-pointer flex-shrink-0 ${
                    toggledConta[item] ? 'bg-white/80' : 'bg-white/20'
                  }`}
                >
                  <span className={`absolute top-0.5 w-4 h-4 rounded-full transition-all duration-300 ${
                    toggledConta[item] ? 'left-5 bg-orange-500' : 'left-0.5 bg-white/60'
                  }`} />
                </button>
                <span className="text-[13px] text-white/90">{item}</span>
              </div>
            ))}
          </div>

          {/* Card plano */}
          <div className="border border-white/20 rounded-2xl p-5 bg-white/10 backdrop-blur-sm text-center">
            <p className="text-xs text-white/60 mb-1">Ouro Plus</p>
            <p className="text-lg font-bold">Miguel</p>
            <p className="text-xs text-white/60 mb-3">Companion Agent</p>
            <p className="text-2xl font-bold">$ 198</p>
            <p className="text-xs text-white/50">Anual</p>
          </div>
        </div>

        <div className="flex justify-center mt-10 mb-4">
          <button className="px-12 py-3 rounded-full border border-white/40 text-white font-semibold text-sm
            hover:bg-white/10 transition-all duration-300 cursor-pointer tracking-widest">
            EXCLUIR
          </button>
        </div>
      </div>
    </div>
  )
}