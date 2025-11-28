'use client';
import { Send, User } from "lucide-react";
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
import { Button } from "./ui/button";

const SendModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send Money</DialogTitle>
          <DialogDescription>
            Transfer money to friends or services securely.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="recipient">Recipient</Label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                id="recipient"
                placeholder="Email, phone, or username"
                className="pl-9"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="send-amount">Amount (USD)</Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-500">$</span>
              <Input
                id="send-amount"
                placeholder="0.00"
                className="pl-7"
                type="number"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Note (Optional)</Label>
            <Input placeholder="What's this for?" />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="w-full bg-lime-950 hover:bg-lime-900 text-white"
          >
            Send Now <Send className="w-4 h-4 ml-2" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SendModal;
