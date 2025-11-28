/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import ExpenseBreakdownChart from "@/components/ExpenseBreakdownChart";
import IncomeExpenseChart from "@/components/IncomeExpenseChart";
import KPICard from "@/components/KPICard";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  Download,
  Filter,
  ArrowUpRight,
  ArrowDownLeft,
  DollarSign,
  BarChart2,
} from "lucide-react";
import { useState } from "react";

const ReportPage = () => {
  const [dateRange, setDateRange] = useState<Date[] | undefined>([new Date(2025, 0, 1), new Date()]);
  return (
   <div className="flex flex-col gap-6 py-2 pb-20">
      {/* --- Header & Filter Section --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Financial Reports</h2>
          <p className="text-muted-foreground text-sm">
            Detailed insights into your Income and Expenses.
          </p>
        </div>
        
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
      </div>

      <Separator />

      {/* --- KPI Summary Section --- */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KPICard 
          title="Total Revenue" 
          value="$15,200.00" 
          change="18.5%" 
          trend="up" 
          icon={DollarSign} 
        />
        <KPICard 
          title="Total Expense" 
          value="$9,000.00" 
          change="3.2%" 
          trend="up" 
          icon={ArrowUpRight} 
        />
        <KPICard 
          title="Net Profit" 
          value="$6,200.00" 
          change="25.1%" 
          trend="up" 
          icon={ArrowDownLeft} 
        />
        <KPICard 
          title="Profit Margin" 
          value="40.8%" 
          change="1.1%" 
          trend="down" 
          icon={BarChart2} 
        />
      </div>

      {/* --- Detailed Charts Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Income vs Expense Chart (Area Chart) */}
        <IncomeExpenseChart />
        
        {/* Expense Breakdown Chart (Pie Chart) */}
        <ExpenseBreakdownChart />
      </div>
      
      {/* --- Report Table (Optional) --- */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Transaction Summary Table</CardTitle>
          <p className="text-sm text-muted-foreground">Detailed view of the filtered transactions for this period.</p>
        </CardHeader>
        <CardContent>
            {/* Đây sẽ là nơi hiển thị bảng chi tiết các giao dịch (giống như trang Transaction)
                Hiện tại chỉ là placeholder để giữ layout. */}
            <div className="h-40 flex items-center justify-center border border-dashed rounded-lg text-muted-foreground">
                [Placeholder for Detailed Transaction Table]
            </div>
        </CardContent>
      </Card>

    </div>
  );
}

export default ReportPage