const resultNode = document.querySelector('#result');
const btn = document.querySelector('.j-btn');

const localDB = localStorage.getItem('url','data');
if(localDB){
    getImg(JSON.parse(localDB));
}

async function getImg(data){
    for (item of data){
        let img =document.createElement('img');
        img.setAttribute('src', item.download_url);
        resultNode.innerHTML = "";
        setTimeout(() => {
            resultNode.append(img);
        })

    };
}

btn.addEventListener('click', () => {
    const value1 = document.getElementById('page').value;
    const value2 = document.getElementById('limit').value;

    let str = document.getElementById('result');
        str.textContent = '';
        if (!(value1 >= 1 && value1 <= 10) && (value2>=1 && value2<=10)){
            str.innerHTML = `<p>Номер страницы вне диапазона от 1 до 10</p>`;
            return;
        } else if(!(value2 >= 1 && value2 <= 10) && (value1 >= 1 && value1 <= 10)) {
            str.innerHTML = `<p>Лимит вне диапазона от 1 до 10</p>`;
            return;
        } else if(!(value1 >= 1 && value1 <= 10 && value2 >= 1 && value2 <= 10)) {
            str.innerHTML = `<p>Номер страницы и лимит вне диапазона от 1 до 10</p>`;
            return;
        } else {
           
            let url = `https://picsum.photos/v2/list?page=${value1}&limit=${value2}`;
            fetch(url)
                .then((response) => {
                    res = response.json();
                    return res;
                    
                })
                .then((data) => {
                    getImg(data);
                    localStorage.setItem('url', JSON.stringify(data));
                })

               .catch(() => {
                alert('Что-то пошло не так, повторите попытку позже');
                });
        }
    });
        