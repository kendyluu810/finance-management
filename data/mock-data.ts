import { ArrowDownLeft, ArrowUpRight, BanknoteArrowDown, BanknoteArrowUp, PiggyBank, Wallet } from "lucide-react";

export const enhancementsItems = [
  {
    label: "Income",
    amount: "$14,480.24",
    change: "+20%",
    icon: BanknoteArrowDown,
  },
  {
    label: "Expense",
    amount: "$14,480.24",
    change: "+14%",
    icon: BanknoteArrowUp,
  },
  {
    label: "Savings",
    amount: "$14,480.24",
    change: "+10%",
    icon: PiggyBank,
  },
];

export const cashflowData = [
  { name: "Jan", income: 4000, expense: 2400 },
  { name: "Feb", income: 3000, expense: 1398 },
  { name: "Mar", income: 2000, expense: 9800 },
  { name: "Apr", income: 2780, expense: 3908 },
  { name: "May", income: 1890, expense: 4800 },
  { name: "Jun", income: 2390, expense: 3800 },
  { name: "Jul", income: 3490, expense: 4300 },
  { name: "Aug", income: 4000, expense: 2400 },
  { name: "Sep", income: 5500, expense: 3000 }, // Highlighted in design
  { name: "Oct", income: 4500, expense: 2000 },
  { name: "Nov", income: 3000, expense: 4500 },
  { name: "Dec", income: 4200, expense: 2800 },
];

export const expenseStats = [
  { name: "Rent & Living", value: 2100, color: "#0f172a" }, // slate-900
  { name: "Investment", value: 525, color: "#84cc16" }, // lime-500
  { name: "Education", value: 420, color: "#cbd5e1" }, // slate-300
  { name: "Food & Drink", value: 280, color: "#e2e8f0" }, // slate-200
];

export const transactions = [
  {
    id: 1,
    name: "Dividend Payout",
    category: "Investments",
    card: "VISA Platinum Plus",
    cardType: "VISA",
    date: "2024-09-25",
    amount: "+$200.00",
    status: "Completed",
    icon: ArrowUpRight,
    iconColor: "bg-green-100 text-green-600",
    isPositive: true,
  },
  {
    id: 2,
    name: "Grocery Shopping",
    category: "Food & Dining",
    card: "VISA Platinum Plus",
    cardType: "VISA",
    date: "2024-09-24",
    amount: "-$154.20",
    status: "Completed",
    icon: ArrowUpRight,
    iconColor: "bg-red-100 text-red-600",
    isPositive: false,
  },
  {
    id: 3,
    name: "Freelance Payment",
    category: "Income",
    card: "Freedom Unlimited",
    cardType: "MasterCard",
    date: "2024-09-23",
    amount: "+$850.00",
    status: "Completed",
    icon: ArrowUpRight,
    iconColor: "bg-green-100 text-green-600",
    isPositive: true,
  },
  {
    id: 4,
    name: "Online Subscription",
    category: "Services",
    card: "VISA Platinum Plus",
    cardType: "VISA",
    date: "2024-09-22",
    amount: "-$12.99",
    status: "Pending",
    icon: ArrowUpRight,
    iconColor: "bg-red-100 text-red-600",
    isPositive: false,
  },
  {
    id: "4567890135",
    name: "Bonus Payment",
    category: "Income",
    card: "Platinum Plus Visa",
    cardType: "VISA",
    date: "2024-09-25",
    time: "11:00 AM",
    amount: 500.0,
    note: "Annual performance bonus",
    status: "Completed",
    icon: ArrowDownLeft, // Representing incoming
    iconColor: "bg-green-100 text-green-600",
  },
  {
    id: "4567890136",
    name: "Stock Dividends",
    category: "Investments",
    card: "Freedom Unlimited Mastercard",
    cardType: "Mastercard",
    date: "2024-09-24",
    time: "09:00 AM",
    amount: 300.0,
    note: "Quarterly stock dividend",
    status: "Completed",
    icon: Wallet,
    iconColor: "bg-green-100 text-green-600",
  },
  {
    id: "4567890123",
    name: "Comcast Bill Payment",
    category: "Utilities",
    card: "Platinum Plus Visa",
    cardType: "VISA",
    date: "2024-09-24",
    time: "10:30 AM",
    amount: -150.0,
    note: "Monthly internet and TV bill",
    status: "Completed",
    icon: ArrowUpRight, // Representing outgoing
    iconColor: "bg-red-100 text-red-600",
  },
  {
    id: "4567890137",
    name: "Freelance Project",
    category: "Income",
    card: "Platinum Plus Visa",
    cardType: "VISA",
    date: "2024-09-23",
    time: "01:30 PM",
    amount: 1200.0,
    note: "Payment for freelance design work",
    status: "Completed",
    icon: ArrowDownLeft,
    iconColor: "bg-green-100 text-green-600",
  },
  {
    id: "4567890124",
    name: "Amazon Purchase",
    category: "Food & Dining",
    card: "Freedom Unlimited Mastercard",
    cardType: "Mastercard",
    date: "2024-09-23",
    time: "03:45 PM",
    amount: -80.95,
    note: "Purchased kitchen appliances",
    status: "Completed",
    icon: ArrowUpRight,
    iconColor: "bg-orange-100 text-orange-600", // Example variation
  },
  {
    id: "567890123",
    name: "Gym Membership",
    category: "Healthcare",
    card: "Platinum Plus Visa",
    cardType: "VISA",
    date: "2024-09-22",
    time: "07:00 AM",
    amount: -45.0,
    note: "Monthly gym fee for health",
    status: "Pending",
    icon: ArrowUpRight,
    iconColor: "bg-red-100 text-red-600",
  },
];

export const walletChartData = [
  { name: "T1", value: 2500 },
  { name: "T2", value: 3200 },
  { name: "T3", value: 4500 },
  { name: "T4", value: 5100 },
  { name: "T5", value: 4800 },
  { name: "T6", value: 6500 },
  { name: "T7", value: 7200 },
  { name: "T8", value: 6800 },
];

export const invoices = [
  {
    id: "INV-001",
    client: "Acme Corp",
    email: "billing@acme.com",
    avatar: "https://github.com/shadcn.png",
    date: "2024-09-25",
    dueDate: "2024-10-01",
    amount: 1200.0,
    status: "Paid",
  },
  {
    id: "INV-002",
    client: "Globex Inc",
    email: "mark@globex.com",
    avatar: "",
    date: "2024-09-24",
    dueDate: "2024-10-10",
    amount: 850.5,
    status: "Pending",
  },
  {
    id: "INV-003",
    client: "Soylent Corp",
    email: "hr@soylent.com",
    avatar: "",
    date: "2024-09-10",
    dueDate: "2024-09-20",
    amount: 2300.0,
    status: "Overdue",
  },
  {
    id: "INV-004",
    client: "Initech",
    email: "peter@initech.com",
    avatar: "",
    date: "2024-09-22",
    dueDate: "2024-10-05",
    amount: 450.0,
    status: "Pending",
  },
  {
    id: "INV-005",
    client: "Umbrella Corp",
    email: "alice@umbrella.com",
    avatar: "",
    date: "2024-09-20",
    dueDate: "2024-09-28",
    amount: 5000.0,
    status: "Paid",
  },
];

export const financialData = [
  { name: "Jan", Income: 4000, Expense: 2400 },
  { name: "Feb", Income: 3000, Expense: 1398 },
  { name: "Mar", Income: 5000, Expense: 3000 },
  { name: "Apr", Income: 4500, Expense: 2800 },
  { name: "May", Income: 5500, Expense: 3800 },
  { name: "Jun", Income: 6000, Expense: 4500 },
];

export const expenseCategories = [
  { name: "Marketing", value: 1500, color: "#ef4444" }, // Red
  { name: "Salary", value: 3500, color: "#3b82f6" }, // Blue
  { name: "Utilities", value: 800, color: "#10b981" }, // Green
  { name: "Rent", value: 2000, color: "#f59e0b" }, // Amber
  { name: "Supplies", value: 1000, color: "#6366f1" }, // Indigo
];
