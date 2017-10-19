/*
 * Custom function used to generate the output of the override.css file
 */

var generateOverride = function (params) {   
    let output = '';

if(params.minFontSize !== '1' || params.maxFontSize !== '1.2') {
        output += `
html {
  font-size: ${params.minFontSize}rem;
}

@media screen and (min-width: 20rem) {
  html {
    font-size: calc(${params.minFontSize}rem + (${params.maxFontSize} - ${params.minFontSize}) * ((100vw - 20rem) / 100));
  }
}

@media screen and (min-width: 120rem) {
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
	
if(params.linkColor !== '#6B78B4') {
        output += `
a,
.inverse:hover,
.inverse:active,
.inverse:focus {
        color: ${params.linkColor};           
  }`;    	 
}
	
if(params.linkHoverColor !== '#6B78B4') {
        output += `
a:hover,
a:active,
a:focus,
.footer a:hover,
.cookie-bar > p > a:hover {
        color: ${params.linkHoverColor}; 

  }`;    	 
}

if(params.primaryColor !== '#6B78B4') {
        output += `      
.btn:hover, 
[type=button]:hover,
[type=submit]:hover,
button:hover, 
.btn:focus, 
[type=button]:focus,
[type=submit]:focus,
button:focus,
.btn:active, 
[type=button]:active,
[type=submit]:active,
button:active,
[type=radio]:checked + .radio:before {
        background: ${params.primaryColor};      
}
blockquote,
[type=text]:focus,
[type=url]:focus,
[type=tel]:focus,
[type=number]:focus,
[type=email]:focus,
[type=search]:focus,
textarea:focus,
select:focus,
select[multiple]:focus,
.has-submenu:after {
        border-color: ${params.primaryColor};
}
[type=checkbox]:checked + .checkbox:before {
       color: ${params.primaryColor}; 

  }`;    	 
}
	
if(params.pageWidth !== '64rem') {
        output += `   
.container {
        max-width: calc(${params.pageWidth} + 8%); 
}
@media all and (min-width: 56.25em) {
  .container > header.is-sticky > div {
    max-width: ${params.pageWidth}; 
  }
}
@media all and (min-width: 56.25em) {
  .hero > header {
        max-width: calc(${params.pageWidth} + 8%);
  }
}
@media all and (min-width: 56.25em) {
  .hero--narrow {
        left: calc((100% - ${params.pageWidth}) /2);
        width: ${params.pageWidth};
  }
}
@media all and (min-width: 75em) {
  .post__image--wide {
        margin-left: calc((100% - ${params.pageWidth}) /2);
        margin-right: calc((100% - ${params.pageWidth}) /2);
  }
}
.search__input {  
        width: ${params.pageWidth};  
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
	
if(params.linkHoverColorMenu !== '#6B78B4') {
        output += `
.navbar__menu li a:hover:not(span),
.navbar__menu li span:hover:not(span) {
        color: ${params.linkHoverColorMenu}; 
  }`;    	 
}	
	
if(params.backgroundHero !== '#030303' || params.heightMinHero !== '20rem' || params.heightMaxHero !== '45rem') {
        output += `   
.hero {
        background: ${params.backgroundHero}; 
        min-height: ${params.heightMinHero};
        max-height: ${params.heightMaxHero};  
}
@media all and (max-width: 56.1875em) {
  .hero > figure > img {
        min-height: ${params.heightMinHero}; 
  }   
  }`;    	 
}
	
if(params.heightMaxHero !== '45rem') {
        output += ` 
@media all and (min-width: 56.25em) {
  .hero > figure > img {
        height: ${params.heightMaxHero};
  }
  }`;    	 
}
	
if(params.opacityHero !== '0.4') {
	  output += `
.hero > figure > img {
        opacity: ${params.opacityHero};
 }`;    	 
}
	
if(params.cardsHeight !== '20rem') {
        output += ` 
.card,
.card__image img {
        height: ${params.cardsHeight};
  
}`;    	 
}	
	
if(params.cardsColor !== '#000000' || params.cardsOpacity !== '0.4') {
        output += ` 
.card__image > a:after  {
        background: ${params.cardsColor};
        opacity: ${params.cardsOpacity}; 
}
.card:after,
.card:hover .card__image > a:after {
        background: ${params.cardsColor};
  }`;    	 
}	
	
if(params.cardsAccentColor !== '#6B78B4' || params.cardsAccentOpacity !== '0.95') {
        output += `  
.category--layout-1 > article:nth-child(6n-5) .card__image > a:after,
.category--layout-2 > article:nth-child(8n-6) .card__image > a:after,
.category--layout-3 > article:nth-child(8n-6) .card__image > a:after {
        background: ${params.cardsAccentColor};
        opacity: ${params.cardsAccentOpacity};	
 }`;    	 
}
	
if(params.cardImgScale !== '1.6' || params.cardsImgRotate !== '-10') {
        output += ` 
.card:hover .card__image img {
        -webkit-transform: scale(${params.cardImgScale}) rotate(${params.cardsImgRotate}deg);
          transform: scale(${params.cardImgScale}) rotate(${params.cardsImgRotate}deg);
 }`;    	 
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
