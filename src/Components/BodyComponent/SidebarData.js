import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

export const SidebarData = [
  {
    title: "Student",
    icon: <PersonIcon />,
    link: "/student",
  },
  {
    title: "Lesson Plan",
    icon: <LibraryBooksIcon />,
    link: "/aine_ai",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/settings",
  },
];
