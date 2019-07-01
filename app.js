import express from "express";

const app = express();

const port = process.env.PORT || 4200;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Now listening on port ${port}...`);
});
