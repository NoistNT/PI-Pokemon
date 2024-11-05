import {
  ErrorSpan,
  FormItem,
  Input,
  Label,
  LabelInputContainer
} from '@/components/StyledComponents/StyledForm'
import { capitalize } from '@/helpers/helpers'

interface Props {
  errors: string
  label: string
  placeholder?: string
  type: string
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function LabelWithInput({
  errors,
  label,
  placeholder,
  type,
  value,
  onChange
}: Props) {
  return (
    <FormItem>
      <LabelInputContainer>
        <Label htmlFor={label}>{capitalize(label)}: </Label>
        <Input
          name={label}
          placeholder={placeholder}
          type={type}
          value={value === 0 ? '' : value}
          onChange={onChange}
        />
      </LabelInputContainer>
      {errors ? <ErrorSpan>{errors}</ErrorSpan> : null}
    </FormItem>
  )
}
