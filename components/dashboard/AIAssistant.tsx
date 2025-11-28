"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mic, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AIAssistant = () => {
  return (
    <Card className="lg:col-span-4 flex flex-col shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">AI Assistant</CardTitle>
        <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent className="flex-1 flex flex-col items-center justify-center gap-6 text-center">
        {/* Abstract Visual for AI */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 bg-lime-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
          <div className="relative w-full h-full bg-linear-to-tr from-lime-200 to-green-500 rounded-full flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop')] bg-cover opacity-80 mix-blend-overlay"></div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">What Can I help with?</h3>
          <div className="flex flex-wrap justify-center gap-2 text-[10px] text-muted-foreground">
            <Badge
              variant="secondary"
              className="font-normal cursor-pointer hover:bg-slate-200"
            >
              Show me my cash flow
            </Badge>
            <Badge
              variant="secondary"
              className="font-normal cursor-pointer hover:bg-slate-200"
            >
              Forecast my balance
            </Badge>
          </div>
        </div>

        <div className="w-full relative mt-auto">
          <Input
            placeholder="Ask anything..."
            className="pl-4 pr-12 rounded-full bg-slate-50 border-slate-200"
          />
          <div className="absolute right-1 top-1 flex gap-1">
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-muted-foreground rounded-full"
            >
              <Mic className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              className="h-8 w-8 bg-lime-500 hover:bg-lime-600 text-white rounded-full"
            >
              <Send className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAssistant;
