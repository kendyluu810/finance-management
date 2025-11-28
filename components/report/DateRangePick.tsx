/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Download, Filter } from "lucide-react";

const DateRangePick = () => {
  const [dateRange, setDateRange] = useState<Date[] | undefined>([
    new Date(2025, 0, 1),
    new Date(),
  ]);
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2">
      {/* Date Range Picker */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full sm:w-[250px] justify-start text-left font-normal",
              !dateRange && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange && dateRange[0] ? (
              dateRange[1] ? (
                `${format(dateRange[0], "LLL dd, y")} - ${format(
                  dateRange[1],
                  "LLL dd, y"
                )}`
              ) : (
                format(dateRange[0], "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            initialFocus
            mode="range"
            // @ts-ignore
            selected={dateRange}
            // @ts-ignore
            onSelect={setDateRange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>

      <Button variant="outline" size="icon" className="shrink-0">
        <Filter className="h-4 w-4" />
      </Button>
      <Button className="bg-[#0f172a] text-white hover:bg-slate-800 shrink-0">
        <Download className="mr-2 h-4 w-4" /> Export PDF
      </Button>
    </div>
  );
};

export default DateRangePick;
