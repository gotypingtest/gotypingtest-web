"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  // test page par hide karna hai
  const hideHeaderFooter = [
  "/exam-test/exam-typing",
  "/exam-test/typing-result",
].includes(pathname);

  return (
    <>
      {!hideHeaderFooter &&  <Header />}

      {children}

      {!hideHeaderFooter && <Footer />}
    </>
  );
}