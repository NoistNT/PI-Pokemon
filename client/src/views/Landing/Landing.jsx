import { useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Welcome to Pokémon App</h1>
      <h2>Discover information about Pokémons</h2>
      <button onClick={() => navigate('/pokemon')}>Get started</button>
    </div>
  )
}
