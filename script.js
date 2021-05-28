const list = document.createElement ('ul');
const info = document.createElement ('p');
const html = document.querySelector ('html');

info.textContent = 'Hello Hello Hello Hello';

document.body.appendChild(info);
document.body.appendChild(list); 

html.onclick = () =>{
    const listItem = document.createElement ('li');
    const listContent = prompt ('Favorite color¿');
    listItem.textContent = listContent;
    list.appendChild (listItem);

    listItem.onclick = function(event) {
        event.stopPropagation ();
        const listContent = prompt ('Change your Color')
        this.textContent = listContent;
    };
}