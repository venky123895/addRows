const sampletable=document.getElementById('Table');
const button=document.getElementById('but');
button.addEventListener('click',function(){
    let addtr=document.createElement('tr');
    let addtd1=document.createElement('td');
    let addtd2=document.createElement('td');
    addtd1.innerText='Row1 cell1';
    addtd2.innerText='Row2 cell2';
    addtr.appendChild(addtd1);
    addtr.appendChild(addtd2);
    sampletable.appendChild(addtr);

    
})