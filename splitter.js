$$=function(sel,con){return[].slice.call((con||document).querySelectorAll(sel))}
$c=function(name,attribs,el){
	name=document.createElement(name)
	for(prop in attribs)
		if(attribs.hasOwnProperty(prop))
			el.setAttribute(prop,attribs[prop])
	return el
}

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



/*
function Splitter(pos,dock,container,i,c,pc){
	if(!(this instanceof Splitter))
		return new Splitter(pos,dock,container)
	this.size=size
	this.dock=dock
	this.container=container||document.body
	this.slider =$c("div",{"class":"slider"})
	this.panels =[
		$c("div",{"class":"quickview-panel"}),
		$c("div",{"class":"quickview-panel"})]
	this.overlays=[
		$c("div",{"class":"overlay hidden"}),
		$c("div",{"class":"overlay hidden"})]
	j=(dock=="left"||dock=="top")?1:0
	while(!(c=this.container.firstChild)){
		this.container.removeChild(c)
		if(!(pc=this.panels[j].firstChild)){
			this.panels[j].appendChild(c)
		} else {
			this.panels[j].insertBefore(c,pc)
		}
	}
	for(i=2;i--;)
		this.panels[i].appendChild(this.overlays[i]),
		this.container.appendChild(this.panels[i])
	this.container.appendChild(this.slider)

	// Styles for the dock cases left and right:
	if(dock=="left"||dock=="right"){
		var sliderWidth=getComputedStyle(this.slider).width.slice(-2)-0
		with(this.slider.style)top=0,bottom=0,left=
		for(i=2;i--;){
			with(this.panel[i].style)
				position='absolute',
				top=bottom=0,
				width=[
					pos-
				
				][i] + "px"
			this.panels[0].style.left=0
			this.panels[1].style.right=0
		}

	} else {
	
	}
}

Splitter.prototype.top=Splitter.prototype.left={
	get innerHTML(){ 
		this.panels[0].removeChild(this.overlays[0])
		var result=this.panels[0].innerHTML
		this.panels[0].appendChild(this.overlays[0])
		return result
	},
	set innerHTML(val){
		this.panels[0].removeChild(this.overlays[0])
		this.panels[0].innerHTML=val
		this.panels.appendChild(this.overlays[0])
		return result
	}
}
Splitter.prototype.bottom=Splitter.prototype.right={
	get innerHTML(){ 
		this.panels[1].removeChild(this.overlays[1])
		var result=this.panels[0].innerHTML
		this.panels[1].appendChild(this.overlays[1])
		return result
	},
	set innerHTML(val){
		this.panels[1].removeChild(this.overlays[1])
		this.panels[1].innerHTML=val
		this.panels.appendChild(this.overlays[1])
		return result
	}
}
*/
