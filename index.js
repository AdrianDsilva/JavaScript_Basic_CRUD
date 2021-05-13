
let selectedRow = null
// fetch the input
function readFormData(){
    let empData={};
    empData['firstName']=document.getElementById('firstName').value;
    empData['lastName']=document.getElementById('lastName').value;
    empData['salary']=document.getElementById('salary').value;
    empData['city']=document.getElementById('city').value;
    return empData;

}

let inputValues={}
// on submit button click
function onFormSubmit(){
    inputValues=readFormData();

    let validation=validateFields(inputValues)
    if (validation==true){
   
        if (selectedRow== null){
            insertinTable(inputValues);
            //prevent refresh 
            event.preventDefault();
           
           //After insert clear the values
           clearRow()
           
        
        }
        else{
            //call update function
          updateRow()
          clearRow()
          selectedRow=null
        }
        
    }
    else{
        alert("Please enter the appropriate values:")
    }
        
};


function clearRow(){
           document.getElementById('firstName').value=""
           document.getElementById('lastName').value=""
           document.getElementById('salary').value=""
           document.getElementById('city').value=""

}

function updateRow(){
    selectedRow.cells[0].innerHTML=inputValues.firstName;
    selectedRow.cells[1].innerHTML=inputValues.lastName;
    selectedRow.cells[2].innerHTML=inputValues.salary;
    selectedRow.cells[3].innerHTML=inputValues.city;


}
//validate Fields
function validateFields(inputValues){

    let message=[]
    if(inputValues.firstName.length>30 || inputValues.firstName.length==0 ){
        message.push('First  Name should not be more than 30 char');
    } if ( inputValues.lastName.length>30 || inputValues.lastName.length == 0){
        message.push('Last  Name should not be more than 30 char');
    }  if ( inputValues.salary.length>6 || inputValues.salary.length == 0){
        message.push('Salary should not be more than 6 digits');
    } if( inputValues.city.length>20 || inputValues.city.length == 0){
        message.push('City should not be more than 20 char');
    }
    
    if(message.length>0){
        
        alert(message.join(','))
        return false;
    }else{
        return true;
    }
    
   // let resultfirstName = /^[a-zA-Z ]+$/.test( inputValues.firstName);
   // let resultLastName= /^[a-zA-Z ]+$/.test( inputValues.lastName);
    //let resultsalary= /^\d{1,6}(?:\.\d{0,2})?$/.test( inputValues.salary);
    //let resultcity=/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test( inputValues.city);
    
}

function onDelete(val){
    deleteRow=val.parentElement.parentElement
    document.getElementById("employeeList").deleteRow(deleteRow.rowIndex)
}

function onEdit(val){
     selectedRow = val.parentElement.parentElement;

    document.getElementById("firstName").value=selectedRow.cells[0].innerHTML;
    document.getElementById("lastName").value=selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value=selectedRow.cells[2].innerHTML;
    document.getElementById("city").value=selectedRow.cells[3].innerHTML;
    
}




function insertinTable(inputValues){
    var table=document.getElementById('employeeList').getElementsByTagName('tbody')[0];
    var rows=table.insertRow(table.length);

    cell1=rows.insertCell(0);
    cell1.innerHTML=inputValues.firstName;

    cell2=rows.insertCell(1);
    cell2.innerHTML=inputValues.lastName;

    cell3=rows.insertCell(2);
    cell3.innerHTML=inputValues.salary;

    cell4=rows.insertCell(3);
    cell4.innerHTML=inputValues.city;

    cell5=rows.insertCell(4);
    cell5.innerHTML=`<a onClick ="onEdit(this)" >Edit</a>
                    <a onClick ="onDelete(this)" >Delete</a>`;



}
