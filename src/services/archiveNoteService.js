import  axios from "axios";
const archiveNoteService= async(token,note,id)=>{
    try{
      const {data} = await axios.post(`/api/notes/archives/${id}`,
      {note},
      {
          headers: {
              authorization: token,
          },
      }
      );
      return data;
    }catch(error){
        console.log(error);
    }

}

export {archiveNoteService};