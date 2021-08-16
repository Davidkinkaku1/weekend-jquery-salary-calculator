$().ready(function() {

    // click event handler
    // adding row on click 
    // removing row on click
    console.log('The DOM is ready');


    $('#employeeAdder').on('click', '', salaryAdder);

    // removing row on click
    $('#table').on('click', '.remover', removing);

});

let salary = [];
// Declaring an array for the objects of salary
// document.createElement('')
function salaryAdder(event) {
    console.log(event);
    // creating an object that will be passed all the properties
    let newRow = {
        firstname: $('#firstname').val(),
        lastname: $('#lastname').val(),
        Inumber: $('#Inumber').val(),
        title: $('#title').val(),
        annualsalary: $('#annualsalary').val()


    };
    // adding row on click of submit button

    salary.push(newRow);
    // calling the monthly salary calculation
    totalmonthly();

    // calling the color function on the excessal salary calculation
    // salColor();

    // adding objects to the Domain object
    $('#table').append(`
    
    
    <tr>
        <td>${newRow.firstname}</td>
        <td> ${newRow.lastname}</td>
        <td>#${newRow.Inumber}</td>
        <td>${newRow.title}</td> 
        <td>$${newRow.annualsalary}</td> 
        <td><button class="remover">Delete</button></td>
    </tr>
    
    `);


    $('#firstname').val('');
    $('#lastname').val('');
    $('#Inumber').val('');
    $('#title').val('');
    $('#annualsalary').val('');

    // if statement for color on the excessal salary calculation
    // console.log('in salColor');
    // if (total >= 20000) {
    //     $('total').css('color', 'red');
    // }

}

// removing event 
function removing(event) {
    let removed = $(event.target)
    let empRev = removed.parent().prev().prev().prev().text();
    console.log('removing event', empRev);
    removed.closest('tr').remove();

    // calculation of removed employee
    for (let i = 0; i < salary.length; i++) {
        if (Number(empRev) === Number(salary[i].annualsalary)) {
            salary.splice(i, 1);
        }
    }
    totalmonthly();

}

// TOTAL AMOUNT EVENT ON.CLICK
function totalmonthly() {
    console.log('in total monthly');
    // creating an variable for the total monthly salary
    let total = 0;
    // running through the array of salary.annual.
    for (let i = 0; i < salary.length; i++) {
        total += Number(salary[i].annualsalary) / 12;
    }
    // seing within the salary array and pulling out the annualsalary
    console.log(`total pay: ${total}`);
    // calculate the remaining budget in the displayGarage

    let postedA = $('#totalmonthly');
    postedA.empty();
    postedA.append(formatter.format(total));

    if (total >= 20000) {
        $('#totalmonthly').css('color', 'red');
    } else {
        $('#totalmonthly').css('color', 'green');
    }

} // end of totalmonthly

// creating a formatter and changing the currency format   
// Create our number formatter.
let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

}); // end of declared value to represent the currency