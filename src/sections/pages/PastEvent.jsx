import React from 'react';
import { dbService, storageService  } from "../../fbase";
import { doc, deleteDoc, updateDoc }from"firebase/firestore";
import { deleteObject, ref } from "@firebase/storage";
import "./PastEvent.css"


const PastEvent = ({galleryObj, isOwner}) => {

    const GalleryTextRef =doc(dbService, "past", `${galleryObj.id}`);
    const urlRef = ref(storageService, galleryObj.attachmentURL);

    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure to delete?");
        console.log(ok);
        if(ok) {
            await deleteDoc(GalleryTextRef );
            await deleteObject(urlRef)
        }
    }
    return (
        <div class="parent">
            <div class="box">
                <div class="element">
                    <hr></hr>
                    {isOwner && (
                    <>
                        <button onClick={onDeleteClick}>Delete</button>
                    </>
                    )}
                    
                    <div class="top">
                        <h3 class="top-left">{galleryObj.semester}</h3>
                        <h3 class="top-right">{galleryObj.date}</h3>
                    </div>
                    <h1>[{galleryObj.title}]</h1>
                    
                    <div class="img-container">
                        <img src={galleryObj.attachmentUrl} alt="responsive image"/>
                    </div>
                    <br></br>
                    <br></br>
                    <div class="newline">{galleryObj.gallery}</div>
                </div>
            </div>
        </div>
    );
};

export default PastEvent;
