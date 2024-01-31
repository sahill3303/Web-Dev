let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Enter the name of student');
    namasteBtn.textContent = 'Roll No.1:' + name;
}