export const hoverfunction = (button, setxPos, setyPos) => {
  if (!button?.current) return null;

  const element = button.current;

  const handleMouseEnter = () => {
    button.current.style.transition = "all 0.4s ease";
  };

  const handleMouseMove = (e) => {
    const hoverbutton = e.target;
    const buttonrect = hoverbutton?.getBoundingClientRect();
    const centerx = buttonrect.left + buttonrect.width / 2;
    const centery = buttonrect.top + buttonrect.height / 2;
    // setxPos((e.clientX - e.target.offsetWidth) / 20);
    // setyPos((e.clientY - e.target.offsetHeight) / 20);
    setxPos((e.clientX - centerx) / 1.5);
    setyPos((e.clientY - centery) / 1.5);
  };

  const handleMouseLeave = () => {
    setxPos(0);
    setyPos(0);
  };

  element.addEventListener("mouseenter", handleMouseEnter);

  element.addEventListener("mousemove", handleMouseMove);

  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mouseenter", handleMouseEnter);
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};
