import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <header className="sticky top-0 z-50 w-full
      bg-white/30 dark:bg-white/5
      backdrop-blur-xl
      border-b border-white/30 dark:border-white/10
      shadow-[0_4px_20px_rgba(0,0,0,0.05)]
      px-6 py-4 lg:px-10">
      
        <div className="flex items-center justify-between">
      
          <div className="flex items-center gap-3">
      
            <div className="flex items-center justify-center 
            rounded-xl bg-white/40 dark:bg-white/10
            backdrop-blur-md p-2
            border border-white/30 dark:border-white/10">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontSize: "22px" }}
              >
                graphic_eq
              </span>
            </div>
      
            <NavLink to="/" className="flex items-center">
              <h1 className="text-xl font-semibold tracking-tight 
              text-slate-900 dark:text-white">
                EchoMood
              </h1>
            </NavLink>
      
          </div>
      
          <button className="group flex h-10 w-10 items-center justify-center 
          rounded-full
          bg-white/40 dark:bg-white/10
          backdrop-blur-md
          border border-white/30 dark:border-white/10
          transition-all duration-200
          hover:bg-white/60 dark:hover:bg-white/20
          hover:scale-105">
      
            <span
              className="material-symbols-outlined 
              text-slate-700 dark:text-white
              transition-colors group-hover:text-primary"
              style={{ fontSize: "20px" }}
            >
              search
            </span>
      
          </button>
      
        </div>
      </header>
      
    );
  };
  
  export default Navbar;
  