
import { Check } from 'lucide-react';
import Image from 'next/image';

interface WeekCardProps {
  weeks: number;
  price: number;
  days: number;
  isSelected: boolean;
  onClick: () => void;
}

const WeekCard = ({ weeks, price, days, isSelected, onClick }: WeekCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`relative bg-card rounded-sm border-2 p-4 md:p-6 cursor-pointer transition-all duration-200 shadow-md ${
        isSelected ? 'border-primary shadow-md' : 'border-border/50'
      }`}
    >
      {/* Radio indicator */}
      <div className={`absolute top-3 right-3 md:top-4 md:right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
        isSelected ? 'bg-primary border-primary' : 'border-muted-foreground/30 bg-card'
      }`}>
        {isSelected && (
          <Check className="w-3 h-3 text-primary-foreground" />
        )}
      </div>

      {/* Calendar Image */}
      <div className="flex justify-center mb-3 md:mb-4 pt-2">
        <Image
          src="/calender.svg"
          alt={`${weeks} week calendar`}
          width={96}
          height={96}
          className="object-contain"
        />
      </div>

      {/* Week info */}
      <div className="text-center">
        <h3 className={`font-bold text-xs sm:text-sm uppercase tracking-wide ${isSelected ? 'text-primary' : 'text-foreground'}`}>
          {weeks} WEEK{weeks > 1 ? 'S' : ''}
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm mt-1">
          ${price} for {days} days
        </p>
      </div>
    </div>
  );
};

export default WeekCard;
