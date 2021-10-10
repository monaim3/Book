let submitBtn=document.getElementById('Add');
let bookForm=document.getElementById('bookForm');
submitBtn.addEventListener('click', function(e){
   
    let input=document.createElement('input',);
    let input1=document.createElement('input',);
    let input2=document.createElement('input',);
    let input3=document.createElement('input',);
    let input4=document.createElement('input',);
    bookForm.appendChild(input);
    bookForm.appendChild(input1);
    bookForm.appendChild(input2);
    bookForm.appendChild(input3);
    bookForm.appendChild(input4);
    input.style.marginTop = "15px"; 
    input.style.marginRight= "5px"; 
    input1.style.marginRight= "5px"; 
    input2.style.marginRight= "5px"; 
    input3.style.marginRight= "5px"; 
    e.preventDefault();
})





















// let form=document.getElementById('bookForm');

// const handleSubmit=(e) => {
//     let title=document.getElementById('Title').value;
//     let author=document.getElementById('Author').value;
//     let isbn=document.getElementById('Isbn').value;

//      document.getElementById('td').innerHTML=title;
//      document.getElementById('ts').innerHTML=author;
//      document.getElementById('tp').innerHTML=isbn;

//    document.getElementById('Title').value='';
//      author=document.getElementById('Author').value='';
//     isbn=document.getElementById('Isbn').value='';
//     e.preventDefault();
//     }
// form.addEventListener('submit',handleSubmit);
