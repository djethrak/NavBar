import Sidebar, { SidebarItem } from "./Sidebar";
import { BadgeHelp, Home, PlusSquare } from "lucide-react";

import React from "react";

const Navigationbar = () => {
  return (
    <Sidebar>
      <SidebarItem icon={<Home size={20} />} text="Home" active={true} />
      <SidebarItem icon={<PlusSquare size={20} />} text="Add new item" />
      <SidebarItem icon={<BadgeHelp size={20} />} text="Help" />
    </Sidebar>
  );
};

export default Navigationbar;
