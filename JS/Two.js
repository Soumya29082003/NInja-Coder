let URL = "https://kontests.net/api/v1/all"
let Response = fetch(URL)
Response.then((Response) => {
    return Response.json()
}).then((Contest) => {
    console.log(Contest)
    let ihtml = ""
    for (items in Contest) {
        console.log(Contest[items])
        ihtml += `
        <div class="card" style="width: 20rem;">
            <img src="https://source.unsplash.com/200x300?Coding" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${Contest[items].name}</h5>
                <p class="card-text"></p>
                <p>Starts At:${Contest[items].start_time}</p>
                <p>Ends At:${Contest[items].end_time}</p>
                <a href="${Contest[items].url}" target = "main" class="btn btn-primary">Visit Here</a>
            </div>
        </div>`
    }
    let CardContainer = document.querySelectorAll("#Card-Container")[0]
    CardContainer.innerHTML = ihtml
})

