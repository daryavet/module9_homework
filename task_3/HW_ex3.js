function useRequest(callback) {
    const value = document.querySelector("input").value;
    const reUrl = `https://picsum.photos/v2/list?limit=${value}`;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', reUrl, true);
    
    xhr.onload = function() {
        if (value<1 || value>10){
            alert("число вне диапазона от 1 до 10");
            return;
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
              callback(result);
            }
        }
      
    };
    
    xhr.send();
  };
  
  // Ищем ноду для вставки результата запроса
  const resultNode = document.querySelector('.j-result');
  // Ищем кнопку, по нажатии на которую будет запрос
  const btnNode = document.querySelector('.j-btn-request');
  
  /**
    * Функция обработки полученного результата
    * apiData - объект с результатом запроса
    */
  function displayResult(apiData) {
    let cards = '';
    // console.log('start cards', cards);
    
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>Автор: ${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;
    });
    
    // console.log('end cards', cards);
      
    resultNode.innerHTML = cards;
  }
  
  // Вешаем обработчик на кнопку для запроса
  btnNode.addEventListener('click', () => {
    useRequest(displayResult);
  })

