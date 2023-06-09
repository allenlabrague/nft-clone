const collectionsNft = [
  {
    mainImage: "/images/art/animals-art/big-art.png",
    secondaryImage: "/images/art/animals-art/second-art.png",
    thirdImage: "/images/art/animals-art/second-art2.png",
    title: "DSGN Animals",
    authorAvatar: "/images/mini-profile-avatar/mini-avatar1.png",
    authorName: "MrFox",
  },
  {
    mainImage: "/images/art/mushroom-art/Primary Photo Placeholder.png",
    secondaryImage: "/images/art/mushroom-art/Secondary Photo Placeholder.png",
    thirdImage: "/images/art/mushroom-art/Secondary Photo Placeholder (1).png",
    title: "Magic Mushrooms",
    authorAvatar: "/images/mini-profile-avatar/mini-avatar2.png",
    authorName: "Shroomie",
  },
  {
    mainImage: "/images/art/robot-art/Primary Photo Placeholder.png",
    secondaryImage: "/images/art/robot-art/Secondary Photo Placeholder.png",
    thirdImage: "/images/art/robot-art/Secondary Photo Placeholder (1).png",
    title: "Disco Machines",
    authorAvatar: "/images/mini-profile-avatar/mini-avatar3.png",
    authorName: "BeKind2Robots",
  },
];

let collectionsNftHTML = "";

collectionsNft.forEach((collection) => {
  collectionsNftHTML += `
    <div>
        <div>
            <div class="group relative cursor-pointer mb-3 overflow-hidden">
                <div>
                    <img class="transition-transform duration-500 group-hover:scale-125"
                        src="${collection.mainImage}" alt="primary-img">
                </div>
            </div>
        </div>
        <div class="flex items-center gap-4 mb-2">
            <div class="group relative cursor-pointer overflow-hidden">
                <div>
                    <img class="transition-transform duration-500 group-hover:scale-125"
                        src="${collection.secondaryImage}" alt="primary-img">
                </div>
            </div>
            <div class="group relative cursor-pointer overflow-hidden">
                <div>
                    <img class="transition-transform duration-500 group-hover:scale-125"
                        src="${collection.thirdImage}" alt="primary-img">
                </div>
            </div>
            <div class="group relative cursor-pointer  overflow-hidden">
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
                <img src="${collection.authorAvatar}" alt="mini-avatar">
                <p>${collection.authorName}</p>
            </div>
        </div>
    </div>
  `;
});

let test = (document.querySelector(".js-collection").innerHTML =
  collectionsNftHTML);
