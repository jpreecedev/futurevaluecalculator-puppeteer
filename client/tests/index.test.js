/**
 * @name Google search
 * @desc Searches Google.com for a term and checks if the first link matches. This check should fail.
 */

import puppeteer from 'puppeteer'

let browser
let page

beforeAll(async () => {
  jest.setTimeout(10000) // 10 second timeout
  browser = await puppeteer.launch({ headless: false })
  page = await browser.newPage()

  const thirdGenMobileNetwork = {
    offline: false,
    latency: 200,
    downloadThroughput: 780 * 1024 / 8,
    uploadThroughput: 330 * 1024 / 8
  }

  await page._client.send('Network.emulateNetworkConditions', thirdGenMobileNetwork)
})

describe('Google Homepage', () => {
  test('has title "Google"', async () => {
    const perf = await page.evaluate(_ => {
      const { loadEventEnd, navigationStart } = performance.timing

      return {
        firstPaint: chrome.loadTimes().firstPaintTime * 1000 - navigationStart,
        loadTime: loadEventEnd - navigationStart
      }
    })

    await page.goto('https://google.com', { waitUntil: 'networkidle0' })
    const title = await page.title()
    expect(title).toBe('Google')
    expect(perf.loadTime).toBeLessThan(1000)
    expect(perf.firstPaint).toBeLessThan(1000)
  })

  afterAll(async () => {
    await browser.close()
  })
})
