'use client';
import { createListCollection } from '@chakra-ui/react';
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@/components/ui/select';
import { FilterValueChangeProps } from '@/types';

const FilterSelect = ({ onValueChange }: FilterValueChangeProps) => {
  const list = createListCollection({
    items: [
      { label: 'Last 1 day', value: '1' },
      { label: 'Last 7 days', value: '7' },
      { label: 'Last 30 days', value: '30' },
    ],
  });

  return (
    <SelectRoot
      collection={list}
      name='period'
      onValueChange={onValueChange}
      role='cy-button'
    >
      <SelectLabel fontWeight='400'>Filter Period</SelectLabel>

      <SelectTrigger>
        <SelectValueText placeholder='Period' />
      </SelectTrigger>

      <SelectContent>
        {list.items.map((period, index) => (
          <SelectItem
            item={period}
            key={`${period.value}-${index}`}
          >
            {period.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};

export default FilterSelect;
