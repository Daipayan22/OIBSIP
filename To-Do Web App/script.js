let input = document.getElementById('inputs');
let lists = document.getElementById('list');

function addTask(){
    if(input.value === "")
    {
        alert("You need to write something!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        lists.appendChild(li);

        let af = document.createElement('af');
        af.innerHTML = "\u00d7";
        li.appendChild(af);
    }
    input.value = "";
    save();
}

lists.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("check");
        save();
    }
    else if(e.target.tagName === "AF")
    {
        e.target.parentElement.remove();
        save();
    }
},false);

function save(){
    localStorage.setItem('data', lists.innerHTML);
}

function showList(){
    lists.innerHTML = localStorage.getItem('data');
}
showList();