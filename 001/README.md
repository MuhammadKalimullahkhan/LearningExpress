# Welcome to day 01

In this tutorial you will learn how to setup a backend project using `NPM` (node package manager).

**Step 1: Initializing the project**

```bash
mkdir your-project-name
cd your-project-name
npm init -y
```

this will create `your-project-name` folder and `package.json` file inside `your-project-name` folder.

**Step 2: Setup Typescript & Nodemon**

```bash
npm i -g typescript nodemon ts-node
```

this will install `typescript`, `nodemon` & `ts-node` packages globally.

**Step 3: Installing Express**

```bash
npm i express
npm i -D @types/express @types/node
```

**Step 4: tsconfig.json Setup**

```bash
tsc --init
```

the above command will generate a new file called `tsconfig.json`

set your `tsconfig.json` to the following.

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./build",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,

    /* optional setting - import alising */
    "baseUrl": "./",
    "paths": {
      "@/*": ["src"]
    }
  }
}
```

**Step 5: Creating `src` Folder**

```bash
mkdir src && touch src/server.ts  # create server.ts file
```

this command will create a `server.ts` file inside the `src` folder.

**Step 6: Creating express server**
add the following code to the `src/server.ts` file

```javascript
import express, { Request, Response, Application } from "express";

const app: Application = express();
const port = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

**Setp 7: Runing & Testing**

- update `package.json` file.

```json
{
    ...
    "main":"src/server.ts",
}
```

running the express server

```bash
nodemon
```

[open](http://localhost:8000/) in your browser.

```bash
http://localhost:8000/
```

🥳 Congratulations you have completely setup you project 🚀.

[Click here](src/server.ts) for more advanced express example
