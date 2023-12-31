import { Check } from "lucide-react";

const ItemsList = ({ item }: { item: string }) => {
  return (
    <li className="flex gap-4 items-start">
      <span className="bg-red-500 rounded-full w-5 h-5 grid place-content-center">
        <Check color="#ffffff" strokeWidth={3} className="w-4 h-4" />
      </span>
      <p className="text-sm">{item}</p>
    </li>
  );
};

export default ItemsList;
