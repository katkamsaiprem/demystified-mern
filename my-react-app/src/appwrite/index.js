import { Client } from "appwrite";


// Create a new Appwrite client
const appwriteClient = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export default appwriteClient;
// What's happening here?

//     We import the Appwrite Client
//     We configure it with our endpoint and project ID from .env
//     We export it so other files can use it
