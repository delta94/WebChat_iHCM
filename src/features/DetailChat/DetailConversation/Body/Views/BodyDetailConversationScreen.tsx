import React, { useState } from 'react';
import { ENUM_KIND_OF_MESSAGE } from '../../../../../libraries/Constants/KindOfMessage';
import './BodyDetailConversationScreen.css';

function BodyDetailConversationScreen(props : any) {
  const [activeLi , setActiveLi] = useState<number>(ENUM_KIND_OF_MESSAGE.IMAGE);

  const onChangeActiveLi = (num: number) =>{
    setActiveLi(num);
  }

  return (
    <div className="bodydetailconversation-container">
      <div className="bodydetailconversation-main">
        <div className="bodydetailconversation-header app-mainfont">
          <ul>
            <li 
            className={ activeLi === ENUM_KIND_OF_MESSAGE.IMAGE ? "bodydetailconversation-header-li--active" : "" } 
            onClick={ () => { onChangeActiveLi(ENUM_KIND_OF_MESSAGE.IMAGE) } }
            >
              Hình ảnh
            </li>

            <li 
            className={ activeLi === ENUM_KIND_OF_MESSAGE.FILE ? "bodydetailconversation-header-li--active" : "" } 
            onClick={ () => { onChangeActiveLi(ENUM_KIND_OF_MESSAGE.FILE) } }
            >
              Tài liệu
            </li>
            <li 
            className={ activeLi === ENUM_KIND_OF_MESSAGE.LINK ? "bodydetailconversation-header-li--active" : "" } 
            onClick={ () => { onChangeActiveLi(ENUM_KIND_OF_MESSAGE.LINK) } }
            >
              Link
            </li>
          </ul>
        </div>
        <div className="bodydetailconversation-body">
          <div className="bodydetailconversation-body-image">
            <img src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"></img>
          </div>
          <div className="bodydetailconversation-body-image">
            <img src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"></img>
          </div>
          <div className="bodydetailconversation-body-image">
            <img src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"></img>
          </div>
          <div className="bodydetailconversation-body-image">
            <img src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"></img>
          </div>
          <div className="bodydetailconversation-body-image">
            <img src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyDetailConversationScreen;
