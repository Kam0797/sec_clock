export function update_time() {
  const now = new Date();
  
  let hour = now.getHours()
  if (hour>12) hour-=12
  else if(hour == 0) hour = 12;
  hour = hour.toString()
  const min = now.getMinutes().toString().padStart(2,'0');
  const sec = now.getSeconds().toString().padStart(2,'0');

  // document.querySelector(".container").textContent = tim;
  

  // let hour = '10';
  // let min = "00";
  // let sec = "00";
  document.querySelector("#hour").textContent = hour;
  document.querySelector("#min").textContent = min;
  document.querySelector("#sec").textContent = sec;
} 

