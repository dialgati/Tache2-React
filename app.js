let n = 0;

function numberFormat(n) {
  return n.toString().padStart(2, "0");
}

function render() {
  const items = ["Tache 1", "Tache 2", "Tache 3"];

  const title = (
    <React.Fragment>
      <h1 className="title" id="title">
        Bonjour les gens
        <span>{n}</span>
      </h1>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
  ReactDOM.render(title, document.querySelector("#app"));
}

render();

window.setInterval(() => {
  n++;
  render();
}, 1000);

// Définissez un tableau d'items
// const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

// Créez un composant React pour afficher la liste d'items
