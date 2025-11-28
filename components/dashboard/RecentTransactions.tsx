"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { transactions } from "@/data/mock-data";
import { useState } from "react";
import { Table } from "../ui/table";
import Link from "next/link";

const RecentTransactions = () => {
  const [txRange, setTxRange] = useState("1m");

  return (
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
          <Button asChild variant="outline" size="sm" className="h-8 text-xs">
            <Link href="/transaction">See more</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
