"use client"

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const handleDashboard = () => {
    router.push('/dashboard')
  }

  return (
    <div>
      <button onClick={handleDashboard}>Dashboard</button>
    </div>
  );
}
