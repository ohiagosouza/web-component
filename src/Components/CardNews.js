class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card-left");

    const author = document.createElement("span");

    const cardTitle = document.createElement("a");

    const cardContent = document.createElement("p");

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card-right");

    const cardImage = document.createElement("img");

    componentRoot.append(cardLeft, cardRight);
    cardLeft.append(author, cardTitle, cardContent);
    cardRight.append(cardImage);

    return componentRoot;
  }
  style() {}
}

customElements.define("card-news", CardNews);
