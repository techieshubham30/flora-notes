import axios from "axios";

const deleteNoteService = async (id, token) => {
   try{
     const {data} = await axios.delete(`/api/notes/${id}`,
     {
       headers:{
         authorization: token,
       },
     }
     );
     return data.notes;
   }catch(error){
     console.log(error);
   }
};


export {deleteNoteService};