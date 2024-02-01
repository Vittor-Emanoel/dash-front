import { cn } from '@components/lib/lib';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../../../components/ui/select';

interface SelectDropdownProps {
  placeholder: string;
  error?: string;
  onChange?(value: string): void;
  value?: string;
  label: string;
  isLoading: boolean;
  options: {
    id: string;
    name: string;
  }[];
}

export function SelectDropdown({
  value,
  placeholder,
  options,
  onChange,
  label,
}: SelectDropdownProps) {
  const [selectedValue, setSelectedValue] = useState(value ?? placeholder);

  function handleSelect(value: string) {
    setSelectedValue(value);
    onChange?.(value);
  }
  return (
    <Select defaultValue={value} onValueChange={handleSelect}>
      <SelectTrigger className="h-[54px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="z-[100]">
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem
              className={cn(
                selectedValue &&
                  'text-sm transition-all translate-y-0 text-zinc-500',
              )}
              value={option.id}
              key={option.id}
            >
              {option.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
