import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/action/auth";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import { Navigate, Outlet } from "react-router-dom";

export default function Layout() {
  const { isUserLoggedIn } = useSelector((state) => state.auth);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const dispatch = useDispatch();
  
  if (!isUserLoggedIn) {
    return <Navigate to="/login" replace />;
  }


  const handleBackToLogin = () => {
    dispatch(logout());
  };



  return (
    <>
      {/* Mobile trigger button */}
      <button
        title="Side navigation"
        type="button"
        className={`visible fixed right-6 top-2 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
          isSideNavOpen
            ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
            : ""
        }`}
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      >
        <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
          ></span>
        </div>
      </button>

      {/* Side Navigation */}
      <div className="flex h-screen">
        <Sidebar
          isSideNavOpen={isSideNavOpen}
          setIsSideNavOpen={setIsSideNavOpen}
        />

        <div className="w-full overflow-x-hidden">
          <Header handleBackToLogin={handleBackToLogin} />
          <Outlet />
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
          isSideNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
    </>
  );
}
