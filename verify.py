import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(
            record_video_dir="/home/jules/verification/videos",
            viewport={'width': 1280, 'height': 800}
        )
        page = await context.new_page()
        await page.goto("http://localhost:4174/lol/")

        # Capture Desktop Hero
        await page.screenshot(path="/home/jules/verification/screenshots/hero_desktop.png", full_page=False)

        # Scroll to Widget 1
        await page.evaluate("window.scrollBy(0, 500)")
        await page.wait_for_timeout(1000)
        await page.screenshot(path="/home/jules/verification/screenshots/widget1.png")

        # Scroll to Widget 2
        await page.evaluate("window.scrollBy(0, 500)")
        await page.wait_for_timeout(1000)
        await page.screenshot(path="/home/jules/verification/screenshots/widget2.png")

        # Mobile view
        mobile_context = await browser.new_context(
            viewport={'width': 375, 'height': 667}
        )
        mobile_page = await mobile_context.new_page()
        await mobile_page.goto("http://localhost:4174/lol/")
        await mobile_page.screenshot(path="/home/jules/verification/screenshots/hero_mobile.png", full_page=False)

        await context.close()
        await mobile_context.close()
        await browser.close()

asyncio.run(main())
