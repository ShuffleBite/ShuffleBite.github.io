function getRandomInt(num) {
    return Math.floor(Math.random() * num);
}

function finalChoice(cookies) {
    const final_choice = getFinalChoiceNumber();

    for (let i = 0; i < cookies.length; i++)
    {
        if (cookies[i][0] === 'c')
        {
            if (cookies[i]["choice".length] === (`${final_choice}`))
                return cookies[i];
        }
        else if (cookies[i][1] === 'c')
        {
            if (cookies[i]["choice".length + 1] === (`${final_choice}`))
                return cookies[i].substring(1, cookies[1].length);
        }
    }
};

function getChoiceFromCookie() {
    const cookieVals = document.cookie;
    const choiceVals = cookieVals.split(";");

    return finalChoice(choiceVals);
};

function getFinalChoiceNumber() {
    let final_choice = document.cookie;
    console.log("choice: " + final_choice[final_choice.length - 1]);
    return final_choice[final_choice.length - 1];
};

function setFirstChoice(choice) {
    document.cookie = `choice0={name=${choice['name']}, location=${choice['location']}, phone=${choice['phone']}}`;
};

function setSecondChoice(choice) {
    document.cookie = `choice1={name=${choice['name']}, location=${choice['location']}, phone=${choice['phone']}}`;
};

function setChoices(choices) {
    setFirstChoice(choices[0]);
    setSecondChoice(choices[1]);
};

function setFinalChoice(choice) {
    document.cookie = `final_choice=${choice}`;
};

function getFinalChoice() {
    return getChoiceFromCookie();
};

function deleteAllCookies() {
    const cookieVals = document.cookie;

    if (cookieVals === '') return;

    const choiceVals = cookieVals.split(";");

    for (let i = 0; i < choiceVals.length; i++)
    {
        let str = "";
        let j = 1;

        if (i === 0)
        {
            j--;

            while (choiceVals[i][j] !== '=')
                str = str + choiceVals[i][j++];
            
            document.cookie = `${str}=`;
            console.log(str);
            continue;
        }
        
        while (choiceVals[i][j] !== '=') 
            str = str + choiceVals[i][j++];
        console.log(str);
        document.cookie = `${str}=`;
    }
}

function deleteCookie() {
    document.cookie = `choice${((getFinalChoiceNumber() - '0') + 1) % 2}=`;
};


export { 
    setChoices, 
    setFinalChoice, 
    getFinalChoice,
    deleteAllCookies,
    deleteCookie,
    getRandomInt,
    getFinalChoiceNumber
};