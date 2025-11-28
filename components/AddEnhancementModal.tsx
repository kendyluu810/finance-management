"use client";

import { BanknoteArrowDown, Sparkles, Wallet } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

const AddEnhancementModal = ({ children }: { children: React.ReactNode }) => {
  // Mock list of available features
  const availableFeatures = [
    {
      id: "investment",
      name: "Auto Investment",
      desc: "Invest spare change automatically",
      icon: Sparkles,
    },
    {
      id: "budget",
      name: "Budget Alerts",
      desc: "Get notified when exceeding limits",
      icon: Wallet,
    },
    {
      id: "tax",
      name: "Tax Estimator",
      desc: "Real-time tax liability tracking",
      icon: BanknoteArrowDown,
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>AI Enhancements Store</DialogTitle>
          <DialogDescription>
            Boost your financial tracking with AI-powered modules.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {availableFeatures.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center justify-between p-3 border rounded-xl hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-lime-100 rounded-full text-lime-700">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{feature.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {feature.desc}
                  </p>
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="text-lime-700 border-lime-200 hover:bg-lime-50 hover:text-lime-800"
              >
                Add
              </Button>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button variant="ghost">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddEnhancementModal;
