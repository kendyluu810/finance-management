"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { transactions, expenseStats } from "@/data/mock-data";
import { ArrowDownLeft, ArrowUpRight, ChevronDown } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const BottomSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Col (Transactions) - col-span-7 */}
      <Card className="lg:col-span-7 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg">Transactions</CardTitle>
          <Button variant="outline" size="sm">
            This Month
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground border-b uppercase bg-transparent">
                <tr>
                  <th className="py-3 pl-0">
                    <Checkbox />
                  </th>
                  <th className="py-3 font-medium">Transaction Name</th>
                  <th className="py-3 font-medium hidden md:table-cell">
                    Transaction ID
                  </th>
                  <th className="py-3 font-medium hidden md:table-cell">
                    Date & Time
                  </th>
                  <th className="py-3 font-medium">Amount</th>
                  <th className="py-3 font-medium text-right pr-0">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <tr
                    key={t.id}
                    className="border-b last:border-0 hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 pl-0">
                      <Checkbox />
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-full ${
                            t.isPositive
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {t.isPositive ? (
                            <ArrowDownLeft className="h-4 w-4" />
                          ) : (
                            <ArrowUpRight className="h-4 w-4" />
                          )}
                        </div>
                        <div className="font-semibold text-slate-900">
                          {t.name}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-muted-foreground hidden md:table-cell font-mono text-xs">
                      4567890123
                    </td>
                    <td className="py-4 text-muted-foreground hidden md:table-cell">
                      <div>2024-09-25</div>
                      <div className="text-xs">10:30 AM</div>
                    </td>
                    <td
                      className={`py-4 font-bold ${
                        t.isPositive ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {t.isPositive ? "+" : ""}$
                      {Math.abs(Number(t.amount)).toFixed(2)}
                    </td>
                    <td className="py-4 text-right pr-0">
                      <Badge
                        variant="outline"
                        className={`font-normal border-0 ${
                          t.status === "Completed"
                            ? "bg-green-50 text-green-600"
                            : "bg-orange-50 text-orange-600"
                        }`}
                      >
                        {t.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Right Col (All Expenses & Convert) - col-span-5 */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        {/* All Expenses (Donut Chart) */}
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg">All Expenses</CardTitle>
            <Button variant="outline" size="sm">
              This Month
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center gap-6">
            <div className="h-[150px] w-full max-w-[150px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseStats}
                    innerRadius={45}
                    outerRadius={65}
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
                <span className="text-xs text-muted-foreground">Platform</span>
                <span className="text-base font-bold">Rp225.000</span>
              </div>
            </div>

            {/* Expense Breakdown List */}
            <div className="flex-1 space-y-2 text-sm">
              <div className="font-semibold text-xs">
                Total Expenses: Rp98.200
              </div>
              <Separator />
              <div className="space-y-1">
                {expenseStats.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-slate-600">{item.name}</span>
                    </div>
                    <span className="font-semibold text-xs">
                      {item.value.toLocaleString("vi-VN")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Expenses & Convert Section */}
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Daily Expenses</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {/* Daily Expense Breakdown */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Rp70.000 - Rp100.000
                </span>
                <span className="font-semibold">30%</span>
              </div>
              <Progress
                value={30}
                className="h-1 bg-red-100 [&>div]:bg-red-500"
              />
            </div>
            {/* Convert Widget */}
            <div className="flex justify-between items-center border p-3 rounded-xl bg-slate-50">
              <div className="flex flex-col gap-1">
                <div className="text-xs text-muted-foreground">You sent</div>
                <div className="text-lg font-bold">Rp200.00</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="text-sm font-semibold">USD</div>
                <ChevronDown className="w-3 h-3 text-muted-foreground" />
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              You&apos;ve sent{" "}
              <span className="font-semibold text-gray-900">$35,478.00</span>{" "}
              available balance
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Our fees</span>
                <span className="text-red-500 font-medium">-$2.23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Amount converted</span>
                <span className="font-medium">$197.77</span>
              </div>
            </div>

            <Button className="w-full bg-lime-400 hover:bg-lime-500 text-lime-950 font-bold">
              Convert
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BottomSection;
