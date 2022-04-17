import axios from "axios";
const addNoteService = async (token, note) => {
  const { data } = await axios.post(
    "/api/notes",
    { note },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return data.notes;
};

export { addNoteService };
