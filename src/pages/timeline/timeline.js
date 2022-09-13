//Gerar os elementos HTML da página:
export default () => {
    const container = document.createElement("div");
    container.id = "container-timeline";
    
    container.innerHTML = `
    <section class="page-section">
        <figure class="box">
            <img id="gif-timeline" src="assets/104313-cooking-chef.gif">
        </figure>
        <h3 id= "h3-timeline">O que vamos cozinhar hoje?</h3>
    </section>  
    <section class="box-timeline">
        <div class="post-timeline"> 
            <h5>Postagem</h5>
        </div> 
    </section> 
    <footer>
        <form id="footer-form">
            <button id="btn-home">
                <i class="fa-solid fa-house"></i>
            </button>
            <button id="btn-logout">
                <i class="fa-solid fa-right-from-bracket"></i>
            </button>
        </form>
    </footer>
    `;
  
    // input post:
    // <textarea type="post"></textarea>
    //         <button>Postar</button>
    //<p>Desenvolvido por Karla Oliveira, Marina Massaneiro e Polyana Magalhães</p>

    // const btnLogout = container.querySelector('#btn-logout');
    const btnHome = container.querySelector('#btn-home');

    btnHome.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.hash = '#timeline';
    });

    return container; 
}