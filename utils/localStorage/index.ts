export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  if(data) return JSON.parse(data)
}

export const setLocalStorage = (key: string, data: Record<string, any>) => {
  const formattedData = JSON.stringify(data);
  localStorage.setItem(key, formattedData);
}