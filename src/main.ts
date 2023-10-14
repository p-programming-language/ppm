import { PpmTestAPI } from "./api";

const api = new PpmTestAPI()

api.app.get('/packages/:author/:name', (req: any, res: any) => {
  const { author, name } = req.params;
  res.send(`Package Info: Author - ${author}, Name - ${name}`);
});

api.startServer()