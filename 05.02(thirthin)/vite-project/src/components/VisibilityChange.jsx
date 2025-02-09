import { useEffect } from "react";

export default function VisibilityChange() {
  useEffect(() => {
    const listener = window.addEventListener("visibilitychange", () => {
      console.log("Tab visibility changed");
    });

    return () => {
      window.removeEventListener("visibilitychange", listener);
    };
  }, []);
  return <div>VisibilityChange</div>;
}
