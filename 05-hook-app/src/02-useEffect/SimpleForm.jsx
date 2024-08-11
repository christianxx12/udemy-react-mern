import { useState, useEffect } from 'react'
import Message from './Message'

export function SimpleForm() {
  const [formState, setFormState] = useState({
    username: 'user',
    email: 'user@gmail.com',
  })

  const { username, email } = formState

  function onInputChange({ target }) {
    const { name, value } = target
    // console.table(`name: ${name} -- value: ${value}`)
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  useEffect(() => {
    // console.log('useEffect called!')
  }, [])

  useEffect(() => {
    // console.log('formState called!')
  }, [formState])

  useEffect(() => {
    // console.log('email called!')
  }, [email])

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="correo@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === 'user2' && <Message />}
    </>
  )
}
