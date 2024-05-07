// set initial count value
let count = 0;

if (typeof window !== 'undefined'){
    // select a value and buttons
    const value = document.querySelector('#value');
    const btns  = document.querySelectorAll('.btn');
    console.log(btns)

    // access all three buttons using the foreach method
    btns.forEach(function (btn){
        btn.addEventListener('click', function(e){
            console.log(e.currentTarget.classList);

            const styles = e.currentTarget.classList;
            if (styles.contains('decrease')){
                count--;
                
            } else if (styles.contains('increase')){
                count++;
            } else {
                count = 0;
            }

            if (count < 0){
                value.style.color = 'red';
            } else if (count > 0){
                value.style.color = 'green';
            } else {
                value.style.color = 'black'
            }
            value.textContent = count;

        })
    })
}



