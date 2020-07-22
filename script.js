// unsplash api
const count = 10
const apiKey = "SCLtf3C-D4Vu-_r1F0D_gSCUWYEL8-fjv2kcbX04XMo"
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`


// get photos from unsplash

getPhotos = async() => {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        
    }
}


// on load
getPhotos()