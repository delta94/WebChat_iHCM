import React, { useState } from 'react';
import BodyPanelScreen from '../../../../../../libraries/Features/BodyPanel/Views/BodyPanelScreen';
import CircleAvatarScreen from '../../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import CustomInputScreen from '../../../../../../libraries/Features/CustomInput/Views/CustomInputScreen';
import './BodyCreateGroupScreen.css';

const iconsearch = require('../../../../../../libraries/Icons/iconsearch.svg').default;

const styleCustomInput = {
  backgroundImage:`url('${ iconsearch }')`,
  backgroundPosition:'3% 50%',
  padding:'12px 20px 12px 40px',
  borderRadius:'0.7rem',
  fontSize:'1rem',
}

function BodyCreateGroupScreen() {

  const [selectedUserList , setSelectedUserList] = useState<number[]>([]);
  const [hasFooter , setHasFooter] = useState<boolean>(false);

  const setSelectedUser = (e: any) =>{
    const { name , checked } = e.target;
    const idSelectedUser = parseInt(name);

    if(checked){
      if(selectedUserList.length === 0){
        setHasFooter(true);
        setSelectedUserList([...selectedUserList , idSelectedUser]);
      }else{
        if(!selectedUserList.some((id: number) => id === parseInt(name))){
          setSelectedUserList([...selectedUserList , idSelectedUser]);
        }
      }
    } else{
      if(selectedUserList.length === 1){
        setHasFooter(false);
        setSelectedUserList([]);
      }else{
        if(selectedUserList.some((id: number) => id === parseInt(name))){
          setSelectedUserList(selectedUserList.filter((id: number) => id !== idSelectedUser));
        }
      }
    }
  }

  return (
    <BodyPanelScreen class={ "bodycreategroup-container app-mainfont"}>
      <div className={hasFooter ? "bodycreategroup-main bodycreategroup-main--hasfooter" : "bodycreategroup-main"}>
        <h4>Chọn thành viên</h4>
        <div className="bodycreategroup-main-body">
          <CustomInputScreen style={ styleCustomInput } placeHolder="Nhập tên người cần tìm kiếm" class="" isMultiline={ false }></CustomInputScreen>
          <div className="bodycreategroup-main-body-selecteduser">
            <div className="bodycreategroup-main-body-selecteduserpanel">
              <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              isOnline={ true }
              alt=""
              class=""
              width="44px"
              height="44px"
              ></CircleAvatarScreen>
              <p>Trung Đức</p>
              <input type="checkbox" name="1" className="bodycreategroup-main-body-checkbox" onChange={ setSelectedUser }></input>
            </div>
            <div className="bodycreategroup-main-body-separate"></div>
            <div className="bodycreategroup-main-body-selecteduserpanel">
              <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              isOnline={ true }
              alt=""
              class=""
              width="44px"
              height="44px"
              ></CircleAvatarScreen>
              <p>Trung Đức</p>
              <input type="checkbox" name="2" className="bodycreategroup-main-body-checkbox" onChange={ setSelectedUser }></input>
            </div>
            <div className="bodycreategroup-main-body-separate"></div>
            <div className="bodycreategroup-main-body-selecteduserpanel">
              <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              isOnline={ true }
              alt=""
              class=""
              width="44px"
              height="44px"
              ></CircleAvatarScreen>
              <p>Trung Đức</p>
              <input type="checkbox" name="3" className="bodycreategroup-main-body-checkbox" onChange={ setSelectedUser }></input>
            </div>
            <div className="bodycreategroup-main-body-separate"></div>
            <div className="bodycreategroup-main-body-selecteduserpanel">
              <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              isOnline={ true }
              alt=""
              class=""
              width="44px"
              height="44px"
              ></CircleAvatarScreen>
              <p>Trung Đức</p>
              <input type="checkbox" name="4" className="bodycreategroup-main-body-checkbox" onChange={ setSelectedUser }></input>
            </div>
            <div className="bodycreategroup-main-body-separate"></div>
            <div className="bodycreategroup-main-body-selecteduserpanel">
              <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              isOnline={ true }
              alt=""
              class=""
              width="44px"
              height="44px"
              ></CircleAvatarScreen>
              <p>Trung Đức</p>
              <input type="checkbox" name="5" className="bodycreategroup-main-body-checkbox" onChange={ setSelectedUser }></input>
            </div>
            <div className="bodycreategroup-main-body-separate"></div>
            <div className="bodycreategroup-main-body-selecteduserpanel">
              <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              isOnline={ true }
              alt=""
              class=""
              width="44px"
              height="44px"
              ></CircleAvatarScreen>
              <p>Trung Đức</p>
              <input type="checkbox" name="6" className="bodycreategroup-main-body-checkbox" onChange={ setSelectedUser }></input>
            </div>
            <div className="bodycreategroup-main-body-separate"></div>
            <div className="bodycreategroup-main-body-selecteduserpanel">
              <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              isOnline={ true }
              alt=""
              class=""
              width="44px"
              height="44px"
              ></CircleAvatarScreen>
              <p>Trung Đức</p>
              <input type="checkbox" name="7" className="bodycreategroup-main-body-checkbox" onChange={ setSelectedUser }></input>
            </div>
            <div className="bodycreategroup-main-body-separate"></div>
            <div className="bodycreategroup-main-body-selecteduserpanel">
              <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              isOnline={ true }
              alt=""
              class=""
              width="44px"
              height="44px"
              ></CircleAvatarScreen>
              <p>Trung Đức</p>
              <input type="checkbox" name="8" className="bodycreategroup-main-body-checkbox" onChange={ setSelectedUser }></input>
            </div>
            <div className="bodycreategroup-main-body-separate"></div>
            <div className="bodycreategroup-main-body-selecteduserpanel">
              <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              isOnline={ true }
              alt=""
              class=""
              width="44px"
              height="44px"
              ></CircleAvatarScreen>
              <p>Trung Đức</p>
              <input type="checkbox" name="9" className="bodycreategroup-main-body-checkbox" onChange={ setSelectedUser }></input>
            </div>
            <div className="bodycreategroup-main-body-separate"></div>
          </div>
        </div>
      </div>
      {
        hasFooter && (
          <div className="bodycreategroup-footer">
            <div className="bodycreategroup-footer-selecteduserpanel">
              {
                selectedUserList.map((id:number) => <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
                isOnline={ false }
                canRomove={ true }
                alt=""
                class=""
                width="42px"
                height="42px"
                ></CircleAvatarScreen>)
              }
            </div>

            <button>Tạo nhóm</button>
          </div>
        )
      }

    </BodyPanelScreen>
  );
}

export default BodyCreateGroupScreen;
