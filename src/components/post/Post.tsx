import React, { ReactElement, useState } from 'react';

import { ButtonAnimated } from 'components/button';
import s from 'components/post/post.module.sass';
import { SVGDislike, SVGLike, SVGMessage, SVGShare } from 'components/SVGComponent';

type PostType = {
  author: string;
  text: string;
};

export const Post = ({ author, text }: PostType): ReactElement => {
  const [amountLike, setAmountLike] = useState<number>(1);
  const [amountDislike, setAmountDislike] = useState<number>(1);

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
    <div className={s.myPostWrapper}>
      <div className={s.headerMyPost}>{author}</div>
      <div className={s.contentMyPost}>{text}</div>
      <div className={s.footerMyPost}>
        <div className={s.buttonLikeWrapper}>
          <ButtonAnimated onClick={onLike} svg={<SVGLike />} text={amountLike} />
        </div>
        <div className={s.buttonLikeWrapper}>
          <ButtonAnimated onClick={onDislike} svg={<SVGDislike />} text={amountDislike} />
        </div>
        <div className={s.buttonMessageWrapper}>
          <ButtonAnimated onClick={onOpenMessage} svg={<SVGMessage />} text="2" />
        </div>
        <div className={s.buttonShareWrapper}>
          <ButtonAnimated onClick={onShare} svg={<SVGShare />} text="share" />
        </div>
      </div>
    </div>
  );
};
