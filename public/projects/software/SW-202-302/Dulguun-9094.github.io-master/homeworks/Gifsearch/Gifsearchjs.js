x = true
let y = 1

function search() {
    var inputValue = document.getElementById("inputValue").value
    var apiValue = "https://api.giphy.com/v1/gifs/search?api_key=dOfDQCcUJ1mBTLhclhfhAFf46Dbg408G&q=%22" + inputValue + "%22&limit=25&offset=0&rating=g&lang=en"
    var div = document.createElement("div")
    div.setAttribute("id", "div")
    const getData = async() => {
        const response = await fetch(apiValue)
        var jsonData = await response.json()
        for (var i = 0; i < 25; i++) {
            var createImg = document.createElement("img")
            createImg.style.height = "300px"
            createImg.style.width = "500px"
            createImg.src = jsonData.data[i].images.original.url
            document.getElementById("apizuragorohdiv").appendChild(createImg)

        }
        console.log(jsonData)

    }
    getData()


    y++
}

function reset() {
    location.reload()
}
