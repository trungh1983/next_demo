import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const pagePath = path.join(
  process.cwd(),
  "src",
  "app",
  "chinh-sach-bao-mat",
  "page.jsx",
);

function readPageFile() {
  return readFileSync(pagePath, "utf8");
}

test("privacy page file exists", () => {
  assert.equal(existsSync(pagePath), true);
});

test("privacy page defines the required heading and navigation links", () => {
  const source = readPageFile();

  assert.match(source, /Chính sách bảo mật/);
  assert.match(source, /href="\/lien-he"/);
  assert.match(source, /href="\/"/);
});
