import axios from "axios";

const unArchiveNoteService= async(token,id)=>{
    try{
        const {data} = await axios.delete(`/api/archives/delete/${id}`,{
            headers: {
                authorization: token,
            },
        });
        return data.archives;
    }catch(error){
        console.log(error);
    }
}

export {unArchiveNoteService};