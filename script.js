const imageContainer = document.getElementById("image-container")
const loader = document.getElementById("loader")


let photosArray = []


// unsplash api
const count = 10
const apiKey = "SCLtf3C-D4Vu-_r1F0D_gSCUWYEL8-fjv2kcbX04XMo"
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`




// create elements for links and photos add to dom


displayPhotos = () => {
    photosArray.forEach((photo) => {
        console.log(photo)
        // create <a></a>  to link to unsplash
        const item = document.createElement("a")
        item.setAttribute("href", photo.links.html)
        item.setAttribute("target", "_blank")


        // create <img> for photo
        const img = document.createElement("img")
        img.setAttribute("src", photo.urls.regular)
        img.setAttribute("alt", photo.alt_description)
        img.setAttribute("title", photo.alt_description)


        // put <img> inside <a></a>.. then put inside imageContainer
        item.appendChild(img)
        imageContainer.appendChild(item)
    })
}


// get photos from unsplash

getPhotos = async() => {
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json()
        displayPhotos()
    } catch (error) {
        
    }
}


// on load
getPhotos()