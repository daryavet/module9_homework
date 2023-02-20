const btn = document.querySelector('.j-btn');
const resultNode = document.getElementById("j-result");
const width = document.getElementById('value1');
const height = document.getElementById('value2');


    btn.addEventListener('click',() => {

        const value1 = +width.value;
        const value2 = +height.value;
        
        if (value1>=100 && value1<=300 && value2>=100 && value2<=300){
           
            fetch(`https://picsum.photos/${value1}/${value2}`) 
             
            .then((response) => {
                resultNode.innerHTML = `<img src="${response.url}"/>`;
           })
            .catch(() => {
        
                alert('Что-то пошло не так, повторите попытку позже');
                
            })  

        } else if (isNaN(value1)||isNaN(value2)){
            resultNode.innerHTML =`<p>Вы ввели не число, проверьте правильность ввода</p>`
           
        } else {
            resultNode.innerHTML =`<p>одно из чисел вне диапазона от 100 до 300</p>`
        }
        
    });






 
