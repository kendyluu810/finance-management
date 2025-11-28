"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal, Plus, Wallet } from "lucide-react";
import TransferModal from "../TransferModal";
import RequestModal from "../RequestModal";
import AddCardModal from "../AddCardModal";

const LeftColumn = () => {
  return (
    <div className="lg:col-span-5 flex flex-col gap-4">
      {/* Row 1: Balance & Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
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
              <span className="text-xl sm:text-3xl font-bold">$1,750.82</span>
              <Badge
                variant="secondary"
                className="text-[10px] px-1 py-0 h-5 bg-red-50 text-red-500 hover:bg-red-50"
              >
                Last 15 days
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex gap-1 mt-4">
              <TransferModal>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs h-8"
                >
                  <Plus className="w-3 h-3 mr-1" /> Transfer
                </Button>
              </TransferModal>
              <RequestModal>
                <Button
                  size="sm"
                  className="flex-1 text-xs h-8 bg-lime-400 hover:bg-lime-500 text-lime-950 font-semibold"
                >
                  <Plus className="w-3 h-3 mr-1" /> Request
                </Button>
              </RequestModal>
            </div>
          </CardContent>
        </Card>

        {/* Your Cards */}
        <Card className="shadow-sm relative overflow-hidden flex flex-col">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Your Cards</CardTitle>
            <AddCardModal>
              <Button
                size="icon"
                variant="ghost"
                className="h-6 w-6 rounded-full border border-dashed border-gray-400"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </AddCardModal>
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
  );
};

export default LeftColumn;
