/* eslint-disable react/jsx-no-target-blank */
import { socialsList } from "@/data/socials";

const Minifooter = () => {
  return (
    <div className=" flex sm:place-content-between items-center place-content-start mb-7 flex-row flex-wrap-reverse w-full text-white">
      <p className=" ml-10">
        <span className=" text-gray-500">Version</span> <br />
        2023 © Edition{" "}
      </p>

      <div className="w-[450px] flex flex-col sm:mr-20 sm:place-content-start ">
        <p className=" ml-[42px] text-gray-500 ">socials</p>
        <ul className=" flex  place-content-evenly">
          {socialsList.map((item) => {
            return (
              <li key={item.id}>
                <a target="_blank" href={item.link}>
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Minifooter;
