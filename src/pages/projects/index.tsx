import React, { useState, useEffect } from "react";
import Navbar from "../../app/components/Navbar";
import Footer from "../../app/components/Footer";
import ProjectCard from "../../app/components/ProjectCard";
import Image from "next/image";
import "../../app/globals.css";

import { createClient } from "contentful";

interface Portfolio {
  sys: {
    id: string;
    space: any; // Define the space property type appropriately
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: any; // Define the environment property type appropriately
    revision: number;
    contentType: any; // Define the contentType property type appropriately
    locale: string;
    // Add other properties if needed
  };
  fields: {
    id: number;
    title: string;
    slug: string;
    heading: string;
    tag: string[];
    date: string;
    image: any; // Define the image property type appropriately
    description: string;
    // Add other properties based on your data structure
  };
}

interface ProjectsProps {
  portfolios: Portfolio[];
}

export async function getStaticProps() {
  const space = process.env.CONTENTFUL_SPACE_ID || "";
  const accessToken = process.env.CONTENTFUL_ACCESS_KEY || "";

  if (!space || !accessToken) {
    throw new Error("Contentful space ID or access token is missing.");
  }

  const client = createClient({
    space,
    accessToken,
  });

  const res = await client.getEntries({ content_type: "portfolio" });

  return {
    props: {
      portfolios: res.items,
    },
  };
}

export default function Projects({ portfolios }: ProjectsProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [portfolios]);

  console.log(portfolios);

  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0B] overflow-hidden">
      {/* <div className="z-10 absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-600 px-4 py-2 text-white">
        This web is on progress, for more information contact me through email
        or linkedin
      </div> */}
      <header className="z-10 fixed right-0">
        <Navbar />
      </header>
      <section className="h-screen w-screen relative overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <p className="text-[40px]">Loading Data...</p>
          </div>
        ) : (
          <div className="overflow-y-auto h-full py-[120px]">
            <div className="flex flex-col md:grid md:grid-cols-4 gap-10 w-full justify-around px-[60px]">
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
