"use client";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

const CreateInvoiceModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Invoice</DialogTitle>
          <DialogDescription>
            Fill in the details to generate a new invoice for your client.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          {/* Client Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>Client Name</Label>
              <Input placeholder="e.g. Acme Corp" />
            </div>
            <div className="grid gap-2">
              <Label>Client Email</Label>
              <Input placeholder="client@company.com" />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>Invoice Date</Label>
              <Input type="date" />
            </div>
            <div className="grid gap-2">
              <Label>Due Date</Label>
              <Input type="date" />
            </div>
          </div>

          <Separator />

          {/* Line Items (Mocked visual) */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-medium">Items</h4>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-lime-600 hover:text-lime-700"
              >
                <Plus className="w-3 h-3 mr-1" /> Add Item
              </Button>
            </div>

            {/* Item Row 1 */}
            <div className="grid grid-cols-12 gap-2 items-end">
              <div className="col-span-6">
                <Label className="text-xs text-muted-foreground">
                  Description
                </Label>
                <Input placeholder="Service name" defaultValue="Web Design" />
              </div>
              <div className="col-span-2">
                <Label className="text-xs text-muted-foreground">Qty</Label>
                <Input type="number" defaultValue="1" />
              </div>
              <div className="col-span-3">
                <Label className="text-xs text-muted-foreground">Price</Label>
                <div className="relative">
                  <span className="absolute left-2 top-2.5 text-xs text-gray-500">
                    $
                  </span>
                  <Input className="pl-5" defaultValue="500.00" />
                </div>
              </div>
              <div className="col-span-1 flex justify-center pb-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-red-400 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            {/* Item Row 2 */}
            <div className="grid grid-cols-12 gap-2 items-end">
              <div className="col-span-6">
                <Input placeholder="Service name" defaultValue="Hosting" />
              </div>
              <div className="col-span-2">
                <Input type="number" defaultValue="12" />
              </div>
              <div className="col-span-3">
                <div className="relative">
                  <span className="absolute left-2 top-2.5 text-xs text-gray-500">
                    $
                  </span>
                  <Input className="pl-5" defaultValue="20.00" />
                </div>
              </div>
              <div className="col-span-1 flex justify-center pb-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-red-400 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <Separator />

          <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
            <span className="font-medium text-slate-700">Total Amount</span>
            <span className="text-xl font-bold text-slate-900">$740.00</span>
          </div>
        </div>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline">Save Draft</Button>
          <Button className="bg-lime-500 hover:bg-lime-600 text-white">
            Create & Send
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateInvoiceModal;
