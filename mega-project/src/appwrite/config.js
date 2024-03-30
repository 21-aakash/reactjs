import conf from '../conf.js';
import { Client, Databases, ID, Storage, Query } from "appwrite";

// maing a class
export class Service{

client = new Client();
databases;
bucket;

//constructor
constructor(){

    this.client
    .setEndpoint(conf.appwriteUrl) 
    .setProject(conf.appwriteProjectId); 

 this.databases= new Databases(this.client);
 this.storage= new Storage(this.client);

}
//method to createPost
async createPost({title, slug , content , featuredImage , status , userId }){

try {


    return await this.databases.createDocument( 
        conf.appwriteDatabaseId, 
        conf.appwriteCollectionId,
        slug,
        {
              title,
              content,
              featuredImage,
              status,
              userId,


        }
        )

    
} catch (error) {
    console.log("Appwrite service :: Logout :: error ", error);

}


}
//method to update existing post
async updatePost(slug, {title, content , featuredImage , status  }){

try {


    return await this.databases.updateDocument( 
        conf.appwriteDatabaseId, 
        conf.appwriteCollectionId,
        slug,
        {
              title,
              content,
              featuredImage,
              status,
            


        }
        )

    
} catch (error) {
    console.log("Appwrite service :: Logout :: error ", error);

}


}

//method to delete a post
async deletePost(slug){

try {


    await this.databases.deleteDocument( 
        conf.appwriteDatabaseId, 
        conf.appwriteCollectionId,
        slug,
        
        )

    return true;

} catch (error) {
    console.log("Appwrite service :: Logout :: error ", error);
return false;

}


}
async updatePost(slug, {title, content , featuredImage , status  }){

try {


    return await this.databases.updateDocument( 
        conf.appwriteDatabaseId, 
        conf.appwriteCollectionId,
        slug,
        {
              title,
              content,
              featuredImage,
              status,
            


        }
        )

    
} catch (error) {
    console.log("Appwrite service :: Logout :: error ", error);

}


}

//method to get a post
async getPost(slug){

try {


    return await this.databases.getDocument( 
        conf.appwriteDatabaseId, 
        conf.appwriteCollectionId,
        slug,
        
        )

  

} catch (error) {
    console.log("Appwrite service :: Logout :: error ", error);


}


}

//method to get all posts whose status are active by making queries that whoes status are active , passing an array of queries (varaible parameter ) 

async getPosts(queries= [Query.equal("status", "active")]){

    try {

        return await this.databases.listDocument( 
            conf.appwriteDatabaseId, 
            conf.appwriteCollectionId,
            queries,
            
            )
        
      
    
    } catch (error) {
        console.log("Appwrite service :: Logout :: error ", error);
    
    
    }
    


}

//files to upload services 

async fileUpload(file){

    try {

      
      return await this.bucket.createFile(
conf.appwriteBucketId,
ID.unique(), // this willbe returned and forwarded to createpost as featuredimage parameter
file



      );

    
    } catch (error) {
        console.log("Appwrite service :: Logout :: error ", error);
    return false;
    
    }
    


}
async fileDelete(fileId){

    try {

       
       await this.bucket.deleteFile(
            conf.appwriteBucketId,
             fileId
             )
            
     return true;


    
    } catch (error) {
        console.log("Appwrite service :: Logout :: error ", error);
    return false;
    
    }
    


}
getFilePreview(fileId){

    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
   
    
    }
    


}


const service= new Service()

export default service;




// The code provided seems to involve using Appwrite services for file upload and deletion. Here's how it works:

// 1. **File Upload**: The `fileUpload` method in the `appwriteService` object is called to upload a file. It accepts the file object as a parameter and returns a promise. When resolved, it returns an object representing the uploaded file. This object likely contains information such as the file ID, name, size, etc. In your case, it appears that the `ID.unique()` function generates a unique ID for the file, which is used as the file's identifier.

// 2. **File Deletion**: The `fileDelete` method in the `appwriteService` object is called to delete a file. It accepts the file ID as a parameter and returns a promise. Upon successful deletion, it returns `true`, indicating that the file was deleted successfully. Otherwise, it returns `false`.

// In your code:

// ```javascript
// const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) : null;
// ```

// This line checks if a new image is provided in the form (`data.image[0]`). If it is, it uploads the file using the `uploadFile` method of the `appwriteService` object. The result of this operation (the uploaded file object) is stored in the `file` variable.

// ```javascript
// if (file) {
//   appwriteService.deleteFile(post.featuredImage);
// }
// ```

// Here, if `file` is truthy (i.e., a file was successfully uploaded), it proceeds to delete the existing featured image associated with the post using the `deleteFile` method of the `appwriteService` object. It passes the ID of the existing featured image (`post.featuredImage`) as a parameter to `deleteFile`.

// The `fileUpload` and `fileDelete` methods handle interactions with the Appwrite service for uploading and deleting files, respectively. They make use of Appwrite's SDK methods (`createFile` and `deleteFile`) to perform these operations asynchronously.

// Additionally, it seems there's a `getFilePreview` method in your `appwriteService` object, which is not used in the provided code but likely retrieves a preview of a file based on its ID.