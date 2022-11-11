import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { userData } from '_slices/userSlice';
import {
  ImageArea,
  Image,
  HoverArea,
  HoveredArea,
  HoverIcon,
} from './UpdateUser.style';

type UserInfo = {
  nickname: string;
  image: string;
  checkPassword: string;
  newPassword: string;
};

type Props = {
  userInfo: UserInfo;
  setUserInfo(data: UserInfo): void;
};

const PreImage: React.FC<Props> = function PreImage({ userInfo, setUserInfo }) {
  const [img, setImg] = useState<any>(userInfo.image);

  //* 이미지 미리보기
  const changeImage = (e: any) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImg(base64.toString());
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    setUserInfo({ ...userInfo, image: e.target.files[0] });
  };

  return (
    <ImageArea>
      <HoverArea className="HoverArea" htmlFor="image" onChange={changeImage}>
        <input
          type="file"
          name="image"
          id="image"
          style={{ display: 'none' }}
          onChange={changeImage}
        />
        <Image className="DefaultImg" src={img} alt="Default Image" />
        <HoveredArea className="HoveredArea">
          <HoverIcon className="hoverIcon" src="/camera.png" alt="" />
          <span>Edit Image</span>
        </HoveredArea>
      </HoverArea>
    </ImageArea>
  );
};

export default PreImage;
