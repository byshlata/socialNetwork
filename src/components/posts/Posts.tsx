import React, { ReactElement, useEffect, useState } from 'react';

import { Button } from 'antd';
import { useSelector } from 'react-redux';

import { ButtonAnimated, SVGDislike, SVGLike, SVGMessage, SVGShare } from 'components';
import s from 'components/posts/post.module.sass';
import { useAppDispatch } from 'hooks';
import { deletePost, getPostThunk, selectPosts } from 'state';

export const Posts = (): ReactElement => {
  const dispatch = useAppDispatch();
  const posts = useSelector(selectPosts);

  const [isNextPost, setIsNextPost] = useState<boolean>(false);
  const [amountLike, setAmountLike] = useState<number>(1);
  const [amountDislike, setAmountDislike] = useState<number>(1);

  useEffect(() => {
    dispatch(getPostThunk());
    return () => {
      dispatch(deletePost());
    };
  }, []);

  useEffect(() => {
    if (isNextPost) {
      dispatch(getPostThunk());
      setIsNextPost(false);
    }
    return () => {
      dispatch(deletePost());
    };
  }, [isNextPost]);

  const onAddNewPost = (): void => {
    setIsNextPost(true);
  };

  const onLike = (): void => {
    setAmountLike(amountLike + 1);
    if (amountDislike > 1) {
      setAmountDislike(amountDislike - 1);
    }
  };

  const onDislike = (): void => {
    setAmountDislike(amountDislike + 1);
    if (amountLike > 1) {
      setAmountLike(amountLike - 1);
    }
  };

  const onOpenMessage = (): void => {};
  const onShare = (): void => {};

  return (
    <>
      <Button onClick={onAddNewPost}>Show more...</Button>
      {posts.map(m => (
        <div key={m.quote.id} className={s.myPostWrapper}>
          <div className={s.headerMyPost}>{m.quote.author}</div>
          <div className={s.contentMyPost}>{m.quote.body}</div>
          <div className={s.footerMyPost}>
            <div className={s.buttonLikeWrapper}>
              <ButtonAnimated onClick={onLike} svg={<SVGLike />} text={amountLike} />
            </div>
            <div className={s.buttonLikeWrapper}>
              <ButtonAnimated
                onClick={onDislike}
                svg={<SVGDislike />}
                text={amountDislike}
              />
            </div>
            <div className={s.buttonMessageWrapper}>
              <ButtonAnimated onClick={onOpenMessage} svg={<SVGMessage />} text="2" />
            </div>
            <div className={s.buttonShareWrapper}>
              <ButtonAnimated onClick={onShare} svg={<SVGShare />} text="share" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
