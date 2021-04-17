import fs from "fs";
import matter from "gray-matter";
import path from "path";

const contentDirectory = path.join(process.cwd(), "src/content");

export interface FrontMatter {
  title: string;
  description: string;
  date: Date;
  tags: string;
  cover_image: string;
}

export interface Post {
  data: FrontMatter;
  content: string;
  slug: string;
}

export const getAllPosts = (): Post[] => {
  const allPosts = fs.readdirSync(contentDirectory);

  return allPosts.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const fileContents = fs.readFileSync(
      path.join(contentDirectory, fileName),
      "utf-8"
    );
    const { data, content } = matter(fileContents);

    return {
      data: data as FrontMatter,
      content,
      slug,
    };
  });
};
