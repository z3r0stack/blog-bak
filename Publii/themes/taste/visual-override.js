/*
 * Custom function used to generate the output of the override.css file
 */

var generateOverride = function (params) {   
    let output = '';

if(params.minFontSize !== '1' || params.maxFontSize !== '1.3') {
        output += `
html {
        font-size: ${params.minFontSize}rem;
}

@media screen and (min-width: 20rem) {
  html {
        font-size: calc(${params.minFontSize}rem + (${params.maxFontSize} - ${params.minFontSize}) * ((100vw - 20rem) / 220));
  }
}

@media screen and (min-width: 240rem) {
  html { 
        font-size: ${params.maxFontSize}rem;
    }
  }`;    	 
}

if(params.textColor !== '#111111') {
        output += `
body {
        color: ${params.textColor};  
  }`;   
}
	
if(params.headingColor !== '#111111') {
        output += `
h1,
h2,
h3,
h4,
h5,
h6,
.inverse {
        color: ${params.headingColor};           
  }`;    	 
}
	
if(params.linkColor !== '#02bb80') {
        output += `
a,
.inverse:hover,
.inverse:active,
.inverse:focus,
.post__tag li > a:hover {
        color: ${params.linkColor};           
  }`;    	 
}
	
if(params.linkHoverColor !== '#111111') {
        output += `
a:hover,
a:active,
a:focus,
.cookie-bar > p > a:hover {
        color: ${params.linkHoverColor}; 
  }`;    	 
}

	
if(params.primaryColor !== '#02bb80') {
        output += `      
blockquote,
.btn:hover, [type=button]:hover,
[type=submit]:hover,
button:hover,
.btn:active, [type=button]:active,
[type=submit]:active,
button:active,
[type=text]:focus,
[type=url]:focus,
[type=tel]:focus,
[type=number]:focus,
[type=email]:focus,
[type=search]:focus,
textarea:focus,
select:focus,
select[multiple]:focus {
        border-color: ${params.primaryColor}; 
}
[type=radio]:checked + .radio:before {
        background: ${params.primaryColor}; 
}
[type=checkbox]:checked + .checkbox:before {
        color: ${params.primaryColor};  
}
@media all and (max-width: 37.4375em) {
  .cookie-bar__close {   
        border-color: ${params.primaryColor};
        color: ${params.primaryColor};
  }
}
@media all and (min-width: 37.5em) {
  .cookie-bar__close:hover:before, .cookie-bar__close:hover:after {
        background: #02bb80;
  }
  }`;    	 
}
	
if(params.pageWidth !== '48rem') {
        output += `   
.container {
        max-width: calc(${params.pageWidth} + 8%);   
  }
@media all and (min-width: 56.25em) {
  .container > header.is-sticky {
        max-width: ${params.pageWidth}; 
  }
}
.search__input {  
        width: ${params.pageWidth};  
}`;    	 
}	
	
if(params.backgroundMenu !== '#ffffff') {
        output += `
.is-opened > ul {
        background: ${params.backgroundMenu}; 
}
@media all and (min-width: 56.25em) {
.navbar__submenu,
.navbar__submenu:after {
        background: ${params.backgroundMenu};   
  }
  }`;    	 
}
	
if(params.submenu === 'custom') {
        output += `
@media all and (min-width: 56.25em) {
.navbar__submenu  {
        width: ${params.submenuWidth}rem;
  }
  }`;
}
if(params.linkColorMenu !== '#111111') {
        output += `
.navbar__menu li,
.navbar__menu li a,
.navbar__menu li span {
        color: ${params.linkColorMenu}; 
  }`;    	 
}
	
if(params.linkHoverColorMenu !== '#02bb80') {
        output += `
.navbar__menu li a:hover:not(span),
.navbar__menu li span:hover:not(span) {
        color: ${params.linkHoverColorMenu}; 
  }`;    	 
}

if(params.imageEffectsHover) {
   if(params.imageFilterHover !== '#saturate' || params.imageFilterHoverValue !== '2' || params.imageZoom !=='1.05') {
        output += ` 
.card__image img:hover {
        -webkit-filter: ${params.imageFilterHover}(${params.imageFilterHoverValue});
        filter: ${params.imageFilterHover}(${params.imageFilterHoverValue});
        -webkit-transform: scale(${params.imageZoom});
        -ms-transform: scale(${params.imageZoom});
        transform: scale(${params.imageZoom});
    }`;    	 
  }
}	
if(params.lazyLoad === true) {
        output += `	
.blur-up {
        -webkit-filter: blur(5px);
        filter: blur(5px);
        transition: filter 400ms, -webkit-filter 400ms;
}
.blur-up.lazyloaded {
         -webkit-filter: blur(0);
        filter: blur(0);
  }`;    	 
}	
 return output;
}

module.exports = generateOverride;
