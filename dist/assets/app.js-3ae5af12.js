console.log("hello");chrome.runtime.onMessage.addListener((t,l,e)=>{if(console.log("in thereeeeeeee"),t.type==="id"){let o=JSON.parse(localStorage.getItem("cart"));console.log(o),e(o)}});let n=document.getElementsByClassName("_2KpZ6l _2U9uOA _3v1-ww");n.length&&n[0].innerText===" ADD TO CART"?n[0].addEventListener("click",()=>{console.log("helllllllllo");let t=document.getElementsByClassName("B_NuCI"),l=document.getElementsByClassName("_30jeq3 _16Jk6d");if(console.log(l[0].innerText),t.length>0){let e=t[0].innerText;console.log(e);let a=document.getElementsByClassName("_396cs4 _2amPTt _3qGmMb")[0].getAttribute("src"),r=Date.now();localStorage.getItem("cart")||localStorage.setItem("cart",JSON.stringify([]));let s=JSON.parse(localStorage.getItem("cart"));s.push({amount:l[0].innerText,date:new Date,message:e,iconUrl:a}),localStorage.setItem("cart",JSON.stringify(s)),chrome.runtime.sendMessage("",{type:"notification",id:r.toString(),options:{title:"A new item is added to your cart",message:`Item: ${e}`,iconUrl:a,type:"basic"}})}}):console.log("no button");