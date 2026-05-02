/* eslint-disable react/jsx-no-target-blank */
import { socialsList } from "@/data/socials";

const Minifooter = () => {
  return (
    // ✅ flex-wrap (not flex-wrap-reverse) so mobile stacks naturally: socials on top, version below
    <div className="flex sm:flex-row flex-col gap-6 sm:gap-0 sm:place-content-between items-start sm:items-center mb-8 px-8 sm:px-10 w-full text-white">
      <p className="text-sm">
        <span className="text-white/40 uppercase tracking-widest text-xs">Version</span>
        <br />
        {new Date().getFullYear()} © Edition
      </p>

      {/* ✅ Removed fixed w-[450px] — fluid width works on all screens */}
      <div className="flex flex-col gap-2">
        <p className="text-white/40 uppercase tracking-widest text-xs">Socials</p>
        <ul className="flex gap-6 flex-wrap">
          {socialsList.map((item) => (
            <li key={item.id}>
              <a
                target="_blank"
                rel="noreferrer"
                href={item.link}
                // ✅ Added hover state and transition
                className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Minifooter;