import { test, expect } from "@playwright/test";

test("Page loads", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Money Tracking - Dashboard");
});
