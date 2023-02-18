import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

  // const target = document.querySelector('#target');
  // const container = document.querySelector('#container');

  // container.onscroll = function() {
  //   if (container.scrollTop >= target.offsetTop) {
  //     target.classList.add('show');
  //     console.log('show')
  //   } else {
  //     console.log('not show')
  //     target.classList.remove('show');
  //   }
  // };
  const target = document.querySelectorAll(".t");

  window.onscroll = function() {
    for(let i=0; i<=target.length; i++){

      if (window.pageYOffset > target[i].offsetTop - window.innerHeight) {
        target[i].classList.add("show");
        console.log(target[i])
      }
    }
  };
  
  window.onpageshow = function() {
    for(let i=0; i<=target.length; i++){

      if (window.pageYOffset > target[i].offsetTop - window.innerHeight) {
        target[i].classList.add("show");
        
        console.log(target[i])
      }
    }
  };

  function Clicked(){
    const navitems = document.getElementsByClassName('navitems')
    navitems.classList.add("show");

  }

