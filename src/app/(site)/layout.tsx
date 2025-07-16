"use client";
import Header from "../components/navbar";
import Upbutton from "../components/upbutton";
import Viewbutton from "../components/viewbutton";
import MenubuttonNav2 from "../components/menubutton&nav2";
import { Provider } from "react-redux";
import { store } from "../redux/store";
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
