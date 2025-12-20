fetch("../actualites.json")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("news-container");

        data.reverse().forEach(article => {
            const newsDiv = document.createElement("div");

            // mêmes classes que project + news
            newsDiv.className = "project news open";

            newsDiv.innerHTML = `
                <div class="project-header">
                    <h2>${article.titre}</h2>
                </div>

                <div class="project-content">
                    <p class="news-meta">
                        📅 ${article.date} — ✍️ ${article.auteur}
                    </p>
                    <p>${article.contenu}</p>
                </div>
            `;

            container.appendChild(newsDiv);
        });
    })
    .catch(error => {
        console.error("Erreur lors du chargement des actualités :", error);
    });
