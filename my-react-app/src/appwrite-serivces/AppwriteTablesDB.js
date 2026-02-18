import { ID, TablesDB } from "appwrite";
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

    async CreateRecord(dataBaseID, tableID, data) {
        const response = await this.tableDb.createRow({
            databaseId: dataBaseID,
            tableId: tableID,
            rowId: ID.unique(),
            data: data

        })

        return response;
    }
}

export default AppwriteTablesDB;