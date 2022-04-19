import axios from "axios";
const updateNoteService = async (token,note,id) => {
  try {
    const { data } = await axios.post(
      `/api/notes/${id}`,
      { note },
      {
        headers: {
          authorization: token,
        },
      }
    );

    return data.notes;
  } catch (error) {
    console.error(error);
  }
};

export {updateNoteService};