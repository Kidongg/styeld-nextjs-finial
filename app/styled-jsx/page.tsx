"use client";

import React from "react";

const page = () => {
  return (
    <section>
      <div className="nav">STYLED-JSX</div>

      <style jsx>{`
        .nav {
          background-color: blueviolet;
        }
      `}</style>
    </section>
  );
};

export default page;
