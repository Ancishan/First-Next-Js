import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex justify-between  bg-blue-600 text-white shadow-lg">
           
                <div>
                    <Link href="/" className="text-2xl font-bold mb-6">Brand</Link>
                </div>
                <div className="flex">
                    <Link href="/about" className="block p-2 hover:bg-blue-700 rounded transition">About</Link>
                    <Link href="/dashboard" className="block p-2 hover:bg-blue-700 rounded transition">Dashboard</Link>
                    <Link href="/login" className="block p-2 hover:bg-blue-700 rounded transition">Login</Link>
                    <Link href="/registration" className="block p-2 hover:bg-blue-700 rounded transition">Register</Link>
                </div>
            </div>
       
    );
};

export default Navbar;