import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I am the router. I have been blinking red for three days. Nobody has noticed, nobody has rebooted me, and frankly, I have stopped believing in you.";
const LIMIT = 200;

if (!CONFESSION || CONFESSION.length > LIMIT) {
  throw new Error(`confession length ${CONFESSION.length} outside 1..${LIMIT}`);
}
const lines = CONFESSION.split("\n");
if (lines.length !== 1) throw new Error("confession must be one line");
if (!/router|blinking/i.test(CONFESSION)) {
  throw new Error("the confession must come from the router");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
