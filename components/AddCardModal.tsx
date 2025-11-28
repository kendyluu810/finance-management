"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

const AddCardModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Card</DialogTitle>
          <DialogDescription>
            Link a new credit or debit card to your account.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label>Card Number</Label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
              <Input placeholder="0000 0000 0000 0000" className="pl-9" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>Expiry Date</Label>
              <Input placeholder="MM/YY" />
            </div>
            <div className="grid gap-2">
              <Label>CVC</Label>
              <Input placeholder="123" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Cardholder Name</Label>
            <Input placeholder="JENNY WILSON" />
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">
            Add Card
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddCardModal;
