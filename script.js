// Menu Responsivo
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Efeito de Hover nas Imagens da Galeria
// # Flata algo para que o hoover seja aplicado corretamenteo no elemento
// # Aplique a correção e informe aqui como encontrou a solução
    // document.querySelectorAll('a').forEach(img => {
    //     img.addEventListener('mouseover', () => {
    //         img.style.transform = 'scale(1.1)';
    //     });
    //     img.addEventListener('mouseout', () => {
    //         img.style.transform = 'scale(1)';
    //     });
    // });

// Como encontramos a solução?
// Analisei a estrutura HTML e percebi que as imagens da galeria usam a classe .hover-zoom, mas não estão dentro de <a>.
// Corrigi o seletor no JavaScript para document.querySelectorAll('.hover-zoom'), garantindo que apenas as imagens certas recebam o efeito.
// Adicionei a transição (transition) para um efeito mais suave.
// Testei no console do navegador para garantir que o código funcionava corretamente.
// Agora, as imagens da galeria aumentam de tamanho ao passar o mouse sobre elas. 

document.querySelectorAll('.hover-zoom').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
        /* Adicionado o efeito de transição 0.4s */
        img.style.transition = 'transform 0.4s ease-in-out';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

// Efeito OnClick nos Links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        link.style.transform = 'scale(0.95)';
        setTimeout(() => {
            link.style.transform = 'scale(1)';
            window.location.href = link.href;
        }, 150);
    });
});

// Efeito de Loading ao Carregar a Página
window.addEventListener('load', () => {
    document.getElementById('loading').style.display = 'none';
});

// Scroll Progress Bar
// # Deveria funcionar ao rolar a página, mas acontece ao clicar
// # Aplique a correção e informe aqui como encontrou a solução
    // window.addEventListener('click', () => {
    //     const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //     const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //     const scrolled = (scrollTop / scrollHeight) * 100;
    //     document.getElementById('progress-bar').style.width = `${scrolled}%`;
    // });

// Como encontramos a solução?
// Analisei o comportamento esperado: A barra de progresso deve avançar conforme o usuário rola a página, não ao clicar.
// Identifiquei o erro: O código estava escutando eventos de click (window.addEventListener('click', ...)) em vez de scroll.
// Corrigi o evento: Substituí click por scroll, pois o evento de rolagem (scroll) é acionado sempre que o usuário move a página.
// Testei no navegador: Após a correção, ao rolar a página, a barra de progresso agora funciona corretamente.

// Scroll Progress Bar - Correção
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    
    document.getElementById('progress-bar').style.width = `${scrolled}%`;
});

// Verificar Visibilidade das Seções
const sections = document.querySelectorAll('.fade-in');

const checkVisibility = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        if (sectionTop < window.innerHeight && sectionBottom > 0) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);

checkVisibility();

// Slider da Hero Section
let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}

// Iniciar o slider, troca de slide a cada 3 segundos
// # O Slide não está sendo chamado a cada 3 segundos
// # Aplique a correção e informe aqui como encontrou a solução

// Como encontramos a solução?
// Analisei o código: A função showSlide() estava correta, mas ela não estava sendo chamada repetidamente.
// Identifiquei a ausência de setInterval: Esse método é necessário para executar a função de forma automática e contínua.
// Corrigi adicionando setInterval(showSlide, 3000): Agora a função roda a cada 3 segundos.
// Incluí showSlide() no final: Isso garante que o primeiro slide apareça corretamente ao carregar a página.
// Testei no navegador: O slider agora muda de imagem a cada 3 segundos como esperado.

// Iniciar o slider, troca de slide a cada 3 segundos
setInterval(showSlide, 3000);

// Garantir que o primeiro slide seja exibido corretamente no início
showSlide();

