import { useEffect, useRef, useState } from "react"
import bgmFile from "../../../public/bgm.mp3"; // src 폴더 기준
import "./index.scss"

export const BGM = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [on, setOn] = useState(false)
  const startedRef = useRef(false) // 최초 자동 재생 실행 체크 (1회만)
  const fadeRef = useRef<number | null>(null) // fade In

  const startFadeIn = () => {
    const audio = audioRef.current
    if (!audio) return

    clearFade() //fade interval 제거

    fadeRef.current = window.setInterval(() => {
      if (audio.volume >= 0.45) { // 목표 볼륨
        audio.volume = 0.45
        clearFade() // 인터벌 정리
        return
      }

      audio.volume += 0.015 //볼륨 증가 속도
    }, 100) // 100ms 간격 → 약 2초 페이드인
  }

  
  //안 하면 볼륨이 계속 올라가서 "안 꺼지는 현상" 발생
  const clearFade = () => {
    if (fadeRef.current !== null) {
      clearInterval(fadeRef.current)
      fadeRef.current = null
    }
  }

  
  //최초 사용자 터치 감지
  //모바일 브라우저는 "사용자 제스처" 없으면 소리 재생 차단
  useEffect(() => {
    const handleFirstTouch = () => {
      if (!audioRef.current || startedRef.current) return

      startedRef.current = true
      const audio = audioRef.current

      setTimeout(() => {
        audio.volume = 0.01
        audio.loop = true

        audio.play()
          .then(() => {
            startFadeIn()
            setOn(true)
          })
          .catch(() => {
            // 재생 실패 시 무시 (iOS 예외 대비)
          })
      }, 1000)
      
    }

    // 클릭 / 터치
    document.addEventListener("click", handleFirstTouch, { once: true })
    document.addEventListener("touchstart", handleFirstTouch, { once: true })

    return () => {
      document.removeEventListener("click", handleFirstTouch)
      document.removeEventListener("touchstart", handleFirstTouch)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (on) {
      audio.play().catch(() => {})
    } else {
      clearFade()
      audio.pause()

      //audio.currentTime = 0
    }
  }, [on])

  return (
    <div className="bgm-floating">
      <button onClick={() => setOn(v => !v)}>
        {on ? "BGM ON" : "BGM OFF"}
      </button>

      <audio ref={audioRef} src={bgmFile} preload="auto"/>
    </div>
  )
}