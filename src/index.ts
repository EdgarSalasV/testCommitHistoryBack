import express from "express";
import cors from "cors";
// import routes from "./routes";

const PORT: number = Number(process.env.PORT) || 8080;
const URL_GENERAL: string = process.env.URL_GENERAL || "http:127.0.0.1:";

// create and setup express app
async function main() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  // app.use("/api/v1",routes);
  
  app.listen(PORT, () =>
    console.log(`server running on ${URL_GENERAL + PORT}`)
  );
}

main();
