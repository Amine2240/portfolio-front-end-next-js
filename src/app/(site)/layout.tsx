"use client"
import Header from "../components/navbar";
import Footer from "../components/footer";
import Upbutton from "../components/upbutton";
import Viewbutton from "../components/viewbutton";
import MenubuttonNav2 from "../components/menubutton&nav2";
import { Provider } from "react-redux";
import { store } from "../redux/store";
const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <div className=" min-h-screen">
        <Header />
        <MenubuttonNav2 />
        <Viewbutton />
        <Upbutton />
        <main className="container flex-1">{children}</main>
      </div>
    </Provider>
  );
};

export default ClientLayout;
