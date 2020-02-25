'use strict';

let eDomElement = {
    height: String,
    width: String, 
    bg: String, 
    fontSize: String,
    selector: function(){
        let b;
        let elem;
        b = prompt('Введите имя элемента', '');
            
        if (b[0] === "."){
            let elemClass = b.slice(1);
            elem = document.createElement('div');       
            elem.classList.add(elemClass);
            document.body.append(elem);
            elem.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
            elem.style.cssText = ` background-color: yellow; width: 150px; height: 150px; font-size: 12px; padding: 20px; text-align: center; `;
        }
        else if(b[0] === "#")
        {
            let elemClass = b.slice(1);
            elem = document.createElement('p');       
            elem.id = elemClass;
            document.body.append(elem);
            elem.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
            elem.style.cssText = ` background-color: blue; width: 150px; height: 150px; font-size: 12px; padding: 20px; text-align: center; `;
          }
        else {
            alert('Введите имя элемента, начинающееся с . или #');
            window.location.reload();
           }
        }, 
};
console.log(eDomElement);
eDomElement.selector();


