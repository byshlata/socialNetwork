import React, { ReactElement, useEffect } from 'react';

import { Button, Checkbox, Input } from 'antd';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'hooks';
import s from 'pages/loginPage/LoginPage.module.sass';
import {
  changeAuthUserProfile,
  getAuthUserProfile,
  selectAuthUserSettings,
  selectIsLoading,
} from 'state';

export const Settings = (): ReactElement => {
  const dispatch = useAppDispatch();

  const isLoading = useSelector(selectIsLoading);
  const {
    userId,
    aboutMe,
    contacts,
    lookingForAJob,
    lookingForAJobDescription,
    fullName,
  } = useSelector(selectAuthUserSettings);

  useEffect(() => {
    dispatch(getAuthUserProfile(userId));
  }, []);

  const formik = useFormik({
    initialValues: {
      userId,
      aboutMe,
      vk: contacts.vk,
      facebook: contacts.facebook,
      website: contacts.website,
      twitter: contacts.twitter,
      instagram: contacts.instagram,
      youtube: contacts.youtube,
      github: contacts.github,
      mainLink: contacts.mainLink,
      lookingForAJob,
      lookingForAJobDescription,
      fullName,
    },
    onSubmit: values => {
      dispatch(
        changeAuthUserProfile({
          userId: values.userId,
          aboutMe: values.aboutMe,
          contacts: {
            vk: values.vk,
            facebook: values.facebook,
            website: values.website,
            twitter: values.twitter,
            instagram: values.instagram,
            youtube: values.youtube,
            github: values.github,
            mainLink: values.mainLink,
          },
          lookingForAJob: values.lookingForAJob,
          lookingForAJobDescription: values.lookingForAJobDescription,
          fullName: values.fullName,
        }),
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={s.inputWrapper}>
        <Input
          id="fullName"
          name="fullName"
          addonBefore="Full name"
          placeholder="Full name"
          value={formik.values.fullName || ''}
          onChange={formik.handleChange}
        />
      </div>
      <div className={s.inputWrapper}>
        <Input
          id="aboutMe"
          name="aboutMe"
          addonBefore="About me"
          placeholder="About me"
          value={formik.values.aboutMe || ''}
          onChange={formik.handleChange}
        />
      </div>

      <div className={s.inputWrapper}>
        <Checkbox
          id="lookingForAJob"
          name="lookingForAJob"
          value={formik.values.lookingForAJob}
          onChange={formik.handleChange}
          checked={formik.values.lookingForAJob}
        >
          Looking for a job
        </Checkbox>
      </div>
      <div className={s.inputWrapper}>
        <Input
          id="lookingForAJobDescription"
          name="lookingForAJobDescription"
          addonBefore="Looking for a job description"
          placeholder="Looking for a job description"
          value={formik.values.lookingForAJobDescription || ''}
          onChange={formik.handleChange}
        />
      </div>

      <div className={s.inputWrapper}>
        <Input
          id="vk"
          name="vk"
          addonBefore="VK"
          placeholder="VK"
          value={formik.values.vk || ''}
          onChange={formik.handleChange}
        />
      </div>

      <div className={s.inputWrapper}>
        <Input
          id="facebook"
          name="facebook"
          value={formik.values.facebook || ''}
          addonBefore="Facebook"
          placeholder="Facebook"
          onChange={formik.handleChange}
        />
      </div>

      <div className={s.inputWrapper}>
        <Input
          id="github"
          name="github"
          value={formik.values.github || ''}
          addonBefore="Github"
          placeholder="Github"
          onChange={formik.handleChange}
        />
      </div>

      <div className={s.inputWrapper}>
        <Input
          id="mainLink"
          name="mainLink"
          value={formik.values.mainLink || ''}
          addonBefore="Main link"
          placeholder="Main link"
          onChange={formik.handleChange}
        />
      </div>

      <div className={s.inputWrapper}>
        <Input
          id="instagram"
          name="instagram"
          value={formik.values.instagram || ''}
          addonBefore="Instagram"
          placeholder="Instagram"
          onChange={formik.handleChange}
        />
      </div>

      <div className={s.inputWrapper}>
        <Input
          id="twitter"
          name="twitter"
          value={formik.values.twitter || ''}
          addonBefore="Twitter"
          placeholder="Twitter"
          onChange={formik.handleChange}
        />
      </div>

      <div className={s.inputWrapper}>
        <Input
          id="website"
          name="website"
          value={formik.values.website || ''}
          addonBefore="Website"
          placeholder="Website"
          onChange={formik.handleChange}
        />
      </div>

      <div className={s.inputWrapper}>
        <Input
          id="youtube"
          name="youtube"
          value={formik.values.youtube || ''}
          addonBefore="Youtube"
          placeholder="Youtube"
          onChange={formik.handleChange}
        />
      </div>

      <div className={s.checkWrapper}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </div>
    </form>
  );
};
