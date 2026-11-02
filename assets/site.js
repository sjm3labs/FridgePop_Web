// Shows the elements of the chosen language (data-lang) and remembers the choice.
(function(){var codes=["ko","en"];
function pick(c){if(codes.indexOf(c)<0)c="en";
document.querySelectorAll('[data-lang]').forEach(function(e){e.classList.toggle('on',e.getAttribute('data-lang')===c)});
var s=document.getElementById('lang');if(s)s.value=c;document.documentElement.lang=c;try{localStorage.setItem('lang',c)}catch(e){}}
var saved=null;try{saved=localStorage.getItem('lang')}catch(e){}
var nav=(navigator.language||'en').slice(0,2).toLowerCase();
// ?lang=ko in the address (the game's links) wins over everything else.
var q=(location.search.match(/[?&]lang=([a-z]{2})/)||[])[1];
pick(q||saved||nav);
var s=document.getElementById('lang');if(s)s.onchange=function(){pick(s.value)};})();
