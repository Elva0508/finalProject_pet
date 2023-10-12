import { useRouter } from "next/router";
import ResponsiveAppBar from "@/components/navbar/ResponsiveAppBar";
import Footer from "@/components/footer";
import { MissionDetailSticky } from "@/pages/work/find-mission/[mission_id]";
import { HelperDetailSticky } from "@/pages/work/find-helper/[uid]";
import { HomeVedio } from "@/pages/index";
import BreadCrumb from "./breadCrumb";
import { useEffect, useRef, useState } from "react";
import CatLoading from "./cat-loading";
import { useAuth } from "@/context/fakeAuthContext";
export default function Layout({ children }) {
  const { userId } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const { pathname, query } = useRouter();
  const loadingRef = useRef();
  // useEffect(() => {
  //   // 讓頁面可以滾頓
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, [4800]);
  //   setTimeout(() => {
  //     const loading = document.querySelector(".cat-loading-wrapper");
  //     console.log(loading);
  //     loading.classList.add("cat-loading-opacity");
  //   }, [4300]);
  // }, []);
  // useEffect(() => {
  //   if (isLoading) {
  //     document.body.classList.add("disableFlow");
  //   } else {
  //     document.body.classList.remove("disableFlow");
  //   }
  // }, [isLoading]);
  return (
    <>
      {/* <CatLoading ref={loadingRef} /> */}
      <ResponsiveAppBar />
      {pathname && pathname == "/" ? <HomeVedio /> : null}
      <main style={{ maxWidth: "1320px", margin: "auto" }}>{children}</main>
      <Footer />
      {pathname === "/work/find-mission/[mission_id]" && query.mission_id ? (
        <MissionDetailSticky user_id={userId} />
      ) : (
        ""
      )}
      {pathname && pathname == "/work/find-helper/[uid]" ? (
        <HelperDetailSticky />
      ) : null}
    </>
  );
}
