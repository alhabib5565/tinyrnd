import { Button } from "@/components/ui/button";
import Link from "next/link";

const MainMenuItems = () => {
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
      <div className="max-w-5xl mx-auto w-full  p-6 lg:p-12 rounded-md border"></div>
    </div>
  );
};

export default MainMenuItems;
