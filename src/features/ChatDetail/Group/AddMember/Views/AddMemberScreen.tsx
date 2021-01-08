import React from 'react';
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
  return (
    <div className="addmember-container">
      <div className="addmember-selectedmember">
        <CustomInputScreen style={ styleCustomInput } placeHolder="Nhập tên người cần tìm kiếm" class="" isMultiline={ false }></CustomInputScreen>
        <div className="addmember-selectedmember-main">
          <div className="bodycreategroup-main-body-selecteduserpanel">
            <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
            isOnline={ true }
            alt=""
            class=""
            width="44px"
            height="44px"
            ></CircleAvatarScreen>
            <p>Trung Đức</p>
            <input type="checkbox" name="1" className="bodycreategroup-main-body-checkbox" checked={ true }></input>
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
            <input type="checkbox" name="1" className="bodycreategroup-main-body-checkbox" checked={ true }></input>
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
            <input type="checkbox" name="1" className="bodycreategroup-main-body-checkbox" checked={ true }></input>
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
            <input type="checkbox" name="1" className="bodycreategroup-main-body-checkbox" checked={ true }></input>
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
            <input type="checkbox" name="1" className="bodycreategroup-main-body-checkbox" checked={ true }></input>
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
            <input type="checkbox" name="1" className="bodycreategroup-main-body-checkbox" checked={ true }></input>
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
            <input type="checkbox" name="1" className="bodycreategroup-main-body-checkbox" checked={ true }></input>
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
            <input type="checkbox" name="1" className="bodycreategroup-main-body-checkbox" checked={ true }></input>
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
            <input type="checkbox" name="1" className="bodycreategroup-main-body-checkbox" checked={ true }></input>
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
            <input type="checkbox" name="1" className="bodycreategroup-main-body-checkbox" checked={ true }></input>
          </div>
        </div>
      </div>
      <div className="addmember-footer">
        <div className="addmember-footer-selectedmember">
          <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
            isOnline={ false }
            canRomove={ true }
            alt=""
            class=""
            width="42px"
            height="42px"
            onRemove={ null }
          ></CircleAvatarScreen>
          <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
            isOnline={ false }
            canRomove={ true }
            alt=""
            class=""
            width="42px"
            height="42px"
            onRemove={ null }
          ></CircleAvatarScreen>
          <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
            isOnline={ false }
            canRomove={ true }
            alt=""
            class=""
            width="42px"
            height="42px"
            onRemove={ null }
          ></CircleAvatarScreen>
          <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
            isOnline={ false }
            canRomove={ true }
            alt=""
            class=""
            width="42px"
            height="42px"
            onRemove={ null }
          ></CircleAvatarScreen>
          <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
            isOnline={ false }
            canRomove={ true }
            alt=""
            class=""
            width="42px"
            height="42px"
            onRemove={ null }
          ></CircleAvatarScreen>
          <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
            isOnline={ false }
            canRomove={ true }
            alt=""
            class=""
            width="42px"
            height="42px"
            onRemove={ null }
          ></CircleAvatarScreen>
        </div>
        <CustomButtonScreen text="Thêm" onClick={ null } class="primary"></CustomButtonScreen>
      </div>
    </div>
  );
}

export default AddMemberScreen;
