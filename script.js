const photoGrid = document.querySelector(".js-photoGrid")
const fetchData = async ()=>{
    try{
const response = await fetch("https://dog.ceo/api/breed/hound/images");
const data = await response.json();
data.message.forEach((url)=>{
    const image = document.createElement("li");
    image.innerHTML = `<div class="imgContainer">
    <img src=${url} alt="dog">
    </div>`;
    photoGrid.appendChild(image);
})
    }
    catch(error){
        console.log("error");

    }
}
fetchData()