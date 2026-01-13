import { Calendar } from 'lucide-react';

interface DateInputProps {
  label: string;
  value: string;
  onClick: () => void;
  placeholder?: string;
}

const DateInput = ({ label, value, onClick, placeholder = 'Select date' }: DateInputProps) => {
  return (
    <div className="relative flex-1">
      <label className="absolute -top-2.5 left-3 bg-card px-1 text-xs text-muted-foreground">
        {label}
      </label>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-4 py-3 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors text-left"
      >
        <span className={value ? 'text-foreground' : 'text-muted-foreground'}>
          {value || placeholder}
        </span>
        <Calendar className="w-5 h-5 text-muted-foreground" />
      </button>
    </div>
  );
};

export default DateInput;
