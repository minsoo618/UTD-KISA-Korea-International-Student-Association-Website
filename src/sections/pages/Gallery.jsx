import React from 'react';
import { dbService, storageService  } from "../../fbase";
import { doc, deleteDoc, updateDoc }from"firebase/firestore";
import { deleteObject, ref } from "@firebase/storage";
import "./Gallery.css"


const Gallery = ({galleryObj, isOwner}) => {

    const GalleryTextRef =doc(dbService, "gallery", `${galleryObj.id}`);
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
        <>
            <div class="parent1">
                <div class="box1">
                    <div class="element">
            <div class="img-gallery">
                {galleryObj.attachmentUrl && <img src={galleryObj.attachmentUrl} />}

                <div class="desc">
                    <h4>{galleryObj.gallery}</h4>
                </div>
                            
           
            
            
            {isOwner && (
            <>
                <button onClick={onDeleteClick}>Delete</button>
            </>
            )}

            {/* <div>
                <img src={galleryObj.attachmentUrl} width="700px"/>
                <h4>{galleryObj.gallery}</h4>
                {galleries.map((gallery) => (
                    
                    <Gallery 
                        key={gallery.id} 
                        galleryObj={gallery} 
                        isOwner={gallery.creatorId === userObj.uid}
                    />
                ))}
            </div> */}    
          
            
            
                        </div>
                    </div>
                </div>
                </div>
       
            </>
            
            
    );
};

export default Gallery;