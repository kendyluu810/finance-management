"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { MoreHorizontal, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { cashflowData } from "@/data/mock-data";

const RightColumn = () => {
  return (
    <Card className="lg:col-span-7 shadow-sm flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg">Cash Flow</CardTitle>
          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-full bg-lime-100 text-lime-600">
                <ArrowDownLeft className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Income</div>
                <div className="font-bold">$5,772.13</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-full bg-slate-100 text-slate-800">
                <ArrowUpRight className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Expenses</div>
                <div className="font-bold">$881.90</div>
              </div>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={cashflowData}>
            <CartesianGrid
              vertical={true}
              horizontal={false}
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
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-3 border shadow-lg rounded-xl text-xs">
                      <p className="text-gray-500 mb-1">Monthly</p>
                      <p className="font-bold text-lg">
                        ${payload[0].value?.toLocaleString()}
                      </p>
                      <p className="text-green-600 flex items-center gap-1">
                        ↗ 1.9%{" "}
                        <span className="text-gray-400 font-normal">
                          Compared to $5,441 last month
                        </span>
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#84cc16"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 6,
                fill: "#84cc16",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#94a3b8"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RightColumn;
