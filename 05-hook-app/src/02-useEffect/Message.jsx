import { useEffect, useState } from 'react'

export default function Message() {
  const [coordenadas, setCoordenadas] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function onMouseMove({ x, y }) {
      setCoordenadas({ x, y })
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <h3>Usuario ya existe</h3>

      {JSON.stringify(coordenadas)}
    </>
  )
}
