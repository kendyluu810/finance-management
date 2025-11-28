"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { cashflowData, expenseStats, transactions } from "@/data/mock-data";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowDownLeft,
  ArrowRightLeft,
  ArrowUpRight,
  BanknoteArrowDown,
  BanknoteArrowUp,
  Mic,
  MoreHorizontal,
  PiggyBank,
  Plus,
  Send,
} from "lucide-react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Table } from "@/components/ui/table";
import Link from "next/link";
import DepositModal from "@/components/DepositModal";
import SendModal from "@/components/SendModal";
import AddEnhancementModal from "@/components/AddEnhancementModal";

const enhancementsItems = [
  {
    label: "Income",
    amount: "$14,480.24",
    change: "+20%",
    icon: BanknoteArrowDown,
  },
  {
    label: "Expense",
    amount: "$14,480.24",
    change: "+14%",
    icon: BanknoteArrowUp,
  },
  {
    label: "Savings",
    amount: "$14,480.24",
    change: "+10%",
    icon: PiggyBank,
  },
];
const HomePage = () => {
  const [range, setRange] = useState("year");
  const [txRange, setTxRange] = useState("1m");
  const [statRange, setStatRange] = useState("1m");

  return (
    <div className="flex flex-col gap-4 py-6 pb-20">
      {/* Top rows: Balance, Enhancements, Finances scores */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Total balance */}
        <Card className="lg:col-span-4 bg-linear-to-br from-[#a3e635] to-[#4d7c0f] text-white border-none shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <div className="w-32 h-32 rounded-full border-20 border-white" />
          </div>
          <div className="absolute top-20 right-50 p-8 opacity-10">
            <div className="w-32 h-32 rounded-full border-20 border-white" />
          </div>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg font-medium text-lime-900">
                Total Balance
              </CardTitle>
              <DepositModal>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full h-8 w-8 bg-white/20 text-white hover:bg-white/30 border-none"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </DepositModal>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-lime-950">$20,670</span>
              <span className="text-lime-800 text-sm font-medium">USD</span>
            </div>
          </CardHeader>
          <CardFooter className="pt-8 gap-3">
            <DepositModal>
              <Button className="flex-1 bg-white text-lime-900 hover:bg-lime-50 rounded-full font-semibold">
                Deposit <ArrowDownLeft className="ml-2 h-4 w-4" />
              </Button>
            </DepositModal>
            <SendModal>
              <Button className="flex-1 bg-lime-950 text-white hover:bg-lime-900 rounded-full font-semibold border-none">
                Send <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </SendModal>
          </CardFooter>
        </Card>
        {/* AI Enhancements */}
        <Card className="lg:col-span-5 flex flex-col justify-between shadow-sm">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">
              AI Enhancements
            </CardTitle>
            <AddEnhancementModal>
              <Button variant="outline" size="sm" className="h-8 text-xs">
                + Add Enhancements
              </Button>
            </AddEnhancementModal>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            {enhancementsItems.map((item, i) => (
              <div
                key={i}
                className="border rounded-xl p-3 flex flex-col gap-2"
              >
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="grayscale">
                    <item.icon />
                  </span>{" "}
                  {item.label}
                </div>
                <div className="font-bold text-sm truncate">{item.amount}</div>
                <div className="text-[10px] text-green-600 bg-green-100 w-fit px-1.5 py-0.5 rounded-full font-medium">
                  {item.change}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Finance Score */}
        <Card className="lg:col-span-3 flex flex-col justify-between shadow-sm">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">
              Finance Score
            </CardTitle>
            <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground mb-1">
              Finance Quality
            </div>
            <div className="flex items-end justify-between mb-2">
              <span className="text-2xl font-bold">Excellent</span>
              <span className="text-2xl font-bold">92%</span>
            </div>
            <Progress value={92} className="h-3 bg-slate-100" />
            <div className="mt-4 text-xs text-muted-foreground">
              Your score is better than 80% of users.
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Middle Row: Cashflow, Ai Assistant */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Cashflow Chart */}
        <Card className="lg:col-span-8 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg">Cashflow</CardTitle>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-base sm:text-2xl font-bold">
                  $562,000
                </span>
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

        {/* AI Assistant */}
        <Card className="lg:col-span-4 flex flex-col shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg">AI Assistant</CardTitle>
            <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent className="flex-1 flex flex-col items-center justify-center gap-6 text-center">
            {/* Abstract Visual for AI */}
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 bg-lime-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-full h-full bg-linear-to-tr from-lime-200 to-green-500 rounded-full flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop')] bg-cover opacity-80 mix-blend-overlay"></div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">What Can I help with?</h3>
              <div className="flex flex-wrap justify-center gap-2 text-[10px] text-muted-foreground">
                <Badge
                  variant="secondary"
                  className="font-normal cursor-pointer hover:bg-slate-200"
                >
                  Show me my cash flow
                </Badge>
                <Badge
                  variant="secondary"
                  className="font-normal cursor-pointer hover:bg-slate-200"
                >
                  Forecast my balance
                </Badge>
              </div>
            </div>

            <div className="w-full relative mt-auto">
              <Input
                placeholder="Ask anything..."
                className="pl-4 pr-12 rounded-full bg-slate-50 border-slate-200"
              />
              <div className="absolute right-1 top-1 flex gap-1">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-muted-foreground rounded-full"
                >
                  <Mic className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  className="h-8 w-8 bg-lime-500 hover:bg-lime-600 text-white rounded-full"
                >
                  <Send className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Bottom Row: Recent transactions, statistics, exchange rates */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Recent Transactions */}
        <Card className="lg:col-span-6 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg">Recent Transactions</CardTitle>
            <div className="flex gap-2">
              <Select value={txRange} onValueChange={setTxRange}>
                <SelectTrigger className="h-8 text-xs w-36">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1m">This Month</SelectItem>
                  <SelectItem value="3m">Last 3 Months</SelectItem>
                  <SelectItem value="6m">Last 6 Months</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <tbody className="text-sm">
                {transactions.slice(0, 5).map((t, i) => (
                  <tr
                    key={t.id}
                    className="border-b last:border-0 hover:bg-slate-50"
                  >
                    <td className="py-4 pl-0 font-medium">
                      <div>{t.name}</div>
                      <div className="text-xs text-muted-foreground font-normal">
                        {t.category}
                      </div>
                    </td>
                    <td className="py-4 text-xs text-muted-foreground hidden sm:table-cell">
                      <div className="flex items-center gap-1">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            i % 2 === 0 ? "bg-slate-800" : "bg-green-600"
                          }`}
                        ></div>
                        {t.card}
                      </div>
                    </td>
                    <td className="py-4 text-xs text-muted-foreground hidden sm:table-cell">
                      {t.date}
                    </td>
                    <td
                      className={`py-4 font-bold text-right ${
                        t.isPositive ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {t.amount}
                    </td>
                    <td className="py-4 pr-0 text-right">
                      <Badge
                        variant="secondary"
                        className={`font-normal ${
                          t.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {t.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="mt-4 flex justify-end">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-8 text-xs"
              >
                <Link href="/transaction">See more</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Statistic (Donut) */}
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
                <span className="text-xs text-muted-foreground">
                  Total Expense
                </span>
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

        {/* Exchange */}
        <Card className="lg:col-span-3 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg">Exchange</CardTitle>
            <Button variant="outline" size="sm" className="h-7 text-xs">
              Currencies
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-xs text-muted-foreground text-center">
              1 USD = 0.77 GBP
            </div>

            <div className="flex items-center gap-2">
              <div className="flex-1 bg-slate-50 p-2 rounded-lg border flex items-center justify-between">
                <div className="flex items-center gap-1 font-semibold text-sm">
                  🇺🇸 USD
                </div>
              </div>
              <ArrowRightLeft className="w-4 h-4 text-muted-foreground" />
              <div className="flex-1 bg-slate-50 p-2 rounded-lg border flex items-center justify-between">
                <div className="flex items-center gap-1 font-semibold text-sm">
                  🇬🇧 GBP
                </div>
              </div>
            </div>

            <div className="text-center py-2">
              <div className="text-3xl font-bold">$100.00</div>
              <div className="text-xs text-muted-foreground mt-1">
                Available: $1600.86
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax (2%)</span>
                <span className="font-medium">$2.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total amount</span>
                <span className="font-bold">€90.7</span>
              </div>
            </div>

            <Button className="w-full bg-lime-400 hover:bg-lime-500 text-lime-950 font-bold mt-2">
              Exchange
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
