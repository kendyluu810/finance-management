import BalanceCard from "@/components/dashboard/BalanceCard";
import EnhancementCard from "@/components/dashboard/EnhancementCard";
import FinanceScore from "@/components/dashboard/FinanceScore";
import CashflowChart from "@/components/dashboard/CashflowChart";
import AIAssistant from "@/components/dashboard/AIAssistant";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import Statistic from "@/components/dashboard/Statistic";
import Exchange from "@/components/dashboard/Exchange";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Fynix - Finance Management",
};

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4 py-6 pb-20">
      {/* Top rows: Balance, Enhancements, Finances scores */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <BalanceCard />
        <EnhancementCard />
        <FinanceScore />
      </div>
      {/* Middle Row: Cashflow, Ai Assistant */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <CashflowChart />
        <AIAssistant />
      </div>
      {/* Bottom Row: Recent transactions, statistics, exchange rates */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <RecentTransactions />
        <Statistic />
        <Exchange />
      </div>
    </div>
  );
};

export default HomePage;
