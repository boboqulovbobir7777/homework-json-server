const main = document.querySelector(".main");
let newData = [];
fetch("http://localhost:3000/films")
  .then((res) => res.json())
  .then((data) => {
    newData = data;
    main.innerHTML += `<section class="trending">
        <h5 class="title">Trending</h5>
        <div class="films">
         ${data
           .filter((el) => el.isTrending)
           .map((e) => {
             return ` <div class="film" style="background-image: url(${
               e.thumbnail.trending.large
             })">
            <div class="bookmarker">
            <img src="./image/icon-bookmark-${
              e.isBookmarked ? "full" : "empty"
            }.svg" alt="image not fund">
            </div>
            <div class="player">
               <img src="./image/icon-play.svg" alt="image not found">
              Play
            </div>
            <div class="info">
              <p>
                <span>${e.year}</span> <span class="point"></span>
                <span>${e.category}</span> <span class="point"></span>
                <span>${e.rating}</span>
              </p>
              <h6>${e.title}</h6>
            </div>
          </div>`;
           })
           .join("")}
        </div>
      </section>`;
    main.innerHTML += ` <section class="sectionMain">
        <h5 class="title">Recommended for you</h5>
        <div class="films">
        ${data
          .filter((el) => !el.isTrending)
          .map((e) => {
            return `
          <div class="film">
            <div class="image">
              <img src="${e.thumbnail.regular.large}" alt="image not found" />
              <div class="bookmarker">
                <img src="./image/icon-bookmark-${
                  e.isBookmarked ? "full" : "empty"
                }.svg" alt="image not fund">
              </div>
              <div class="player">
               <img src="./image/icon-play.svg" alt="image not found">
                Play
              </div>
            </div>
            <div class="info">
              <p>
                <span>${e.year}</span> <span class="point"></span>
                <span>${e.category}</span> <span class="point"></span>
                <span>${e.rating}</span>
              </p>
              <h6>${e.title}</h6>
            </div>
          </div>`;
          })
          .join("")}
        </div>
      </section> -->`;
  });


