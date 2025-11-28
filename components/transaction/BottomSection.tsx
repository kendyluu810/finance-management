"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Filter,
  Search,
  Calendar as CalendarIcon,
  ChevronDown,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { transactions } from "@/data/mock-data";
import { Badge } from "../ui/badge";

const BottomSection = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
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
                    {Number(t.amount) > 0 ? "+" : ""}$
                    {Math.abs(Number(t.amount)).toFixed(2)}
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
            <Button variant="outline" size="icon" className="h-6 w-6" disabled>
              {"<"}
            </Button>
            <Button variant="outline" size="icon" className="h-6 w-6">
              {">"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BottomSection;
