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

    return await this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
   
    
    }
    


}


const services= new Service()

export default service;
