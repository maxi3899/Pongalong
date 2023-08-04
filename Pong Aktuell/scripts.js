// Script Navbar//
window.addEventListener('DOMContentLoaded', event => {

    // Navbar verkleinert sich
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();

    // navbar verkleinert sich bei scrollen
    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };


    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});




//Script Warteschlange

function namenList() {

    var array1 = localStorage.getItem("storage");
    var namen1 = document.getElementById("namen1").value;
    var namen2 = document.getElementById("namen2").value;
    var arrayNew;

      arrayNew = namen1 + " / " + namen2;
      localStorage.setItem("storage", arrayNew);
      var name1 = document.createElement("li");
      name1.innerHTML = localStorage.getItem("storage");
      document.getElementById("li").appendChild(name1);

    document.getElementById("button1").disabled = true

console.log(localStorage.getItem("storage"));
}

function leeren() {
    localStorage.clear();
}

function loschen() {
    var ulElem = document.getElementById("li");
    ulElem.removeChild(ulElem.childNodes[0]);
}


//Aktiviert Warteschlange Abschicken Button

function success() {
	 if(document.getElementById("namen1").value==="" || document.getElementById("namen2").value==="")  {
            document.getElementById("button1").disabled = true;
        } else {
            document.getElementById("button1").disabled = false;
        }
    }


    














//   Aktiviert auslosung mit 4 namen

    function success3() {
        if(document.getElementById("spieler1").value==="" ||
        document.getElementById("spieler2").value==="" ||
        document.getElementById("spieler3").value==="" ||
        document.getElementById("spieler4").value==="") {
                document.getElementById("button3").disabled = true
            } else {
                document.getElementById("button3").disabled = false;
        }
      }




//Script für Auslosung


      function hinzufügen() {

      var teams1 = document.getElementById("teams1").value;


      if(sessionStorage.getItem("storage1") != null){
      arrayNew2 = sessionStorage.getItem("storage1") + "/" + teams1;
      }
      else{
          arrayNew2 = teams1 ;
      }

      sessionStorage.setItem("storage1", arrayNew2);




      console.log(sessionStorage.getItem("storage1"));



      var namenFürAuslosung  = document.createElement("li");
      namenFürAuslosung.innerHTML = teams1;
      document.getElementById("namenFürAuslosung").appendChild(namenFürAuslosung);


      }



      function leeren1(){
          sessionStorage.clear();
          location.reload();
      }

      function auslosen(){
          var arraySplited = sessionStorage.getItem("storage1").split("/");




          let alleResults = [];
          let neueReihenfolge =[];


          for (let index = 0; index < 100; index++){



              let max = arraySplited.length -1;
              let min = 0;
              let step1 = max - min +1;
              let step2 = Math.random()*step1
              let result = Math.floor(step2)+ min;

              if (alleResults.includes(result) == false){
                  neueReihenfolge.push(result);
              }




              alleResults.push(result)



          }

      console.log(neueReihenfolge);

      let newNeu = [];
      for (let index = 0; index < neueReihenfolge.length; index++){
          let indexZahl = neueReihenfolge[index];





          //var interator = newNeu.values();



      if (index %2 != 0){
          newNeu.push(" + " + arraySplited[indexZahl] + ".");

      }
      else{


          newNeu.push(arraySplited[indexZahl]);
      }



          }

          var newNeuString = newNeu.toString();

          var newNeu1 = newNeuString.replace(/,/g, "").split(".");

          var newNeu2 = newNeu1.values();

        //  for (let letter of interator) {
        //      console.log(letter);
        //    }

        for (let letter of newNeu2) {



      var auslosung = document.createElement("li")

      auslosung.innerHTML = letter;
      document.getElementById("auslosungErgebnis").appendChild(auslosung);
        }
        sessionStorage.clear();
      }


  //Aktiviert auslosung mit 1 Namen

  
