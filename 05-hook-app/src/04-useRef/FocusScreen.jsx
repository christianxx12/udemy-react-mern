import { useRef } from "react"

export function FocusScreen() {

  const inputRef = useRef()

  function onClick() {
    // document.querySelector('input').select()
    inputRef.current.select()
    console.log(inputRef)
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button
        className="btn btn-primary mt-2"
        onClick={onClick}
      >
        Set Focus
      </button>
    </>
  )
}
