function addRecommendation() {
    const recommendationText = prompt("Enter your recommendation:");
    if (recommendationText) {
        const recommendationSection = document.getElementById("recommendations");
        const newRecommendation = document.createElement("div");
        newRecommendation.className = "recommendation";
        newRecommendation.innerHTML = `<p>${recommendationText}</p>`;
        recommendationSection.appendChild(newRecommendation);

        showPopup(true);
    }
}

function showPopup(visible) {
    const popup = document.getElementById("popup");
    if (visible) {
        popup.style.display = "block";
        setTimeout(() => {
            popup.style.display = "none";
        }, 3000);
    } else {
        popup.style.display = "none";
    }
}
