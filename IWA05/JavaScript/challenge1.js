const FREE_WARNING = 'Free shipping only applies to single customer orders';     //added const variable
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';      //added const variable
const NONE_SELECTED =0;       //added const variable

let shipping = null;
let currency = null;
let customers = 1;
let location = 'NK';

// if (location = RSA) { shipping === 400 && currency === 'R' }

// if location = NAM
// shipping = 600 
// else shipping = 800

if (location === 'RSA') {
    shipping = 400;
    currency = 'R';
} else if (location === 'NAM'){
    shipping = 600;
    currency = '$';
} else if (location !== 'RSA' || location !== 'NAM') {
    shipping = 800;
    currency = '$'
}


const shoes = 300 * 1;
const toys = 100 * 5;      //added =
const shirts = 150 * NONE_SELECTED;       //removed ''
const batteries = 35 * 2;      //added = 
const pens = 5 * NONE_SELECTED;        //removed '' 

// shipping = null
// currency = $

if (shoes + batteries + pens + shirts + toys >= 1000 ) {
    location === 'RSA' && customers === 1;
    shipping === 0;
}

if (shoes + batteries + pens + shirts + toys >= 60 ) {
    location === 'NAM' && customers === 1;
    shipping === 0;
}
    


if (shipping === 0 && customers !== 1) {
    console.log(FREE_WARNING)
}

// location = 'NK' ? console.log(BANNED_WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + toys + shipping)
if (location === 'RSA') {
    console.log('price', currency, shoes + batteries + pens + shirts + toys + shipping)
} 

else if (location === 'NAM') {
    console.log('price', currency, shoes + batteries + pens + shirts + toys + shipping)
} 

else if (location === 'NK') {
    console.log(BANNED_WARNING)
}
