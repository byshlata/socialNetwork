import { ComponentsUserTypes, Nullable } from 'types';

type returnType = {
  value: {
    contact: string;
    link: Nullable<string>;
  };
};

export const convertObjectInArray = (obj: ComponentsUserTypes): returnType[] => {
  const array: returnType[] = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(obj)) {
    array.push({ value: { contact: key, link: value } });
  }
  return array;
};
