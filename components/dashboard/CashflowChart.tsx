"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { cashflowData } from "@/data/mock-data";

const CashflowChart = () => {
  const [range, setRange] = useState("year");

  return (
    <Card className="lg:col-span-8 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg">Cashflow</CardTitle>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-base sm:text-2xl font-bold">$562,000</span>
            <span className="text-xs sm:text-sm text-muted-foreground">
              Total Balance
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="flex items-center gap-1 text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full bg-[#0f172a]" /> Income
            </span>
            <span className="flex items-center gap-1 text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full bg-[#84cc16]" /> Expense
            </span>
          </div>
          <Select value={range} onValueChange={setRange}>
            <SelectTrigger className="h-8 text-xs w-24 sm:w-36">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="6m">Last 6 Months</SelectItem>
              <SelectItem value="3m">Last 3 Months</SelectItem>
              <SelectItem value="1m">Last 1 Month</SelectItem>
              <SelectItem value="7d">Last 7 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={cashflowData} barGap={8}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#f1f5f9"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#94a3b8" }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#94a3b8" }}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip
              cursor={{ fill: "#f8fafc" }}
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />
            <Bar
              dataKey="income"
              fill="#0f172a"
              radius={[4, 4, 4, 4]}
              barSize={12}
            />
            <Bar
              dataKey="expense"
              fill="#84cc16"
              radius={[4, 4, 4, 4]}
              barSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default CashflowChart;
