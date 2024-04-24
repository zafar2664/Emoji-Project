let input = document.querySelector("#input");
let emojis = document.querySelector(".emoji-container");

var t1 = gsap.timeline();



window.addEventListener("load",()=>{
    displayEmoji(emojiList);
    attachListener();
})

function displayEmoji(inputList){
    inputList.forEach(emoji => {
        let emojiContainer = document.createElement("div");
        emojiContainer.classList.add("emoji")

        // t1.from(emojiContainer,{
        //   opacity:0,
        //   // scale:0,
        //   duration:0.05,
        //   stagger:0.05
        // })



        let emojiIcon = document.createElement("span");
        emojiIcon.classList.add("icon")
        emojiIcon.innerText=emoji.emoji;
        
        emojiContainer.append(emojiIcon);


        let alias = document.createElement("span");
        alias.classList.add("font")
        let newAlias = emoji.aliases.map((alias) => alias.replaceAll("_"," "));
        alias.innerText = newAlias.join();
        emojiContainer.append(alias);


        let desc = document.createElement("span");
        desc.classList.add("font")
        desc.innerText = emoji.description;
        emojiContainer.append(desc);



        emojis.append(emojiContainer);


    });
}
function attachListener() {
    input.addEventListener("keyup", filterEmojis);
  }
  
  function filterEmojis(e) {
    const keyword = e.target.value;
  
    const filteredData = emojiList.filter((emoji) => {
      if (emoji.description.includes(keyword)) return emoji;
      else if (emoji.category.includes(keyword)) return emoji;
      else if (emoji.aliases.includes(keyword)) return emoji;
      else if (emoji.tags.includes(keyword)) return emoji;
    });
  
    //resetting previous data in the div
    emojis.innerText = "";
    displayEmoji(filteredData)
  }
  