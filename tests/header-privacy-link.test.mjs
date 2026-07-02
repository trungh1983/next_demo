import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";

const layoutPath = path.join(process.cwd(), "src", "app", "layout.jsx");

function readLayoutFile() {
  return readFileSync(layoutPath, "utf8");
}

test("header includes a privacy policy link to the privacy page", () => {
  const source = readLayoutFile();

  assert.match(
    source,
    /<Link className="nav-link" href="\/chinh-sach-bao-mat">\s*Chính sách bảo mật\s*<\/Link>/s,
  );
});
