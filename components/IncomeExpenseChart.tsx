"use client";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { financialData } from "@/data/mock-data";

const IncomeExpenseChart = () => {
  return (
    <Card className="lg:col-span-7 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">Monthly Cash Flow Trend</CardTitle>
        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-lime-500"></span> Income
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-slate-400"></span> Expense
          </span>
        </div>
      </CardHeader>
      <CardContent className="h-[300px] p-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={financialData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e2e8f0"
            />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(value) => `$${value / 1000}k`}
              tick={{ fontSize: 12, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
              }}
              formatter={(value: number) => [
                `$${value.toLocaleString()}`,
                "Amount",
              ]}
            />
            <Area
              type="monotone"
              dataKey="Income"
              stroke="#84cc16"
              fill="#d9f99d"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
            <Area
              type="monotone"
              dataKey="Expense"
              stroke="#94a3b8"
              fill="#e2e8f0"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default IncomeExpenseChart;
