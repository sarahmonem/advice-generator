let cardTitle = document.querySelector('.title')
let finishdate = new Date(15 )
let newdate = new Date()
fetch(" http://localhost:3000/advices").then(function(res) { return res.json()})
.then( data => {
   
//   if(localStorage.getItem('advice')  && newdate.getMinutes() > 0 && newdate.getHours() > 0 ){
//     cardTitle.textContent = localStorage.getItem('advice')
//     console.log(newdate.getHours());
  
//   }else    {
    data.forEach(element => {
        element = data[Math.floor(Math.random()*data.length)];
         localStorage.setItem('advice' , `${element.content}`)
       console.log(element.content);
        cardTitle.textContent = element.content
       
    });
})


let dateText = document.querySelector('.date')
setInterval(() => {
   let date = new Date();
  dateText.textContent = date.toLocaleTimeString()
}, 1000);

