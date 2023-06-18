import collectionsNft from "../data/collection.mjs";
import creatorsProfile from "../data/creators.mjs";
import browserCategories from "../data/categories.mjs";
import nfts from "../data/sell-nft.mjs";
import howItWorks from "../data/how-it-works.mjs";

let collectionsNftHTML = "";
let creatorsProfileHTML = "";
let browserCategoriesHTML = "";
let nftsHTML = "";
let howItWorksHTML = "";

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
                    <div style="width:95px; height: 95px;" class="bg-[#A259FF] rounded-2xl flex justify-center items-center text-lg font-semibold transition-transform duration-500 hover:rounded-2xl group-hover:scale-125">
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

creatorsProfile.forEach((creator) => {
  creatorsProfileHTML += `
    <div
    class="hover:shadow-[0_0_28px_-10px_rgba(255,255,255,0.40);] hover:scale-110 hover:bg-[rgb(162,89,255)] bg-[#3B3B3B] transition-all rounded-3xl w-10/12 mx-auto">
        <div class="flex justify-normal items-center p-5 gap-5">
            <div class="relative">
                <img class="w-full" src="${creator.profile}" alt="Avatar-semi-mini">
                <div style="
                    width: 2rem;
                    height: 2rem;
                    position: absolute; 
                    top: -10px; 
                    left: -10px;
                    text-align: center;
                    padding-top: 0.25rem;
                    background-color: #2B2B2B;
                "
                    class="text-gray-400 rounded-full">
                    ${creator.number}
                </div>
            </div>
            <div class="flex flex-col gap-1">
                <h2 class="text-xl font-semibold">${creator.name}</h2>
                <p style="color: rgb(156 163 175)" class="text-gray-400">Total Sales: <span class="text-white ml-2">${creator.crypto} ETH</span>
                </p>
            </div>
        </div>
    </div>
    `;
});

browserCategories.forEach((browser) => {
  browserCategoriesHTML += `
    <div class="flex flex-col justify-center items-center hover:scale-95 transition-all">
        <img class="w-10/12" src="${browser.image}">
        <div class="bg-[#3B3B3B] w-10/12 p-5 rounded-b-3xl">
            <h3 class="font-medium sm:text-sm md:text-lg lg:text-lg">${browser.categories}</h3>
        </div>
    </div>
    `;
});

nfts.forEach((nft) => {
  nftsHTML += `
    <div class="hover:scale-95 transition-all">
    <img class=" w-11/12 mx-auto" src="${nft.image}">
        <div class="w-11/12 mx-auto bg-[#3B3B3B] p-5 rounded-b-xl">
            <h2 class="text-xl mb-2 font-semibold">${nft.title}</h2>
            <div class="flex gap-3 items-center mb-6">
                <img src="${nft.avatar}">
                <p class="text-gray-300">${nft.avatarName}</p>
            </div>
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-gray-400">Price</p>
                    <p>${nft.price} ETH</p>
                </div>
                <div>
                    <p class="text-gray-400">Highhest Bid</p>
                    <p style="text-align: right;">${nft.bid} wETH</p>
                </div>
            </div>
        </div>
    </div>
    `;
});

howItWorks.forEach((work) => {
  howItWorksHTML += `
    <div class="flex items-center rounded-2xl p-5 bg-[#3B3B3B] hover:scale-95 transition-all md:flex md:flex-col">
        <div class="w-11/12 md:w-fit">
            <img src="${work.image}" alt="wallet-icon">
        </div>
        <div class="w-11/12">
            <h3 class="font-semibold text-xl my-3">${work.title}</h3>
            <p class="text-gray-300 text-sm">${work.paragraph}</p>
        </div>
    </div>
    `;
});

document.getElementById("js-collection").innerHTML = collectionsNftHTML;
document.getElementById("js-creators").innerHTML = creatorsProfileHTML;
document.getElementById("js-categories").innerHTML = browserCategoriesHTML;
document.getElementById("js-nfts").innerHTML = nftsHTML;
document.getElementById("how-it-works").innerHTML = howItWorksHTML;
