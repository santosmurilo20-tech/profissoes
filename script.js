
// Seleciona todas as seções do site
const secoes = document.querySelectorAll("main section");

// Configura o observador de animação
const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("mostrar");

                observador.unobserve(entrada.target);
            }

        });

    },
    {
        threshold: 0.08
    }
);

// Aplica o efeito em todas as seções
secoes.forEach((secao) => {

    secao.classList.add("animar");

    observador.observe(secao);

});
