import { test, expect } from "@playwright/test";

test("Debts page loads", async ({ page }) => {
  await page.goto("/debts");

  await expect(page).toHaveTitle("Money Tracking - Debts");
});
