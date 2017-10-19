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
    font-size: calc(${params.minFontSize}rem + (${params.maxFontSize} - ${params.minFontSize}) * ((100vw - 20rem) / 100));
  }
}

@media screen and (min-width: 120rem) {
  html { 
    font-size: ${params.maxFontSize}rem;
  }
  }`;    	 
}

if(params.textColor !== '#61666c') {
        output += `
body {
        color: ${params.textColor};  
  }`;   
}
	
if(params.headingColor !== '#2c3e50') {
        output += `
h1,
h2,
h3,
h4,
h5,
h6
.post__tag > li > a,
.inverse {
        color: ${params.headingColor};           
  }`;    	 
}
	
if(params.linkColor !== '#d73a42') {
        output += `
a,
.inverse:hover,
.inverse:active,
.inverse:focus{
        color: ${params.linkColor};    
}
.post__tag > li > a:hover {
        background: ${params.linkColor}; 
  }`;    	 
}
	
if(params.linkHoverColor !== '#2c3e50') {
        output += `
a:hover,
a:active,
a:focus,
.footer a:hover,
.cookie-bar > p > a:hover {
        color: ${params.linkHoverColor};           

  }`;    	 
}
	
if(params.primaryColor !== '#d73a42') {
        output += `
[type=checkbox]:checked + .checkbox:before {
        color: ${params.primaryColor};           
  }`;    	 
}
	
if(params.primaryColor !== '#d73a42') {
        output += `      
blockquote,
.btn, 
[type=button],
[type=submit],
button,
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
  }`;    	 
}
	
if(params.primaryColor !== '#d73a42') {
        output += `   

[type=radio]:checked + .radio:before{
        background: ${params.primaryColor};           
  }`;    	 
}	

if(params.pageWidth !== '38') {
        output += `   
main {
        max-width: calc(${params.pageWidth}rem + 8%);    
  }`;    	 
}	
	
if(params.backgroundMenu !== '#2c3e50') {
        output += `
.is-opened > ul,
.container > header.has-bg
{
   background: ${params.backgroundMenu}; 
}
@media all and (min-width: 56.25em) {
  .navbar__submenu {
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
if(params.linkColorMenu !== '#ffffff') {
        output += `
.navbar__menu li,
.navbar__menu li a {
   color: ${params.linkColorMenu}; 
  }`;    	 
}
	
if(params.linkHoverColorMenu !== '#ffffff') {
        output += `
.navbar__menu li a:hover {
   color: ${params.linkHoverColorMenu}; 
  }`;    	 
}	
	
if(params.heightHero !== '80vh') {
        output += `   
.hero { 
     min-height: ${params.heightHero}
  }`;    	 
}
	
if(params.backgroundHero !== 'rgba(0, 0, 0, 0.64)' || params.heightHero !== '80vh') {
        output += `   
.hero:after {
   background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(${params.backgroundHero}));
  background: linear-gradient(to bottom, transparent 0%, ${params.backgroundHero} 100%);  
  height: ${params.heightHero};  
  }`;    	 
}
	
if(params.heightHero !== '80vh') {
        output += `   
.hero__wrap > img {
        height: ${params.heightHero}; 
  }`;    	 
}
	
if(params.headingColorHero !== '#ffffff') {
        output += `   
.hero__text>h1 {
        color: ${params.headingColorHero}; 
  }`;    	 
}
	
if(params.textColorHero !== 'rgba(255, 255, 255, 0.75)') {
        output += `   
.hero__text {
        color: ${params.textColorHero}; 
  }`;    	 
}

if(params.imageEffects) {	
   if(params.imageFilter !== '#saturate' || params.imageFilterValue !== '0') {
        output += ` 
.hero__wrap > img {
     -webkit-filter: ${params.imageFilter}(${params.imageFilterValue});
       filter: ${params.imageFilter}(${params.imageFilterValue});
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
