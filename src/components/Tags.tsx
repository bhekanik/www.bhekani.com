import Link from "next/link";

interface Props {
  tags: string;
}

export function Tags({ tags }: Props): JSX.Element {
  return (
    <>
      {tags.split(", ").map((tag, index) => (
        <Link href={`/search?query=${tag}`} key={tag}>
          <a href="/search?query={tag}" className="mr-1">{`#${tag}${
            index === tags.split(", ").length - 1 ? "" : ", "
          }`}</a>
        </Link>
      ))}
    </>
  );
}
