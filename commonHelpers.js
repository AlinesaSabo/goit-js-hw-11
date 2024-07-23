import{i as u,S as f}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function d(i){const t="https://pixabay.com/api/",n="45076495-063a30a4096c3d430f822662d",o=new URLSearchParams({key:n,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${t}?${o.toString()}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function p({hits:i}){const t=i.map(({webformatURL:n,largeImageURL:o,tags:e,likes:r,views:s,comments:l,downloads:c})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}" target="_blank">
        <img class="gallery-image" src="${n}" alt="${e}">
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
          <p class="info-value">${l}</p>
        </div>
        <div class="info-item">
          <p class="info-label">Downloads</p>
          <p class="info-value">${c}</p>
        </div>
      </div>
    </li>`).join("");document.querySelector(".gallery").innerHTML=t}const m=document.querySelector(".gallery"),y=document.querySelector(".search-form"),a=document.querySelector(".loader");y.addEventListener("submit",g);function g(i){i.preventDefault();const t=i.currentTarget,n=t.elements.query.value.trim().toLowerCase();h(),d(n).then(o=>{if(m.innerHTML="",o.hits.length===0){u.error({titleColor:"#FFFFFF",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",position:"topRight",iconColor:"#FFFFFF"});return}p(o),new f(".gallery a",{captionsData:"alt",captionDelay:250})}).catch().finally(()=>{F(),t.reset()})}function h(){a.style.display="block"}function F(){a.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
