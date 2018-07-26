// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Facilities from "@material-ui/icons/Business";
import Hardwares from "@material-ui/icons/DesktopMac";
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
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import SingleHardware from "../views/Hardwares/SingleHardware";
import AddHardware from "../views/Hardwares/AddHardware";
import AddFacility from "../views/Facilities/AddFacility";
import SingleFacility from "../views/Facilities/SingleFacility";
import HardwaresIndex from "../views/Hardwares/HardwaresIndex";
import FacilitiesIndex from "../views/Facilities/FacilitiesIndex";

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
    icon: Hardwares,
      component: HardwaresIndex,
      props: this.props
    },
    {
        path: "/addhardware",
        component: AddHardware,
        invisible: true
    },
  {
    path: "/facilities",
    sidebarName: "Facilities",
    navbarName: "Facilities",
      icon: Facilities,
      component: FacilitiesIndex
    },
    {
        path: "/addfacility",
        component: AddFacility,
        invisible: true
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
