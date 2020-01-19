'use strict';

const showInfo = (data, target) => {
    if(data) {
        const element = document.createElement('div');
        element.className = 'alert alert-info';

        for(let prop in data) {
            let child = document.createElement('p');
            child.innerHTML = `<strong>${prop}</strong>: ${data[prop]}`;
            element.appendChild(child);
        }

        target.appendChild(element);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    showInfo(info, document.querySelector('#info'));
});