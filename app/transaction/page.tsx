import BottomSection from "@/components/transaction/BottomSection";
import LeftColumn from "@/components/transaction/LeftColumn";
import RightColumn from "@/components/transaction/RightColumn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transaction | Fynix - Finance Management",
};

const TransactionPage = () => {
  return (
    <div className="flex flex-col gap-6 py-2 pb-20">
      {/* --- Top Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column: Balance, Cards, Mini Stats */}
        <LeftColumn />
        {/* Right Column: Cash Flow Chart */}
        <RightColumn />
      </div>
      {/* --- Bottom Section: Recent Transactions --- */}
      <BottomSection />
    </div>
  );
};
export default TransactionPage;
