'use client';
import type { ComponentType } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

type Trend = "up" | "down";

interface KPICardProps {
  title: string;
  value: string | number;
  change: string | number;
  trend: Trend;
  icon: ComponentType<{ className?: string }>;
}

const KPICard = ({ title, value, change, trend, icon: Icon }: KPICardProps) => {
  const trendColor =
    trend === "up" ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50";

  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className={cn("text-xs mt-1", trendColor)}>
          {trend === "up" ? "↗" : "↘"} {change} vs last period
        </div>
      </CardContent>
    </Card>
  );
};

export default KPICard;
