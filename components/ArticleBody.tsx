import type { ReactNode } from "react";
import type { ArticleBody as ArticleBodyValue, ImportantNoteBlock, PortableTextBlock, PortableTextSpan } from "@/lib/sanity";

type MarkDefinition = NonNullable<PortableTextBlock["markDefs"]>[number];

export default function ArticleBody({ body }: { body?: ArticleBodyValue }) {
  if (!body) return null;
  if (typeof body === "string") return <div className="article-body">{renderLegacyBody(body)}</div>;
  return <div className="article-body">{renderBlocks(body)}</div>;
}

function renderBlocks(blocks: Array<PortableTextBlock | ImportantNoteBlock>) {
  const rendered: ReactNode[] = [];
  for (let index = 0; index < blocks.length;) {
    const block = blocks[index];
    if (block._type === "importantNote") {
      rendered.push(<aside key={block._key || `note-${index}`} className="article-note" aria-label={block.title || "Important note"}><p className="article-note-title">{block.title || "Important note"}</p>{block.body?.map((noteBlock, noteIndex) => <p key={noteBlock._key || noteIndex}>{renderSpans(noteBlock.children, noteBlock.markDefs)}</p>)}</aside>);
      index += 1;
      continue;
    }
    if (block.listItem) {
      const listType = block.listItem;
      const items: PortableTextBlock[] = [];
      while (index < blocks.length) {
        const candidate = blocks[index];
        if (candidate._type === "importantNote" || candidate.listItem !== listType) break;
        items.push(candidate);
        index += 1;
      }
      const List = listType === "number" ? "ol" : "ul";
      rendered.push(<List key={block._key || `list-${index}`} className={listType === "number" ? "article-list article-list-number" : "article-list"}>{items.map((item, itemIndex) => <li key={item._key || itemIndex}>{renderSpans(item.children, item.markDefs)}</li>)}</List>);
      continue;
    }
    rendered.push(renderBlock(block, index));
    index += 1;
  }
  return rendered;
}

function renderBlock(block: PortableTextBlock, index: number) {
  const content = renderSpans(block.children, block.markDefs);
  const key = block._key || index;
  if (block.style === "h2") return <h2 key={key}>{content}</h2>;
  if (block.style === "h3") return <h3 key={key}>{content}</h3>;
  return <p key={key}>{content}</p>;
}

function renderSpans(spans?: PortableTextSpan[], definitions?: MarkDefinition[]) {
  return spans?.map((span, index) => {
    let content: ReactNode = span.text || "";
    for (const mark of span.marks || []) {
      const definition = definitions?.find((item) => item._key === mark);
      if (definition?._type === "link") {
        const href = safeHref(definition.href);
        content = href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{content}</a> : content;
      } else if (mark === "strong") content = <strong>{content}</strong>;
      else if (mark === "em") content = <em>{content}</em>;
    }
    return <span key={span._key || index}>{content}</span>;
  });
}

function safeHref(value?: string) {
  if (!value) return null;
  try {
    const url = new URL(value, "https://newmasterhse.invalid");
    if (["https:", "http:", "mailto:"].includes(url.protocol)) return value;
  } catch {
    return null;
  }
  return null;
}

/** Converts legacy plain text and the existing limited HTML fallback without injecting HTML. */
function renderLegacyBody(value: string) {
  const matches = Array.from(value.matchAll(/<(h2|h3|p|li)[^>]*>([\s\S]*?)<\/\1>/gi));
  if (!matches.length) return value.split(/\n{2,}/).filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph.trim()}</p>);
  const output: ReactNode[] = [];
  let listItems: string[] = [];
  const flushList = () => {
    if (listItems.length) output.push(<ul className="article-list" key={`legacy-list-${output.length}`}>{listItems.map((item, index) => <li key={index}>{plainText(item)}</li>)}</ul>);
    listItems = [];
  };
  for (const [index, match] of matches.entries()) {
    const tag = match[1].toLowerCase();
    const text = plainText(match[2]);
    if (tag === "li") {
      listItems.push(text);
      continue;
    }
    flushList();
    if (tag === "h2") output.push(<h2 key={index}>{text}</h2>);
    else if (tag === "h3") output.push(<h3 key={index}>{text}</h3>);
    else output.push(<p key={index}>{text}</p>);
  }
  flushList();
  return output;
}

function plainText(value: string) {
  return value.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&quot;/g, '"').trim();
}
