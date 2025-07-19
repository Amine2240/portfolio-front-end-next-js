import Link from "next/link";

export default function Links({ pathname }) {
  const navelements = [
    {
      id: 0,
      name: "work",
      link: "work",
    },
    {
      id: 1,
      name: "about",
      link: "about",
    },
    {
      id: 2,
      name: "contact",
      link: "contact",
    },
  ];

  return (
    <ul className=" flex  w-[300px] place-content-around mr-5  ">
      {navelements.map((item) => {
        return (
          <Link href={`/${item.link}`}>
            <li
              key={item.id}
              onClick={() => {
                // navigateTo(`${item.link}`);
                // setindex(i);
              }}
            >
              <p
                style={{
                  color:
                    // JSON.parse(localStorage.getItem("navbarindex"))
                    pathname == `/${item.name}`
                      ? "red"
                      : pathname == `/work` || pathname == "/about"
                      ? "black"
                      : "white",
                  transition: "all ease 0.3s",
                  transitionDelay: "0.3s",
                }}
                className=" text-lg mylabel cursor-pointer capitalize font-medium"
              >
                {item.name}
              </p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
