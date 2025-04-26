import DotDB from "dotdatabase";

const db = {

    main: new DotDB("./src/database/main.json")

}

export default db;