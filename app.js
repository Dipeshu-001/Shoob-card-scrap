const puppeteer = require('puppeteer-extra').default
const express = require('express')
const plugin = require('puppeteer-extra-plugin-stealth')

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => res.status(200).setHeader('Content-Type', 'text/plain').send('Running...').end())

app.get('/scrap', async (req, res) => {
    const { id } = req.query
    const url = `https://shoob.gg/cards/info/${id}`
    console.log(url)
    const browser = await puppeteer.launch({
      })
      const page = await browser.newPage()
      await page.goto(url).then(async () => {
        await browser.close()
      }).catch(async () => {
        await browser.close()
        res.sendStatus(404)
      })
})

app.listen(PORT, () => console.log(`Server started on PORT : ${PORT}`))