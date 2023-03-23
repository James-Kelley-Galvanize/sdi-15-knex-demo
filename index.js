const port = 3000;

const app = require("./app");

app.listen(port, () => {
  console.log(`server is up and running on port:`, port);
});
