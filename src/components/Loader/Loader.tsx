import { LoadingContainer, Ring } from '@/components/StyledComponents/StyledLoader';

function Loader() {
  return (
    <LoadingContainer>
      <Ring>
        <div />
        <div />
        <div />
        <div />
      </Ring>
      <span>Loading</span>
    </LoadingContainer>
  );
}

export { Loader };
