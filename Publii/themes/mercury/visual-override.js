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
    font-size: calc(${params.minFontSize}rem + (${params.maxFontSize} - ${params.minFontSize}) * ((100vw - 20rem) / 113));
  }
}

@media screen and (min-width: 133rem) {
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
blockquote cite,
.logo,
.card__body,
.inverse {
        color: ${params.headingColor};
  }`;
}

if(params.linkColor !== '#ff80ab') {
        output += `
a,
.post__entry a:hover,
.post__tag li > a:hover,
.post__tag li > a:active,
.post__tag li > a:focus,
.post__nav__prev:hover h5:before,
.post__nav__next:hover h5:after,
.inverse:hover,
.inverse:active,
.inverse:focus{
        color: ${params.linkColor};
}
.footer__social .icon:hover {
  fill: ${params.linkColor};

  }`;
}

if(params.linkHoverColor !== '#111111') {
        output += `
a:hover,
a:active,
a:focus {
        color: ${params.linkHoverColor};

  }`;
}


if(params.primaryColor !== '#ff80ab' || params.secondaryColor !== '#111111') {
        output += `

.btn, [type=button],
[type=submit],
button {
        background: ${params.primaryColor};
        border-color: ${params.primaryColor};
}
.btn:hover, [type=button]:hover,
[type=submit]:hover,
button:hover, .btn:focus, [type=button]:focus,
[type=submit]:focus,
button:focus {
        background: ${params.secondaryColor};
        border-color: ${params.secondaryColor};
}
.btn:focus, [type=button]:focus,
[type=submit]:focus,
button:focus {
       outline-color: ${params.secondaryColor};
}
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
[type=checkbox]:checked + .checkbox:before {
        color: ${params.primaryColor};
}
.card--featured:before,
.post--featured .post__title:after {
        background-color: ${params.primaryColor};
}
[type=radio]:checked + .radio:before {
        background: ${params.primaryColor};
}
.tag-menu ul li > a {
        color: ${params.secondaryColor};
}
.cookie-bar {
        border-color: ${params.primaryColor};
}
@media all and (max-width: 56.1875em) {
 .has-submenu:after {
       border-color: ${params.primaryColor};
  }
  }`;
}

if(params.pageWidth !== '66rem') {
        output += `
.container {
        max-width: ${params.pageWidth};
  }
@media all and (min-width: 56.25em) {
 .container > header {
        max-width: ${params.pageWidth};
  }
}

.post__image--wide > img {
       width: calc(${params.pageWidth} - 8%);
}
.post__image--full > img {
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
.navbar__menu li span{
   color: ${params.linkColorMenu};
  }`;
}

if(params.linkHoverColorMenu !== '#ff80ab') {
        output += `
.navbar__menu li a:hover,
.navbar__menu li span:hover {
   color: ${params.linkHoverColorMenu};
  }`;
}
if(params.gridType === 'grid'){
        output += `
.grid .card__header img {
    height: ${params.cardsHeight};
}`;
}
if(params.cardsImgScale !== '1.3') {
        output += `
.card:hover .card__header > img {
  -webkit-transform: scale(${params.cardsImgScale});
          transform: scale(${params.cardsImgScale});
 }`;
}

if(params.filtersAnimation === 'hidden') {
        output += `
	
.card--hidden {
  display: none !important;
 }`;
}
	
if(params.filtersAnimation === 'visible') {
        output += `
	
.card--hidden {
  opacity: 0.1;  

 }`;
}	 
	
if(params.gridGutter !== '1rem') {
        output += `
.masonry > .card {
        border-bottom-width: ${params.gridGutter}rem;
}
@media all and (min-width: 37.5em) {
.masonry--layout-2,
.masonry--layout-3,
.masonry--layout-4 {    
    -webkit-column-gap: ${params.gridGutter}rem;
       -moz-column-gap: ${params.gridGutter}rem;
            column-gap: ${params.gridGutter}rem;
  }
}
.grid  {
    margin: calc(-${params.gridGutter}rem/2);
}
.grid > .card {  
  margin: calc(${params.gridGutter}rem/2) 0;
  padding: 0 calc(${params.gridGutter}rem/2);
}
.grid .card__body--compact {
  width: calc(100% - ${params.gridGutter}rem);

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
