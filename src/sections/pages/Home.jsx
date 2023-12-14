import { dbService } from '../../fbase';
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import "./Home.css";


const Home = () => {
const[gallery, setGallery] = useState("");
const onSubmit = async (e) => {
    try {
      const docRef = await addDoc(collection(dbService, "gallery"), {
      gallery,
      createdAt: Date.now(),
      });
      console.log("Document written with ID: ", docRef.id);
      } catch (error) {
      console.error("Error adding document: ", error);
      }
      setGallery("");
    };

    const onChange = ({ target: { value } }) => {
      setGallery(value);
      console.log(value);
    };

return (
<div>
    <div class='hhh'>
        <input value={gallery} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120}/>
        <button onClick={onSubmit} type="submit" value="nweet">submit</button>
    </div>
</div>
);
};


export default Home;