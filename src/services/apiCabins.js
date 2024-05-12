import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function getCabins(){

      const { data, error } = await supabase
      .from('cabins')
      .select('*');

      if(error){
            console.error(error);
            throw new Error("Cabins could not be loaded");
      }
      return data;

    
} 

export async function createCabin(newCabin){

  const imageName=`${Math.random()}-${newCabin.image.name}`.replace("/",'');
  
  const imagePath=`${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
  
  //1. Create Cabin 
 //https://zjlcramtpiwmtygaonnp.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
const { data, error } = await supabase
.from('cabins')
.insert([{...newCabin,image:imagePath}])
.select()

if(error){
      console.error(error);
      throw new Error("Cabins could not be created");
}

//2. Upload Image
const {error:storageError}=await supabase.storage
.from('cabin-images')
.upload(imageName,newCabin.image);


if(storageError){
      await supabase
.from('cabins')
.delete()
.eq('id', data.id)



console.error(storageError);
throw new Error('Cabin image could not be uploaded and cabin was not be created')

}

return data;

}



export async function deleteCabin(id){
      
const {data,error } = await supabase
.from('cabins')
.delete()
.eq('id', id)


if(error){
      console.error(error);
      throw new Error("Cabins could not be deleted");
}
return data;

}
