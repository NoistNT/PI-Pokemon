/* eslint-disable react/prop-types */
import { CardsContainer } from '../StyledComponents/StyledCards'
import Card from '../Card/Card'
import { useCallback, useEffect } from 'react'

export default function Cards({ pokemons }) {
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src

        observer.unobserve(img)
      }
    })
  }

  const observeImages = useCallback(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    })

    const lazyImages = document.querySelectorAll('.lazy')
    lazyImages.forEach((image) => {
      observer.observe(image)
    })
  }, [])

  useEffect(() => {
    observeImages()
  }, [observeImages, pokemons])

  return (
    <CardsContainer>
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </CardsContainer>
  )
}
