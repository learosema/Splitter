$$=function(sel,con){return[].slice.call((con||document).querySelectorAll(sel))}
slider=$$('.slider')[0]
panel=$$('.quickview-panel')[0]
overlay=$$('.quickview-panel .overlay')[0]
sliding=false
mX=0,pW=0
slider.onmousedown=function(e){
	mX=e.clientX
	pW=getComputedStyle(panel).width.slice(0,-2)-0
	sliding=true
	document.body.classList.add("sliding")
	overlay.classList.remove("hidden")
}
onmouseup=function(e){
	sliding=false,pW=NaN,mX=NaN
	document.body.classList.remove("sliding")
	overlay.classList.add("hidden")
}
onmousemove=function(e,dX,nPW,minW,maxW) {
	if (sliding){
		dX=e.clientX-mX
		minW=0
		maxW=panel.parentNode.clientWidth-(getComputedStyle(slider).width.slice(0,-2)-0)
		nPW=Math.min(maxW,Math.max(minW,pW-dX))
		debug.textContent=nPW
		panel.style.width=nPW+"px"
		slider.style.right=nPW+"px"
	}
}

