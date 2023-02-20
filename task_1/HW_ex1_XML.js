

const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;


const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNodes = listNode.querySelectorAll("student");
const list =[];
studentNodes.forEach( function (studentNode) {
  
  const nameNode = studentNode.querySelector("name"),
        firstNameNode = studentNode.querySelector("first"),
        secondNameNode = studentNode.querySelector("second"),
        ageNode = studentNode.querySelector("age"),
        profNode = studentNode.querySelector("prof");
  
  const langAttr = nameNode.getAttribute('lang');
  
 
  

  list.push({
    name: `${firstNameNode.textContent} ${secondNameNode.textContent}`,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr,
   
  });
});

const resultDB = {
  list: list
};
console.log('DB', resultDB);