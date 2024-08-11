import { useState } from "react"

export function useForm(initialForm = {}) {

  const [formState, setFormState] = useState(initialForm)

  function onInputChange({ target }) {
    const { name, value } = target

    setFormState({
      ...formState,
      [name]: value,
    })
  }

  // Resetea el formulario
  function onResetForm() {
    setFormState(initialForm)
  }

  return {
    ...formState,
    onResetForm,
    formState,
    onInputChange
  }
}
