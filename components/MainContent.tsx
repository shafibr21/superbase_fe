'use client';
import { useState } from 'react'
import WeekDetailsPanel from './WeekDetailsPanel'
import WeekCard from './WeekCard'
import DatePickerModal from './DatePickerModal'
import { ChevronLeft } from 'lucide-react'
import StarImage from './StarImage';
import SharkImage from './SharkImage';

const weekOptions = [
  { weeks: 1, price: 35, days: 5 },
  { weeks: 2, price: 70, days: 10 },
  { weeks: 3, price: 105, days: 15 },
  { weeks: 4, price: 140, days: 20 },
];

const MainContent = () => {
    const [selectedWeeks, setSelectedWeeks] = useState<number | null>(null);
      const [startDate, setStartDate] = useState<string>('');
      const [endDate, setEndDate] = useState<string>('');
      const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
      const [datePickerType, setDatePickerType] = useState<'start' | 'end'>('start');
    
      const selectedDays = ['Mon', 'Tue', 'Thu', 'Fri', 'Sat'];
    
      const handleDateConfirm = (date: Date) => {
        // Prototype: hardcoded dates for demonstration
        setStartDate('06/18/2026');
        setEndDate('02/30/2026');
        setIsDatePickerOpen(false);
      };
    
      const openDatePicker = (type: 'start' | 'end') => {
        setDatePickerType(type);
        setIsDatePickerOpen(true);
      };

  return (
    <div>
    {/* Star Decorations - Fixed positions */}
      <StarImage />
    <main className="container mx-auto px-4 lg:px-32 py-6 lg:py-25 md:py-8 relative z-10">
        {/* Back Link */}
        <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors mb-4">
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm">Regular aftercare program</span>
        </button>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl  text-foreground mb-1">
          How many weeks you like to continue?
        </h1>
        <p className="text-muted-foreground text-sm md:text-base mb-6 md:mb-8">
          Based on your selection {selectedDays.join(', ')}
        </p>

        {/* Week Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {weekOptions.map((option) => (
            <WeekCard
              key={option.weeks}
              weeks={option.weeks}
              price={option.price}
              days={option.days}
              isSelected={selectedWeeks === option.weeks}
              onClick={() => setSelectedWeeks(option.weeks)}
            />
          ))}
        </div>

        {/* Week Details Panel - Show when a week is selected */}
        {selectedWeeks && (
          <WeekDetailsPanel
            weeks={selectedWeeks}
            daysPerWeek={5}
            startDate={startDate}
            endDate={endDate}
            onStartDateClick={() => openDatePicker('start')}
            onEndDateClick={() => openDatePicker('end')}
          />
        )}
      </main>
      {/* Shark Mascot - Hidden on small mobile, visible from sm up */}
      <SharkImage />
      
      {/* Date Picker Modal */}
      <DatePickerModal
        isOpen={isDatePickerOpen}
        onClose={() => setIsDatePickerOpen(false)}
        onConfirm={handleDateConfirm}
        title={datePickerType === 'start' ? 'Please select your start date' : 'Please select your end date'}
        weeks={selectedWeeks || undefined}
        selectedDays={selectedDays}
      />
      </div>
  )
}

export default MainContent