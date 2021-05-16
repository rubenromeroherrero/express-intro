const loadData = () => {
  fetch("http://localhost:4000/main")
    .then((response) => response.json())
    .then(({ results }) => {
      const container = document.querySelector("#data");
      const jokes = results
        .map((j) => {
          return `  <div>
                        <h3>${j.joke}</h3>
                    </div>`;
        })
        .join(" ");
      container.innerHTML = jokes;
    });
};
