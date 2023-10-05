import { useRouter } from "next/router";
import ResponsiveAppBar from "@/components/navbar/ResponsiveAppBar";
import Footer from "@/components/footer";
import { MissionDetailSticky } from "@/pages/work/find-mission/[mission_id]";
import { HelperDetailSticky } from "@/pages/work/find-helper/[uid]";
import { HomeVedio } from "@/pages/index";

export default function Layout({ children }) {
  const { pathname,query } = useRouter();
  console.log(pathname);
  return (
    <>
      <ResponsiveAppBar />
      {pathname && pathname == "/" ? <HomeVedio /> : null}
      <main style={{ maxWidth: "1400px", margin: "auto" }}>{children}</main>
      <Footer />
      {pathname === "/work/find-mission/[mission_id]" && query.mission_id ? (
        <MissionDetailSticky />
      ) : (
        ""
      )}
      {pathname && pathname == "/work/find-helper/[uid]" ? (
        <HelperDetailSticky />
      ) : null}
    </>
  );
}