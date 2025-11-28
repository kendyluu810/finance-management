"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft } from "lucide-react";

const Exchange = () => {
  return (
    <Card className="lg:col-span-3 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">Exchange</CardTitle>
        <Button variant="outline" size="sm" className="h-7 text-xs">
          Currencies
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-xs text-muted-foreground text-center">
          1 USD = 0.77 GBP
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-1 bg-slate-50 p-2 rounded-lg border flex items-center justify-between">
            <div className="flex items-center gap-1 font-semibold text-sm">
              🇺🇸 USD
            </div>
          </div>
          <ArrowRightLeft className="w-4 h-4 text-muted-foreground" />
          <div className="flex-1 bg-slate-50 p-2 rounded-lg border flex items-center justify-between">
            <div className="flex items-center gap-1 font-semibold text-sm">
              🇬🇧 GBP
            </div>
          </div>
        </div>

        <div className="text-center py-2">
          <div className="text-3xl font-bold">$100.00</div>
          <div className="text-xs text-muted-foreground mt-1">
            Available: $1600.86
          </div>
        </div>

        <div className="space-y-2 pt-2 border-t text-xs">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tax (2%)</span>
            <span className="font-medium">$2.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total amount</span>
            <span className="font-bold">€90.7</span>
          </div>
        </div>

        <Button className="w-full bg-lime-400 hover:bg-lime-500 text-lime-950 font-bold mt-2">
          Exchange
        </Button>
      </CardContent>
    </Card>
  );
};

export default Exchange;
