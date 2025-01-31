import Link from "next/link";


const Sidebar = () => {
    return (
        <div className=" w-40 h-screen bg-slate-400 text-white shadow-lg">
            <nav className=" p-5 flex flex-col space-y-4">
                <Link href="/" className="text-xl font-bold mb-6">My SideBar</Link>
                <ul className="space-y-4">
                    <li> <Link href="/profile" className="block p-2 hover:bg-blue-700 rounded transition">Profile</Link></li>
                    <li><Link href="/setting" className="block p-2 hover:bg-blue-700 rounded transition">Settings</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
