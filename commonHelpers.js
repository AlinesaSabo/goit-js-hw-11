import{i as f,S as d}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function p(n){const t="https://pixabay.com/api/",i="45076495-063a30a4096c3d430f822662d",o=new URLSearchParams({key:i,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${t}?${o.toString()}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function m({hits:n}){const t=n.map(({webformatURL:i,largeImageURL:o,tags:e,likes:r,views:s,comments:c,downloads:u})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}" target="_blank">
        <img class="gallery-image" src="${i}" alt="${e}">
      </a>
      <div class="gallery-info">
        <div class="info-item">
          <p class="info-label">Likes</p>
          <p class="info-value">${r}</p>
        </div>
        <div class="info-item">
          <p class="info-label">Views</p>
          <p class="info-value">${s}</p>
        </div>
        <div class="info-item">
          <p class="info-label">Comments</p>
          <p class="info-value">${c}</p>
        </div>
        <div class="info-item">
          <p class="info-label">Downloads</p>
          <p class="info-value">${u}</p>
        </div>
      </div>
    </li>`).join("");document.querySelector(".gallery").innerHTML=t}const a=document.querySelector(".gallery"),y=document.querySelector(".search-form"),l=document.querySelector(".loader");y.addEventListener("submit",g);function g(n){n.preventDefault();const t=n.currentTarget,i=t.elements.query.value.trim().toLowerCase();if(!i){a.innerHTML="";return}h(),p(i).then(o=>{if(a.innerHTML="",o.hits.length===0){f.error({titleColor:"#FFFFFF",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",position:"topRight",iconColor:"#FFFFFF"});return}m(o),new d(".gallery a",{captionsData:"alt",captionDelay:250})}).catch().finally(()=>{F(),t.reset()})}function h(){l.style.display="block"}function F(){l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
