import React from "react";
import { Link } from "react-router-dom";
import NavHeader from "../components/NavHeader"

const Home = () => {
  return (
    <div className="flex flex-col items-center pt-6">
      <NavHeader/>
      <div className="flex gap-8 mt-10">
          <Link to="/verification" className="w-44 bg-[#8DD3BB] text-sm font-bold py-2 rounded-sm text-center">Verificacion</Link>
          <Link to="/newPassword" className="w-44 bg-[#8DD3BB] text-sm font-bold py-2 rounded-sm text-center">Nueva Pass</Link>
      </div>     
    </div>
  );
};

export default Home;
