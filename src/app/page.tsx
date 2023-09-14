"use client"
import { createContext, useContext, useEffect, useState } from 'react';

export default function Home() {
  const [compatibility, setCompatible] = useState({
    loading: true,
    isCompatible: false
  })
  const [project, setProject] = useState({
    frame: 0,
    framerate: 24,
    videosetting: {
      width: 1920,
      height: 1080,
    },
    track: {
      layers: [
        {
          "name": "Layer 1",
          "history": []
        }
      ],
      audio: [],
    }
  });

  useEffect(() => {
    if (window.navigator.appVersion == "IncogineEditor-Electron") {
      setCompatible({
        loading: false,
        isCompatible: true
      })
    } else {
      setCompatible({
        loading: false,
        isCompatible: false
      })
    }
  }, [])

  return (
    compatibility.isCompatible ? (
      <main className="w-full h-full fixed">
        
      </main>
    ) : (
      compatibility.loading ? (
        <main>
          Loading...
        </main>
      ) : (
        <main>
          Please use Incogine Editor to continue
        </main>
      )
    )
  )
}
