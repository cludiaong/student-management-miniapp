
var a;
function show_hide()
{
    if (a==1){
        document.getElementById( "studentid").style.display="inline";
        return a=0;
    }
        else{
            document.getElementById("studentid").style.display="none";
            return a=1;
        }

}



const SubmitButton= document.querySelector("#submit");

SubmitButton.addEventListener('click'),function() {
    let user_nim = document.querySelector("#nim");
    let user_name = document.querySelector("#FullName");
    let user_gender = document.querySelector('input[name="gender"]:checked').value;
    let user_faculty = document.querySelector("#faculty").options[document.querySelector("#faculty").selectedIndex].value;
    let user_program_study = document.querySelector("#program-study").optioins[document.querySelector("#program-study").selectedIndex].value;

}



user.push({

    
})







