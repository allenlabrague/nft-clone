import nfts from "../data/sell-nft.mjs";

let nftsHTML = "";

nfts.forEach((nft) => {
  nftsHTML += `
      <div class="hover:scale-95 transition-all">
      <img class=" w-11/12 mx-auto" src="${nft.image}">
          <div class="w-11/12 mx-auto bg-[#2B2B2B] p-5 rounded-b-xl">
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

document.getElementById("js-artist-nft").innerHTML = nftsHTML;
