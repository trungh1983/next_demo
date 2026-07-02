import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";

const pagePath = path.join(process.cwd(), "src", "app", "dich-vu", "page.jsx");

function readPageFile() {
  return readFileSync(pagePath, "utf8");
}

test("services page defines the required heading and navigation links", () => {
  const source = readPageFile();

  assert.match(source, /Dịch vụ của chúng tôi/);
  assert.match(source, /href="\/lien-he"/);
  assert.match(source, /href="\/"/);
  assert.match(
    source,
    /<Link[^>]+href="\/lien-he\?source=services"[^>]*>\s*Nhận tư vấn ngay\s*<\/Link>/s,
  );
});

test("services page lists the four required services", () => {
  const source = readPageFile();

  [
    "Thiết kế website",
    "Phát triển ứng dụng",
    "Tư vấn giải pháp số",
    "Bảo trì và hỗ trợ kỹ thuật",
  ].forEach((service) => {
    assert.match(source, new RegExp(service));
  });
});
