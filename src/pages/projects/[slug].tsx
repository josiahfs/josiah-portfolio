import Navbar from "../../app/components/Navbar";
import Footer from "../../app/components/Footer";
import Image from "next/image";
import "../../app/globals.css";
import { createClient } from "contentful";
import { GetStaticPropsContext } from "next";

const space = process.env.CONTENTFUL_SPACE_ID || "";
const accessToken = process.env.CONTENTFUL_ACCESS_KEY || "";

const client = createClient({
  space,
  accessToken,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "portfolio" });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug ?? "" },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  if (!params || typeof params.slug !== "string") {
    return {
      notFound: true,
    };
  }

  const { items } = await client.getEntries({
    content_type: "portfolio",
    "fields.slug": params.slug,
  });

  return {
    props: {
      portfolio: items[0],
    },
  };
}

export const metadata = {
  title: "Calico",
  description: "Calico is a project management tool for developers.",
};

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

// export default function Calico({ portfolio }) {
const ProjectDetail: React.FC<{ portfolio: Portfolio }> = ({ portfolio }) => {
  const { title, heading, description, image, slug } = portfolio.fields;

  console.log(portfolio);
  return (
    <main className="flex flex-col bg-[#0B0B0B] h-screen overflow-hidden justify-center items-center">
      <p className="text-[48px]">This page is under construction :( </p>
    </main>
  );
};

export default ProjectDetail;
