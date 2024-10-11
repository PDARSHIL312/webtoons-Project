import { useState } from "react";
import axios from "axios";

const WebtoonUploadForm = () => {
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("title", title);
    formData.append("description", description);

     try {
       const response = await axios.post(
         "http://localhost:7000/api/webtoons/upload",
         formData,
         {
           headers: {
             "Content-Type": "multipart/form-data",
           },
         }
       );
      //  setMessage("Webtoon uploaded successfully!");
       console.log("Webtoon uploaded successfully:", response.data);
     } catch (error) {
      //  setMessagege("Error uploading webtoon.");
       console.error("Error uploading webtoon:", error);
     }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          required
        />
      </div>
      <button type="submit">Upload Webtoon</button>
    </form>
  );
};

export default WebtoonUploadForm;
