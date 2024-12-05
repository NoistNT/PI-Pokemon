import type { Pokemon } from '@/types/types';
import {
  ButtonsContainer,
  ButtonText,
  Spinner,
  SubmitButton,
} from '@/components/StyledComponents/StyledForm';
import type { emptyErrors } from '@/helpers/helpers';
import { resetErrors, resetPokemonForm } from '@/helpers/helpers';

interface Props {
  isLoading: boolean;
  setErrors: React.Dispatch<React.SetStateAction<typeof emptyErrors>>;
  setPokemon: React.Dispatch<React.SetStateAction<Pokemon>>;
}

export function FormFooter({ isLoading, setErrors, setPokemon }: Props) {
  return (
    <ButtonsContainer>
      <SubmitButton
        disabled={isLoading}
        type="submit"
      >
        <ButtonText>{isLoading ? <Spinner /> : 'Create Pokémon'}</ButtonText>
      </SubmitButton>
      <SubmitButton
        type="button"
        onClick={() => {
          resetErrors(setErrors);
          resetPokemonForm(setPokemon);
        }}
      >
        <ButtonText>Clear form</ButtonText>
      </SubmitButton>
    </ButtonsContainer>
  );
}
