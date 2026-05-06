const list = document.getElementById('u-l')
const addBtn = document.getElementById('btn')
const input = document.getElementById('input')
const errorMsg = document.getElementById('error-msg')

input.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addBtn.click()
    }
})

addBtn.addEventListener('click', function(){
    if(input.value.trim() === ''){
        errorMsg.textContent = "Enter Task"
        return
    }
    errorMsg.textContent = ''
    
    let li = document.createElement('li')
    li.textContent = input.value 
    list.appendChild(li)

    input.value = ''
})