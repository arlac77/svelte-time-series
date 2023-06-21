import { Selector } from "testcafe";

const base = "http://localhost:5173/";

fixture`Getting Started`.page`${base}`;

test("display", async t => {
  const title = Selector("h1");
  await t
    .expect(title.innerText)
    .eql("Example");
});
