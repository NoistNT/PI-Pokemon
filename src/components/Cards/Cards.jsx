import { useCallback, useEffect } from 'react'

import Card from '@/components/Card/Card'
import {
  CardsContainer,
  Container
} from '@/components/StyledComponents/StyledCards'

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
    <Container>
      <CardsContainer>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </CardsContainer>
    </Container>
  )
}
