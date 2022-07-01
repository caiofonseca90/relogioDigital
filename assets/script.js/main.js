const hr = document.querySelector('.hr');
const mn = document.querySelector('.min');
const sec = document.querySelector('.sec');
const date = document.querySelector('.date');

setInterval(function time()  {
    let day = new Date();   
    let hour = day.getHours();
    let minutes = day.getMinutes();
    let seconds= day.getSeconds();

    // verifica se o valor da hora é menor que 10 e adiciona um 0 antes do valor
    if( seconds < 10 ) seconds = '0' + seconds;
    if( minutes < 10 ) minutes = '0' + minutes;
    if( hour < 10 ) hour = '0' + hour;
    
    // atribui o valor da variavel ao elemento selecionado no HTML
    hr.innerHTML = hour;
    mn.innerHTML = minutes;
    sec.innerHTML = seconds;

    date.innerHTML = new Date().toLocaleDateString();
    
    //altera a cor de acordo com o responsivo ( < 468px de largura)
    if(window.innerWidth < 467){
        date.style.color = '#27e4ee'
    }else{
        date.style.color = '#2de910'
    }
});




