"use client";

import {
  ArrowDownLeft,
  ArrowUpRight,
  BarChart2,
  DollarSign,
} from "lucide-react";
import KPICard from "../KPICard";

const KPISummary = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <KPICard
        title="Total Revenue"
        value="$15,200.00"
        change="18.5%"
        trend="up"
        icon={DollarSign}
      />
      <KPICard
        title="Total Expense"
        value="$9,000.00"
        change="3.2%"
        trend="up"
        icon={ArrowUpRight}
      />
      <KPICard
        title="Net Profit"
        value="$6,200.00"
        change="25.1%"
        trend="up"
        icon={ArrowDownLeft}
      />
      <KPICard
        title="Profit Margin"
        value="40.8%"
        change="1.1%"
        trend="down"
        icon={BarChart2}
      />
    </div>
  );
};

export default KPISummary;
