/* globals gauge*/
"use strict";
const { openBrowser, goto,toRightOf, press, text, contains, click, waitFor, into, inputField, below, screenshot} = require('taiko')
const assert = require("assert");
const { setPriority } = require("os");
const headless = process.env.headless_chrome.toLowerCase() == 'true' ? true : false;
const delay = ms => new Promise(res => setTimeout(res,ms));
const url1 = "https://www.modanisa.com/";
const url2 = "https://www.trendyol.com/";
const product1 = "velvet-lipstick-6li-mini-kapsul--golden-rose.html?ck=1-tr-TRY-lkij-seditor:desc";
const product2 = "alix-avien/kahverengi-ruj-matte-lipstick-202-p-88497443?boutiqueId=580743&merchantId=310522";

gauge.screenshotFn = function(){
    return screenshot({encoding:"base64"})
};

step("Open the product page with <product>", async function(product){ 
   if(product==="product-modanisa"){
    await goto(url1.concat(product1));
   }else{
    await goto(url2.concat(product2));
   }
   
});

step("Add product to basket", async function(){ 
 
    await click("Sepete Ekle");
    
});

step("View the basket <page>", async function(page){ 
    if(page==="modanisa-basket"){
        await goto(url1.concat("basket/"));
    }else{
        await goto(url2.concat("sepet"));
    }
    
 
    
    
    });    

    step("Check the product <productName>", async function(productName){ 
        //assert.strictEqual(await text(productID).exists(), true); 
    
        await text(productName).exists();
        if(productName==="Golden Rose Velvet Lıpstıck 6`Lı Mını (Kapsul)"){
            await click("Güvenle Satın Al");
        }else{
            await click("Sepeti Onayla");
        }
        
        
        });     

       