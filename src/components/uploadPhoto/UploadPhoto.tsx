import React, { ChangeEvent, ReactElement } from 'react';

import 'antd/dist/antd.css';

export type UploadPhotoType = {
  updatePhoto: (file: File) => void;
};

export const UploadPhoto = ({ updatePhoto }: UploadPhotoType): ReactElement => {
  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.currentTarget.files && e.currentTarget.files.length) {
      updatePhoto(e.currentTarget.files[0]);
    }
  };

  const onResetFIleName = (e: ChangeEvent<HTMLInputElement>): void => {
    e.currentTarget.value = '';
  };

  return (
    <input
      type="file"
      onChange={onChangeHandle}
      onBlur={onResetFIleName}
      accept="image/png, image/jpeg"
    />
  );
};
