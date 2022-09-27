import axios from 'axios';

const AMOUNT_POST_ON_THE_PAGE = 10;

function createArrayPost(): string[] {
  const arrayHelper: string[] = [];
  for (let i = 0; i <= AMOUNT_POST_ON_THE_PAGE; i += 1) {
    arrayHelper.push('request');
  }
  return arrayHelper;
}

export const API_POST = {
  getAllPost: async () => axios.all<any>(createArrayPost().map(() => API_POST.getPost())),
  getPost: async () => axios.get('https://favqs.com/api/qotd '),
};
