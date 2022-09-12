//Gerar os elementos HTML da página:
export default () => {
    const container = document.createElement("div");
    container.classList.add("container");
    
    container.innerHTML = `
    <section class="page-section">
        <figure class="box">
            <img id="gif-timeline" src="assets/104313-cooking-chef.gif">
        </figure>
        <h3>O que vamos cozinhar hoje?</h3>
        <div class="box">
            <textarea type="post"></textarea>
            <button>Postar</button>
        </div> 
    </section>  
    <footer>
        <form>
            <button id="btn-home">
                <i class="fa-solid fa-house"></i>
            </button>
            <button id="btn-logout">
                <i class="fa-solid fa-right-from-bracket"></i>
            </button>
            <p>Desenvolvido por Karla Oliveira, Marina Massaneiro e Polyana Magalhães</p>
        </form>
    </footer>
    `;
  
    // const btnLogout = container.querySelector('#btn-logout');
    const btnHome = container.querySelector('#btn-home');

    btnHome.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.hash = '#timeline';
    });

    return container; 
}