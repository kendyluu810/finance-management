"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import AddCardModal from "@/components/AddCardModal";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import CardTemplate from "../CardTemplate";
import { walletChartData } from "@/data/mock-data";

const TopSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Col (Cards) - col-span-3 */}
      <Card className="lg:col-span-3 shadow-sm">
        <CardHeader className="pb-4 flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Your Cards</CardTitle>
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
        <CardContent className="space-y-4">
          <CardTemplate number="8764" type="Personal" isMain={true} />
          <CardTemplate number="5641" type="VISA" />
          <CardTemplate number="9007" type="Business" />
        </CardContent>
      </Card>

      {/* Middle Col (Details & Spending Limits) - col-span-4 */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Top Up
              </Button>
              <Button variant="outline" size="sm">
                Transfer
              </Button>
              <Button variant="outline" size="sm">
                Payment
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Card Number</span>
              <span className="font-semibold text-sm">5582 5574 8176 5487</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Expires/CVC</span>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-sm">08/25</span>
                <Badge className="bg-lime-500 hover:bg-lime-600 text-white font-medium">
                  Active
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Spending Limits */}
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Spending Limits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              $4500.00{" "}
              <span className="text-gray-900 font-semibold">spent</span> of
              $8000.00
            </div>
            <Progress
              value={56.25}
              className="h-2 mt-2 bg-slate-200 [&>div]:bg-lime-600"
            />
            <div className="text-right text-xs text-lime-600 font-semibold mt-1">
              45%
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Col (My Wallets Chart) - col-span-5 */}
      <Card className="lg:col-span-5 shadow-sm">
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <CardTitle className="text-lg">My Wallets</CardTitle>
          <Button variant="outline" size="sm">
            Monthly
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="text-sm font-semibold flex gap-4">
            <span className="text-slate-900 border-b-2 border-lime-600 pb-1">
              Wallet
            </span>
            <span className="text-muted-foreground hover:text-slate-900 cursor-pointer">
              Card Transaction
            </span>
            <span className="text-muted-foreground hover:text-slate-900 cursor-pointer">
              Investment
            </span>
          </div>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={walletChartData}>
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3 3"
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#94a3b8" }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#94a3b8" }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#84cc16"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{
                    r: 6,
                    fill: "#84cc16",
                    stroke: "#fff",
                    strokeWidth: 2,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TopSection;
