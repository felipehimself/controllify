export const generateId = () => {
  const head = Date.now().toString(36);
  const tail = Math.random().toString(36).slice(2);
  return head + tail;
};

export const BASE_URL:string = 'http://localhost:3004/data'
