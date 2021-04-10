import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="pb-10 text-5xl">404 error</h1>
      <h3>
        Podstrona nie istnieje, przejdz do{" "}
        <Link className="text-blue-600 underline" to="/">
          Strony głównej
        </Link>
      </h3>
    </div>
  );
}
