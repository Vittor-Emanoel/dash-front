import { useState } from 'react';
import { cn } from '../../../../components/lib/lib';
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
    <Select value={value} onValueChange={handleSelect}>
      <SelectTrigger className="w-[180px] ">
        <SelectValue placeholder={selectedValue} />
      </SelectTrigger>
      <SelectContent className="z-[100]">
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem
              className={cn(
                selectedValue && 'text-sm transition-all translate-y-0',
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
