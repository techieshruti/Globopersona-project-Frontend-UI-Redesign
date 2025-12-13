import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="ml-20 transition-all duration-300 md:ml-60 bg-[#f5f7f9] min-h-screen">
        {children}
        
      </div>
    </>
  );
};

export default MainLayout;
