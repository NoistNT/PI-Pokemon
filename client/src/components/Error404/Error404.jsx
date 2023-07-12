import error_img from '../../assets/error_img.png'
import {
  Container,
  Img,
  Title,
  Message
} from '../StyledComponents/StyledError404'

export default function Error404() {
  return (
    <Container>
      <Img src={error_img} alt='img not found' />
      <Title>ERROR 404</Title>
      <Message>You should not be here</Message>
    </Container>
  )
}
