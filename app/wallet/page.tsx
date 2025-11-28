import { Button } from "@/components/ui/button";
import BottomSection from "@/components/wallet/BottomSection";
import TopSection from "@/components/wallet/TopSection";
import { SlidersHorizontal } from "lucide-react";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Wallet | Fynix - Finance Management",
};

const WalletPage = () => {
  return (
    <div className="flex flex-col gap-6 py-2 pb-20">
      {/* Header Description */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-base sm:text-2xl font-semibold">
            Overview / Balance Details
          </h2>
          <div
            className="text-xs sm:text-sm text-muted-foreground mt-1"
            suppressHydrationWarning
          >
            Your total balance estimate in USD at {new Date().toLocaleString()}
          </div>
        </div>
        <Button className="bg-lime-400 hover:bg-lime-500 text-lime-950 font-bold text-xs sm:text-sm">
          <SlidersHorizontal className="w-4 h-4 mr-2" /> Manage Balance
        </Button>
      </div>

      {/* --- Top Section: Cards, Details, Chart --- */}
      <TopSection />
      {/* --- Bottom Section: Transactions & Expenses/Convert --- */}
      <BottomSection />
    </div>
  );
};

export default WalletPage;
