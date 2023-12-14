import React, { useState, useEffect, useRef } from 'react';
import Gallery from './Gallery';

const GalleryPrint = ({gallery, userObj}) => {
    return (
        <div>
            <Gallery 
              key={gallery.id} 
              galleryObj={gallery} 
              isOwner={gallery.creatorId === userObj.uid}
            />
        </div>
        
    );
};

export default GalleryPrint;