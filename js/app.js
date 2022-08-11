

const getAdvice = async () =>{
    try {
        const res = await fetch('https://api.adviceslip.com/advice');    
        const data = await res.json();
        //data type is a Promise
        return data;
    } catch (error) {
        console.error(error);
    }
}

const generateButton = document.querySelector('button');

let count = 0;
generateButton.addEventListener('click', async (e) =>{
    count++;
    console.log(count);
    const data = await getAdvice();
    // console.log(data.slip);
    const adviceString = data.slip.advice;
    const adviceId = data.slip.id;
    const quote = document.querySelector('q');
    const quoteID = document.querySelector('#advice-id');
    quoteID.textContent = `Advice #${adviceId}`;
    quote.textContent = adviceString;
})

