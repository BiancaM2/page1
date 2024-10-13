function showPage(page) {
    const conteudo = document.getElementById('conteudo');
    const nav = document.getElementsByClassName('menu-lateral');
    console.log(conteudo);
   
    if (page === 'home') {
        conteudo.innerHTML = `<h1>Página Inicial</h1><p>Bem-vindo à minha SPA!</p>`;
    } else if (page === 'sobre') {
        conteudo.innerHTML = `<h1>Sobre</h1><p>Esta é a seção sobre a nossa aplicação.</p>`;
    } else if (page === 'contato') {
        conteudo.innerHTML = `<h1>Contato</h1><p>Entre em contato conosco pelo email: contato@exemplo.com</p>`;
    }
    removeHover()
}

function removeHover() {
    const menuLateral = document.getElementById('menu-lateral')
    menuLateral.classList.add('open');
    menuLateral.addEventListener('mouseleave', function mouseLeave() {
        menuLateral.classList.remove('open');
    })
    }