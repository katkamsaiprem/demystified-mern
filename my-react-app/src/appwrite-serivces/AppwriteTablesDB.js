import { TablesDB } from "appwrite";
import appwriteClient from ".";

class AppwriteTablesDB {

    constructor() {
        this.tableDb = new TablesDB(appwriteClient)
    }

    async getAllRecords(dataBaseID, tableID) {
        const records = await this.tableDb.listRows({
            databaseId: dataBaseID,
            tableId: tableID
        })
        return records?.rows;

    }
}

export default AppwriteTablesDB;