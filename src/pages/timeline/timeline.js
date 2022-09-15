//Gerar os elementos HTML da página:
export default () => {
  const container = document.createElement("div");
  container.id = "container-timeline";

  container.innerHTML = `
    <section id="header-timeline">
        <figure class="box">
            <img id="gif-timeline" src="assets/104313-cooking-chef.gif">
        </figure>
        <h3>O que vamos cozinhar hoje?</h3>
    </section>  
    <section id="body-timeline">
        <div id="post-timeline"> 
            <h5>Postagem</h5>
        </div> 
        <nav>
            <ul>
              <li><a href= "#timeline" id="btn-home"><i class="fa-solid fa-house fa-2xl"></i></a></li>
              <li><a href= "#login" id="btn-logout"><i class="fa-solid fa-right-from-bracket fa-2xl"></i></a></li>
            </ul>  
        </nav>

    </section> 
    
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