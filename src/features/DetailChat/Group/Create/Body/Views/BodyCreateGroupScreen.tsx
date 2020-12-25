import React from 'react';
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
  return (
    <div className="bodycreategroup-container app-mainfont">
      <div className="bodycreategroup-main">
        <h4>Chọn thành viên</h4>
        <div className="bodycreategroup-main-body">
          <CustomInputScreen style={ styleCustomInput } placeHolder="Nhập tên người cần tìm kiếm" class="" isMultiline={ false }></CustomInputScreen>
          <div className="bodycreategroup-main-body-chooseuser">
            <div className="bodycreategroup-main-body-chooseuserpanel">
              <CircleAvatarScreen src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              isOnline={ true }
              alt=""
              class=""
              width="46px"
              height="46px"
              ></CircleAvatarScreen>
              <p>Trung Đức</p>
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            </div>
            <div className="bodycreategroup-main-body-separate"></div>
            <BodyPanelScreen class="123">
              huy
            </BodyPanelScreen>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyCreateGroupScreen;
