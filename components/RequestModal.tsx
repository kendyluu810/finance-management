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
import { Send, User } from "lucide-react";

const RequestModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request Money</DialogTitle>
          <DialogDescription>Ask for a payment from someone.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label>Request From</Label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
              <Input placeholder="payer@example.com" className="pl-9" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-500">$</span>
              <Input type="number" placeholder="0.00" className="pl-7" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Note / Invoice ID</Label>
            <Input placeholder="For project design..." />
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full bg-lime-950 hover:bg-lime-900 text-white">
            Send Request <Send className="ml-2 h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RequestModal;
