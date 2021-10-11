let btn = document.getElementById('btn');
let input = document.getElementById('input');

let onDataRecieved = (data) => {
  data.forEach(el => {
    const img = document.createElement('img');
    img.src = el.thumbnail;
    document.querySelector('body').appendChild(img);
  })
}

btn.addEventListener("click", () => {
  const promise = click(input.value);
  promise.then(onDataRecieved)
});
