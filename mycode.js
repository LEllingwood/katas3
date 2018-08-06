let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

// kata 1
function k1() {
    let destination = document.getElementById("k1");
    let newK1 = document.createElement("p");
    
    for (let i = 1; i <= 20; i++) {
    
        newK1.appendChild(document.createTextNode(i + ", "));       
    }
   
    removeComma(newK1);
    destination.appendChild(newK1);
    
}
k1()

function removeComma(paragraph) {
    paragraph.textContent = paragraph.textContent.slice(0, paragraph.textContent.length - 2);
}


// // kata 2
function k2() {
    let destination = document.getElementById("k2");
    let newK2 = document.createElement("p");
    for (let i = 2; i < 21; i+=2) {
        newK2.appendChild(document.createTextNode(i + ", "));
    }

    removeComma(newK2);
    destination.appendChild(newK2);
}

k2()


// //  kata 3

function k3() {
    let destination = document.getElementById("k3");
    let newK3 = document.createElement("p");
    for (let i = 1; i < 21; i+=2) {
        newK3.appendChild(document.createTextNode(i + ", "));
    }

    removeComma(newK3);
    destination.appendChild(newK3);
}

k3()

// // kata 4
function k4() {
    let destination = document.getElementById("k4");
    let newK4 = document.createElement("p");
    for (let i = 5; i < 101; i+=5) {
        newK4.appendChild(document.createTextNode(i + ", "));
    }

    removeComma(newK4);
    destination.appendChild(newK4);
}

k4()

// // kata 5
function k5() {
    let destination = document.getElementById("k5");
    let newK5 = document.createElement("p");
    for (let i = 1; i < 11; i++) {
    
        newK5.appendChild(document.createTextNode((i*i) + ", "));
    }

    removeComma(newK5);
    destination.appendChild(newK5);
}

k5()

// // kata 6
function k6() {
    let destination = document.getElementById("k6");
    let newK6 = document.createElement("p");
    for (let i = 20; i > 0; i--) {
        newK6.appendChild(document.createTextNode(i + ", "));
    }
    removeComma(newK6);
    destination.appendChild(newK6);
}
k6()

// // kata 7
function k7() {
    let destination = document.getElementById("k7");
    let newK7 = document.createElement("p");
    for (let i = 20; i > 0; i-=2) {
        newK7.appendChild(document.createTextNode(i + ", "));
    }

    removeComma(newK7);
    destination.appendChild(newK7);
}

k7()

// // kata 8

function k8() {
    let destination = document.getElementById("k8");
    let newK8 = document.createElement("p");
    for (let i = 19; i > 0; i-=2) {
        newK8.appendChild(document.createTextNode(i + ", "));
    }

    removeComma(newK8);
    destination.appendChild(newK8);
}

k8()

// // kata 9

function k9() {
    let destination = document.getElementById("k9");
    let newK9 = document.createElement("p");
    for (let i = 100; i > 0; i-=5) {
        newK9.appendChild(document.createTextNode(i + ", "));
    }

    removeComma(newK9);
    destination.appendChild(newK9);
}

k9()

// // kata 10
function k10() {
    let destination = document.getElementById("k10");
    let newK10 = document.createElement("p");
    for (let i = 10; i > 0; i--) {
        newK10.appendChild(document.createTextNode((i*i) + ", "));
    }

    removeComma(newK10);
    destination.appendChild(newK10);
}

k10()

// kata 11
function k11() {
    let destination = document.getElementById("k11");
    let newK11 = document.createElement("p");
    
    for (let i = 0; i < 19; i++) {
    
        newK11.appendChild(document.createTextNode(sampleArray[i]+", "));
    }

    removeComma(newK11);
    destination.appendChild(newK11);
}

k11()

// kata 12
function k12() {
    let destination = document.getElementById("k12");
    let newK12 = document.createElement("p");
    
    for (let i = 0; i < 19; i++) {
    if (sampleArray[i]%2 === 0)
   
        newK12.appendChild(document.createTextNode(sampleArray[i]+", "));
    }

    removeComma(newK12);
    destination.appendChild(newK12);
}

k12()

// kata 13

function k13() {
    let destination = document.getElementById("k13");
    let newK13 = document.createElement("p");
    
    for (let i = 0; i < 19; i++) {
    if (sampleArray[i]%2 !== 0)
   
        newK13.appendChild(document.createTextNode(sampleArray[i]+", "));
    }

    removeComma(newK13);
    destination.appendChild(newK13);
}

k13()
// kata 14
function k14() {
    let destination = document.getElementById("k14");
    let newK14 = document.createElement("p");
    
    for (let i = 0; i < 19; i++) {
      newK14.appendChild(document.createTextNode((sampleArray[i] * sampleArray[i]) +", "));
    }

    removeComma(newK14);
    destination.appendChild(newK14);
}

k14()

// kata 15
function k15() {
    let destination = document.getElementById("k15");
    let newK15 = document.createElement("p");
    let sum = 0;
    for (let i = 0; i <= 20; i++) {
        sum += i;
      
    }
    newK15.appendChild(document.createTextNode(sum));
    destination.appendChild(newK15);
}

k15()

// // // kata 16

function k16() {
    let destination = document.getElementById("k16");
    let newK16 = document.createElement("p");
    let sum = 0;
    for (let i = 0; i < sampleArray.length; i++) {
        sum += sampleArray[i];
      
    }
    newK16.appendChild(document.createTextNode(sum));
    destination.appendChild(newK16);
}

k16()
// kata 17
function k17() {
    let destination = document.getElementById("k17");
    let newK17 = document.createElement("p");
    const min = Math.min.apply(Math,sampleArray);
    for (let i = 0; i < sampleArray.length; i++) {
     
    }
    newK17.appendChild(document.createTextNode(min));
    destination.appendChild(newK17);
}
k17()

// kata 18
function k18() {
    let destination = document.getElementById("k18");
    let newK18 = document.createElement("p");
    const max = Math.max.apply(Math,sampleArray);
    for (let i = 0; i < sampleArray.length; i++) {
     
    }
    newK18.appendChild(document.createTextNode(max));
    destination.appendChild(newK18);
}
k18()

// kata 19
function k19() {
    let destination = document.getElementById("k19");
    let newK19 = document.createElement("div");
  
    for (let i = 0; i <= 20; i++) {
        newK19.style.width = 100 + "px";
        newK19.style.height = 20 + "px";
        newK19.style.backgroundColor = "gray";
    
    
        // newK19.appendChild(document.createTextNode(newK19));
        // newK19.appendChild(k19)
    }
    destination.appendChild(newK19);
}

k19()