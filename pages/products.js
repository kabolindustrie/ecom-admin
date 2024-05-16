import Layout from "@/components/Layout";
import Link from "next/link";


export default function products() {
  return (
    <Layout>
      <Link
      className="bg-blue-900 text-white rounded-md py-1 px-2"
      href={'/products/new'}>Add new Prodducts</Link>
    </Layout>
  )
}
