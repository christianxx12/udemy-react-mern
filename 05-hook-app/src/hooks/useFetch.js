import { useState, useEffect } from 'react'

const localCache = {}

export function useFetch(url) {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  })

  useEffect(() => {
    getFetch()
  }, [url])

  function setLoadingState() {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    })
  }

  async function getFetch() {
    // si el localCache tiene un valor (es diferente de undefined)
    if (localCache[url]) {
      console.log('Usando caché')
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      })
      // al poner el return ya no ejecuta el setLoadingState y tampoco dispara la petición http ni el Sleep
      return
    }

    setLoadingState()

    const response = await fetch(url)

    // Sleep
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (!response.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: response.status,
          message: response.statusText,
        },
      })
      return
    }

    const data = await response.json()
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    })

    //Manejo del caché
    localCache[url] = data
  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}
