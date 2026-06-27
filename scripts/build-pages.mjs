import { spawnSync } from "node:child_process";
import { cpSync, existsSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const command = process.platform === "win32" ? "npm.cmd" : "npm";
const result = process.platform === "win32" ? spawnSync(`${command} run build`, {
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    GITHUB_PAGES: "true",
  },
}) : spawnSync(command, ["run", "build"], {
  stdio: "inherit",
  env: {
    ...process.env,
    GITHUB_PAGES: "true",
  },
});

if (result.status !== 0) {
  if (result.error) {
    console.error(result.error.message);
  }

  process.exit(result.status ?? 1);
}

const root = process.cwd();
const source = resolve(root, "out");
const destination = resolve(root, "docs");

if (!existsSync(source)) {
  throw new Error("The static export folder does not exist.");
}

rmSync(destination, { recursive: true, force: true });
cpSync(source, destination, { recursive: true });
writeFileSync(resolve(destination, ".nojekyll"), "");

console.log("Built and copied static export to docs for GitHub Pages.");
