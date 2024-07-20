import Image from "next/image";
import { fetchNewStories } from "./data/fetch";

export default async function Home() {
  const newStories = await fetchNewStories();

  return (
    <main className="">
      <h1 className={`mb-4 text-xl md:text-2xl`}>Home</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <ul className="">
        {newStories.map((story) => (
          <li>{story.title}</li>
        ))}
        {/* <RevenueChart revenue={revenue}  /> */}
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </ul>
    </main>
  );
}
