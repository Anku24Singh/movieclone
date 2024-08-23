(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(0),i=c.n(a),n=c(18),r=c.n(n),o=c(8),l=c(4),j=c.n(l),d=c(6),m=c(5),b=(c(38),c(39),function(e){var t=e.favouriteComponent;return Object(s.jsx)(s.Fragment,{children:e.movies.map((function(c,a){return Object(s.jsxs)("div",{className:"image-container d-flex justify-content-start m-3",children:[Object(s.jsx)("img",{src:c.Poster,alt:"movie"}),Object(s.jsx)("div",{onClick:function(){return e.handleFavouritesClick(c)},className:"overlay d-flex align-items-center justify-content-center",children:Object(s.jsx)(t,{})})]})}))})}),h=function(e){return Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("h1",{children:e.heading})})},u=function(e){return Object(s.jsx)("div",{className:"col col-sm-4",children:Object(s.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setSearchValue(t.target.value)},placeholder:"Type to search..."})})},v=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("span",{className:"mr-2",children:"Add to Favourites"}),Object(s.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-heart-fill",fill:"red",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})]})},O=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("span",{className:"mr-2",children:"Remove from favourites"}),Object(s.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-x-square",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{"fill-rule":"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(s.jsx)("path",{"fill-rule":"evenodd",d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})]})},x=c(9),p=c(3),f=(c(40),function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),c=t[0],i=t[1],n=Object(p.o)();return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsxs)("div",{className:"headerLeft",children:[Object(s.jsx)(x.b,{to:"/",children:Object(s.jsx)("img",{className:"header__icon",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png",alt:"Logo"})}),Object(s.jsx)(x.b,{to:"/movies/popular",style:{textDecoration:"none"},children:Object(s.jsx)("span",{children:"Popular"})}),Object(s.jsx)(x.b,{to:"/movies/top_rated",style:{textDecoration:"none"},children:Object(s.jsx)("span",{children:"Top Rated"})}),Object(s.jsx)(x.b,{to:"/movies/upcoming",style:{textDecoration:"none"},children:Object(s.jsx)("span",{children:"Upcoming"})})]}),Object(s.jsx)("div",{className:"headerRight",children:Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c.trim()&&n("/search/".concat(c.trim()))},children:[Object(s.jsx)("input",{type:"text",placeholder:"Search for a movie...",value:c,onChange:function(e){return i(e.target.value)},className:"header__searchInput"}),Object(s.jsx)("button",{type:"submit",className:"header__searchButton",children:"Search"})]})})]})}),g=(c(41),c(42),c(31)),_=(c(53),c(25)),N=(c(54),function(e){var t=e.movie,c=Object(a.useState)(!0),i=Object(m.a)(c,2),n=i[0],r=i[1];return Object(a.useEffect)((function(){setTimeout((function(){r(!1)}),1500)}),[]),Object(s.jsx)(s.Fragment,{children:n?Object(s.jsx)("div",{className:"cards",children:Object(s.jsx)(_.a,{color:"#202020",highlightColor:"#444",children:Object(s.jsx)(_.b,{height:300,duration:2})})}):Object(s.jsx)(x.b,{to:"/movie/".concat(t.id),style:{textDecoration:"none",color:"white"},children:Object(s.jsxs)("div",{className:"cards",children:[Object(s.jsx)("img",{className:"cards__img",src:"https://image.tmdb.org/t/p/original".concat(t?t.poster_path:"")}),Object(s.jsxs)("div",{className:"cards__overlay",children:[Object(s.jsx)("div",{className:"card__title",children:t?t.original_title:""}),Object(s.jsxs)("div",{className:"card__runtime",children:[t?t.release_date:"",Object(s.jsxs)("span",{className:"card__rating",children:[t?t.vote_average:"",Object(s.jsx)("i",{className:"fas fa-star"})]})]}),Object(s.jsx)("div",{className:"card__description",children:t?t.overview.slice(0,118)+"...":""})]})]})})})}),w=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),c=t[0],i=t[1],n=Object(p.q)().type;Object(a.useEffect)((function(){r()}),[]),Object(a.useEffect)((function(){r()}),[n]);var r=function(){fetch("https://api.themoviedb.org/3/movie/".concat(n||"popular","?api_key=c38e7f713a69c8b00cc05f7b1d0638de&language=en-US")).then((function(e){return e.json()})).then((function(e){return i(e.results)}))};return Object(s.jsxs)("div",{className:"movie__list",children:[Object(s.jsx)("h2",{className:"list__title",children:(n||"POPULAR").toUpperCase()}),Object(s.jsx)("div",{className:"list__cards",children:c.map((function(e){return Object(s.jsx)(N,{movie:e})}))})]})},y=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),c=t[0],i=t[1];return Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=c38e7f713a69c8b00cc05f7b1d0638de&language=en-US").then((function(e){return e.json()})).then((function(e){return i(e.results)}))}),[]),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"poster",children:[Object(s.jsx)(g.Carousel,{showThumbs:!1,autoPlay:!0,transitionTime:3,infiniteLoop:!0,showStatus:!1,children:c.map((function(e){return Object(s.jsxs)(x.b,{style:{textDecoration:"none",color:"white"},to:"/movie/".concat(e.id),children:[Object(s.jsx)("div",{className:"posterImage",children:Object(s.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(e&&e.backdrop_path)})}),Object(s.jsxs)("div",{className:"posterImage__overlay",children:[Object(s.jsx)("div",{className:"posterImage__title",children:e?e.original_title:""}),Object(s.jsxs)("div",{className:"posterImage__runtime",children:[e?e.release_date:"",Object(s.jsxs)("span",{className:"posterImage__rating",children:[e?e.vote_average:"",Object(s.jsx)("i",{className:"fas fa-star"})," "]})]}),Object(s.jsx)("div",{className:"posterImage__description",children:e?e.overview:""})]})]})}))}),Object(s.jsx)(w,{})]})})},S=(c(55),function(){var e=Object(a.useState)(),t=Object(m.a)(e,2),c=t[0],i=t[1],n=Object(p.q)().id;Object(a.useEffect)((function(){r(),window.scrollTo(0,0)}),[]);var r=function(){fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=c38e7f713a69c8b00cc05f7b1d0638de&language=en-US")).then((function(e){return e.json()})).then((function(e){return i(e)}))};return Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("div",{className:"movie__intro",children:Object(s.jsx)("img",{className:"movie__backdrop",src:"https://image.tmdb.org/t/p/original".concat(c?c.backdrop_path:"")})}),Object(s.jsxs)("div",{className:"movie__detail",children:[Object(s.jsx)("div",{className:"movie__detailLeft",children:Object(s.jsx)("div",{className:"movie__posterBox",children:Object(s.jsx)("img",{className:"movie__poster",src:"https://image.tmdb.org/t/p/original".concat(c?c.poster_path:"")})})}),Object(s.jsxs)("div",{className:"movie__detailRight",children:[Object(s.jsxs)("div",{className:"movie__detailRightTop",children:[Object(s.jsx)("div",{className:"movie__name",children:c?c.original_title:""}),Object(s.jsx)("div",{className:"movie__tagline",children:c?c.tagline:""}),Object(s.jsxs)("div",{className:"movie__rating",children:[c?c.vote_average:""," ",Object(s.jsx)("i",{class:"fas fa-star"}),Object(s.jsx)("span",{className:"movie__voteCount",children:c?"("+c.vote_count+") votes":""})]}),Object(s.jsx)("div",{className:"movie__runtime",children:c?c.runtime+" mins":""}),Object(s.jsx)("div",{className:"movie__releaseDate",children:c?"Release date: "+c.release_date:""}),Object(s.jsx)("div",{className:"movie__genres",children:c&&c.genres?c.genres.map((function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("span",{className:"movie__genre",id:e.id,children:e.name})})})):""})]}),Object(s.jsxs)("div",{className:"movie__detailRightBottom",children:[Object(s.jsx)("div",{className:"synopsisText",children:"Synopsis"}),Object(s.jsx)("div",{children:c?c.overview:""})]})]})]}),Object(s.jsxs)("div",{className:"movie__links",children:[Object(s.jsx)("div",{className:"movie__heading",children:"Useful Links"}),c&&c.homepage&&Object(s.jsx)("a",{href:c.homepage,target:"_blank",style:{textDecoration:"none"},children:Object(s.jsx)("p",{children:Object(s.jsxs)("span",{className:"movie__homeButton movie__Button",children:["Homepage ",Object(s.jsx)("i",{className:"newTab fas fa-external-link-alt"})]})})}),c&&c.imdb_id&&Object(s.jsx)("a",{href:"https://www.imdb.com/title/"+c.imdb_id,target:"_blank",style:{textDecoration:"none"},children:Object(s.jsx)("p",{children:Object(s.jsxs)("span",{className:"movie__imdbButton movie__Button",children:["IMDb",Object(s.jsx)("i",{className:"newTab fas fa-external-link-alt"})]})})})]}),Object(s.jsx)("div",{className:"movie__heading",children:"Production companies"}),Object(s.jsx)("div",{className:"movie__production",children:c&&c.production_companies&&c.production_companies.map((function(e){return Object(s.jsx)(s.Fragment,{children:e.logo_path&&Object(s.jsxs)("span",{className:"productionCompanyImage",children:[Object(s.jsx)("img",{className:"movie__productionComapany",src:"https://image.tmdb.org/t/p/original"+e.logo_path}),Object(s.jsx)("span",{children:e.name})]})})}))})]})}),k=function(){var e=Object(p.q)().query,t=Object(a.useState)([]),c=Object(m.a)(t,2),i=c[0],n=c[1],r=Object(a.useState)(!0),o=Object(m.a)(r,2),l=o[0],b=o[1],h=Object(a.useState)(!1),u=Object(m.a)(h,2),v=u[0],O=u[1];return Object(a.useEffect)((function(){var t=function(){var t=Object(d.a)(j.a.mark((function t(){var c,s,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!0),O(!1),t.prev=2,t.next=5,fetch("https://api.themoviedb.org/3/search/movie?api_key=c38e7f713a69c8b00cc05f7b1d0638de&query=".concat(encodeURIComponent(e)));case 5:if((c=t.sent).ok){t.next=8;break}throw new Error("Failed to fetch movies");case 8:return t.next=10,c.json();case 10:s=t.sent,n(s.results),a=s.results.some((function(t){return t.title.toLowerCase()===e.toLowerCase()})),O(a),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(2),console.error("Error fetching movies:",t.t0),n([]);case 20:return t.prev=20,b(!1),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[2,16,20,23]])})));return function(){return t.apply(this,arguments)}}();e&&t()}),[e]),l?Object(s.jsx)("div",{className:"loading",children:"Loading..."}):Object(s.jsxs)("div",{className:"searchResults",children:[Object(s.jsxs)("h2",{children:['Search Results for "',e,'"']}),i.length>0?Object(s.jsx)("div",{className:"moviesGrid",children:i.map((function(t){return Object(s.jsx)(S,{movie:t,highlight:t.title.toLowerCase()===e.toLowerCase()},t.id)}))}):Object(s.jsx)("div",{className:"noResults",children:Object(s.jsx)("h3",{children:"Movie not found"})}),!v&&Object(s.jsx)("div",{className:"noResults",children:Object(s.jsx)("h3",{children:"Movie not found"})})]})},C=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),c=t[0],i=t[1],n=Object(a.useState)([]),r=Object(m.a)(n,2),l=r[0],g=r[1],_=Object(a.useState)(""),N=Object(m.a)(_,2),C=N[0],I=N[1],L=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,s,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="http://www.omdbapi.com/?s=".concat(t,"&apikey=263d22d8"),e.next=3,fetch(c);case 3:return s=e.sent,e.next=6,s.json();case 6:(a=e.sent).Search&&i(a.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){L(C)}),[C]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-movie-app-favourites"));e&&g(e)}),[]);var D=function(e){localStorage.setItem("react-movie-app-favourites",JSON.stringify(e))};return Object(s.jsxs)("div",{className:"container-fluid movie-app",children:[Object(s.jsxs)(x.a,{children:[Object(s.jsx)(f,{}),Object(s.jsxs)(p.c,{children:[Object(s.jsx)(p.a,{index:!0,element:Object(s.jsx)(y,{})}),Object(s.jsx)(p.a,{path:"movie/:id",element:Object(s.jsx)(S,{})}),Object(s.jsx)(p.a,{path:"movies/:type",element:Object(s.jsx)(w,{})}),Object(s.jsx)(p.a,{path:"/*",element:Object(s.jsx)("h1",{children:"Error Page"})}),Object(s.jsx)(p.a,{path:"/search/:query",element:Object(s.jsx)(k,{})})]})]}),Object(s.jsxs)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:[Object(s.jsx)(h,{heading:"Movies"}),Object(s.jsx)(u,{searchValue:C,setSearchValue:I})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)(b,{movies:c,handleFavouritesClick:function(e){var t=[].concat(Object(o.a)(l),[e]);g(t),D(t)},favouriteComponent:v})}),Object(s.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(s.jsx)(h,{heading:"Favourites"})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)(b,{movies:l,handleFavouritesClick:function(e){var t=l.filter((function(t){return t.imdbID!==e.imdbID}));g(t),D(t)},favouriteComponent:O})})]})};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.6cfbf300.chunk.js.map