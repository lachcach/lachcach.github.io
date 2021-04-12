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
	  provinceShow = province.querySelector("showct").innerHTML,
	  provinceShowa = province.querySelector("showcta").innerHTML,
  provincePara = province.querySelector("desc p");
  sourceImg = province.querySelector("img"),
  imgPath = "img/";
  provinceInfo.innerHTML = "";
  provinceInfo.insertAdjacentHTML("afterbegin", "<img src="+imgPath + sourceImg.getAttribute('xlink:href')+" alt='"+sourceImg.getAttribute('alt')+"'><h3>"+provinceName+"</h3><div class=tag><span class=show-map>"+provinceShow+"</span><div class='space-info'></div><span class=show-map>"+provinceShowa+"</span></div><p>"+provincePara.innerHTML+"</p><div class='btninfo'>"+provinceButton+"</div>");
  provinceInfo.classList.add("show");
  }else{
//   provinceInfo.style.opacity = '0';
   provinceInfo.classList.remove("show");
  }
 })

var canadamapa = document.getElementById("canada-map"),
 hoverInfo = document.getElementById("provincehover"),
	allProvincesa = canadamapa.querySelectorAll("g");
canadamapa.addEventListener("mouseover", function(e){ 
  var province = e.target.parentNode;
  if(e.target.nodeName == "path") {
  for (var i=0; i < allProvincesa.length; i++) {
   allProvincesa[i].classList.remove("active");
  }
  province.classList.add("active");
  var provinceName = province.querySelector("title1").innerHTML,
	  provinceButton = province.querySelector("btn1").innerHTML,
	  provinceShow = province.querySelector("showct1").innerHTML,
	  sourceImga = province.querySelector("img"),
  	  imgPatha = "img/";
	  
  hoverInfo.innerHTML = "";
  hoverInfo.insertAdjacentHTML("afterbegin", "<div class=map-hover><div class=map-hover-ava><img src="+imgPatha + sourceImga.getAttribute('xlink:href')+" alt='"+sourceImga.getAttribute('alt')+"'></div><div class=map-hover-content><h3>"+provinceName+"</h3><span class=map-hover-hashtag>"+provinceButton+"</span><div class=space></div><span class=map-hover-hashtag>"+provinceShow+"</span></div></div>");

  hoverInfo.classList.add("show");


		  
  }else{
//   provinceInfo.style.opacity = '0';
   hoverInfo.classList.remove("show");
	  canadamapa.addEventListener("click", function(e){ 

//   provinceInfo.style.opacity = '0';
   hoverInfo.classList.remove("show");
	  
 })
	  
  }
 })



//var $mouseX = 0, $mouseY = 0;
//var $xp = 0, $yp =0;
//
//$(document).mousemove(function(e){
//    $mouseX = e.pageX;
//    $mouseY = e.pageY;    
//});
//
//var $loop = setInterval(function(){
//// change 12 to alter damping higher is slower
//$xp += (($mouseX - $xp)/12);
//$yp += (($mouseY - $yp)/12);
//$("#provincehover").css({left:$xp +'px', top:$yp +'px'});  
//}, 30);
//		  $(".cursor").css({
//            left: ($mouseX - 24),
//            top: ($mouseY - 24)
//        });



//
$(document).on('mousemove', (event) => {
  $('#provincehover').css({
    left: event.clientX,
    top: event.clientY,
  });
});