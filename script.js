const about = document.querySelector("#Sobre");

const formulario = document.querySelector('#formulario');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGithub() {
    try {
        
        const dadosPerfil = await fetch(`https://api.github.com/users/vitoriaduran`);
        const perfil = await dadosPerfil.json();

        let conteudo = `

            <article id="sobre_texto">
                <h1>Sobre mim</h1>

                <p>
                    Olá! Me chamo Vitória Gabrielle, sou estudante de Ciência da Computação com interesse em desenvolvimento e na área de dados.
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


formulario.addEventListener("submit", async function (event) {
    event.preventDefault();

    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');

    if (!campoEmail.value.match(emailRegex)) {
        txtEmail.innerHTML = 'Email inválido. Digite um e-mail válido.';
        campoEmail.focus();
        return;
    } 
    txtEmail.innerHTML = '';

    const formData = new FormData(formulario);

    try{
        await fetch("https://formsubmit.co/vitoriagaby171205@gmail.com", {
            method: 'POST',
            body: formData

        });
        window.location.href = "succes.html";

    } catch (error){
        console.error("Erro ao enviar o formulario", error);

    }
});

getApiGithub();
