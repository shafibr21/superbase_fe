import DateInput from './DateInput';

interface WeekDetailsPanelProps {
  weeks: number;
  daysPerWeek: number;
  startDate: string;
  endDate: string;
  onStartDateClick: () => void;
  onEndDateClick: () => void;
}

const WeekDetailsPanel = ({ 
  weeks, 
  daysPerWeek, 
  startDate, 
  endDate,
  onStartDateClick,
  onEndDateClick,
}: WeekDetailsPanelProps) => {
  const totalDays = weeks * daysPerWeek;

  return (
    <div className="bg-card rounded-2xl p-5 md:p-8 mt-6 border border-border/60 shadow-sm max-w-full mx-auto">
      {/* Header */}
      <div className="text-center mb-5 md:mb-6">
        <h3 className="font-bold text-base md:text-lg text-foreground">
          {weeks} WEEKS
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground">
          ({weeks} Weeks X {daysPerWeek} Days) = {totalDays} Days
        </p>
      </div>

      {/* Date Inputs */}
      <div className="flex flex-row gap-4">
        <DateInput
          label="Start date"
          value={startDate}
          onClick={onStartDateClick}
          placeholder="Start date"
        />
        {startDate && (
          <DateInput
            label="End date"
            value={endDate}
            onClick={onEndDateClick}
            placeholder="End date"
          />
        )}
      </div>
    </div>
  );
};

export default WeekDetailsPanel;
