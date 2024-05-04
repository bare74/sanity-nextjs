import React, { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    const text = document.querySelector("h1");
    window.addEventListener("scroll", () => {
      const current = window.scrollY;
      console.log(current);
      text.style.fontSize = `clamp(2rem, ${current}px, 20rem)`;
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <>
      <main>
        <div className="heroSection">
          <div className="container">
            <h1>Bjørn Are Nielsen</h1>
          </div>
        </div>
      </main>
    </>
  );
}
