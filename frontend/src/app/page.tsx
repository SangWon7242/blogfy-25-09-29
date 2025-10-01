"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [homeData, setHomeData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setHomeData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching home data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="main-section flex-1 flex flex-col">
      <div className="inner flex-1 flex flex-col items-center justify-center">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <h1 className="text-2xl font-bold">BLOGFY</h1>
            <p className="text-lg">개발자들을 위한 블로그 플랫폼</p>
            <p>{homeData}</p>
          </>
        )}
      </div>
    </section>
  );
}
