

function readCvFromJson(){
    fetch('../assets/cv.json')
    .then((response) => response.json())
    .then((data) => 
    {
        getWorkExperience(data["Work"]);
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
