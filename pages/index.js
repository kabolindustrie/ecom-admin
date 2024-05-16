import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="test-blue-900 flex  justify-between ">
        <h2>
          Hello,<b>{session && session.user.name}</b>
        </h2>
        <div className="flex bg-gray-300 text-black gap-1 rounded-lg overflow-hidden">
          <Image
            width={24}
            height={24}
            className="w-8 h-8"
            src={session?.user?.image}
            alt=""
          />
          <span className="px-2">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
