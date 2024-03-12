let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    let input = document.querySelector("#url").value
    e.preventDefault()
    console.log(input);
    let image = document.querySelector("img")
    let qr = `https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=${input}`
    image.src=qr;
})