

let rootPath = "https://appacademy@itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey();

function checkApiKey() {
    if (!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "self");
    }
    return localStorage.getItem("apiKey");
}
