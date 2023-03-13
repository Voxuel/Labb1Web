
document.querySelector("#ee_bg").addEventListener('click',secretPopUp);

function secretPopUp(){
    console.log("secret!");
    document.body.style.background = "url('images/secret.jpg')"
}







function readCvFromJson(){
    fetch('../assets/cv.json')
    .then((response) => response.json())
    .then((data) => 
    {
        getWorkExperience(data["Work"]);
        getEducation(data["Education"]);
        getReferences(data["References"]);
})}

function getWorkExperience(work){
    var listDiv = document.getElementById('exp_list');
    var ul = document.createElement('ul');

    console.log(work);

    for(let i = 0; i < work.length; i++){
        var li = document.createElement('li');
        li.innerHTML = work[i].Place + '<br>' + work[i].YearsOfEmployment + '<br>' + work[i].Description;
        ul.appendChild(li)
    }
    listDiv.appendChild(ul);
}
function getEducation(edu){
    var listDiv = document.getElementById('edu_list');
    var ul = document.createElement('ul');

    console.log(edu);

    for(let i = 0; i < edu.length; i++){
        var li = document.createElement('li');
        li.innerHTML = edu[i].School + "<br>" + edu[i].Education + "<br>" + edu[i].Time;
        ul.appendChild(li)
    }
    listDiv.appendChild(ul);
}
function getReferences(refs){
    var listDiv = document.getElementById('ref_list');
    var ul = document.createElement('ul');

    console.log(refs);

    for(let i = 0; i < refs.length; i++){
        var li = document.createElement('li');
        li.innerHTML = refs[i].Company;
        ul.appendChild(li)
    }
    listDiv.appendChild(ul);
}

readCvFromJson();
