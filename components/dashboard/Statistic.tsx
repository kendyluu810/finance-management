"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { useState } from "react";
import { expenseStats } from "@/data/mock-data";

const Statistic = () => {
  const [statRange, setStatRange] = useState("1m");
  return (
    <Card className="lg:col-span-3 shadow-sm">
      <CardHeader className="pb-0 flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Statistic</CardTitle>
        <Select value={statRange} onValueChange={setStatRange}>
          <SelectTrigger className="h-8 text-xs w-32 text-muted-foreground">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1m">This Month</SelectItem>
            <SelectItem value="3m">Last 3 Months</SelectItem>
            <SelectItem value="6m">Last 6 Months</SelectItem>
            <SelectItem value="year">This Year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="h-[180px] w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={expenseStats}
                innerRadius={55}
                outerRadius={75}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {expenseStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          {/* Text in middle of Donut */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-xs text-muted-foreground">Total Expense</span>
            <span className="text-xl font-bold">$3,500</span>
          </div>
        </div>

        <div className="w-full space-y-3 mt-2">
          {expenseStats.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-5 rounded-md flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {Math.round((item.value / 3500) * 100)}%
                </div>
                <span className="text-slate-600">{item.name}</span>
              </div>
              <span className="font-semibold">${item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Statistic;
