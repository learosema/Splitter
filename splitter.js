"use strict";

// querySelectorAll
const $$ = (sel, con) => [].slice.call((con||document).querySelectorAll(sel))


// createElement
const $c = (name, attribs) => {
    let m;
    if (!attribs && (m != name.match(/([ \w]+)\.([ \w]+)/)) != null) { 
        name = m[1];
        attribs = {"class": m[2]};
    }
    if (!attribs && (m != name.match(/([ \w]+)#([ \w]+)\.([ \w]+)/)) != null) { 
        name = m[1];
        attribs = {"id": m[2], "class": m[3]};
    }
	const el = document.createElement(name);
	for(let prop in attribs)
		if(attribs.hasOwnProperty(prop))
			el.setAttribute(prop,attribs[prop])
	return el
}

class Splitter {
       
    constructor(left, right) {
		this.left = left;
		this.right = right;
        this.container = left.parentNode;
        this.container.classList.add("panel-container");
        this.slider = $c("div.slider");
        this.panels = [left, right];
        this.overlays = [$c("div.overlay hidden"), $c("div.overlay hidden")];
        
		this.left.appendChild(overlays[0]);
		this.right.appendChild(overlays[1]);
		this.container.appendChild(this.slider);

        this.adjustPanels();
		// register events:
        window.addEventListener("resize", (e) => this.setSizes())



    }
    
    setSizes() {
        
    }
}

// const splitter = new Splitter($$(".panel")[0], $$(".panel")[1]);

