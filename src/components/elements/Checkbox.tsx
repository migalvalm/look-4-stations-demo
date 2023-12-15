import { Text } from '@/components/elements/Text'

interface CheckboxProps {
  label: string;
  className: string;
  checked: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({label, className, checked, value, onChange}) => {
  return (
    <div className={`${className}`}> 
      <Text className="mr-auto whitespace-normal text-sub-title">{label}</Text>
      <input
        checked={checked}
        type="checkbox"
        value={value}
        onChange={onChange}
        className="form-checkbox border-normal-100 ml-2 h-4 w-4 rounded-sm  text-normal-100 checked:text-normal-100"
      />
    </div>
  )
}

export default Checkbox