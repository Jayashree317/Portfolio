import { useLayoutEffect, useState } from "react";

export default function useScrollOffset(navbarId = "navbar", buffer = 35) {
  const [offset, setOffset] = useState(-10);

  useLayoutEffect(() => {
    const updateOffset = () => {
      const nav = document.getElementById(navbarId);
      if (nav) {
        setOffset(-(nav.offsetHeight + buffer));
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, [navbarId, buffer]);

  return offset;
}
