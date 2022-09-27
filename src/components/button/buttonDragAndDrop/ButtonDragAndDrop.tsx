import React, { ReactElement, useRef } from 'react';

import { WechatOutlined } from '@ant-design/icons/lib/icons';
import { Button, Popconfirm } from 'antd';
import { motion } from 'framer-motion';

import s from 'app/App.module.sass';
import { useAppDispatch, useWindowDimensions } from 'hooks';
import { isOpenChat } from 'state';

const START_POSITION_BUTTON_OPEN_CHAT_BY_X = 5;
const START_POSITION_BUTTON_OPEN_CHAT_BY_Y = 8;
const COEFFICIENT_MOVE_BUTTON_OPEN_CHAT_BY_X = 1.5;
const COEFFICIENT_MOVE_BUTTON_OPEN_CHAT_BY_Y = 2;
const TEXT_MESSAGE = 'Do you want to open chat?';

export const ButtonDragAndDrop = (): ReactElement => {
  const dispatch = useAppDispatch();

  const constraintsRef = useRef(null);
  const { positionButtonY, positionButtonX, width, height } = useWindowDimensions(
    START_POSITION_BUTTON_OPEN_CHAT_BY_X,
    START_POSITION_BUTTON_OPEN_CHAT_BY_Y,
  );

  const onOpenChat = (): void => {
    dispatch(isOpenChat(true));
  };

  return (
    <Popconfirm
      placement="bottom"
      title={TEXT_MESSAGE}
      onConfirm={onOpenChat}
      okText="Yes"
      cancelText="No"
    >
      <motion.div
        drag
        className={s.dragAndDropContainer}
        ref={constraintsRef}
        initial={{ x: positionButtonX, y: positionButtonY }}
        dragConstraints={{
          top: 0,
          left: 0,
          right: width / COEFFICIENT_MOVE_BUTTON_OPEN_CHAT_BY_Y,
          bottom: height / COEFFICIENT_MOVE_BUTTON_OPEN_CHAT_BY_X,
        }}
      >
        <Button size="large" shape="circle" icon={<WechatOutlined />} />
      </motion.div>
    </Popconfirm>
  );
};
