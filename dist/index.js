const hamburgerBtn = document.querySelector(".hamburger");
const menuToggle = document.querySelector(".mobile-nav");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("is-active");
  menuToggle.classList.toggle("is-active");
});

let collectionsNftHTML = "";

collectionsNft.forEach((collection) => {
  collectionsNftHTML += `
  <div>
    <div>
        <div class="group relative cursor-pointer mb-3 overflow-hidden">
            <div>
                <img class="transition-transform duration-500 group-hover:scale-125"
                    src="${collection.mainImage}">
            </div>
        </div>
    </div>
    <div class="flex items-center gap-4 mb-2">
        <div class="group relative cursor-pointer overflow-hidden">
            <div>
                <img class="transition-transform duration-500 group-hover:scale-125"
                    src="${collection.secondaryImage}">
            </div>
        </div>
        <div class="group relative cursor-pointer overflow-hidden">
            <div>
                <img class="transition-transform duration-500 group-hover:scale-125"
                    src="${collection.thirdImage}">
            </div>
        </div>
        <div class="group relative cursor-pointer overflow-hidden">
            <div>
                <div
                    class="bg-[#A259FF] min-w-[95px] min-h-[95px] rounded-2xl flex justify-center items-center text-lg font-semibold transition-transform duration-500 hover:rounded-2xl group-hover:scale-125">
                    1000+</div>
            </div>
        </div>
    </div>
    <div class="mb-10">
        <h3 class="text-lg font-semibold">${collection.title}</h3>
        <div class="flex gap-3 mt-2">
            <img src="${collection.authorAvatar}">
            <p>${collection.authorName}</p>
        </div>
    </div>
  </div>
  `;
});

document.querySelector(".js-collection").innerHTML = collectionsNftHTML;

// This is wrong fix it again tomorrow
