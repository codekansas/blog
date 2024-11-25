import { CustomMDX } from "app/components/mdx";
import { parseFrontmatter } from "app/mdx";
import fs from "fs";
import path from "path";

export default function Page() {
  const aboutPath = path.join(process.cwd(), "app", "about", "about.mdx");
  const aboutRaw = fs.readFileSync(aboutPath, "utf-8");
  const about = parseFrontmatter(aboutRaw);

  return (
    <article className="prose">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Ben Bolte
      </h1>
      <CustomMDX source={about.content} />
    </article>
  );
}
