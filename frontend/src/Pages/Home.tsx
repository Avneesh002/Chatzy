import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className=" w-100 h-screen antialiased">
      <div className="h-40 center w-full border-b-2">
        <h1 className="text-center text-5xl text-romantic font-bold h-max">
          <span className="text-red-700">O</span>-
          <span className="text-romantic">Mingle</span>
        </h1>
      </div>

      <div className="center h-60">
        <Link to="/chat">
          <button className="btn-animated rounded-full py-3 px-8 border-2 border-red-700 text-lg text-red-700 cursor-pointer">
            Chat Anonymously
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
