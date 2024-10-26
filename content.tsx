import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

function PlasmoOverlay() {

  console.log("Content Loaded.")
  const allImages = document.querySelectorAll("img")
  allImages.forEach((img) => {
    img.src =
      "https://images.vexels.com/media/users/3/144131/isolated/preview/29576a7e0442960346703d3ecd6bac04-picture-doodle-icon.png"
  })
  // return <div></div>
}

export default PlasmoOverlay
