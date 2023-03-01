const loadCode = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayCode(data))
}

const displayCode = quote => {
    const blockCode = document.getElementById ('quote');
    console.log(quote);
    blockCode.innerHTML = quote.quote

}

loadCode();


