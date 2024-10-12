import React from "react";
import Link from "next/link";

interface Item {
  name: string;
  href: string;
}

interface ItemListProps {
  categories: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ categories }) => {
  return (
    <div className="mb-6">
      <div className="relative">
        <div className="overflow-x-auto pb-2 custom-scrollbar">
          <div className="flex gap-4 flex-nowrap">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="text-sm text-gray-500 font-medium hover:text-[#0369a1] hover:underline whitespace-nowrap"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ItemList;
