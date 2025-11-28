'use client';
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { expenseCategories } from '@/data/mock-data';

const ExpenseBreakdownChart = () => {
  return (
    <Card className="lg:col-span-5 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">Expense Category Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] p-0 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          >
            <Pie
              data={expenseCategories}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={5}
            >
              {expenseCategories.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
              }}
              formatter={(value: number, name: string) => [
                `$${value.toLocaleString()}`,
                name,
              ]}
            />
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              wrapperStyle={{ paddingLeft: "20px" }}
            />
          </RechartsPieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ExpenseBreakdownChart;
