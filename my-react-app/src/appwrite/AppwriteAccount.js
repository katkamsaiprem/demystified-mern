//create Authentication service
import { Account, ID } from "appwrite"
import appwriteClient from "."


//why class
//--it allows to create multiple instances(accounts) with different configs
//--it makes scalable for adding features


class AppwriteAccount {
    constructor() {
        //initialize the Account service
        this.appwriteAccount = new Account(appwriteClient)
    }
    //Method 1 :- Register the new user
    async createUser(data) {


        const user = await this.appwriteAccount.create({
            userId: ID.unique(),
            ...data,
        })
        console.log(user);
        return user;



    }
    //Method 2 :- login the user , creates login session
    async loginWithEmailAndPassword(data) {
        const session = await await this.appwriteAccount.createEmailPasswordSession(({
            ...data
        }))
        return session;

    }

    //get the current login user
    async getCurrentUser() {
        const CurrentUser = await await this.appwriteAccount.get();
        return CurrentUser;
    }

    //logout user session
    async logoutUser() {
        await this.appwriteAccount.deleteSession({
            sessionId: 'current'
        })
    }






}

export const appwriteAccount = new AppwriteAccount();
export default AppwriteAccount;




























































// ## Why Use Class & Constructor Here

// ### **Reason 1: Encapsulation & Organization**
// The class bundles related Appwrite account operations together:

// ```javascript
// // ✅ With Class - Clean and organized
// const accountService = new AppwriteAccount();
// accountService.createNewUser(data);
// accountService.logInWithEmailAndPassword(data);
// accountService.getCurrentUser();

// // ❌ Without Class - Scattered functions
// createNewUser(data);
// logInWithEmailAndPassword(data);
// getCurrentUser();
// ```

// ### **Reason 2: Single Initialization**
// The constructor initializes the Appwrite Account service **once**, and all methods reuse it:

// ```javascript
// constructor() {
//     this.appwriteAccount = new Account(appwriteClient); // Created once
// }

// // All methods reuse the same instance
// async createNewUser(data) {
//     await this.appwriteAccount.create({...}); // ✅ Reuses
// }

// async getCurrentUser() {
//     await this.appwriteAccount.get(); // ✅ Reuses
// }
// ```

// **Without constructor**, you'd recreate it repeatedly:

// ```javascript
// // ❌ Inefficient - creates new Account instance every time
// async function createNewUser(data) {
//     const account = new Account(appwriteClient); // Recreated!
//     await account.create({...});
// }

// async function getCurrentUser() {
//     const account = new Account(appwriteClient); // Recreated again!
//     await account.get();
// }
// ```

// ### **Reason 3: Service Layer Pattern**
// This follows the **Service Layer** design pattern - separating business logic from UI:

// ```javascript
// // In your React component
// import AppwriteAccount from './appwrite/account';

// const accountService = new AppwriteAccount();

// function SignupForm() {
//     const handleSignup = async (formData) => {
//         await accountService.createNewUser(formData); // Clean!
//     };
// }
// ```

// ### **Alternative Without Class**

// You could use a plain object:

// ```javascript
// const appwriteAccount = new Account(appwriteClient);

// export const createNewUser = async (data) => {
//     return await appwriteAccount.create({...});
// };

// export const getCurrentUser = async () => {
//     return await appwriteAccount.get();
// };
// ```

// **But the class approach is better because:**
// - More scalable for adding features
// - Easy to add state/private methods
// - Follows OOP principles common in large projects
// - Can create multiple instances with different configs if needed