"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cashflowData, transactions } from "@/data/mock-data";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  Wallet,
  Calendar as CalendarIcon,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import {
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TransactionPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col gap-6 py-2 pb-20">
      {/* Header Description */}
      <div className="flex flex-col">
        {/* Title is handled by Navbar in your layout, but we add subtitle here if needed or rely on Navbar logic */}
        <p className="text-muted-foreground">
          &quot;View, track, and manage all expenses with ease.&quot;
        </p>
      </div>

      {/* --- Top Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Balance, Cards, Mini Stats */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Row 1: Balance & Cards */}
          <div className="grid grid-cols-2 gap-6 h-full">
            {/* Total Balance */}
            <Card className="shadow-sm flex flex-col justify-between">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                    Total Balance <span className="cursor-help text-xs">ⓘ</span>
                  </CardTitle>
                  <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-3xl font-bold">$1,750.82</span>
                  <Badge
                    variant="secondary"
                    className="text-[10px] px-1 py-0 h-5 bg-red-50 text-red-500 hover:bg-red-50"
                  >
                    Last 15 days
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex gap-2 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs h-8"
                  >
                    <Plus className="w-3 h-3 mr-1" /> Transfer
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 text-xs h-8 bg-lime-400 hover:bg-lime-500 text-lime-950 font-semibold"
                  >
                    <Plus className="w-3 h-3 mr-1" /> Request
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Your Cards */}
            <Card className="shadow-sm relative overflow-hidden flex flex-col">
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  Your Cards
                </CardTitle>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-6 w-6 rounded-full border border-dashed border-gray-400"
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </CardHeader>
              <CardContent className="flex-1 flex items-center justify-center p-4 pt-0">
                {/* Dark Card Visual */}
                <div className="w-full h-24 bg-[#0f172a] rounded-xl p-3 text-white relative shadow-lg transform transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] text-gray-300">$2,981</span>
                    <span className="font-bold text-xs italic">VISA</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="text-[10px] tracking-widest">**** 1777</div>
                    <div className="text-[8px] text-gray-400">12/26</div>
                  </div>
                  {/* Decorative overlap card behind */}
                  <div className="absolute top-0 -right-2 h-full w-4 bg-gray-200 rounded-r-xl -z-10"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Row 2: Mini Stats (Expense, Savings, Income) */}
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                label: "Total Expense",
                value: "$43,000",
                change: "-1.18%",
                trend: "down",
              },
              {
                label: "Total Savings",
                value: "$56,000",
                change: "+1.24%",
                trend: "up",
              },
              {
                label: "Total Income",
                value: "$78,000",
                change: "+1.18%",
                trend: "up",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="shadow-sm p-4 flex flex-col justify-between gap-3"
              >
                <div className="flex justify-between items-start">
                  <div className="p-1.5 bg-gray-50 rounded-full border">
                    <Wallet className="h-3 w-3 text-gray-500" />
                  </div>
                  <MoreHorizontal className="h-3 w-3 text-gray-400" />
                </div>
                <div>
                  <div
                    className={`text-[10px] w-fit px-1.5 rounded-full mb-1 flex items-center ${
                      item.trend === "up"
                        ? "bg-green-50 text-green-600"
                        : "bg-red-50 text-red-500"
                    }`}
                  >
                    {item.trend === "up" ? "↗" : "↘"} {item.change}
                  </div>
                  <div className="font-bold text-lg">{item.value}</div>
                  <div className="text-[10px] text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Column: Cash Flow Chart */}
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
                    <div className="text-xs text-muted-foreground">
                      Expenses
                    </div>
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
      </div>

      {/* --- Bottom Section: Recent Transactions --- */}
      <Card className="shadow-sm">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle className="text-lg">Recent Transactions</CardTitle>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">This Month</span>
              <Filter className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Filters Toolbar */}
          <div className="flex flex-col lg:flex-row gap-4 mt-4 justify-between">
            <div className="flex flex-col sm:flex-row gap-3 flex-1">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search transaction"
                  className="pl-9 bg-slate-50 border-none"
                />
              </div>

              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[140px] bg-white">
                  <SelectValue placeholder="All Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Category</SelectItem>
                  <SelectItem value="income">Income</SelectItem>
                  <SelectItem value="expense">Expense</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[140px] bg-white">
                  <SelectValue placeholder="All Account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Account</SelectItem>
                  <SelectItem value="visa">Visa</SelectItem>
                  <SelectItem value="mastercard">Mastercard</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[200px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      format(date, "d MMMM yyyy")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <Button className="bg-[#0f172a] text-white hover:bg-slate-800">
                Download
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground border-b uppercase bg-transparent">
                <tr>
                  <th className="py-3 pl-4 w-10">
                    <Checkbox />
                  </th>
                  <th className="py-3 font-medium">
                    Transaction Name <ChevronDown className="inline h-3 w-3" />
                  </th>
                  <th className="py-3 font-medium">
                    Account <ChevronDown className="inline h-3 w-3" />
                  </th>
                  <th className="py-3 font-medium hidden md:table-cell">
                    Transaction ID <ChevronDown className="inline h-3 w-3" />
                  </th>
                  <th className="py-3 font-medium hidden md:table-cell">
                    Date & Time <ChevronDown className="inline h-3 w-3" />
                  </th>
                  <th className="py-3 font-medium">
                    Amount <ChevronDown className="inline h-3 w-3" />
                  </th>
                  <th className="py-3 font-medium hidden lg:table-cell">
                    Note <ChevronDown className="inline h-3 w-3" />
                  </th>
                  <th className="py-3 font-medium text-right pr-4">
                    Status <ChevronDown className="inline h-3 w-3" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <tr
                    key={t.id}
                    className="border-b last:border-0 hover:bg-slate-50/50 transition-colors group"
                  >
                    <td className="py-4 pl-4">
                      <Checkbox />
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${t.iconColor}`}>
                          <t.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">
                            {t.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {t.category}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-6 h-4 rounded shadow-sm border flex items-center justify-center text-[6px] font-bold text-white ${
                            t.cardType === "VISA"
                              ? "bg-blue-900"
                              : "bg-orange-500"
                          }`}
                        >
                          {t.cardType === "VISA" ? "VISA" : "MC"}
                        </div>
                        <span className="text-slate-600 hidden sm:inline">
                          {t.card}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-muted-foreground hidden md:table-cell font-mono text-xs">
                      {t.id}
                    </td>
                    <td className="py-4 text-muted-foreground hidden md:table-cell">
                      <div>{t.date}</div>
                      <div className="text-xs">{t.time}</div>
                    </td>
                    <td
                      className={`py-4 font-bold ${
                        Number(t.amount) > 0 ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {Number(t.amount) > 0 ? "+" : ""}${Math.abs(Number(t.amount)).toFixed(2)}
                    </td>
                    <td className="py-4 text-muted-foreground hidden lg:table-cell truncate max-w-[150px]">
                      {t.note}
                    </td>
                    <td className="py-4 text-right pr-4">
                      <Badge
                        variant="outline"
                        className={`font-normal border-0 ${
                          t.status === "Completed"
                            ? "bg-green-50 text-green-600"
                            : "bg-red-50 text-red-500"
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

          {/* Pagination Mockup */}
          <div className="flex items-center justify-end gap-2 mt-4 text-xs text-muted-foreground">
            <span>Rows per page: 10</span>
            <span>1-6 of 100</span>
            <div className="flex gap-1">
              <Button
                variant="outline"
                size="icon"
                className="h-6 w-6"
                disabled
              >
                {"<"}
              </Button>
              <Button variant="outline" size="icon" className="h-6 w-6">
                {">"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default TransactionPage;
