import './style.css'
import json from './static/stuff.json'

const mapped_json = () => {
    return `
       ${json.map(obj => `
        <div class= "card ${obj.name}">
            <h3>
                ${obj.link ?
                    `<a href=\"${obj.link}\"> 
                        <p>${obj.name}</p>
                    </a>`
                    : `<p class=private>${obj.name}</p>`}
            </h3>
            <ul>
                <li>${obj.des}</li>
            </ul>
        </div>`).join('\n')}`;
}
const app = document.querySelector('.app')

app.innerHTML= `
    ${mapped_json()} 
`
const cardNodes = json.map(({ name }) => document.querySelector('.card.'+name))


console.log(cardNodes)
