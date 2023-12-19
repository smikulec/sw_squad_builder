import { cn } from '@/lib/utils';
import React from 'react';
import ReactSelect, { MultiValue, Props } from 'react-select';

interface SelectProps {
  options: { label: string; value: string }[];
  value?: { label: string; value: string }[];
  defaultValue?: { label: string; value: string }[];
  onChange?: (
    selectedOption: MultiValue<{ label: string; value: string }>
  ) => void;
  label?: string;
  className?: string;
  error?: { message?: string };
}

const Select: React.FC<SelectProps & Props> = ({
  options,
  value,
  defaultValue,
  onChange,
  label,
  className,
  error,
  ...selectProps
}) => {
  return (
    <div className="relative pb-4">
      <label className={cn('block', className)}>
        <span className="mb-1 text-sm font-medium text-gray-800 dark:text-gray-200">
          {label}
        </span>
        <ReactSelect
          options={options}
          value={value}
          defaultValue={defaultValue}
          isMulti={true}
          onChange={onChange}
          {...selectProps}
        />
        {!!error && (
          <span className="absolute bottom-0 left-0 text-xs text-red-500">
            {error.message}
          </span>
        )}
      </label>
    </div>
  );
};

export default Select;
