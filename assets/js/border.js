
pic.addEventListener ("click", function(){
const picStatus = document.querySelector("#pic")
if (picStatus.style.border === '' ) {
    pic.style.border = '2px solid red';
}
else{
    pic.style.border = '';
}
})
