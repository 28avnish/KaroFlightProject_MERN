import { Link } from "react-router-dom";
import TerrainIcon from "@mui/icons-material/Terrain";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import ContactsIcon from "@mui/icons-material/Contacts";
import logo from "../../assets/Logo.jpg";

const Sidebar = ({ isSideNavOpen, setIsSideNavOpen }) => {
  const sideBarItems = [
    { label: "Dashboard", path: "/", icon: <SpaceDashboardIcon /> },
    { label: "Manage Admins", path: "/admins", icon: <SpaceDashboardIcon /> },
    { label: "Bookings", path: "/booking", icon: <StickyNote2Icon /> },
    { label: "Tours", path: "/tour", icon: <TerrainIcon /> },
    { label: "Contact Us", path: "/contactUs", icon: <ContactsIcon /> },
  ];

  // Close sidebar after an item is selected
  const handleLinkClick = () => {
    setIsSideNavOpen(false); // Close the sidebar when an item is clicked
  };

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 lg:static z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${
        isSideNavOpen ? "translate-x-0" : " -translate-x-full"
      }`}
    >
      <div className="ps-6 mt-2">
        <div className="min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0 text-center">
          <Link to={`/`} onClick={handleLinkClick}>
            <img className="h-16 rounded " src={logo} alt="Logo" />
          </Link>
        </div>
      </div>
      <nav
        aria-label="side navigation"
        className="flex-1 divide-y divide-slate-100 overflow-hidden"
      >
        <div>
          <ul className="flex flex-1 flex-col gap-1 py-3">
            {sideBarItems?.map((itm) => (
              <li className="px-3" key={itm.label}>
                <Link
                  to={itm?.path}
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-500 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500"
                  onClick={handleLinkClick} // Close the sidebar when clicked
                >
                  <div className="flex items-center self-center">
                    {itm?.icon}
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    {itm?.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
