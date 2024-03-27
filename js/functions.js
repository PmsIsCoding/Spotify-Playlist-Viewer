async function getToken(){
    const clientId = "54da9c0d9e8a499bb255087be8397f8d";
    const clientSecret = "80dadf2ae8614ce49477e753db28cec5";
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });  
    if (response.ok === true) {
        return response.json()
    }
    throw new Error("Impossible de contacter le serveur")
}
  
async function APIgetter(endpoint,token){
    const response = await fetch(endpoint,{
        method:'GET',
        headers:{
        'Authorization':`Bearer ${token}`,
        'Accept':"application/json"
        }
    })
    if(response.ok===true){
        return response.json()
    }
    throw new Error("Impossible de contacter le serveur")
}
  
function itemGenerator(name,img,numTracks){
    const item=document.createElement('div')
    item.className="item"
    //Image creation
    const imgContainer=document.createElement('div')
    imgContainer.className="img"
    const image=document.createElement('img')
    image.src=img
    imgContainer.appendChild(image)
    item.appendChild(imgContainer)
    //Title Creation
    const Ename=document.createElement('h2')
    Ename.textContent=name
    item.appendChild(Ename)
    document.querySelector('main').appendChild(item)
    //Tracks Number Creation
    const EnumTracks=document.createElement('h3')
    EnumTracks.textContent=`${numTracks} Tracks`
    item.appendChild(EnumTracks)
}
  