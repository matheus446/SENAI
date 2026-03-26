// 1. Identidade - mudar nome
const nomeUsuario = document.querySelector("#nome-usuario");
nomeUsuario.textContent = "Matheus Felippe"; // coloca nome completo

// 2. Avatar - trocar imagem
const fotoPerfil = document.querySelector("#foto-perfil");
fotoPerfil.src = "https://pbs.twimg.com/media/E4WQdT1XIAQUN4e.jpg"; // imagem de ex

// 3. Personalização - mudar cor de fundo do container
const container = document.querySelector("#container-perfil");
container.style.backgroundColor = "#272727"; // azul

// 4. Status Real - adicionar classe e mudar texto
const badgeStatus = document.querySelector("#badge-status");
badgeStatus.classList.add("online");
badgeStatus.textContent = "Status: Ativo";

// 5. Auditoria - contar skills
const skills = document.querySelectorAll(".skill");
console.log("Total de skills:", skills.length);