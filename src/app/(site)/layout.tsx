"use client";
import Header from "@/components/layout/navbar/navbar";
import Upbutton from "@/components/layout/button/upbutton";
import Viewbutton from "@/components/layout/button/viewbutton";
import MenubuttonNav2 from "@/components/layout/navbar/menubutton&nav2";
import { Provider } from "react-redux";
import { store } from "@/stores/store";
// import { AnimatePresence } from "framer-motion";
const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <Header />
      <MenubuttonNav2 />
      <Viewbutton />
      <Upbutton />
      <main className="">{children}</main>
    </Provider>
  );
};

export default ClientLayout;
