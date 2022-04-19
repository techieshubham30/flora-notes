import axios from "axios";

const restoreArchiveService = async (token, id) => {
  try {
    const { data } = await axios.post(
      `/api/archives/restore/${id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};


export {restoreArchiveService};