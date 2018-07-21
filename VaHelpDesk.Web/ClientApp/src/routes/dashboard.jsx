// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import FacilitiesList from "views/Facilities/FacilitiesTableList.jsx";
import HardwaresList from "views/Hardwares/HardwaresTableList.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import SingleHardware from "../views/Hardwares/SingleHardware";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/hardwares",
    sidebarName: "Hardwares",
    navbarName: "Hardwares",
    icon: ContentPaste,
    component: HardwaresList
  },
  {
    path: "/hardwares/:id",
    sidebarName: "Single Hardware",
    navbarName: "Single Hardware",
      icon: ContentPaste,
      component: SingleHardware
  },
  {
    path: "/facilities",
    sidebarName: "Facilities",
    navbarName: "Facilities",
    icon: LibraryBooks,
    component: FacilitiesList
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
