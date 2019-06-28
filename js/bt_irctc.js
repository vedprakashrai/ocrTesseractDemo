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

const tktDetails={
	"origin":"NEW DELHI - NDLS",
	"date":"28-06-2019",
	"destination":"ASANSOL JN - ASN",
	"trainNumber":"12382",
	"quota":"TATKAL",
	"tktClass":"1: 2A"
};

function getOcrSeparator(ocrText){
	var sepPos=-1;
	var sep='';
	if(!ocrText)
		return sep;
	[':','.','below'].forEach(p=>{
		if(ocrText.indexOf(p)>sepPos){
			sepPos=ocrText.indexOf(p);
			sep=p;
		}
		});
	return sep;
}
					  
function getCText(ocrText){
		
		return ocrText.replace(/\s+/g, '').split(getOcrSeparator(ocrText)).pop().toUpperCase();
	}

function clickElementTagWithText(tag,text,ele){
	ele = ele||document;
	return Array.from(document.getElementsByTagName(tag)).find(ele=>ele.innerText===text).click();
}



  function login(cImage,cInputId){
    // 'this' refers to the newly created element
    console.log("img arrived:");
    console.log(cImage);
    //const cImage = document.getElementById(cImageId);
    //const cInput=  document.getElementById(cInputId);
    worker.recognize(cImage)
    .progress((message)=>{ 
        console.log(message) 
    })
    .then(({ text }) => {
        console.log("ocr:"+text);
       // var separator = text.includes(':')?':':text.includes('.')?'.':'below';
       // text = text.replace(/\s+/g, '').split(separator).pop().toUpperCase();
        console.log("answer:"+getCText(text));
        document.getElementById(cInputId).value=getCText(text);
		//cInputId.value =getCText(text);
        Array.from(document.getElementsByTagName("button")).find(ele=>ele.innerText==="SIGN IN").click();
       // document.querySelector("#login_header_disable > div > div.ui-dialog-content.ui-widget-content > div.irmodal > div > div.login-bg.pull-left > div.modal-content > div.modal-body > form > button").click();
;     // result.innerHTML = `<p>OCR Result:</p><p>${text}</p>`;
//document.arrive("#destination",{onceOnly: true }, () =>{
  	console.log("start booking");
	document.getElementById('origin').dispatchEvent(new Event('onFocus'));
  	var docOriginInput=document.querySelector("#origin > span > input");
	docOriginInput.dispatchEvent(new Event('focus'));
	docOriginInput.value=tktDetails.origin;
	docOriginInput.dispatchEvent(new Event('keydown'));
	docOriginInput.dispatchEvent(new Event('keyup'));
	docOriginInput.dispatchEvent(new Event('input'));
		
		
	document.getElementById('destination').dispatchEvent(new Event('onFocus'));
  	var docDestinationInput=document.querySelector("#destination > span > input");
	docDestinationInput.dispatchEvent(new Event('focus'));
	docDestinationInput.value=tktDetails.destination;
	docDestinationInput.dispatchEvent(new Event('keydown'));
	docDestinationInput.dispatchEvent(new Event('keyup'));
	docDestinationInput.dispatchEvent(new Event('input'));
		
	var docDateInput = Array.from(document.getElementsByTagName("p-calendar")[0].getElementsByTagName("input"))[0];
	docDateInput.dispatchEvent(new Event('onFocus'));
	docDateInput.value=tktDetails.date;
	docDateInput.dispatchEvent(new Event('keydown'));
	docDateInput.dispatchEvent(new Event('keyup'));
	docDateInput.dispatchEvent(new Event('input'));
	docDateInput.dispatchEvent(new Event('blur'));
	
	
	clickElementTagWithText("button","Find trains");
		
	 document.arrive("#T_"+tktDetails.trainNumber,{onceOnly: true }, ()=>{
		 selectQuota(tktDetails.quota);
		 var docClassSelect = getNearestElementById("T_"+tktDetails.trainNumber,"select");
		 console.log(docClassSelect);
		 //setSelectOption(docClassSelect,tktClass);
		 if(docClassSelect &&  docClassSelect.length>0)
		 	docClassSelect[0].value=tktDetails.tktClass;
		 
		 getNearestElementById("T_"+tktDetails.trainNumber,"button")[0].click();
		 getNearestElementById("T_"+tktDetails.trainNumber,"button")[0].click();
		 
	 });
 	//document.querySelector("#origin > span > input").dispatchEvent(new Event('input'));
  
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

function getNearestElementById(id,searchEle){
	var idElement=document.getElementById(id);
	if(!idElement)
		return null;
	return  getNearest(idElement,searchEle);
}

 function getNearest(idElement,search){
	 var nearest =null;
		if(idElement.parentNode.getElementsByTagName(search).length>0){
			nearest =  idElement.parentNode.getElementsByTagName(search);
		}
		 else{
			 idElement=idElement.parentNode;
			nearest = getNearest(idElement,search);
		 }
	 return nearest;
	 }

function selectQuota(quota){
	document.getElementsByTagName("p-dropdown")[4].getElementsByClassName("ui-dropdown-trigger")[0].click();
	clickElementTagWithText("span",quota,document.getElementsByTagName("p-dropdown")[4]);
}
//TODO 
  document.arrive("#nlpCaptchaImg",{onceOnly: true }, ()=>{login(document.getElementById('captchaImg'),'nlpAnswer')});

   document.arrive(".captcha-img",{onceOnly: true }, ()=>{ login(document.getElementsByClassName('captcha-img')[0],'captcha')});

 
  


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


 

