    function sayHello(){ // Finished
      const changeHello = document.getElementById("main-titlee")
      const changeLoading = document.getElementById("status-one")
      changeHello.innerText = "สวัสดี Tee!"
      changeLoading.innerText = "Finished Loading"
    }
    
    function hiName(){// Finished
      const name = document.getElementById("nameInput-two").value;
      const addHello = document.getElementById("output-two")
      addHello.innerText = "สวัสดี "+ name
    }
    
    function changeStyle(){ // Finish
      const styleChange = document.getElementById("title-three").style.color = "blue";
      const twoStyleChange = document.getElementById("title-three").style.fontSize = "40px";
    }
