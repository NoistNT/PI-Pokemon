import error_img from '@/assets/error_img.webp'
import {
  Container,
  Img,
  Message,
  Title
} from '@/components/StyledComponents/StyledError404'

export default function Error404() {
  return (
    <Container>
      <Img alt="img not found" src={error_img} />
      <Title>ERROR 404</Title>
      <Message>You should not be here</Message>
    </Container>
  )
}
