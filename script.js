let modal = document.getElementsByClassName("modal")[0]
let modalPicture = document.getElementById("modalPicture")
let paintings = document.getElementsByClassName("paintings")[0]
let openedImage = 0

function openImage(image) {
    // console.log("image " + image +" opened");
    modal.style.display = "block"
    openedImage = image
    modalPicture.src = "./paintings/" + openedImage + ".jpg"
}

function closeImage(image) {
    modal.style.display = "none"
}

function changeImage(dir) {
    openedImage += dir
    if (openedImage < 0) {
        openedImage = paintings.children.length - 1
    }
    if (openedImage > paintings.children.length - 1) {
        openedImage = 0
    }
    modalPicture.src = "./paintings/" + openedImage + ".jpg"
}