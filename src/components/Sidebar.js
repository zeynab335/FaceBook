import React from "react";
import SidebarRow from "./SidebarRow";

// icons
import FlagIcon from "@material-ui/icons/Flag";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Sidebar = () => {
  return (
    <>
      <SidebarRow
        src="https://res.cloudinary.com/dnvinlruh/image/upload/v1662204970/cld-sample.jpg"
        title="Zeze"
      />
      <SidebarRow Icon={FlagIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="MarketPlace" />
    </>
  );
};

export default Sidebar;
