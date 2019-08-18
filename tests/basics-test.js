import { Selector } from "testcafe";

const base = "http://localhost:5000";

fixture`Getting Started`.page`${base}/index.html`;

test("display", async t => {
  await t
    .typeText("#useranme", "user1")
    .typeText("#password", "secret")
    .click("#submit");
});
