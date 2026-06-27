import { cpSync, existsSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const source = resolve(root, "out");
const destination = resolve(root, "docs");

if (!existsSync(source)) {
  throw new Error("The static export folder does not exist. Run `npm run build` first.");
}

rmSync(destination, { recursive: true, force: true });
cpSync(source, destination, { recursive: true });
writeFileSync(resolve(destination, ".nojekyll"), "");

console.log("Copied static export to docs for GitHub Pages.");
