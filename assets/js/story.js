


// On scroll


window.addEventListener("scroll", heroScroll);

const bg = document.querySelector(".bg-container")

const trees = document.querySelector(".trees-container");

const plot = document.querySelector(".plot-container"); 

const intro = document.querySelector(".intro-container");

const overlayHero = document.querySelector(".overlay-hero");

const story = document.querySelector(".intro-text");

function heroScroll(e) {
   let y = window.scrollY;
   console.log(y);

   // Default state - on top position:

   if (y < 10) {
    
      plot.style.marginTop = "20rem";
      bg.style.backgroundSize = "100%";
      intro.style.opacity = "1";


      overlayHero.style.opacity = "0.2" ;       
      trees.style.backgroundSize = "100%";

      // bg.style.backgroundPosition = "50% 65%";      
   }

// Scroll transition states (10)

   else if (y > 10 && y < 600) {
      if (y > 10 && y < 50) {
         bg.style.backgroundSize = `105%`;
         trees.style.backgroundSize = `105%`;
         intro.style.opacity = "0.99";
         plot.style.marginTop = "20rem";

         overlayHero.style.opacity = "0.25" ; 
               // bg.style.backgroundPosition = "50% 66%";
      }
      else if (y > 50 && y < 100) {
         bg.style.backgroundSize = `110%`;  
         trees.style.backgroundSize = `110%`;
         intro.style.opacity = "0.95";
         plot.style.marginTop = "15rem";

         overlayHero.style.opacity = "0.3" ; 
         
         // bg.style.backgroundPosition = "50% 68%";

      }
      else if (y > 100 && y < 150) {
         bg.style.backgroundSize = `115%`;    
         trees.style.backgroundSize = `115%`;  
         plot.style.marginTop = "17.5rem";

         intro.style.opacity = "0.9";

         overlayHero.style.opacity = "0.4" ;   

         // bg.style.backgroundPosition = "50% 71%";
    
      }
      else if (y > 150 && y < 200) {
         bg.style.backgroundSize = `120%`; 
         trees.style.backgroundSize = `120%`; 
         intro.style.opacity = "0.8";
         plot.style.marginTop = "15rem";

         overlayHero.style.opacity = "0.55" ;  

         // bg.style.backgroundPosition = "50% 74%";
     
      }
      else if (y > 200 && y < 250) {
         bg.style.backgroundSize = `125%`; 
         trees.style.backgroundSize = `125%`; 
         intro.style.opacity = "0.68";
         plot.style.marginTop = "10rem";

         overlayHero.style.opacity = "0.6" ;  
         // bg.style.backgroundPosition = "50% 78%";

      }
           else if (y > 250 && y < 300) {
               bg.style.backgroundSize = `130%`;      
               trees.style.backgroundSize = `130%`;      
               plot.style.marginTop = "0rem";

               overlayHero.style.opacity = "0.7" ;   
               intro.style.opacity = "0.55";

               // bg.style.backgroundPosition = "50% 75%";
            }
            else if (y > 300 && y < 350) {
               bg.style.backgroundSize = `135%`;      
               trees.style.backgroundSize = `135%`;   
               plot.style.marginTop = "-7.5rem";

               overlayHero.style.opacity = "0.8" ; 
               intro.style.opacity = "0.4";

               // bg.style.backgroundPosition = "50% 90%";
            }

            else if (y > 350 && y < 400) {
               bg.style.backgroundSize = `142%`; 
               trees.style.backgroundSize = `142%`;      
               plot.style.marginTop = "-8.5rem";

               overlayHero.style.opacity = "0.9" ;   
               intro.style.opacity = "0.15";

               // bg.style.backgroundPosition = "50% 90%";
            }
            else if (y > 400 && y < 450) {
               bg.style.backgroundSize = `150%`;    
               trees.style.backgroundSize = `150%`;      
               plot.style.marginTop = "-9rem";

               overlayHero.style.opacity = "0.97" ;  
               intro.style.opacity = "0";

               // bg.style.backgroundPosition = "50% 90%";

     
            }
            else if (y > 450 && y < 500) {
               bg.style.backgroundSize = `165%`;   
               trees.style.backgroundSize = `165%`; 
               plot.style.marginTop = "-9.5rem";
     
               overlayHero.style.opacity = "1" ;      
               intro.style.opacity = "0";

               // bg.style.backgroundPosition = "50% 90%";
 
            }
            else if (y > 500 && y < 600) {
               bg.style.backgroundSize = `180%`;  
               trees.style.backgroundSize = `180%`; 
               plot.style.marginTop = "-11rem";
     
    
               overlayHero.style.opacity = "1" ;     
               
               // bg.style.backgroundPosition = "50% 90%";

            }
            }

// Finishing state here:

            else if (y > 600) {
               bg.style.backgroundSize = `200%`; 
               trees.style.backgroundSize = `200%`; 
               plot.style.marginTop = "-11rem";
     
               overlayHero.style.opacity = "1" ;
               intro.style.opacity = "0";

               // bg.style.backgroundPosition = "50% 90%";

            }

            else if (y > 600 && y < 1200) {
               // Slide up birth of idea text.
            }
}















// JS FOR MODALS


        // const imgSelect = document.querySelectorAll(".img-responsive");
        const imgSelect = document.querySelectorAll(".birth-img")//n
        // console.log(imgSelect);
        const overlay = document.querySelector('.overlay');
        const overlayImage = overlay.querySelector("img");
        const overlayClose = overlay.querySelector('.close');
        const para = overlay.querySelector('p');
    
        function handleClick(event) {
            console.log(event.currentTarget.dataset.caption);
        let id = event.target.dataset.id;
      //   console.log(id)
        // overlayClose.innerText = "✖️ close";
        // overlayImage.src = event.currentTarget.dataset.src;
        overlayImage.src = event.currentTarget.querySelector('.img').querySelector('.img-responsive').src;
        console.log(overlayImage.src);
         para.innerText = event.currentTarget.dataset.caption;//NEW LINE ADDED
        // h1.innerText = `Name: ${data[id].name}`;
        // h2.innerText = `Category: ${data[id].category}`;
        overlay.classList.add('open');
        
        
        
        }

        function handleClose(e) {
                overlay.classList.remove('open');
            }

    
        imgSelect.forEach((e, index)=>
        {
            // console.log(e);
        e.setAttribute('data-id', index);
        // console.log(data-id);
        e.addEventListener('click' , handleClick);
        
        });
        overlayClose.addEventListener('click', handleClose);
    