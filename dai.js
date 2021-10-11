let click = (input, onDataRecieved) => {
  $.ajax(`https://repetitora.net/api/JS/Images?page=${input}&count=1`, {
    success: function(data)  {
      onDataRecieved(data);
    }
  });
}