"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="shadow-sm border-l-4 border-l-lime-500">
        <CardHeader className="pb-2">
          <CardDescription>Total Paid (This Month)</CardDescription>
          <CardTitle className="text-2xl flex items-baseline gap-2">
            $12,450.00{" "}
            <span className="text-xs font-normal text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
              +12%
            </span>
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="shadow-sm border-l-4 border-l-orange-400">
        <CardHeader className="pb-2">
          <CardDescription>Pending Amount</CardDescription>
          <CardTitle className="text-2xl flex items-baseline gap-2">
            $3,200.50{" "}
            <span className="text-xs font-normal text-muted-foreground">
              5 invoices
            </span>
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="shadow-sm border-l-4 border-l-red-500">
        <CardHeader className="pb-2">
          <CardDescription>Overdue</CardDescription>
          <CardTitle className="text-2xl flex items-baseline gap-2">
            $2,300.00{" "}
            <span className="text-xs font-normal text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
              Action needed
            </span>
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default StatsCards;
