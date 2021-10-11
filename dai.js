// let click = (input) => {
//   return $.ajax(`https://repetitora.net/api/JS/Images?page=${input}&count=1`);
// }

let click = (input) => {
  const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${input}&count=1`);
  return promise.then((response) => {
    return response.data;
  });
}