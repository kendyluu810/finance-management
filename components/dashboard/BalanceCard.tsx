"use client";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDownLeft, ArrowUpRight, Plus } from "lucide-react";
import DepositModal from "../DepositModal";
import SendModal from "../SendModal";

const BalanceCard = () => {
  return (
     <Card className="lg:col-span-4 bg-linear-to-br from-[#a3e635] to-[#4d7c0f] text-white border-none shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <div className="w-32 h-32 rounded-full border-20 border-white" />
          </div>
          <div className="absolute top-20 right-50 p-8 opacity-10">
            <div className="w-32 h-32 rounded-full border-20 border-white" />
          </div>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg font-medium text-lime-900">
                Total Balance
              </CardTitle>
              <DepositModal>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full h-8 w-8 bg-white/20 text-white hover:bg-white/30 border-none"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </DepositModal>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-lime-950">$20,670</span>
              <span className="text-lime-800 text-sm font-medium">USD</span>
            </div>
          </CardHeader>
          <CardFooter className="pt-8 gap-3">
            <DepositModal>
              <Button className="flex-1 bg-white text-lime-900 hover:bg-lime-50 rounded-full font-semibold">
                Deposit <ArrowDownLeft className="ml-2 h-4 w-4" />
              </Button>
            </DepositModal>
            <SendModal>
              <Button className="flex-1 bg-lime-950 text-white hover:bg-lime-900 rounded-full font-semibold border-none">
                Send <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </SendModal>
          </CardFooter>
        </Card>
  )
}

export default BalanceCard