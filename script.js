
function logando(){
    const hora = new Date().getHours();
    const minutos = new Date().getMinutes();
    const segundos = new Date().getSeconds();
    
    let email = document.querySelector('#email');
    email = email.value;
    let senha = document.querySelector('#senha');
    senha = senha.value;

    if (hora < 10) hora = '0' + hora;

    if (minutos < 10) minutos = '0' + minutos;
    
    if (segundos < 10) segundos = '0' + segundos;
    
    alert(`Login efetuado:
        Email - ${email}
        Senha - ${senha}
    
        Horário - ${hora} : ${minutos} : ${segundos}
    `)
};