// const group = document.getElementsByClassName('span');
// const div1 = document.getElementById('id');
// const p = document.querySelector('p')
// const img = document.querySelector('img')
// p.setAttribute()
// img.setAttribute('src','https://images7.alphacoders.com/423/thumb-1920-423250.jpg')
// var x =  img.getAttribute('title');
// p.className = 'selected'
// p.classList.remove('p-class')
// p.classList.add('selected')
// p.classList.toggle('selected')
// setTimeout(()=>{
//     p.classList.toggle('selected')
// },3000)
// div1.appendChild(p)


var users = [
    {
        name:'Narek',
        lastName:'Petrosyan',
        age:20,
    },
    {
        name:'Vahan',
        lastName:'Teryan',
        age:22
    },
    {
        name:'Poghos',
        lastName:'Poghosyan',
        age:23,
    },
    {
        name:'Vahan',
        lastName:'Teryan',
        age:22
    },
    {
        name:'Poghos',
        lastName:'Poghosyan',
        age:23,
    },
    {
        name:'Narek',
        lastName:'Petrosyan',
        age:20,
    },
    {
        name:'Poghos',
        lastName:'Poghosyan',
        age:23,
    },
];

let th = document.querySelectorAll("th")
// .forEach(el=> el.style.border = "1px solid black");
// users.forEach((el)=>{
//     console.log(Object.keys(el));
//      for (const key in el) {

//         let tHead = document.querySelector("#div1>table>thead").innerHTML=
//     }
// })
// let tBody = document.querySelector("#div1>table>tbody");
users.forEach((el)=>{
    let {name,lastName,age}=el;
    let tr = `<tr><td>${name}</td><td>${lastName}</td><td>${age}</td></tr>`
    let tBody = document.querySelector("#div1>table>tbody").innerHTML+=tr;
    // tBody.innerHTML+=tr;
})

// for (let i=0; i < users.length; i++) {
//     let t = appendTr(users[i]);
//     tBody.append(t);
// }
// function appendTr({name,lastName,age}){

//     let tr = document.createElement("tr")
//     for (const key in a) {
//         let td = document.createElement("td");
//         td.style.border = "1px solid black";
//         td.innerText = a[key];
//         tr.append(td);
//     }
//     return tr;
// }
///1 tarberak

// for (let i=0; i < users.length; i++) {
//     let t = appendTr(users[i]);
//     tBody.append(t);
// }
// function appendTr(a){
//     let tr = document.createElement("tr")
//     for (const key in a) {
//         let td = document.createElement("td");
//         td.style.border = "1px solid black";
//         td.innerText = a[key];
//         tr.append(td);
//     }
//     return tr;
// }



///erkrord tarberak

// let t="";
// for (let i=0; i < users.length; i++) {
//     t += appendTr(users[i]);
// }
// tBody.innerHTML=t
// function appendTr(a){
//     let tr = "<tr>";
//     for (const key in a) {
//         tr+=` <td>${a[key]}</td>`
//     }
//     return tr+"</tr>"
// }
// let l1 =document.body.childNodes;
// let l2=document.body.children
// console.log(l1);
// console.log(l2);
// console.dir(document.body)