const firstName = document.getElementById("firstname");  
const startingBid = document.getElementById("startingbid"); 
const education = document.getElementById("education"); 
const networth = document.getElementById("networth"); 
const skills = document.getElementsByClassName("skills"); 
const age = document.getElementsByName("age");
const button = document.getElementById("submit");
const love_letter = document.getElementById("love_letter");

const getNewPrice = (price, criteria) => {
    return price * Number(criteria.value);
}



const getCheckboxValuesForLoop = (html_collection, price) => { 
    for (let i=0; i < html_collection.length; i++) {  
        if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
            price = price + Number(html_collection[i].value)
        }
        else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) {
            price = price * Number(html_collection[i].value)
        }
    }
    return price;
}


const getCheckboxValuesFilterReduce = (html_collection, price) => { // create a function that accepts your HTMLCollection of elements and the current price
    let list = Array.from(html_collection).filter(filteration) // this method turn your HTMLCollection into array
    let result = list.reduce(reducer, price)
    return result;
}

const reducer = (accumulator, item) => {
    return accumulator + Number(item.value);
}
const filteration = (item) => {
    return item.checked;
}


const getRadioValue = (node_list, price) => {  
    node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value)
        }
    })
    return price;
}

const calculate = () => {
    let name = firstname.value; 
    let price = Number(startingBid.value); 
    let letter = love_letter.value;
    if (name != "") { 
        price = price * Number(education.value)
        price = price * Number(networth.value)
        price = getCheckboxValuesForLoop(skills, price)
        price = getRadioValue(age, price)
        price = getCheckboxValuesFilterReduce(reputation, price)
        let person = {
            firstname: name,
            prices: price,
            love_letter: letter
        }
        document.getElementById("result").innerHTML = `The price for ${person.firstname} is ${person.prices}. Your love letter is: ${person.love_letter}`;
    }
    else {
        alert("Name and starting bid cannot be empty");
    }
}



button.addEventListener("click", calculate)


