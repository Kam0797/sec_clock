import './style.css'
import { update_time} from './update_tim'

document.querySelector('#app').innerHTML = `
  <div class="wrapper">
    <div class="container" id="clock">
      <div id="hour"></div>
      <div id="colon">:</div>
      <div id="min"></div>
      <div class="sec-container">
        <div id="sec"></div>
      </div>
    </div>
  </div>
`
update_time()
setInterval(update_time,200)

