/* eslint-disable react/prop-types */
import { CardsContainer } from '../StyledComponents/StyledCards'
import Card from '../Card/Card'

export default function Cards({ pokemons }) {
  const lazyImages = document.querySelectorAll('.lazy')

  const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Specify the threshold for intersection
  }

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        const src = img.getAttribute('data-src')

        // Replace the placeholder with the actual image source
        img.src = src

        // Stop observing the image
        observer.unobserve(img)
      }
    })
  }

  const observer = new IntersectionObserver(handleIntersection, options)

  lazyImages.forEach((image) => {
    observer.observe(image)
  })

  return (
    <CardsContainer>
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </CardsContainer>
  )
}
