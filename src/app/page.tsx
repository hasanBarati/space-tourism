import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
export default async function Home({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
    const filters = (await searchParams); // Check if "Technology" exists
  return (
    <div className=" relative " >
      <Navbar  />
     {filters.page ==="Home" && <HomePage />} 
    </div>
  );
}
