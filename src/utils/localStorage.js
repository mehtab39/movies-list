export const pushLocalStorage = (key, value) => {
  let data = JSON.parse(localStorage.getItem(key));
  if (data == undefined) data = [];
    data.push(value);
    localStorage.setItem(key, JSON.stringify([...new Set(data)]));
};



export const getLocalStorage = (key) => {
   return JSON.parse(localStorage.getItem(key));
};

export const clearLocalStorage = $ => {
  localStorage.clear();
};
