const firstName = document.getElementById("firstname");  
const startingBid = document.getElementById("startingbid"); 
const education = document.getElementById("education"); 
const networth = document.getElementById("networth"); 
const skills = document.getElementsByClassName("skills"); 
const age = document.getElementsByName("age");
const button = document.getElementById("submit");
const love_letter = document.getElementById("love_letter");

const calculate = () => {
    let name = firstName.value; 
    let price = Number(startingBid.value); 
    let letter = love_letter.value;
    if (name != "") { 
        price = getNewPrice(price, education);
        price = getNewPrice(price, networth);
        price = getNewPrice(price, skills);
        price = getNewPrice(price, age);
        price = getNewPrice(price, reputation);
        let person = {
            fullName: name,
            finalPrice: price,
            loveLetter: letter
        }
        document.getElementById("result").innerHTML = `The price for ${person.fullName} is ${person.finalPrice}. Your love letter is: ${person.loveLetter}`;
    }
    else {
        alert("Name and starting bid cannot be empty");
    }
}

const getNewPrice = (price, education) => {
    return price * Number(education.value);
}

const getNewPrice = (price, networth) => {
    return price * Number(networth.value);
}

const getNewPrice = (price, age) => {
    return price * Number(age.value);
}

const getNewPrice = (price, reputation) => {
    return price * Number(reputation.value);
}

const reducer = (accumulator, skills) => {
    return accumulator + Number(skills.value);
}
const filteration = (skills) => {
    return skills.checked;
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

const getCheckboxValuesFilterReduce = (html_collection, price) => { 
    let list = Array.from(html_collection).filter(filteration)
    let result = list.reduce(reducer, price)
    return result;
}



const getRadioValue = (node_list, price) => {  
    node_list.forEach(item => {
        if (age.checked) {
            price = price * Number(age.value)
        }
    })
    return price;
}


button.addEventListener("click", calculate)


