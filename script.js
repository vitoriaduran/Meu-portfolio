const about = document.querySelector('#about');

const formulario = document.querySelector('#formulario');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGithub() {
    try {
        // Corrigido: URL da API do GitHub
        const dadosPerfil = await fetch(`https://api.github.com/users/vitoriaduran`);
        const perfil = await dadosPerfil.json();

        let conteudo = `
            <img src="${perfil.avatar_url}" alt="Foto do Perfil - ${perfil.name}" />

            <article id="sobre_texto">
                <h1>Sobre mim</h1>

                <p>
                    Olá! Me chamo Vitória Gabrielle, sou estudante de Ciência da Computação com interesse em desenvolvimento e cibersegurança.
                    Já participei de programas como o Lovelaces e cursos de JavaScript, Python e Segurança da Informação.
                </p>

                <p>
                    Tenho me dedicado a construir projetos que unam criatividade e tecnologia. Neste portfólio, você poderá conhecer um pouco mais sobre meu trabalho e minha trajetória!
                </p>

                <div id="sobre_github">
                    <a target="_blank" href="${perfil.html_url}">GitHub</a>
                    <span>${perfil.followers} seguidores</span>
                    <span>${perfil.public_repos} repositórios públicos</span>
                </div>
            </article>
        `;
        about.innerHTML = conteudo;

    } catch (error) {
        console.error("Erro ao buscar dados da API do GitHub:", error);
    }
}

// Validação de e-mail ao enviar formulário
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');

    if (!campoEmail.value.match(emailRegex)) {
        txtEmail.innerHTML = 'Email inválido. Digite um e-mail válido.';
        campoEmail.focus();
        return;
    } else {
        txtEmail.innerHTML = '';
    }

    // Se quiser, pode fazer o formulário enviar aqui com:
    // formulario.submit();
});

getApiGithub();
