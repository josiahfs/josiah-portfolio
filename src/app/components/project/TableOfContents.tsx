import React from "react";

type Heading = {
  level: number;
  content: string;
};

type TableOfContentsProps = {
  richText: any; // Assuming richText is the Contentful rich text object
};

const TableOfContents: React.FC<TableOfContentsProps> = ({ richText }) => {
  const parseRichTextForTableOfContents = (richText) => {
    if (!richText || !richText.content) {
      return [];
    }

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

  const tableOfContents = parseRichTextForTableOfContents(richText);

  if (!tableOfContents || tableOfContents.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col mt-4">
      <p className="text-xl font-semibold">Table of Contents</p>
      <ul>
        {tableOfContents.map((heading, index) => (
          <li
            key={index}
            style={{ marginLeft: `${(heading.level - 2) * 24}px` }}
          >
            <a
              href={`#heading-${index}`}
              className="text-[#B1B0B0] hover:text-[#C19C63] transition-colors duration-300 ease-in-out hover:font-semibold"
            >
              {heading.content}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
