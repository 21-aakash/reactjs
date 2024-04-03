
// Importing configuration settings from conf.js file
import conf from '../conf/conf';

// Importing necessary classes from the 'appwrite' package
import { Client, Account, ID } from "appwrite";

// Defining a class named 'AuthService'
export class AuthService {

    // Initializing a new Client instance
    client = new Client(); // 'client' is initialized as an instance variable to be accessible across all methods
    
    // Declaring an 'account' variable
    account;

    // Constructor function to initialize the AuthService
    constructor() {
        
        // Configuring the Appwrite client with endpoint and project ID from the configuration
        this.client
            .setEndpoint(conf.appwriteUrl) // Set the API endpoint using the URL from the configuration
            .setProject(conf.appwriteProjectId); // Set the project ID using the ID from the configuration
        
        // Creating an Account instance using the configured client
        this.account = new Account(this.client); // 'account' is initialized with the configured client for authentication purposes
    }

    // Async function to create a new user account
    async createAccount({ email, password, name }) {
        try {
            // Creating a new user account using the provided email, password, and name
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            
            // If the account is successfully created, login the user
            if (userAccount) {
                return this.login({ email, password });
            } else {
                // If account creation failed, return the error
                return userAccount;
            }
        } catch (error) {
            // If any error occurs, throw it
            throw error;
        }
    }

    // Async function to log in an existing user
    async login({ email, password }) {
        try {
            // Creating a new session using the provided email and password
            return await account.createEmailSession(email, password);
        } catch (error) {
            // If any error occurs during login, throw it
            throw error;
        }
    }

    // Async function to get the current user's information
    async getCurentUser() {
        try {
            // Fetching information of the current user
            return await this.account.get();
        } catch (error) {
            // If any error occurs, throw it
            throw error;
        }
    }

    // Async function to log out the current user
    async logout() {
        try {
            // Deleting the current session to log out the user
            return await this.account.deleteSessions('current');
        } catch (error) {
            // If any error occurs during logout, log it to the console
            console.log("Appwrite service :: Logout :: error ", error);
        }
    }
}

// Creating an instance of the AuthService class
const authService = new AuthService(); // Creating an instance to use the AuthService methods

// Exporting the AuthService class as the default export
export default authService;
