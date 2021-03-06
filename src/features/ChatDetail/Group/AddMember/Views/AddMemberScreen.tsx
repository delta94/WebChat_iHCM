import React from 'react';
import { useState } from 'react';
import CircleAvatarScreen from '../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import CustomButtonScreen from '../../../../../libraries/Features/CustomButton/Views/CustomButtonScreen';
import CustomInputScreen from '../../../../../libraries/Features/CustomInput/Views/CustomInputScreen';
import "./AddMemberScreen.css";

const iconsearch = require("../../../../../libraries/Icons/iconsearch.svg").default;

const styleCustomInput = {
  backgroundImage:`url('${ iconsearch }')`,
  backgroundPosition:'3% 50%',
  padding:'12px 20px 12px 40px',
  borderRadius:'0.7rem',
  fontSize:'1rem',
}

function AddMemberScreen(props : any) {
  const [selectedUserList , setSelectedUserList] = useState<number[]>([]);
  const [hasFooter , setHasFooter] = useState<boolean>(false);

  const setSelectedUserByCheckbox = (e: any) =>{
    const { name , checked } = e.target;
    const idSelectedUser = parseInt(name);

    handleSelectedUser(checked , idSelectedUser)
  }

  const setSelectedUser = (idSelectedUser: number) =>{
    const checked = selectedUserList.some((id: number) => id === idSelectedUser);

    handleSelectedUser(!checked , idSelectedUser)
  }

  const handleSelectedUser = (checked: boolean , idSelectedUser: number) =>{
    if(checked){
      if(selectedUserList.length === 0){
        setHasFooter(true);
        setSelectedUserList([...selectedUserList , idSelectedUser]);
      }else{
        if(!selectedUserList.some((id: number) => id === idSelectedUser)){
          setSelectedUserList([...selectedUserList , idSelectedUser]);
        }
      }
    } else{
      if(selectedUserList.length === 1){
        setHasFooter(false);
        setSelectedUserList([]);
      }else{
        if(selectedUserList.some((id: number) => id === idSelectedUser)){
          setSelectedUserList(selectedUserList.filter((id: number) => id !== idSelectedUser));
        }
      }
    }
  }

  const removeSelectedUser = (idSelectedUser:number) =>{
    if(selectedUserList.length === 1){
      setHasFooter(false);
      setSelectedUserList([]);
    }else{
      if(selectedUserList.some((id: number) => id === idSelectedUser)){
        setSelectedUserList(selectedUserList.filter((id: number) => id !== idSelectedUser));
      }
    }
  }
  
  return (
    <div className={ hasFooter ? "addmember-container addmember-container--hasfooter" : "addmember-container"}>
      <div className={ hasFooter ? "addmember-selectedmember addmember-selectedmember--hasfooter" : "addmember-selectedmember"} >
        <CustomInputScreen style={ styleCustomInput } hasClearText={ true } placeHolder="Nhập tên người cần tìm kiếm" class="" isMultiline={ false } isTextArea={ true }></CustomInputScreen>
        
        <div className="addmember-selectedmember-main">

            <div className="bodycreategroup-main-body-selecteduserpanel" onClick={ () => { setSelectedUser(1) } }>
              <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              isOnline={ true }
              alt=""
              class=""
              width="44px"
              height="44px"
              hasCursor={ true }
              ></CircleAvatarScreen>
              <p>Trung Đức</p>
              <input type="checkbox" name="1" className="bodycreategroup-main-body-checkbox" onChange={ setSelectedUserByCheckbox } checked={ selectedUserList.some((id: number) => id === 1) } ></input>
            </div>
            <div className="bodycreategroup-main-body-separate"></div>
            <div className="bodycreategroup-main-body-selecteduserpanel" onClick={ () => { setSelectedUser(2) } }>
              <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              isOnline={ true }
              alt=""
              class=""
              width="44px"
              height="44px"
              hasCursor={ true }
              ></CircleAvatarScreen>
              <p>Trung Đức</p>
              <input type="checkbox" name="2" className="bodycreategroup-main-body-checkbox" onChange={ setSelectedUserByCheckbox } checked={ selectedUserList.some((id: number) => id === 2) } ></input>
            </div>
            <div className="bodycreategroup-main-body-separate"></div>
            <div className="bodycreategroup-main-body-selecteduserpanel" onClick={ () => { setSelectedUser(3) } }>
              <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              isOnline={ true }
              alt=""
              class=""
              width="44px"
              height="44px"
              hasCursor={ true }
              ></CircleAvatarScreen>
              <p>Trung Đức</p>
              <input type="checkbox" name="3" className="bodycreategroup-main-body-checkbox" onChange={ setSelectedUserByCheckbox } checked={ selectedUserList.some((id: number) => id === 3) } ></input>
            </div>
            <div className="bodycreategroup-main-body-separate"></div>
            <div className="bodycreategroup-main-body-selecteduserpanel" onClick={ () => { setSelectedUser(4) } }>
              <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              isOnline={ true }
              alt=""
              class=""
              width="44px"
              height="44px"
              hasCursor={ true }
              ></CircleAvatarScreen>
              <p>Trung Đức</p>
              <input type="checkbox" name="4" className="bodycreategroup-main-body-checkbox" onChange={ setSelectedUserByCheckbox } checked={ selectedUserList.some((id: number) => id === 4) } ></input>
            </div>
            <div className="bodycreategroup-main-body-separate"></div>
            <div className="bodycreategroup-main-body-selecteduserpanel" onClick={ () => { setSelectedUser(5) } }>
              <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              isOnline={ true }
              alt=""
              class=""
              width="44px"
              height="44px"
              hasCursor={ true }
              ></CircleAvatarScreen>
              <p>Trung Đức</p>
              <input type="checkbox" name="5" className="bodycreategroup-main-body-checkbox" onChange={ setSelectedUserByCheckbox } checked={ selectedUserList.some((id: number) => id === 5) } ></input>
            </div>
            <div className="bodycreategroup-main-body-separate"></div>
            <div className="bodycreategroup-main-body-selecteduserpanel" onClick={ () => { setSelectedUser(6) } }>
              <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              isOnline={ true }
              alt=""
              class=""
              width="44px"
              height="44px"
              hasCursor={ true }
              ></CircleAvatarScreen>
              <p>Trung Đức</p>
              <input type="checkbox" name="6" className="bodycreategroup-main-body-checkbox" onChange={ setSelectedUserByCheckbox } checked={ selectedUserList.some((id: number) => id === 6) } ></input>
            </div>
            <div className="bodycreategroup-main-body-separate"></div>
            <div className="bodycreategroup-main-body-selecteduserpanel" onClick={ () => { setSelectedUser(7) } }>
              <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              isOnline={ true }
              alt=""
              class=""
              width="44px"
              height="44px"
              hasCursor={ true }
              ></CircleAvatarScreen>
              <p>Trung Đức</p>
              <input type="checkbox" name="7" className="bodycreategroup-main-body-checkbox" onChange={ setSelectedUserByCheckbox } checked={ selectedUserList.some((id: number) => id === 7) } ></input>
            </div>
            <div className="bodycreategroup-main-body-separate"></div>
            <div className="bodycreategroup-main-body-selecteduserpanel" onClick={ () => { setSelectedUser(8) } }>
              <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              isOnline={ true }
              alt=""
              class=""
              width="44px"
              height="44px"
              hasCursor={ true }
              ></CircleAvatarScreen>
              <p>Trung Đức</p>
              <input type="checkbox" name="8" className="bodycreategroup-main-body-checkbox" onChange={ setSelectedUserByCheckbox } checked={ selectedUserList.some((id: number) => id === 8) } ></input>
            </div>
            <div className="bodycreategroup-main-body-separate"></div>
            <div className="bodycreategroup-main-body-selecteduserpanel" onClick={ () => { setSelectedUser(9) } }>
              <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              isOnline={ true }
              alt=""
              class=""
              width="44px"
              height="44px"
              hasCursor={ true }
              ></CircleAvatarScreen>
              <p>Trung Đức</p>
              <input type="checkbox" name="9" className="bodycreategroup-main-body-checkbox" onChange={ setSelectedUserByCheckbox } checked={ selectedUserList.some((id: number) => id === 9) } ></input>
            </div>
        </div>
      </div>
      {
        hasFooter && (
          <div className="addmember-footer">
            <div className="addmember-footer-selectedmember">
              {
                selectedUserList.map((id:number) => <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
                isOnline={ false }
                canRomove={ true }
                alt=""
                class=""
                width="42px"
                height="42px"
                onRemove={ () =>{ removeSelectedUser(id)}}
                ></CircleAvatarScreen>)
              }
            </div>
            <CustomButtonScreen text="Thêm" onClick={ null } class="primary"></CustomButtonScreen>
          </div>
        )
      }
    </div>
  );
}

export default AddMemberScreen;
