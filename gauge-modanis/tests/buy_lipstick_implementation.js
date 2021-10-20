/* globals gauge*/
"use strict";
const { openBrowser, goto, press, text, contains, click, waitFor, into, inputField, below, screenshot} = require('taiko')
const assert = require("assert");
const { setPriority } = require("os");
const headless = process.env.headless_chrome.toLowerCase() == 'true' ? true : false;
const delay = ms => new Promise(res => setTimeout(res,ms));

gauge.screenshotFn = function(){
    return screenshot({encoding:"base64"})
};

step("Open the product page with <url>", async function(url){ 
await goto(url);
});

step("Add product to basket", async function(){ 
 
    await click("Sepete Ekle");
    
});

step("View the basket and checkout", async function(){ 
    await goto("https://www.modanisa.com/basket/");
    await click("Güvenle Satın Al")
    
    });    