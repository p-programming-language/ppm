import express from 'express';

export class PpmTestAPI {
  public app: express.Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = 3000;
  }

  public startServer() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}