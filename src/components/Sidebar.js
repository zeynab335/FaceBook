import React from "react";
import SidebarRow from "./SidebarRow";

// icons
import FlagIcon from "@material-ui/icons/Flag";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

const Sidebar = () => {
  return (
    <div>
      <SidebarRow
        src="https://res.cloudinary.com/dnvinlruh/image/upload/v1662204970/cld-sample.jpg"
        title="Zeze Mahmoud"
      />
      <SidebarRow Icon={AddIcon} title="COVID-19 Information Center" />
      <SidebarRow Icon={FlagIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="MarketPlace" />
    </div>
  );
};

export default Sidebar;
