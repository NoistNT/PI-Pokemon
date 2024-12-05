import icon_remove from '@/assets/icon_remove.svg';
import {
  ErrorSpan,
  FormItem,
  IconRemoveType,
  Label,
  LabelInputContainer,
  PokemonTypesList,
  SelectBox,
  TypeList,
  TypeListContainer,
} from '@/components/StyledComponents/StyledForm';
import { capitalize } from '@/helpers/helpers';
import type { Pokemon, Types } from '@/types/types';

interface Props {
  errors: string;
  pokemonType: Types[];
  setPokemon: React.Dispatch<React.SetStateAction<Pokemon>>;
  types: Types[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function FormSelect({ errors, pokemonType, setPokemon, types, onChange }: Props) {
  const handleRemove = (typeName: string) => {
    setPokemon((pokemon) => ({
      ...pokemon,
      type: pokemon.type.filter(({ name }) => name !== typeName),
    }));
  };

  const pokemonTypesList = types.map(({ _id, name }) => (
    <option
      key={_id}
      value={name}
    >
      {capitalize(name)}
    </option>
  ));

  const pokemonTypesElement = pokemonType.map(({ name }) => {
    return (
      <TypeListContainer
        key={name}
        onClick={() => handleRemove(name)}
      >
        <TypeList key={name}>{capitalize(name)}</TypeList>
        <IconRemoveType
          alt="remove"
          src={icon_remove}
        />
      </TypeListContainer>
    );
  });

  return (
    <FormItem>
      <LabelInputContainer>
        <Label htmlFor="type">Type:</Label>
        <SelectBox
          defaultValue="normal"
          id="type"
          name="type"
          onChange={onChange}
        >
          {pokemonTypesList}
        </SelectBox>
      </LabelInputContainer>
      {errors ? <ErrorSpan>{errors}</ErrorSpan> : null}
      <PokemonTypesList>{pokemonTypesElement}</PokemonTypesList>
    </FormItem>
  );
}
