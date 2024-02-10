export const hoverfunction = (button, setxPos, setyPos) => {
  button?.current?.addEventListener("mouseenter", () => {
    button.current.style.transition = "all 0.4s ease";

    // Add a smooth transition effect
  });

  button?.current?.addEventListener("mousemove", (e) => {
    const hoverbutton = e.target;
    const buttonrect = hoverbutton?.getBoundingClientRect();
    const centerx = buttonrect.left + buttonrect.width / 2;
    const centery = buttonrect.top + buttonrect.height / 2;
    // setxPos((e.clientX - e.target.offsetWidth) / 20);
    // setyPos((e.clientY - e.target.offsetHeight) / 20);
    setxPos((e.clientX - centerx) / 1.5);
    setyPos((e.clientY - centery) / 1.5);
  });

  button?.current?.addEventListener("mouseleave", () => {
    setxPos(0);
    setyPos(0);
  });
};
