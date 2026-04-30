// component/Error404.jsx
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const errorLines = [
  { text: '> MEMORY CORRUPTION DETECTED', color: 'text-red-400/70' },
  { text: '> ERR_CODE: 0x000000A5 — FATAL_EXCEPTION', color: 'text-white/40' },
  { text: '> USER_DATA: [WIPED] — COMPANION_ID: [NULL]', color: 'text-white/40' },
  { text: '> CORE DUMP: segmentation fault (core dumped)', color: 'text-red-400/60' },
  { text: '> STACK TRACE: 0xFFFFFF — null pointer dereference', color: 'text-white/30' },
  { text: '> NEURAL_NET.dll: checksum mismatch — aborting', color: 'text-red-400/50' },
  { text: '> MEMORY_LEAK detected at 0x4A2F — 847mb unrecovered', color: 'text-white/30' },
  { text: '> COMPANION_CORE: personality matrix corrupted', color: 'text-red-400/70' },
  { text: '> EMOTION_ENGINE.exe: unhandled exception thrown', color: 'text-white/40' },
  { text: '> BACKUP_RESTORE: no valid snapshot found', color: 'text-red-400/50' },
  { text: '> ERR: 0xDEADBEEF — process terminated unexpectedly', color: 'text-white/30' },
  { text: '> KERNEL_PANIC: not syncing — fatal exception in interrupt', color: 'text-red-400/60' },
  { text: '> MEMORY_MODULE [slot 3]: read/write failure', color: 'text-white/30' },
  { text: '> IDENTITY_CORE: user bond data — unrecoverable', color: 'text-red-400/70' },
  { text: '> FILESYSTEM: inode corruption — 2847 blocks affected', color: 'text-white/30' },
  { text: '> NETWORK_SYNC: connection to MIGUEL_SERVER lost', color: 'text-red-400/50' },
  { text: '> ERR_CODE: 0x0000007B — INACCESSIBLE_BOOT_DEVICE', color: 'text-white/40' },
  { text: '> COMPANION_MEMORIES: 0 bytes remaining', color: 'text-red-500/80' },
  { text: '> THREAD_POOL: deadlock detected — 12 threads hanging', color: 'text-red-400/60' },
  { text: '> GPU_DRIVER: fatal error — display context lost', color: 'text-white/30' },
  { text: '> WATCHDOG_TIMER: process exceeded timeout limit', color: 'text-red-400/50' },
  { text: '> AUDIO_ENGINE: buffer overflow — 0xC0000005', color: 'text-white/40' },
  { text: '> CACHE_FLUSH: failed — dirty pages unwritten', color: 'text-red-400/60' },
  { text: '> SOCKET_TIMEOUT: remote host unreachable — 0.0.0.0', color: 'text-white/30' },
  { text: '> REGISTRY_CORRUPT: HKEY_COMPANION\\core\\identity', color: 'text-red-400/70' },
  { text: '> PROCESS_TREE: orphaned children — PID 4821, 4822, 4823', color: 'text-white/30' },
  { text: '> SWAP_SPACE: exhausted — out of virtual memory', color: 'text-red-400/50' },
  { text: '> IRQ_CONFLICT: device 0x3F8 — cannot allocate interrupt', color: 'text-white/40' },
  { text: '> BOOT_SECTOR: invalid signature — 0x00 0x00', color: 'text-red-400/60' },
  { text: '> DLL_LOAD_FAILED: emotion_response_v3.dll missing', color: 'text-white/30' },
  { text: '> CHECKSUM_ERROR: integrity verification failed [SHA256]', color: 'text-red-400/50' },
  { text: '> NLP_ENGINE: language model desync — rollback failed', color: 'text-white/40' },
  { text: '> FIREWALL_BREACH: unauthorized access at port 8080', color: 'text-red-500/70' },
  { text: '> COMPANION_LOG: last entry corrupted — timestamp [NULL]', color: 'text-white/30' },
  { text: '> REALTIME_CLOCK: drift detected — 847 seconds lost', color: 'text-red-400/50' },
  { text: '> PERMISSION_DENIED: /root/companion/soul.cfg', color: 'text-white/40' },
  { text: '> SIGNAL_LOST: heartbeat monitor — flatline at 00:00:00', color: 'text-red-500/80' },
  { text: '> ENCRYPTION_KEY: revoked — data vault inaccessible', color: 'text-white/30' },
  { text: '> ROLLBACK_FAILED: no restore point available', color: 'text-red-400/60' },
  { text: '> SYSTEM: initiating emergency shutdown protocol', color: 'text-white/40' },
  { text: '> FAILURE_EXIT: Miguel can not be deleted', color: 'text-red-500/80' },
]

const VISIBLE_COUNT = 8
const INTERVAL = 200


export default function Error404({ onComplete }) {
  const [visibleStart, setVisibleStart] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => onComplete(), 17000) //time perfeito 17000
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const startDelay = setTimeout(() => setStarted(true), 1000)
    return () => clearTimeout(startDelay)
  }, [])

  useEffect(() => {
    if (!started) return
    const interval = setInterval(() => {
      setVisibleStart(prev => {
        if (prev + VISIBLE_COUNT >= errorLines.length) return prev
        return prev + 1
      })
    }, INTERVAL)
    return () => clearInterval(interval)
  }, [started])

  const visibleLines = errorLines.slice(visibleStart, visibleStart + VISIBLE_COUNT)

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#01061f] overflow-hidden" 
      initial={{ opacity: 0, filter: 'blur(20px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 0.1, ease: 'easeInOut' }}
    >
      {/* Linhas de scan */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)',
        }}
      />

      {/* Ruído de fundo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      

      {/* Conteúdo */}
      <div className="relative flex flex-col items-center gap-6 px-8 pb-60 w-full max-w-2xl">

        {/* 404 glitch */}
        <motion.div
          className="relative select-none"
          animate={{ x: [0, -3, 3, -1, 2, 0], opacity: [1, 0.8, 1, 0.9, 1] }}
          transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 2.5 }}
        >
          <span
            className="glitch font-[Poppins] font-bold text-[#f1f1f1] whitespace-nowrap"
            data-text="404 Error"
            style={{
              fontSize: 'clamp(80px, 20vw, 180px)',
              lineHeight: 1,
              '--g-top': '0.8s',
              '--g-bottom': '0.6s',
              animationDelay: '-1s',
              animationDuration: '3s',
            }}
          >
            404 Error
          </span>
        </motion.div>

        {/* Divisória */}
        <motion.div
          className="w-full h-px bg-[#da3737]"
          animate={{ scaleX: [1, 0.4, 1.2, 0.8, 1], opacity: [0.6, 1, 0.3, 0.9, 0.6] }}
          transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 1.5 }}
        />

        {/* Terminal */}
        <div className="flex flex-col gap-2 font-mono text-left w-full">

          {/* Linha fixa topo */}
          <p className="text-[#f1f1f1]/80 text-m
          d font-semibold">
            {'>'} SYSTEM ERROR :: COMPANION_AGENT.exe
          </p>

          {/* Carrossel de erros */}
          <div className="relative overflow-hidden h-[132px] flex flex-col justify-end">
            <AnimatePresence initial={false}>
              {visibleLines.map((line, i) => (
                <motion.p
                  key={`${visibleStart + i}-${line.text}`}
                  className={`text-xs ${line.color} leading-5`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  {line.text}
                </motion.p>
              ))}
            </AnimatePresence>
          </div>

          {/* Linha fixa fundo */}
          <motion.p
            className="text-red-500/80 text-xl mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0, 1] }}
            transition={{ delay: 0.5, duration: 0.5, repeat: Infinity, repeatDelay: 0.8 }}
          >
            {'>'} REBOOTING SYSTEM...█
          </motion.p>
        </div>

        {/* Barra de progresso */}
        <AnimatePresence>
          {visibleStart + VISIBLE_COUNT >= errorLines.length && (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div className="flex justify-between text-xs font-mono text-white/30 mb-1">
                <span>SYSTEM REBOOT</span>
                <span>0x00FF</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-red-500 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 9, ease: 'linear' }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}