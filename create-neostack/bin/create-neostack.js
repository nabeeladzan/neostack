#!/usr/bin/env node
import { execSync } from "child_process";
import { copy } from "fs-extra";
import { fileURLToPath } from "url";
import { dirname, join, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "../..");
const templateDir = join(root, "template");
const appName = process.argv[2] || "neostack-app";
const targetDir = resolve(process.cwd(), appName);

console.log(`🚀 Creating a new Neostack app in ${targetDir}`);
await copy(templateDir, targetDir);

console.log("📦 Installing dependencies...");
execSync("npm install", { cwd: targetDir, stdio: "inherit" });

console.log("✅ Done! Now run:");
console.log(`cd ${appName}`);
console.log("npm run dev");
