var btn = document.querySelector('.btn');
var check = document.querySelector("input[name=checkbox]");
var crrncy = {
    'BDT': {
        'USD': 0.012,
        'EUR': 0.0097,
        'CAD': 0.014,
        'BDT': 1
    },
    'USD': {
        'USD': 1,
        'EUR': 0.83,
        'CAD': 1.21,
        'BDT': 84.82,
    },
    'EUR': {
        'USD': 1.21,
        'EUR': 1,
        'CAD': 1.74,
        'BDT': 102.77,
    },
    'CAD': {
        'USD': 0.82,
        'EUR': 0.68,
        'CAD': 1,
        'BDT': 69.83,
    },
};

function cal(event) {
    "use strict";
    var x = document.getElementById('form-select').value;
    var y = document.getElementById('to-select').value;
    var input = document.getElementById('unit').value;
    var output = document.getElementById('result');
    var error = document.getElementById('error');
    var show = document.getElementById('show');
    var input_field = document.getElementById('unit');
    var p = input.split(/\s/);
    var input_last = p[0];
    var i;

    event.preventDefault();


    if (check.checked === true) {
        input_field.value = parseFloat(input_last) + ' ' + x;

        for (i in crrncy[x]) {
            if (i !== x) {
                if (crrncy[x].hasOwnProperty(i)) {

                    show.insertAdjacentHTML('afterend', '<div class="input-group form-group my-2" id="all"> <input type="text" class="form-control" placeholder= "' + parseFloat(input_last) * crrncy[x][i] + ' ' + i + ' " id="result"> </div>');


                }
            }
        }
        error.innerHTML = '';


    } else if (x === 'Input Currency' || y === 'Output Currency' || !input || input.length === 0) {

        error.innerHTML = 'Missing Something?';
        output.value = 'Result';
        if (show.classList.contains('d-none')) {
            show.remove.className = 'd-block';

        } else {
            show.className = 'd-none';
            show.remove.className = 'd-block';

        }
    } else if (x === y) {

        error.innerHTML = '';
        output.value = parseFloat(input_last) + ' ' + x;
        input_field.value = parseFloat(input_last) + ' ' + x;
        show.className = 'd-block';
        show.remove.className = 'd-none';


    } else {

        error.innerHTML = '';
        output.value = parseFloat(input_last) * crrncy[x][y] + ' ' + y;
        input_field.value = parseFloat(input_last) + ' ' + x;
        show.className = 'd-block';
        show.remove.className = 'd-none';


    }

}

btn.addEventListener('click', cal);


function all(event) {
    "use strict";

    var x = document.getElementById('form-select').value;
    var input = document.getElementById('unit').value;
    var error = document.getElementById('error');
    var show = document.getElementById('show');
    var input_field = document.getElementById('unit');
    show.classList.remove('d-block');
    show.className = 'd-none';
    var i;
    var p = input.split(/\s/);
    var input_last = p[0];


    event.preventDefault();
    error.innerHTML = '';

    if (check.checked === true) {
        if (x === 'Input Currency' || !input || input.length === 0) {

            error.innerHTML = 'Missing Something?';
            if (show.classList.contains('d-none')) {
                show.remove.className = 'd-block';

            } else {
                show.className = 'd-none';
                show.remove.className = 'd-block';

            }
        } else {

            if (show.classList.contains('d-none')) {
                show.remove.className = 'd-block';

            } else {
                show.className = 'd-none';
                show.remove.className = 'd-block';

            }
            input_field.value = parseFloat(input_last) + ' ' + x;


            for (i in crrncy[x]) {
                if (i !== x) {
                    if (crrncy[x].hasOwnProperty(i)) {

                        show.insertAdjacentHTML('afterend', '<div class="input-group form-group my-2" id="all"> <input type="text" class="form-control" placeholder= "' + parseFloat(input_last) * crrncy[x][i] + ' ' + i + ' " id="result"> </div>');


                    }
                }
            }


        }
    } else {

        for (i in crrncy[x]) {
            if (crrncy[x].hasOwnProperty(i)) {


                document.getElementById("all").remove();

            }
        }


    }

}


check.addEventListener('change', all);


function displaySize(event) {
    'use strict';
    event.preventDefault();
    var x = document.getElementById('card');


    if (window.screen.width <= 767) {

        x.classList.add('w-100');

    } else {
        x.classList.remove('w-100');

    }

}


window.addEventListener('resize', displaySize);

if (window.screen.width < 767) {

    var x = document.getElementById('card');
    x.classList.add('w-100');

} else {
    x.classList.remove('w-100');

}

