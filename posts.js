import { db } from "./db.js";

let paintings = document.getElementsByClassName("paintings")[0]
let pictures = db.split("@@@")
for (let i = 0; i < pictures.length; i++) {
    let pictureItems = pictures[i].split("---")
    let card = `
    <div class="painting">
            <img src="paintings/` + pictureItems[0] + `" alt="">
            <div class="info">
                <h2>` + pictureItems[1] + `</h2>
                <h4>` + pictureItems[2] + `</h4>
                <p>` + pictureItems[3] + `</p>
                <a href="` + pictureItems[4] + `">Museum</a>
                <a href="#/" onclick="openImage(` + i + `)">More</a>
            </div>
        </div>
    `
    console.log(pictureItems[0]);
    paintings.innerHTML = paintings.innerHTML + card
}