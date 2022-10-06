export function printTimeline(recipes) {
  let timelineComplete = '';
  recipes.forEach(doc => {
    const templatePost = `
      <section id="single-post">
        <h1 id="title">${doc.title}</h1>
        <p>por ${doc.author}</p>
        <div class="linha1">
          <p>${doc.time}min</p>
          <p>${doc.difficult}</p>
          <p>Curtir</p>
        </div>
        <details>
          <summary>Ver mais</summary>
          <p>${doc.ingredients}</p>
          <p>${doc.prepare}</p>
        </details>
      </section>
      `;
    timelineComplete += templatePost
  });
  return timelineComplete;
}