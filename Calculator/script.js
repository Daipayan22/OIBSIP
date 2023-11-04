let input = document.getElementById('input');
let button = document.querySelectorAll('button');
let string = "";
Array.from(button).forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=')
        {
            if(string.includes('x')) {
                string = string.replace('x', '*');
                string = eval(string);
                input.value = string;
            }
            else if(string.includes('÷')) {
                string = string.replace('÷', '/');
                string = eval(string);
                input.value = string;
            }
            else if(string.includes('−')) {
                string = string.replace('−', '-');
                string = eval(string);
                input.value = string;
            }
            else if(string.includes('+')) {
                string = string.replace('+', '+');
                string = eval(string);
                input.value = string;
            }
            else if(string.includes('%')) {
                string = string.replace('%', '%');
                string = eval(string);
                input.value = string;
            }
        }
        else if (e.target.innerHTML == 'C')
        {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'Del')
        {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else
        {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});