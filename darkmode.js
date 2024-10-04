const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

// Função para aplicar as configurações das partículas com base no tema
function applyParticles(isDarkMode) {
    particlesJS("particles-js", {
        particles: {
            number: { value: 100 },
            size: { value: 3 },
            color: { value: isDarkMode ? "#ffffff" : "#000000" },
            line_linked: {
                enable: true,
                distance: 150,
                color: isDarkMode ? "#ffffff" : "#000000",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 3,
            },
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
            },
        },
        retina_detect: true,
    });
}

// Função para alternar entre os modos
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Salvar o estado do dark mode no localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');

    // Aplicar as configurações das partículas
    applyParticles(isDarkMode);
});

// Carregar o estado inicial do modo escuro (se houver)
document.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
        applyParticles(true); // Aplica o modo escuro
    } else {
        applyParticles(false); // Aplica o modo claro
    }
});

// Funções para arrastar o botão
let isDragging = false;

toggleButton.addEventListener('mousedown', (e) => {
    isDragging = true;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        toggleButton.style.left = e.pageX - 20 + 'px'; // Ajuste para centralizar o botão
        toggleButton.style.top = e.pageY - 20 + 'px'; // Ajuste para centralizar o botão
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});
