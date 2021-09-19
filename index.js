const puppeteer = require('puppeteer');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

async function scrapeLink(url)
{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="screenshot-image"]')
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();

    console.log(srcTxt);
    console.log('[LOG] Complete!');
}


async function makeLightshotLink(genAmount) {
    for(counter = 0; counter < genAmount; counter++)
    {
        let counter;

        let i;
        let text = "";
        let number = "";
        let letters = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "0123456789";

        for (i = 0; i < 4; i++)
            text += letters.charAt(Math.floor(Math.random() * letters.length));

        for (i = 0; i < 2; i++)
            number += numbers.charAt(Math.floor(Math.random() * numbers.length));

        const url = `https://prnt.sc/${text + number}/`;
        scrapeLink(url);
    }


}

readline.question('How many links would you like to generate~$ ', amount => {
    makeLightshotLink(amount);
});