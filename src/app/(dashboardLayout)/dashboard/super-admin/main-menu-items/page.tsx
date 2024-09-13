"use client";
import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import { TMainMenu } from "@/constant/navitems";
import { cn } from "@/lib/utils";
import {
  useGetAllMainMenuQuery,
  useRearrangeMainMenuItemsMutation,
} from "@/redux/api/main.menu.api";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import MenuItemDropdown from "@/components/dashboard/super-admin/mainMenu/MenuItemDropdown";

const MainMenuItems = () => {
  const dragItemRef = useRef<any>(null);
  const dragOverItemRef = useRef<any>(null);
  const [active, setActive] = useState<null | number>(null);

  const { data, isLoading } = useGetAllMainMenuQuery({});
  const [rearrangeMenuItem] = useRearrangeMainMenuItemsMutation();

  if (isLoading) {
    return <Loading />;
  }

  const dragStart = (index: number) => {
    dragItemRef.current = index;
    setActive(index);
  };

  const dragEnter = (index: number) => {
    dragOverItemRef.current = index;
  };

  const dragEnd = () => {
    const items = [...data?.data];

    console.log({ dragItemRef, dragOverItemRef });

    const draggedItem = items.splice(dragItemRef.current, 1)[0];

    items.splice(dragOverItemRef.current, 0, draggedItem);
    rearrangeMenuItem({ data: items });
    setActive(null);
  };
  return (
    <div>
      <div className="h-14 mt-10 max-w-5xl mx-auto bg-white p-4 rounded mb-6 flex items-center justify-between">
        <span>Menu Items</span>{" "}
        <Button asChild>
          <Link href={"/dashboard/super-admin/main-menu-items/create-menu"}>
            Create Menu
          </Link>
        </Button>
      </div>
      <div className="max-w-5xl mx-auto w-full  p-6 lg:p-12 rounded-md border">
        <motion.div layout className="grid grid-cols-1 gap-4">
          {data.data.map((item: TMainMenu, index: number) => (
            <motion.div layout key={item._id}>
              <div
                draggable
                onDrag={(e) => dragStart(index)}
                onDragEnter={(e) => dragEnter(index)}
                onDragEnd={dragEnd}
                className={cn(
                  "bg-white border px-4 py-2 rounded-md flex justify-between items-center cursor-grab active:cursor-grabbing active:opacity-100",
                  {
                    "scale-95 duration-200 ": index === active,
                  }
                )}
              >
                <div>
                  <h2 className="text-lg font-[600]">{item.label}</h2>
                  <p className="text-[16px]">{item.URL}</p>
                </div>
                <MenuItemDropdown _id={item._id} />
              </div>
              {item.dropdown && item.dropdown.length > 0 && (
                <div className="grid grid-cols-1 gap-4 ml-4 md:ml-8 lg:ml-12 mt-4">
                  {item.dropdown.map((dItem) => (
                    <div
                      key={dItem._id}
                      className="bg-white border px-4 py-2 rounded-md flex justify-between items-center"
                    >
                      <div>
                        <h2 className="text-lg font-[600]">{dItem.label}</h2>
                        <p className="text-[16px]">{dItem.URL}</p>
                      </div>
                      <MenuItemDropdown
                        _id={item._id}
                        dropdownItemId={dItem._id}
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MainMenuItems;

/**
 * "use client";

import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import { TMainMenu } from "@/constant/navitems";
import {
  useGetAllMainMenuQuery,
  useRearrangeMainMenuItemsMutation,
} from "@/redux/api/main.menu.api";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MainMenuItems = () => {
  const dragItemRef = useRef<number | null>(null);
  const dragOverItemRef = useRef<number | null>(null);

  const [active, setActive] = useState<number | null>(null);

  // Fetch menu items from API
  const { data, isLoading } = useGetAllMainMenuQuery({});
  const [rearrangeMenuItem] = useRearrangeMainMenuItemsMutation();

  if (isLoading) {
    return <Loading />;
  }

  // Handle drag start
  const handleDragStart = (index: number) => {
    dragItemRef.current = index;
    setActive(index);
  };

  // Handle drag enter
  const handleDragEnter = (index: number) => {
    dragOverItemRef.current = index;
  };

  // Handle drag end
  const handleDragEnd = () => {
    if (dragItemRef.current !== null && dragOverItemRef.current !== null) {
      const items = [...data?.data];
      const draggedItem = items.splice(dragItemRef.current, 1)[0];
      items.splice(dragOverItemRef.current, 0, draggedItem);
      rearrangeMenuItem({ data: items });
      setActive(null);
    }
  };

  return (
    <div>
      // Header Section 
      <div className="h-14 mt-10 max-w-5xl mx-auto bg-white p-4 rounded mb-6 flex items-center justify-between">
        <span>Menu Items</span>
        <Button asChild>
          <Link href="/dashboard/super-admin/main-menu-items/create-menu">
            Create Menu
          </Link>
        </Button>
      </div>

      // Menu Items List
      <div className="max-w-5xl mx-auto w-full p-6 lg:p-12 rounded-md border">
        <motion.div layout className="grid grid-cols-1 gap-4">
          {data?.data.map((item: TMainMenu, index: number) => (
            <MenuItem
              key={item._id}
              item={item}
              index={index}
              active={active}
              onDragStart={handleDragStart}
              onDragEnter={handleDragEnter}
              onDragEnd={handleDragEnd}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MainMenuItems;

type MenuItemProps = {
  item: TMainMenu;
  index: number;
  active: number | null;
  onDragStart: (index: number) => void;
  onDragEnter: (index: number) => void;
  onDragEnd: () => void;
};

const MenuItem = ({
  item,
  index,
  active,
  onDragStart,
  onDragEnter,
  onDragEnd,
}: MenuItemProps) => {
  // Render dropdown items
  const renderDropdownItems = (dropdownItems: TMainMenu[]) => (
    <div className="grid grid-cols-1 gap-4 ml-4 md:ml-8 lg:ml-12 mt-4">
      {dropdownItems.map((dropdownItem) => (
        <div
          key={dropdownItem._id}
          className="bg-white border px-4 py-2 rounded-md flex justify-between items-center"
        >
          <div>
            <h2 className="text-lg font-[600]">{dropdownItem.label}</h2>
            <p className="text-[16px]">{dropdownItem.URL}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <motion.div layout>
      <div
        draggable
        onDragStart={() => onDragStart(index)}
        onDragEnter={() => onDragEnter(index)}
        onDragEnd={onDragEnd}
        className={cn(
          "bg-white border px-4 py-2 rounded-md flex justify-between items-center cursor-grab",
          { "scale-95 duration-200": index === active }
        )}
      >
        <div>
          <h2 className="text-lg font-[600]">{item.label}</h2>
          <p className="text-[16px]">{item.URL}</p>
        </div>
      </div>

      {item.dropdown?.length > 0 && renderDropdownItems(item.dropdown)}
    </motion.div>
  );
};

 */
