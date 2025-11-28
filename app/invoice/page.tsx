"use client";

import CreateInvoiceModal from "@/components/CreateInvoiceModal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { invoices } from "@/data/mock-data";
import { cn } from "@/lib/utils";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  Send,
  Trash2,
} from "lucide-react";

// Helper for status styles
const getStatusStyles = (status: string) => {
  switch (status) {
    case "Paid":
      return "bg-green-100 text-green-700 border-green-200";
    case "Pending":
      return "bg-orange-100 text-orange-700 border-orange-200";
    case "Overdue":
      return "bg-red-100 text-red-700 border-red-200";
    default:
      return "bg-slate-100 text-slate-700";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Paid":
      return <CheckCircle2 className="w-3 h-3 mr-1" />;
    case "Pending":
      return <Clock className="w-3 h-3 mr-1" />;
    case "Overdue":
      return <AlertCircle className="w-3 h-3 mr-1" />;
    default:
      return null;
  }
};
const InvoicePage = () => {
  return (
    <div className="flex flex-col gap-6 py-2 pb-20">
      {/* --- Header Section --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Invoices</h2>
          <p className="text-muted-foreground text-sm">
            Manage your billing and track payments.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <CreateInvoiceModal>
            <Button className="bg-[#0f172a] text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20">
              <Plus className="mr-2 h-4 w-4" /> Create Invoice
            </Button>
          </CreateInvoiceModal>
        </div>
      </div>

      {/* --- Stats Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-sm border-l-4 border-l-lime-500">
          <CardHeader className="pb-2">
            <CardDescription>Total Paid (This Month)</CardDescription>
            <CardTitle className="text-2xl flex items-baseline gap-2">
              $12,450.00{" "}
              <span className="text-xs font-normal text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                +12%
              </span>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="shadow-sm border-l-4 border-l-orange-400">
          <CardHeader className="pb-2">
            <CardDescription>Pending Amount</CardDescription>
            <CardTitle className="text-2xl flex items-baseline gap-2">
              $3,200.50{" "}
              <span className="text-xs font-normal text-muted-foreground">
                5 invoices
              </span>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="shadow-sm border-l-4 border-l-red-500">
          <CardHeader className="pb-2">
            <CardDescription>Overdue</CardDescription>
            <CardTitle className="text-2xl flex items-baseline gap-2">
              $2,300.00{" "}
              <span className="text-xs font-normal text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                Action needed
              </span>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* --- Filters & Main Table --- */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-1 gap-2">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search invoices..."
                  className="pl-9 bg-slate-50 border-none"
                />
              </div>
              <Button variant="outline" size="icon" className="shrink-0">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50 hover:bg-slate-50">
                <TableHead className="w-[50px]">
                  <Checkbox />
                </TableHead>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Client</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className="hidden md:table-cell">Due Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell className="font-medium text-slate-900">
                    {inv.id}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={inv.avatar} />
                        <AvatarFallback className="bg-lime-100 text-lime-800 text-xs">
                          {inv.client.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium text-sm">
                          {inv.client}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {inv.email}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground text-sm">
                    {inv.date}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground text-sm">
                    {inv.dueDate}
                  </TableCell>
                  <TableCell className="font-bold">
                    ${inv.amount.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={cn(
                        "font-normal pl-2 pr-2.5 py-0.5",
                        getStatusStyles(inv.status)
                      )}
                    >
                      {getStatusIcon(inv.status)} {inv.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <FileText className="mr-2 h-4 w-4" /> View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Send className="mr-2 h-4 w-4" /> Resend Email
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" /> Download PDF
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 focus:text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Simple Pagination */}
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvoicePage;
