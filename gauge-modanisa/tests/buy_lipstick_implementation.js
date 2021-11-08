/* globals gauge*/
"use strict";
const { openBrowser, goto,toRightOf, press, text, contains, click, waitFor, into, inputField, below, screenshot} = require('taiko')
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

step("View the basket <url>", async function(url){ 
    await goto(url);
    
    
    });    

    step("Check the product <productName>", async function(productName){ 
        //assert.strictEqual(await text(productID).exists(), true); 
    
        await text(productName).exists();
        await click("Güvenle Satın Al");
        
        });     

        step("Check the trendyol product <productName>", async function(productName){ 
            
        
            await text(productName).exists();
            await click("Sepeti Onayla");
            
            });    