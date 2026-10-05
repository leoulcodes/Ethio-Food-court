import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";

export async function getDishes() {
  const filePath = path.join(process.cwd(), "data", "menu.json");
  const raw = await fs.readFile(filePath, "utf8");
  const json = JSON.parse(raw);
  const dishes = Array.isArray(json) ? json : json.data;

  if (!Array.isArray(dishes)) {
    throw new Error("Invalid menu.json format.");
  }

  return dishes;
}
