"use client";

import { Card, CardHeader, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { AlertCircle, CheckCircle2, Clock, Filter, Search } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { MoreHorizontal, FileText, Send, Download, Trash2 } from "lucide-react";
import { invoices } from "@/data/mock-data";
import { cn } from "@/lib/utils";

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

const FilterTable = () => {
  return (
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
                      <span className="font-medium text-sm">{inv.client}</span>
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
  );
};

export default FilterTable;
