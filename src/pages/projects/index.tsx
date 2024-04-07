import React, { useState, useEffect } from "react";
import Navbar from "../../app/components/Navbar";
import Footer from "../../app/components/Footer";
import ProjectCard from "../../app/components/ProjectCard";
import Image from "next/image";
import "../../app/globals.css";

import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "portfolio" });

  return {
    props: {
      portfolios: res.items,
    },
  };
}

export default function Projects({ portfolios }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [portfolios]);

  console.log(portfolios);

  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0B] overflow-hidden">
      <div className="z-10 absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-600 px-4 py-2 text-white">
        This web is on progress, for more information contact me through email
        or linkedin
      </div>
      <header className="z-10 fixed right-0">
        <Navbar />
      </header>
      <section className="h-screen w-screen bg-pattern-bg relative overflow-hidden">
        {loading ? ( // Display loading state if data
          <div className="flex justify-center items-center h-full">
            <p className="text-[40px]">Loading Data...</p>
          </div>
        ) : (
          <div className="overflow-y-auto h-full py-[120px]">
            <div className="grid grid-cols-4 gap-10 w-full justify-around px-[60px]">
              {portfolios.map((portfolio) => (
                <ProjectCard key={portfolio.sys.id} portfolio={portfolio} />
              ))}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
