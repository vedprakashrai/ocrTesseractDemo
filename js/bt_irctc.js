'use strict';

console.log("start");
document.getElementById("loginText").click();


//const image = document.getElementById('captchaImg');
  //const result = document.getElementById('result');

  const { TesseractWorker } = Tesseract;
  const worker = new TesseractWorker({
    workerPath: chrome.runtime.getURL('tesseract/worker.min.js'),
    langPath: chrome.runtime.getURL('tesseract/traineddata'),
    corePath: chrome.runtime.getURL('tesseract/tesseract-core.wasm.js'),
  });


  function login(cImageId,cInputId){
    // 'this' refers to the newly created element
    console.log("img arrived:");
    console.log(document.getElementById('captchaImg'));
    const cImage = document.getElementById(cImageId);
    //const cInput=  document.getElementById(cInputId);
    worker.recognize(cImage)
    .progress((message)=>{ 
        console.log(message) 
    })
    .then(({ text }) => {
        console.log("ocr:"+text);
        var separator = text.includes(':')?':':text.includes('.')?'.':'below';
        text = text.replace(/\s+/g, '').split(separator).pop().toUpperCase();
        console.log("answer:"+text)
        document.getElementById(cInputId).value=text;

        Array.from(document.getElementsByTagName("button")).find(ele=>ele.innerText==="SIGN IN").click();
       // document.querySelector("#login_header_disable > div > div.ui-dialog-content.ui-widget-content > div.irmodal > div > div.login-bg.pull-left > div.modal-content > div.modal-body > form > button").click();
;     // result.innerHTML = `<p>OCR Result:</p><p>${text}</p>`;
//document.arrive("#destination",{onceOnly: true }, () =>{
  console.log("start booking");
  document.querySelector("#origin > span > input").value="N";
  document.querySelector("#origin > span > input").dispatchEvent(new Event('input'));
  
  /* document.querySelector("#destination > span > input").value="JASIDIH JN - JSME";
  document.querySelector("#divMain > div > app-main-page > div:nth-child(2) "
  +"> div > div.row > div > div > div.col-xs-12 > div > app-jp-input > div:nth-child(4) > "
  +"form > div.form-group.col-lg-12.col-md-12.col-sm-12.ui-float-label > p-calendar > span > input").value="16-06-2019";
 // document.querySelector("#divMain > div > app-main-page > div:nth-child(2) > div > div.row > div > div > div.col-xs-12 > div > app-jp-input > div:nth-child(4) > form > div.col-lg-12.col-md-12.col-sm-12.col-xs-12.text-center.form-group > button")
 Array.from(document.getElementsByTagName("button")).find(ele=>ele.innerText==="Find trains").click(); */

//});

//Arrive.unbindAllArrive();
    })
}
//TODO 
  document.arrive("#nlpCaptchaImg",{onceOnly: true }, ()=>{login('captchaImg','nlpAnswer')});

  /* document.arrive(".captcha-img",{onceOnly: true }, 
                        login(document.getElementsByClassName('captcha-img')[0],document.getElementById('captcha')));

 */
  


/* document.arrive("#destination",{onceOnly: true }, () =>{
  console.log("start booking");
  document.querySelector("#origin > span > input").value="NEW DELHI - NDLS";
  document.querySelector("#destination > span > input").value="JASIDIH JN - JSME";
  document.querySelector("#divMain > div > app-main-page > div:nth-child(2) "
  +"> div > div.row > div > div > div.col-xs-12 > div > app-jp-input > div:nth-child(4) > "
  +"form > div.form-group.col-lg-12.col-md-12.col-sm-12.ui-float-label > p-calendar > span > input").value="16-06-2019";
 // document.querySelector("#divMain > div > app-main-page > div:nth-child(2) > div > div.row > div > div > div.col-xs-12 > div > app-jp-input > div:nth-child(4) > form > div.col-lg-12.col-md-12.col-sm-12.col-xs-12.text-center.form-group > button")
document.getElementsByTagName("button").find(ele=>ele.innerText==="Find trains").click();

}); */


 

