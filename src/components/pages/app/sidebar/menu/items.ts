import { routes } from "modules/routes";
import {
  BsFolder2Open,
  BsCalendar2Check,
  BsCalendar,
  BsBook,
} from "react-icons/bs";
import { menuType } from "types/menu";

export const menuItems: menuType[] = [
  {
    id: 0,
    name: "Projects",
    link: routes.project,
    Icon: BsFolder2Open,
  },
  {
    id: 1,
    name: "Tasks",
    link: "/",
    Icon: BsCalendar2Check,
  },
  {
    id: 2,
    name: "Schedule",
    link: "/",
    Icon: BsCalendar,
  },
  {
    id: 3,
    name: "Notes",
    link: "/",
    Icon: BsBook,
  },
];
