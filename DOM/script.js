var p = document.getElementsByTagName('p');

// alert(p[4].innerHTML);

p[0].innerHTML = 'Manipulando via JS';

for(var i = 0; i < p.length; i++){
    p[i].innerHTML = 'Manipulando via JS - ' + i;
}