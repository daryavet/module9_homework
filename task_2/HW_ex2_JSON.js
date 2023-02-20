
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);
const list = [...data.list];

list.forEach(function(item,i){
  list[i].age = Number(list[i].age)
});
const result = {
  "list": list
}

console.log(result)