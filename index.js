let btn = document.getElementById('btn');
let input = document.getElementById('input');



let clickk = () => {
  $.ajax(`https://repetitora.net/api/JS/Images?page=${input.value}&count=1`, {
    success: function (data) {
      data.forEach(el => {
        const img = document.createElement('img');
        img.src = el.thumbnail;
        document.querySelector('body').appendChild(img);
      })
    }
  });
}

btn.addEventListener("click", clickk);
