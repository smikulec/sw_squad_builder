import { cn } from '@/lib/utils';
import {
  ChangeEvent,
  FocusEvent,
  InputHTMLAttributes,
  forwardRef,
} from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password' | 'email' | 'number';
  label?: string;
  error?: { message?: string };
  name?: string;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  inputClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      error,
      name,
      defaultValue,
      onChange,
      onBlur,
      inputClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn('relative pb-4', className)}>
        <label>
          <div className="mb-1 text-sm font-medium text-gray-800 dark:text-gray-200">
            {label}
          </div>
          <input
            ref={ref}
            name={name}
            className={cn(
              'flex h-9 w-full rounded-md border border-input bg-slate-100 px-3 py-4 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
              inputClassName
            )}
            defaultValue={defaultValue}
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            {...props}
          />
        </label>
        {!!error && (
          <span className="absolute bottom-0 left-0 text-xs text-red-500">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
