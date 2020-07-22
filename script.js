const imageContainer = document.getElementById("image-container")
const loader = document.getElementById("loader")


let photosArray = []


// unsplash api
const count = 10
const apiKey = "SCLtf3C-D4Vu-_r1F0D_gSCUWYEL8-fjv2kcbX04XMo"
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`


// helper function to set attributes on dom elements
setAttributes = (element, attributes) => {
    for (let key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}


// create elements for links and photos add to dom


displayPhotos = () => {
    photosArray.forEach((photo) => {
        console.log(photo)
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


// on load
getPhotos()