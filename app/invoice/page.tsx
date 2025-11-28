import FilterTable from "@/components/invoice/FilterTable";
import StatsCards from "@/components/invoice/StatsCards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoice | Fynix - Finance Management",
};

const InvoicePage = () => {
  return (
    <div className="flex flex-col gap-6 py-2 pb-20">
      {/* --- Stats Cards --- */}
      <StatsCards />

      {/* --- Filters & Main Table --- */}
      <FilterTable />
    </div>
  );
};

export default InvoicePage;
