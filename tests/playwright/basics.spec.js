import { test, expect } from "@playwright/test";

test("display", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page.getByRole("heading", { name: "Example" })).toBeVisible();
});
