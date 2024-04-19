import Navbar from "../../app/components/Navbar";
import Footer from "../../app/components/Footer";
import Image from "next/image";
import "../../app/globals.css";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
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

export async function getStaticProps({ params }) {
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

export default function Calico({ portfolio }) {
  const { title, heading, description, image, slug } = portfolio.fields;

  console.log(portfolio);
  return (
    <main className="flex flex-col bg-[#0B0B0B] h-screen overflow-hidden justify-center items-center">
      <p className="text-[48px]">This page is under construction :( </p>
    </main>
  );
}
