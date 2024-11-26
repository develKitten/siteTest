/* Navigation, Footer Loading */ 

function loadComponent(selector, filePath, callback) {
    fetch(filePath)
        .then((response) => {
            if (!response.ok) throw new Error("Failed to load " + filePath);
            return response.text();
        })
        .then((html) => {
            document.querySelector(selector).innerHTML = html;
            if (callback) callback()
        })
        .catch((error) => console.error(error));
}

// Navigation
loadComponent("#nav-container", "/kor/components/nav.html", () => {
    const script = document.createElement("script");
    script.src = "/kor/assets/js/nav.js";
    document.body.appendChild(script);
});

// Footer
loadComponent("#footer-container", "/kor/components/footer.html");
