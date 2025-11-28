'use client';
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { CreditCard } from "lucide-react";
import { Button } from "./ui/button";

const DepositModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Deposit Money</DialogTitle>
          <DialogDescription>
            Add funds to your Fynix wallet instantly.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="amount">Amount (USD)</Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-500">$</span>
              <Input
                id="amount"
                placeholder="0.00"
                className="pl-7"
                type="number"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="source">Payment Method</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select card" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="visa">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4" /> Visa ending in 4242
                  </div>
                </SelectItem>
                <SelectItem value="mastercard">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4" /> Mastercard ending in 8888
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="w-full bg-lime-600 hover:bg-lime-700 text-white"
          >
            Confirm Deposit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DepositModal;
