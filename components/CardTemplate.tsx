import { cn } from "@/lib/utils";
import { CreditCard, MoreHorizontal } from "lucide-react";

type CardTemplateProps = {
    number: string;
    type: string;
    isMain?: boolean;
};

const CardTemplate = ({ number, type, isMain = false }: CardTemplateProps) => (
    <div className={cn("flex justify-between items-center p-3 rounded-xl border cursor-pointer", isMain ? "border-green-500 bg-green-50/50" : "bg-white")}>
        <div className="flex items-center gap-3">
            <div className={cn("p-1 rounded-md", isMain ? "bg-white border" : "bg-gray-100")}>
                <CreditCard className={cn("h-4 w-4", isMain ? "text-green-600" : "text-gray-500")} />
            </div>
            <div>
                <span className={cn("text-sm font-semibold", isMain && "text-green-700")}>{type}</span>
                <div className="text-xs text-muted-foreground">**** {number}</div>
            </div>
        </div>
        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
    </div>
);

export default CardTemplate;