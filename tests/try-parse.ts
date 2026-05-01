import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { SkyDataResolver } from "../src/resolver";

const __dirname = dirname(fileURLToPath(import.meta.url));
const json = await fetch(
  "https://unpkg.com/skygame-data@1.x.x/assets/everything.json",
).then((r) => r.text());
const data = SkyDataResolver.parse(json);
const resolved = SkyDataResolver.resolve(data);

// Example of using the data.
const realm = resolved.realms.items.find(
  (r) => r.name === "Vault of Knowledge",
);
const regularSpirits =
  realm?.areas
    ?.flatMap((a) => a.spirits || [])
    .filter((s) => s.type === "Regular") ?? [];
console.log("Regular spirits in Vault:", regularSpirits.length);
