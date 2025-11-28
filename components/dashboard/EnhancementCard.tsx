"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartBar, DollarSign, TrendingUp } from "lucide-react";
import AddEnhancementModal from "@/components/AddEnhancementModal";
import { enhancementsItems } from "@/data/mock-data";

const EnhancementCard = () => {
  return (
    <Card className="lg:col-span-5 flex flex-col justify-between shadow-sm">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">AI Enhancements</CardTitle>
        <AddEnhancementModal>
          <Button variant="outline" size="sm" className="h-8 text-xs">
            + Add Enhancements
          </Button>
        </AddEnhancementModal>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-4">
        {enhancementsItems.map((item, i) => (
          <div key={i} className="border rounded-xl p-3 flex flex-col gap-2">
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <span className="grayscale">
                <item.icon />
              </span>{" "}
              {item.label}
            </div>
            <div className="font-bold text-sm truncate">{item.amount}</div>
            <div className="text-[10px] text-green-600 bg-green-100 w-fit px-1.5 py-0.5 rounded-full font-medium">
              {item.change}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default EnhancementCard;
