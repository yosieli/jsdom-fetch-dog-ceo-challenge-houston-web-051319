
console.log('%c HI', 'color: firebrick')
window.addEventListener('load', submitAction)

let arrayImages = []
let breeds = []

function submitAction() {

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
breedUrl = "https://dog.ceo/api/breeds/list/all"

fetch(imgUrl).then(function(response){
        return response.json()
        }
    ).then(function(result){
        // arrayImages.push(result.message)
        result.message.forEach(function(img){
            arrayImages.push(img);
        })
    }).then(function(){
        ul = document.createElement("ul")
        list = document.getElementById("dog-image-container")
        list.append(ul)
        arrayImages.forEach(function(picture){
            let li = document.createElement("li")
            let img = document.createElement("img")
            img.src = picture
            li.append(img)
            ul.append(li)
            });
    });

document.getElementById("breed-dropdown").addEventListener("change", showBreeds)

function showBreeds(){
    fetch(breedUrl).then(function(response){
        return response.json()
        }
    ).then(function(result){
        (Object.entries(result.message).forEach(
            function(breed){
                breeds.push(breed)
            }
        ))}).then(function(){
          listBreeds = document.getElementById("dog-breeds")
          listBreeds.innerHTML = ''  
          breeds.forEach(function(breed){
            let li = document.createElement("li")
            let text = document.createTextNode(breed[0])
            if (breed[0].charAt(0) == document.getElementById("breed-dropdown").value){
            li.className = breed[0].charAt(0)
            listBreeds.append(li)
            li.append(text)
            li.addEventListener("click", function(object){
                object.srcElement.style.color = "red"
            })}
        });
    });
};
};
