const winnerArray = [
  {
    name: "Shelby",
    winner: false
  },
  {
    name: "Bob",
    winner: true
  },
  {
    name: "Becky",
    winner: true
  },
  {
    name: "Rob",
    winner: false
  }
]

document.addEventListener(
  "click",
  (event) => {
    if(event.target.id.startsWith("won")) {
      const [,name] = event.target.id.split("--lottery--")
      // const name = event.target.id.split("--")[2]
      window.alert(`Congtats ${name}! You won`)
    } else if(event.target.id.startsWith("lost")) {
      window.alert("Sorry, try again.")
    }
  }
)

export const Winners = () => {
  let html = "<ul>"
  for(const winner of winnerArray) {
    if(winner.winner){
      html += `<li id="won--lottery--${winner.name}">${winner.name} is a winner!</li>`
    } else {
      html += `<li id="lost--${winner.name}">${winner.name} is lost.</li>`
    }
  }

  html += "</ul>"
  return html
}
