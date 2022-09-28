import React, { ReactElement } from 'react';

import 'antd/dist/antd.css';
import { Button, Checkbox, Input } from 'antd';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Path, RuleFormik } from 'enum';
import { useAppDispatch } from 'hooks';
import s from 'pages/loginPage/LoginPage.module.sass';
import { authUser, selectCaptchaUrl, selectIsAuthUser, selectIsLoading } from 'state';
import { FormikErrorType } from 'types';

export const LoginPage = (): ReactElement => {
  const dispatch = useAppDispatch();

  const isLoading = useSelector(selectIsLoading);
  const captcha = useSelector(selectCaptchaUrl);
  const isAuth = useSelector(selectIsAuthUser);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
      captcha: '',
    },
    validate: values => {
      const errors: FormikErrorType = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < RuleFormik.MinSymbolPassword) {
        errors.password = 'Invalid password';
      }
      return errors;
    },
    onSubmit: values => {
      dispatch(authUser(values));
      formik.resetForm({
        values: { email: '', password: '', rememberMe: false, captcha: '' },
      });
    },
  });

  if (isAuth) {
    navigate(`${Path.Root}${Path.Profile}`);
  }

  return (
    <div className={s.formWrapper}>
      <form onSubmit={formik.handleSubmit}>
        <div className={s.inputWrapper}>
          <Input
            id="email"
            name="email"
            addonBefore="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            status={formik.errors.email ? 'error' : ''}
          />
        </div>

        <div className={s.inputWrapper}>
          <Input.Password
            id="password"
            name="password"
            value={formik.values.password}
            addonBefore="password"
            placeholder="Password"
            onChange={formik.handleChange}
            status={formik.errors.password ? 'error' : ''}
          />
        </div>

        <div className={s.checkWrapper}>
          <Checkbox
            id="rememberMe"
            name="rememberMe"
            value={formik.values.password}
            onChange={formik.handleChange}
            checked={formik.values.rememberMe}
          >
            Remember me
          </Checkbox>

          <Button type="primary" htmlType="submit" loading={isLoading}>
            Submit
          </Button>
        </div>
        {captcha && (
          <>
            <img src={captcha} alt="captcha" />
            <div className={s.inputWrapper}>
              <Input
                id="captcha"
                name="captcha"
                value={formik.values.captcha}
                addonBefore="captcha"
                placeholder="Captcha"
                onChange={formik.handleChange}
              />
            </div>
          </>
        )}
      </form>
    </div>
  );
};
