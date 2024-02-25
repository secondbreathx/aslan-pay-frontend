import { createServer } from "miragejs";

if (window.server) {
  window.server.shutdown();
}

// update backend
window.server = createServer({
  routes() {
    this.get("http://localhost:9090/api/merchant/0?searchTerm=", (schema, req) => {

      return listProducts.map((item) => ({
          ...item,
          categoryName: listCategory.find((cat) => cat.categoryId == item.categoryId).name
        }))
        .filter((item) => {
          if (req.queryParams.categoryId > 0) {
            return item.categoryId == req.queryParams.categoryId;
          }
          return true;
        })
        .filter((item) =>
          item.name
            .toLowerCase()
            .includes((req.queryParams.s || "").toLowerCase())
        );
    });

    this.get("http://localhost:9090/api/category", () => {
      return listCategory;
    });
  }

});
