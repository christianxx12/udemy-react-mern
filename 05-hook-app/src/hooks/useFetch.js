import { useState, useEffect } from "react"

export function useFetch(url) {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null
  })

  useEffect(() => {
    getFetch()
  }, [url])

  function setLoadingState() {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null
    })
  }

  async function getFetch() {
    setLoadingState()
    const response = await fetch(url)

    if (!response.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: response.status,
          message: response.statusText
        }
      })
      return
    }

    const data = await response.json()
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null
    })
    console.log(data)

  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}
