import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface FrontMatter {
  title: string;
  description: string;
  date: Date;
  tags?: string;
  cover_image: string;
}

export interface Post {
  data: FrontMatter;
  content: string;
  slug?: string;
}

export const getAllPosts = (): Post[] => {
  const postsDirectory = path.join(process.cwd(), "src/content/writing");
  const allPosts = fs.readdirSync(postsDirectory);

  return allPosts.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const fileContents = fs.readFileSync(
      path.join(postsDirectory, fileName),
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

export const getAboutPageContent = (): Post => {
  const aboutDirectory = path.join(process.cwd(), "src/content/pages");

  const fileContents = fs.readFileSync(
    path.join(aboutDirectory, "about.md"),
    "utf-8"
  );
  const { data, content } = matter(fileContents);

  return {
    data: data as FrontMatter,
    content,
  };
};
