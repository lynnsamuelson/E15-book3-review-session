import {Winners} from './winners.js'

const mainContainer = document.querySelector("#container")

const applicationHTML = `
  <h1>Lottery Winners</h1>
  ${Winners()}
`

const renderAllHTML = () => {
    mainContainer.innerHTML = GetLucky()
}

mainContainer.innerHTML = applicationHTML

