import DateRangePick from "@/components/report/DateRangePick";
import ExpenseBreakdownChart from "@/components/ExpenseBreakdownChart";
import IncomeExpenseChart from "@/components/IncomeExpenseChart";
import KPISummary from "@/components/report/KPISummary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Report | Fynix - Finance Management",
};

const ReportPage = () => {
  return (
    <div className="flex flex-col gap-6 py-2 pb-20">
      {/* --- Header & Filter Section --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Financial Reports
          </h2>
          <p className="text-muted-foreground text-sm">
            Detailed insights into your Income and Expenses.
          </p>
        </div>

        <DateRangePick />
      </div>

      <Separator />

      <KPISummary />

      {/* --- Detailed Charts Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Income vs Expense Chart (Area Chart) */}
        <IncomeExpenseChart />

        {/* Expense Breakdown Chart (Pie Chart) */}
        <ExpenseBreakdownChart />
      </div>

      {/* --- Report Table (Optional) --- */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Transaction Summary Table</CardTitle>
          <p className="text-sm text-muted-foreground">
            Detailed view of the filtered transactions for this period.
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-40 flex items-center justify-center border border-dashed rounded-lg text-muted-foreground">
            [Placeholder for Detailed Transaction Table]
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportPage;
