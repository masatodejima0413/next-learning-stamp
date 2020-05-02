import React from "react";
import Title from "../components/Title/Title";
import Home from "../components/Login/Home";
import Copyright from "../components/Footer/Copyright";

const index = () => {
  return (
    <>
      <Title />
      <Home />
      <Copyright />
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;900&display=swap");
      `}</style>
    </>
  );
};

export default index;
