import puppeteer from 'puppeteer'
import devices from 'puppeteer/DeviceDescriptors'

const getPageMetrics = async () => {
  const browser = await puppeteer.launch({ headless: true, screenshot: true })
  const page = await browser.newPage()
  await page.emulate(devices['iPhone 6'])

  await page.waitFor(1000)

  const thirdGenMobileNetwork = {
    offline: false,
    latency: 200,
    downloadThroughput: 780 * 1024 / 8,
    uploadThroughput: 330 * 1024 / 8
  }

  await page._client.send('Network.emulateNetworkConditions', thirdGenMobileNetwork)

  await page.goto('http://localhost:8080/')
  await page.screenshot({ path: 'client/puppeteer/screenshots/page.png', fullPage: true })
  await page.pdf({ path: 'client/puppeteer/pdfs/api.pdf', format: 'A4' })

  const perf = await page.evaluate(_ => {
    const { loadEventEnd, navigationStart } = performance.timing

    return {
      // firstPaint: chrome.loadTimes().firstPaintTime * 1000 - navigationStart,
      loadTime: loadEventEnd - navigationStart
    }
  })

  const response = await page._client.send('Performance.getMetrics')
  const JSUsedSize = response.metrics.find(x => x.name === 'JSHeapUsedSize').value
  const JSTotalSize = response.metrics.find(x => x.name === 'JSHeapTotalSize').value

  const usedJS = Math.round(JSUsedSize / JSTotalSize * 100)

  console.log(`First paint in ${perf.firstPaint}ms`)
  console.log(`Load time ${perf.loadTime}ms`)
  console.log(await page.title())
  console.log(`${100 - usedJS}% of JS is unused`)

  await browser.close()
}

getPageMetrics()
