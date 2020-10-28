import { Button } from "@material-ui/core";
import {
  BookmarkBorder,
  Home,
  ListAlt,
  MailOutline,
  MoreHoriz,
  NotificationsNone,
  PermIdentity,
  Search,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <Twitter className="sidebar__twitterIcon" />

      <SidebarOption active Icon={Home} title="Home" />
      <SidebarOption Icon={Search} title="Search" />
      <SidebarOption Icon={NotificationsNone} title="Notification" />
      <SidebarOption Icon={MailOutline} title="Messages" />
      <SidebarOption Icon={BookmarkBorder} title="Bookmarks" />
      <SidebarOption Icon={ListAlt} title="lists" />
      <SidebarOption Icon={PermIdentity} title="Profile" />
      <SidebarOption Icon={MoreHoriz} title="More" />

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
