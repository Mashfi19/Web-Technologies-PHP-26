const form = document.getElementById("orderForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event){

    event.preventDefault();

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("idError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("departmentError").innerHTML = "";
    document.getElementById("foodError").innerHTML = "";
    document.getElementById("quantityError").innerHTML = "";
    result.innerHTML = "";

    let valid = true;

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let studentId = document.getElementById("studentId").value;
    let department = document.getElementById("department").value;
    let quantity = document.getElementById("quantity").value;

    if(name==""){
        document.getElementById("nameError").innerHTML="Enter Name";
        valid=false;
    }

    if(email=="" || !email.includes("@")){
        document.getElementById("emailError").innerHTML="Invalid Email";
        valid=false;
    }

    if(phone==""){
        document.getElementById("phoneError").innerHTML="Enter Phone Number";
        valid=false;
    }

    if(studentId==""){
        document.getElementById("idError").innerHTML="Enter Student ID";
        valid=false;
    }

    let gender = document.querySelector('input[name="gender"]:checked');

    if(gender==null){
        document.getElementById("genderError").innerHTML="Select Gender";
        valid=false;
    }

    if(department==""){
        document.getElementById("departmentError").innerHTML="Select Department";
        valid=false;
    }

    let foods = document.querySelectorAll('input[name="food"]:checked');

    if(foods.length==0){
        document.getElementById("foodError").innerHTML="Select Food";
        valid=false;
    }

    if(quantity=="" || quantity<=0){
        document.getElementById("quantityError").innerHTML="Enter Quantity";
        valid=false;
    }

    if(valid){
        let total = 0;
        let itemList = "";
        foods.forEach(function(food){
            if(food.value=="Burger"){
                total += 5;
                itemList += "Burger ($5)<br>";
            }

            else if(food.value=="Pizza"){
                total += 8;
                itemList += "Pizza ($8)<br>";
            }

            else if(food.value=="Sandwich"){
                total += 4;
                itemList += "Sandwich ($4)<br>";
            }

            else if(food.value=="French Fries"){
                total += 3;
                itemList += "French Fries ($3)<br>";
            }

            else if(food.value=="Coffee"){
                total += 2;
                itemList += "Coffee ($2)<br>";
            }

            else if(food.value=="Cold Drink"){
                total += 2;
                itemList += "Cold Drink ($2)<br>";
            }

        });

        total = total * quantity;

        result.innerHTML =
        "<h2>Order Placed Successfully!</h2>" +


        "<p><b>Customer Name:</b> " + name + "</p>" +

        "<p><b>Student ID:</b> " + studentId + "</p>" +

        "<p><b>Department:</b> " + department + "</p>" +

        "<p><b>Selected Items:</b>" + itemList + "</p>" +

        "<p><b>Quantity:</b> " + quantity + "</p>" +

        "<p><b>Total Bill:</b> $" + total + "</p>";

        form.reset();

    }

});