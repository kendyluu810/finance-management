"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const FinanceScore = () => {
  return (
      <Card className="lg:col-span-3 flex flex-col justify-between shadow-sm">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">
              Finance Score
            </CardTitle>
            <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground mb-1">
              Finance Quality
            </div>
            <div className="flex items-end justify-between mb-2">
              <span className="text-2xl font-bold">Excellent</span>
              <span className="text-2xl font-bold">92%</span>
            </div>
            <Progress value={92} className="h-3 bg-slate-100" />
            <div className="mt-4 text-xs text-muted-foreground">
              Your score is better than 80% of users.
            </div>
          </CardContent>
        </Card>
  )
}

export default FinanceScore