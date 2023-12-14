import { dbService } from '../../fbase';
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import "./Home.css";


const Home = () => {
const [nweet, setNweet] = useState("");
const onSubmit = async (e) => {
    e.preventDefault();
    try {
        const docRef = await addDoc(collection(dbService, "nweets"), {
            nweet,
            born: 1815
        });
    console.log("Document written with ID: ", docRef.id);
} catch (e) {
    console.error("Error adding document: ", e);
}
setNweet("");
};

const onChange = ({ target: { value } }) => {
    setNweet(value);
    console.log(value);
};

return (
<div>
    <div class='hhh'>
        <input value={nweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120}/>
        <input onSubmit={onSubmit} type="submit" value="nweet" />
    </div>
</div>
);
};
export default Home;