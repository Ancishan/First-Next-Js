import Sidebar from "@/components/shared/Sidebar";

const DashboardLayout = ({children}) => {
    return (
        <div className="flex">
         <Sidebar></Sidebar>
            {children}
            
        </div>
    );
};

export default DashboardLayout;