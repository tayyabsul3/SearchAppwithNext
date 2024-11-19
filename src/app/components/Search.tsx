"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Search = () => {
  const [seach, setseach] = useState("");
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setseach("");
    router.push(`/${seach}/`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-50 flex justify-center md:justify-between "
    >
      <input
        type="text"
        placeholder="Search Wikipedia"
        value={seach}
        onChange={(e) => setseach(e.target.value)}
        className=" p-2 px-5 rounded-xl  bg-white outline-none"
      />
      <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
        🚀
      </button>
    </form>
  );
};

export default Search;
