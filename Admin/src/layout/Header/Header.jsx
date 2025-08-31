import LogoutIcon from "@mui/icons-material/Logout";

const Header = ({ handleBackToLogin }) => {
  return (
    <div className="flex justify-start lg:justify-end items-center p-4 bg-white border-b border-slate-200 mb-5">
      <button
        onClick={handleBackToLogin}
        className="flex items-center gap-2 p-2 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 rounded-lg"
      >
        <LogoutIcon />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Header;
