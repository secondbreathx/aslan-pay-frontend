import { createServer } from "miragejs";

if (window.server) {
  window.server.shutdown();
}

const listProducts = [
  {
    id: 1,
    type: 1,
    name : 'Starbucks',
    cashback: '9.83%',
    time: '10',
    link: 'https://www.aliexpress.com/',
    img: require("../src/assets/starbucks.jpg")

  },
  {
    id: 2,
    type: 1,
    name: 'Costa',
    cashback: '6.55%',
    time: '7',
    link: 'https://www.aliexpress.com/',
    img: require("../src/assets/costa.jpg")
  },
  {
    id: 3,
    type: 1,
    name: 'Pret Manager',
    cashback: '9.83%',
    waitTime: '10',
    link: 'https://www.aliexpress.com/',
    img: require("../src/assets/pret.jpg"),
  },
  {
    id: 4,
    type: 2,
    name: 'Zara',
    cashback: '4%',
    time: '23',
    link: 'https://www.aliexpress.com/',
    img: require("../src/assets/zara.jpg"),
  },
  {
    id: 5,
    type: 2,
    name: 'Tommy Hilfiger',
    cashback: '6.55%',
    time: '14',
    link: 'https://www.aliexpress.com/',
    img: require("../src/assets/tommy.jpg"),
  },
  {
    id: 6,
    type: 3,
    name: 'Nvidia',
    cashback: '6.55%',
    time: '14',
    link: 'https://www.aliexpress.com/',
    img: require("../src/assets/nvidia.jpg")
  },
  {
    id: 7,
    type: 3,
    name: 'Apple',
    cashback: '6.55%',
    time: '14',
    link: 'https://www.aliexpress.com/',
    img: require("../src/assets/apple.jpg")
  }
];

const listCategory = [
  {
    id: 1,
    name: "Coffee",
    image: require("../src/assets/coffee-cup.png")
  },
  {
    id: 2,
    name: "Clothes",
    image: require("../src/assets/laundry.png")
  },
  {
    id: 3,
    name: "Technology",
    image: require("../src/assets/technology.png")
  }
];

// update backend
window.server = createServer({
  routes() {
    this.get("/api/product", (schema, req) => {

      return listProducts.map((item) => ({
          ...item,
          categoryName: listCategory.find((cat) => cat.id == item.type).name
        }))
        .filter((item) => {
          if (req.queryParams.type > 0) {
            return item.type == req.queryParams.type;
          }
          return true;
        })
        .filter((item) =>
          item.name
            .toLowerCase()
            .includes((req.queryParams.s || "").toLowerCase())
        );
    });

    this.get("/api/category", () => {
      return listCategory;
    });
  }

});
