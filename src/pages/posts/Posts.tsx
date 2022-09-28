import React, { ReactElement, useEffect, useState } from 'react';

import { Button } from 'antd';
import { useSelector } from 'react-redux';

import { Post } from 'components';
import { useAppDispatch } from 'hooks';
import { deletePost, getPostThunk, selectPosts } from 'state';

export const Posts = (): ReactElement => {
  const dispatch = useAppDispatch();
  const posts = useSelector(selectPosts);

  const [isNextPost, setIsNextPost] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getPostThunk());
    return () => {
      dispatch(deletePost());
    };
  }, []);

  useEffect(() => {
    if (isNextPost) {
      dispatch(deletePost());
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

  return (
    <>
      <Button onClick={onAddNewPost}>Show more...</Button>
      {posts.length > 1
        ? posts.map(({ quote }) => (
            <Post key={quote.id} author={quote.author} text={quote.body} />
          ))
        : null}
    </>
  );
};
