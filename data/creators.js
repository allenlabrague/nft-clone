const creatorsProfile = [
  {
    number: "1",
    profile: "/images/creators-image/Avatar Placeholder.png",
    name: "Keepitreal",
    crypto: "30.00",
  },
  {
    number: "2",
    profile: "/images/creators-image/Avatar Placeholder (1).png",
    name: "DigiLab",
    crypto: "32.53",
  },
  {
    number: "3",
    profile: "/images/creators-image/Avatar Placeholder (2).png",
    name: "GravityOne",
    crypto: "45.23",
  },
  {
    number: "4",
    profile: "/images/creators-image/Avatar Placeholder (3).png",
    name: "Juanie",
    crypto: "45.23",
  },
  {
    number: "4",
    profile: "/images/creators-image/Avatar Placeholder (3).png",
    name: "Juanie",
    crypto: "45.23",
  },
  {
    number: "4",
    profile: "/images/creators-image/Avatar Placeholder (3).png",
    name: "Juanie",
    crypto: "45.23",
  },
];

let creatorsProfileHTML = "";

creatorsProfile.forEach((creator) => {
  creatorsProfileHTML += `
    <div
    class="hover:shadow-[0_0_28px_-10px_rgba(255,255,255,0.40);] hover:bg-[rgb(162,89,255)] hover:scale-110  transition-all bg-[#3B3B3B] rounded-3xl w-10/12 mx-auto">
        <div class="flex justify-normal items-center p-5 gap-5">
            <div class="relative">
                <img src="${creator.profile}" alt="Avatar-semi-mini">
                <div
                    class="absolute top-[-10px] left-[-10px] text-center pt-1 text-gray-400 bg-[#2B2B2B] w-8 h-8 rounded-full">
                    ${creator.number}
                </div>
            </div>
            <div class="flex flex-col gap-1">
                <h2 class="text-xl font-semibold">${creator.name}</h2>
                <p class="text-gray-400">Total Sales: <span class="text-white ml-2">${creator.crypto} ETH</span>
                </p>
            </div>
        </div>
    </div>
    `;
});

document.querySelector(".js-creators").innerHTML = creatorsProfileHTML;
