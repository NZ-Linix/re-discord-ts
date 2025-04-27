# Discord.js v14 TypeScript Handler

![Language](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Discord.js](https://img.shields.io/badge/discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![Database](https://img.shields.io/badge/Database-Integrated-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Project-Active-brightgreen?style=for-the-badge)

---

## ✨ Features

- Full **TypeScript** support
- **Handlers** for commands, events, and more
- **Integrated Database** connection: My own database - [dotdatabase](https://github.com/NZ-Linix/dotdatabase)
- Clean, scalable, and easy-to-extend architecture
- Optimized for **Discord.js v14**

---

## 🚀 Getting started

First, you want to either clone this repository or download the repository  
as a .zip file.  

In the (extracted) folder you need to run:

```sh
npm init -y
```
```sh
npm install
```

to set the project up.  
  
Afterwards you only need to add the bot's token the .env (RENAME.env)  
and configure everything to you'r needs in src/config.ts

You can run the bot with with:
```sh
tsx src/index.ts
```

---

## 📂 Project Structure

```
src/
│
├── commands/
│   └── your-folders/
│      └── your-cmd.ts
│      └── ...
│   └── your-folders/
│      └── your-cmd.ts
│      └── ...
├── events/
│   └── folders/
│      └── events.ts
│      └── ...
├── handlers/
│   └── eventHandler.ts
│   └── listenerMsgCommands.ts
│   └── listenerSlashCommands.ts
│   └── registerMsgCommands.ts
│   └── registerSlashCommands.ts
├── database/
│   └── main.json
│   └── ...
│
│   config.ts
└── index.ts
```

---

## 📚 Technologies Used

- [TypeScript](https://www.typescriptlang.org/)
- [Discord.js v14](https://discord.js.org/)
- [dotdatabase (My own database)](https://github.com/NZ-Linix/dotdatabase)

---

## 🤝 Contribution

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

Distributed under the [MIT License](LICENSE).
