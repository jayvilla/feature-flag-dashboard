import { test, expect } from "@playwright/test";

test("flags page loads", async ({ page }) => {
  await page.goto("/flags");
  await expect(page.getByText("Feature Flags")).toBeVisible();
});
