const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");
const date= document.getElementById("date");
const dateNow = new Date();
const day = dateNow.toLocaleDateString('en-In', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

date.textContent=day
const clock = setInterval(function time() {
  const dateNow = new Date();
  console.log(dateNow)
   let date=dateNow.getDate()
  let month=dateNow.getMonth()+1
  let hr = dateNow.getHours();
  let min = dateNow.getMinutes();
  let sec = dateNow.getSeconds();
//     console.log(date,month)
//     // const dateNow = new Date();
// const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const month = monthNames[dateNow.getMonth()];

  
  hr = hr.toString().padStart(2, "0");
  min = min.toString().padStart(2, "0");
  sec = sec.toString().padStart(2, "0");

  const timeString = `${hr}:${min}:${sec}`;
   hour.textContent = hr;
   minute.textContent = min;
   seconds.textContent = sec;
  //  console.log(timeString)
}, 1000);
