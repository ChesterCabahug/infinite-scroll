const imageContainer = document.getElementById("image-container")
const loader = document.getElementById("loader")

let ready = false
let imagesLoaded = 0
let totalImages = 0
let photosArray = []


// unsplash api
const count = 30
const apiKey = "SCLtf3C-D4Vu-_r1F0D_gSCUWYEL8-fjv2kcbX04XMo"
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`


// check if all images are loaded
imageLoaded = () => {
    // console.log("image loaded")
    imagesLoaded++
    console.log(imagesLoaded)
    if (imagesLoaded === totalImages) {
        ready = true
        console.log("ready = ", ready)
        
    }
}

// helper function to set attributes on dom elements
setAttributes = (element, attributes) => {
    for (let key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}


// create elements for links and photos add to dom


displayPhotos = () => {
    imagesLoaded = 0
    totalImages = photosArray.length
    console.log("total images ", totalImages)
    photosArray.forEach((photo) => {
        // create <a></a>  to link to unsplash
        const item = document.createElement("a")

        setAttributes(item, {
            href: photo.links.html,
            target: "_blank"
        })

        // create <img> for photo
        const img = document.createElement("img")

        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })

        // event listener check when each is finished loading
        img.addEventListener('load', imageLoaded)

        // put <img> inside <a></a>.. then put inside imageContainer
        item.appendChild(img)
        imageContainer.appendChild(item)
    })
}


// get photos from unsplash

getPhotos = async () => {
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json()
        displayPhotos()
    } catch (error) {

    }
}


// check to see if scrolling near bottom of page, load more photos
window.addEventListener("scroll", (e) => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false
        getPhotos()
        
    }
})

// on load
getPhotos()