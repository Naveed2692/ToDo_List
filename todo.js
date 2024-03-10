var item = document.querySelector("#item")
var toDoBox = document.querySelector("#to-do-box")
item.addEventListener(
    "keyup",
    function add(event){
        if(event.key == "Enter"){
            addTodo(this.value)
            this.value= ""
        }
    }
)
var addTodo = (item) =>{
    var listItem = document.createElement('li');
    listItem.innerHTML = `
    <li>
    ${item} 
    <i class="fa fa-times" aria-hidden="true"></i>
      </li>
    `;
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function () {
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem)
    
}