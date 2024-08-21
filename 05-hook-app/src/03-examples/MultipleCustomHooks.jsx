import { useCounter, useFetch } from '../hooks'
import { LoadingMessage } from './LoadingMessage'
import { PokemonCard } from './PokemonCard'

export function MultipleCustomHooks() {

  const { counter, decrement, increment } = useCounter(1)
  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

  return (
    <>
      <h1>Información de Pokemón</h1>
      <hr />

      {
        isLoading
          ? <LoadingMessage />
          : (
            <PokemonCard
              id={data.id}
              name={data.name}
              sprites={[
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.back_shiny
              ]}
            />
          )
      }

      <h2>{data?.name}</h2>

      <button onClick={() => counter > 1 ? decrement() : null} className='btn btn-primary mt-2'>Anterior</button>
      <button onClick={() => increment()} className='btn btn-primary mt-2'>Siguiente</button>
    </>
  )
}