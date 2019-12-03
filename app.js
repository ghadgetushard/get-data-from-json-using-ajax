document.getElementById('button1').addEventListener('click',loadcustomer);

// function loadcustomer
function loadcustomer() {

    const xhr = new XMLHttpRequest();

    //open
    xhr.open('GET','customer.json',true);


    xhr.onload = function() {
        
        if(this.status === 200) {
            let customer = JSON.parse(this.responseText);
            // console.log(this.responseText)
            output = `
                <ul>
                <li>ID : ${customer.id}</li>
                <li>Name : ${customer.name}</li>
                <li>Company : ${customer.company}</li>
                <li>Phone : ${customer.phone}</li>
            </ul>
            `;

            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();
}

document.getElementById('button2').addEventListener('click',loadcustomers);

// function load Customers

function loadcustomers() {
    
    const xhr = new XMLHttpRequest();
    
    //open 
    xhr.open('GET','customers.json', true) // true is for asynchronous

    xhr.onload = function() {
        if(this.status === 200) {

            let customers = JSON.parse(this.responseText);
            
            let output = '';

            customers.forEach(function(customer){
                output += `
                    <ul>
                        <li>id : ${customer.id}</li>
                        <li>name : ${customer.name}</li>
                        <li>company : ${customer.company}</li>
                        <li>phone number : ${customer.phone}</li>
                    </ul>
                `;
            });

            document.getElementById('customers').innerHTML = output;
        }
    }

    xhr.send();

}