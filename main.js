var names=[];
function submit(){
    var names1=document.getElementById("name_of_the_student_1").value;


    var names2=document.getElementById("name_of_the_student_2").value;


    var names3=document.getElementById("name_of_the_student_3").value;


    var names4=document.getElementById("name_of_the_student_4").value;

     names.push(names1)


     names.push(names2)

     
     names.push(names3)


     names.push(names4)

     document.getElementById("display_name").innerHTML=names;

     document.getElementById("submit_button").style.display="none";
     
     document.getElementById("sort_button").style.display="inline-block";

}
     function sorting(){
     names.sort();
      console.log(names);
      document.getElementById("display_name").innerHTML=names;


     }