'use client';
import { useState, useEffect } from 'react';

interface DatePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (date: Date) => void;
  title: string;
  weeks?: number;
  selectedDays?: string[];
}

const DatePickerModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title,
  weeks,
  selectedDays = []
}: DatePickerModalProps) => {
  const currentDate = new Date();
  const [selectedDay, setSelectedDay] = useState(currentDate.getDate());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 20 }, (_, i) => currentDate.getFullYear() - 5 + i);

  const handleConfirm = () => {
    const selectedDate = new Date(selectedYear, selectedMonth, selectedDay);
    onConfirm(selectedDate);
  };

  if (!isOpen) return null;

  const formattedDate = `${months[selectedMonth]} ${selectedDay}, ${selectedYear}`;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 "
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-md shadow-2xl max-w-md w-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <h2 className="text-2xl text-center mb-8">
          {title}
        </h2>

        {/* Date Display */}
        <div className="flex gap-12 mb-8 justify-center items-center py-4">
          {/* Day Display */}
          <div className="flex flex-col items-center gap-1">
            {[selectedDay - 2, selectedDay - 1, selectedDay, selectedDay + 1, selectedDay + 2, selectedDay + 3].map((day, idx) => (
              <div
                key={idx}
                className={`text-center transition-all ${
                  idx === 2
                    ? 'text-foreground font-semibold text-2xl'
                    : 'text-muted-foreground/30 text-xl'
                }`}
              >
                {day > 0 && day <= 31 ? day : ''}
              </div>
            ))}
          </div>

          {/* Month Display */}
          <div className="flex flex-col items-center gap-1">
            {[-2, -1, 0, 1, 2, 3].map((offset, idx) => {
              const monthIndex = (selectedMonth + offset + 12) % 12;
              return (
                <div
                  key={idx}
                  className={`text-center transition-all ${
                    idx === 2
                      ? 'text-foreground font-semibold text-2xl'
                      : 'text-muted-foreground/30 text-xl'
                  }`}
                >
                  {months[monthIndex]}
                </div>
              );
            })}
          </div>

          {/* Year Display */}
          <div className="flex flex-col items-center gap-1">
            {[selectedYear - 2, selectedYear - 1, selectedYear, selectedYear + 1, selectedYear + 2, selectedYear + 3].map((year, idx) => (
              <div
                key={idx}
                className={`text-center transition-all ${
                  idx === 2
                    ? 'text-foreground font-semibold text-2xl'
                    : 'text-muted-foreground/30 text-xl'
                }`}
              >
                {year}
              </div>
            ))}
          </div>
        </div>

        {/* Note Section */}
        {weeks && selectedDays.length > 0 && (
          <div className="rounded-lg p-4 mb-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold">NB:</span> You've chosen a {weeks}-week schedule starting on {formattedDate}, 
              with sessions on {selectedDays.join(', ')}.
              <br />
              We'll automatically set your end date, and you can renew whenever you like — no worries!
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 py-3 text-red-500 hover:bg-red-50 rounded-sm transition-colors"
          >
            CANCEL
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 py-3 bg-primary text-primary-foreground  rounded-sm hover:bg-primary/90 transition-colors"
          >
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatePickerModal;
