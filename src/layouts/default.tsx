import { CustomNavbar } from "@/components/navbar/customnavbar";
import Footer from "@/components/footer/footer";
import ScrollToTopButton from "@/components/utils/scrolltotop";
import { Divider } from "@nextui-org/react";
import { TopBar } from "@/components/utils/topbar";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col bg-white dark:bg-black">
      <TopBar/>
     <CustomNavbar/>
      <main className="container-2xl flex-grow">
        {children}
      </main>
      <ScrollToTopButton/>
      <Divider/>
       <Footer/>
    </div>
  );
}
