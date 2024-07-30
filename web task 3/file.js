//global variable(outside the function)
 var names="ABC";
 var ages=30;
 var weight="50kg";



function clickme() {
    console.log("global variable");
    console.log(names);
    console.log(ages);
    console.log(weight);
    
    //local variavble(inside the function)
    console.log("local variable");
    var name1="Navya";
    var age=22;
    var weight1="48kg";
    console.log(name1);
    console.log(age);
    console.log(weight1);

    
   
}

function getName(){
    //objects
    
    let subjects={'sub1':75,"sub2":80,"sub3":97,"sub4":92,"sub5":95};
   
    console.log("sub1: ",subjects.sub1);
    console.log("sub2: ",subjects.sub2);
    console.log("sub3: ",subjects.sub3);
    console.log("sub4: ",subjects.sub4);
    console.log("sub5: ",subjects.sub5);


   let array1=["Swamy Vivekanada English School","Saandeepani English High School","Pace UM pu collage","JNNCE"];
   array1.forEach(item =>console.log(item));

}