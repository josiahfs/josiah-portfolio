import Navbar from "../../app/components/Navbar";
import Footer from "../../app/components/Footer";
import Image from "next/image";
import "../../app/globals.css";
import { createClient } from "contentful";
import { GetStaticPropsContext } from "next";
// import TableOfContents from "@/app/components/project/TableOfContents";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import TableOfContents from "@/app/components/project/TableOfContents";

const space = process.env.CONTENTFUL_SPACE_ID || "";
const accessToken = process.env.CONTENTFUL_ACCESS_KEY || "";

const client = createClient({
  space,
  accessToken,
});

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
    detail: string;
    // Add other properties based on your data structure
  };
}

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

const renderContent = (content) => {
  switch (content.nodeType) {
    case "embedded-asset-block":
      return (
        <div className="rounded-[24px] flex justify-center">
          {/* Render your embedded asset block content here */}
          <Image
            src={content.data.target.fields.file.url}
            alt={content.data.target.fields.title}
            width={content.data.target.fields.file.details.image.width}
            height={content.data.target.fields.file.details.image.height}
          />
        </div>
      );
    default:
      return null;
  }
};

const parseRichTextForTableOfContents = (richText) => {
  const toc = []; // Table of contents data structure
  const nodes = richText.content; // Extract content nodes from rich text

  // Traverse through the nodes to identify headings
  nodes.forEach((node) => {
    if (node.nodeType.startsWith("heading")) {
      // Extract heading level (e.g., "heading-1", "heading-2")
      const level = parseInt(node.nodeType.split("-")[1]);

      // Extract heading content
      const content = node.content[0].value;

      // Add heading to table of contents
      toc.push({ level, content });
    }
  });

  return toc;
};

const ProjectDetail: React.FC<{ portfolio: Portfolio }> = ({ portfolio }) => {
  const { title, heading, description, image, slug, detail } = portfolio.fields;

  return (
    <main className="flex flex-col bg-[#0B0B0B] overflow-hidden px-[24px] lg:px-[240px]">
      <header className="z-10 fixed right-0">
        <Navbar />
      </header>

      <section className="flex flex-col space-y-4 bg-[#0B0B0B]">
        <div className="w-full rounded-[24px] pt-[80px] lg:pt-[40px]">
          <Image
            src={"https:" + image.fields.file.url}
            alt="Picture of project 1"
            width={1500}
            height={1500}
            className="relative w-full object-contain h-auto rounded-md"
          />
        </div>
        <h1 className="text-4xl text-[#C19C63] font-bold">{title}</h1>
        <p className=" text-base text-[#ECECEC] font-light text-justify">
          {description}
        </p>
        <div className="flex space-x-10">
          <p>Text</p>
          <p>Text</p>
        </div>
      </section>

      <hr className="mt-4 border-[#B1B0B0]" />

      <section className="flex">
        <article className="mdx projects prose mx-auto w-4/5 transition-colors dark:prose-invert">
          {documentToReactComponents(detail, {
            renderNode: {
              "embedded-asset-block": (node, children) => renderContent(node),
            },
          })}
        </article>
        {/* <div className="w-1/5">{renderTableOfContents()}</div> */}
        <div className="w-1/5">
          {" "}
          <TableOfContents richText={detail} />
        </div>
      </section>

      <Footer />

      <style tsx>{`
        h2 {
          border-left: 5px solid #c19c63;
          padding-left: 1rem;
          font-size: 30px;
          font-weight: 600;
          position: relative;
          width: fit-content;
          margin-bottom: 20px; 
          margin-top: 20px;
        }

        h2::after {
          content: "";
          background-color: #c19c63;
          height: 3px;
          width: 0;
          position: absolute;
          left: 1rem;
          bottom: -5px;
          border-radius: 0.25rem;
          transition-duration: 0.3s;
        }

        h2:hover::after {
          width: 100%;
        }

        h3 {
          font-size: 28px;
          font-weight: 500;
          position: relative;
          width: fit-content;
          margin-bottom: 20px; 
        }

        h3::after {
          content: "";
          background-color: #c19c63;
          height: 3px;
          width: 0;
          position: absolute;
          left: 0;
          bottom: -5px;
          border-radius: 0.25rem;
          transition-duration: 0.3s;
        }

        h3:hover::after {
          width: 100%;
        }

        p {
          font-size: 1rem;
          line-height: 1.5rem;
          font-weight: 300;
          color: #ececec;
          margin-bottom: 20px; 
          text-align: justify;
        }
      `}</style>
    </main>
  );
};

export default ProjectDetail;
