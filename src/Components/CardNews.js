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
    author.textContent = "by " + (this.getAttribute("author") || "Anonymous");

    const cardTitle = document.createElement("a");
    cardTitle.href = this.getAttribute("card-url");
    cardTitle.textContent = this.getAttribute("card-title");
    cardTitle.target = "_blank";

    const cardContent = document.createElement("p");
    cardContent.textContent = this.getAttribute("card-content");

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card-right");

    const cardImage = document.createElement("img");
    cardImage.src = this.getAttribute("img-url") || "assets/no_image.png";

    componentRoot.append(cardLeft, cardRight);
    cardLeft.append(author, cardTitle, cardContent);
    cardRight.append(cardImage);

    return componentRoot;
  }

  style() {
    const style = document.createElement("style");
    style.textContent = `
    .card {
      width: 70%;
      height: 18rem;
      box-shadow: 0px 0px 80px -10px rgba(0,0,0,0.5);
      -webkit-box-shadow: 0px 0px 80px -10px rgba(0,0,0,0.5);
      -moz-box-shadow: 0px 0px 80px -10px rgba(0,0,0,0.5);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 15px
    }
    
    .card-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
    }
    
    .card-left > span {
      font-weight: 400;
    }
    
    .card-left > a {
      margin-top: 15px;
      font-size: 25px;
      color: black;
      text-decoration: none;
      font-weight: bold;
    }
    
    .card-left > p {
      color: rgb(70, 70, 70);
    }

    .card-right {
      display: flex;
      justify-content: flex-end;
    }

    .card-right > img {
      height: 100%;
    }
`;

    return style;
  }
}

customElements.define("card-news", CardNews);
