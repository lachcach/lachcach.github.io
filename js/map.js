var canadamap = document.getElementById("canada-map"),
 provinceInfo = document.getElementById("provinceInfo"),
 allProvinces = canadamap.querySelectorAll("g");

canadamap.addEventListener("click", function(e){ 
  var province = e.target.parentNode;
  if(e.target.nodeName == "path") {
  for (var i=0; i < allProvinces.length; i++) {
   allProvinces[i].classList.remove("active");
  }
  province.classList.add("active");
  var provinceName = province.querySelector("title").innerHTML,
	  provinceButton = province.querySelector("btn").innerHTML,
  provincePara = province.querySelector("desc p");
  sourceImg = province.querySelector("img"),
  imgPath = "img/";
  provinceInfo.innerHTML = "";
  provinceInfo.insertAdjacentHTML("afterbegin", "<img src="+imgPath + sourceImg.getAttribute('xlink:href')+" alt='"+sourceImg.getAttribute('alt')+"'><h3>"+provinceName+"</h3><p>"+provincePara.innerHTML+"</p><div>"+provinceButton+"</div>");
  provinceInfo.classList.add("show");
  }else{
//   provinceInfo.style.opacity = '0';
   provinceInfo.classList.remove("show");
  }
 })


