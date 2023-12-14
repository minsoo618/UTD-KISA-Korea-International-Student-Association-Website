import React, { useState, useEffect, useRef } from 'react';
import { addDoc, collection,getDocs,getFirestore,query, orderBy, onSnapshot } from "firebase/firestore";
import './WriteMain.css';
import { dbService, storageService } from '../../fbase';
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import Gallery from './UpEvent';
import { v4 as uuidv4 } from 'uuid';


const WriteMain = (props) => {
  
//============================nomad
  const[gallery, setGallery] = useState("");
  const[galleries, setGalleries] = useState([]);
  const[attachment, setAttachment] = useState("");

  

//미리보기
  

  const onFileChange = (event) => {
      const {
        target: { files },
      } =event;
      const theFile = files[0];
      const reader = new FileReader();
      reader.onloadend = (finishedEvent) => {
        const {
          currentTarget: { result },
        } = finishedEvent;
        setAttachment(result)
      }
      reader.readAsDataURL(theFile);
  }
  const fileInput = useRef();
  
//미리보기 끝
  
//글 업로드
  useEffect(() => {
    const q = query(
      collection(dbService, "upcome"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const galleryArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGalleries(galleryArr);
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";
    
    //이미지 첨부하지 않고 텍스트만 올리고 싶을 때도 있기 때문에 attachment가 있을때만 아래 코드 실행
    //이미지 첨부하지 않은 경우엔 attachmentUrl=""이 된다.
    if (attachment !== "") {
    //파일 경로 참조 만들기
    const attachmentRef = ref(storageService, `${props.userObj.uid}/${uuidv4()}`);
    //storage 참조 경로로 파일 업로드 하기
    const response = await uploadString(attachmentRef, attachment, "data_url");
    //storage 참조 경로에 있는 파일의 URL을 다운로드해서 attachmentUrl 변수에 넣어서 업데이트
    attachmentUrl = await getDownloadURL(response.ref);
    }
    
    //트윗 오브젝트
    const galleryObj = {
    gallery,
    createdAt: Date.now(),
    creatorId: props.userObj.uid,
    attachmentUrl,
    };
    
    //트윗하기 누르면 nweetObj 형태로 새로운 document 생성하여 nweets 콜렉션에 넣기
    await addDoc(collection(dbService, "upcome"), galleryObj);
    
    //state 비워서 form 비우기
    setGallery("");
    
    //파일 미리보기 img src 비워주기
    setAttachment("");
    };
    
    
    
    //첨부 파일 url 넣는 state인 attachment 비워서 프리뷰 img src 없애기
    const onClearAttachment = () => {
      fileInput.current.value = null;
      setAttachment("")
    }

    const onChange = ({ target: { value } }) => {
      setGallery(value);
      console.log(value);
    };
//글 업로드 끝
  
//===========================end-nomad
    return (
      <div class="FlexRow_c">
        

        {"oZ0CtSREtRMVYRUuXhULwtu7P3n2" === props.userObj.uid && (
          <div class="FlexCol_c">
            <input type="file" accept="image/*" onChange={onFileChange} ref={fileInput} />
            <button onClick={onClearAttachment}>Clear</button>
            <div class="borderBox" style={{display:'flex', textAlign:'right',width:'700px', height:"560px",marginTop:'20px', backgroundColor: '#d3d3d3'}}>
            <div interval={null}>
              {attachment && (
                <div>
                  <img src={attachment} width="700px" maxHeight= '560px'/>
                </div>
              )}
            </div>
          </div>

          <textarea name="text" class="feedback-input" id="comment" placeholder="내용을 입력하세요" style={{fontSize: '17px', resize:'none',width:'700px',height:'150px', marginTop:'20px'}} value={gallery} onChange={onChange} type="text"></textarea>


          <button type="submit" onClick={onSubmit} value="등록" style={{height:'30px',width:'100px',fontSize:'12px',fontWeight: 'bold', borderRadius: '4px'}}>등록</button>
          </div>
        )}

        <div>
          {galleries.map((gallery) => (
            <Gallery 
              key={gallery.id} 
              galleryObj={gallery} 
              isOwner={gallery.creatorId === props.userObj.uid}
            />
          ))}
        </div>

        
      </div>
    );
  }
  
  export default WriteMain;  