// DOM
const $randBody = document.querySelector('.rand-body');
const $randFooter = document.querySelector('.rand-footer');
const $button = document.querySelector('.button');
const $membersAreEmpty = document.querySelector('#h4')


// click function

let amountOfMembers = 0;

$button.addEventListener('click', e => {
    e.preventDefault();

    amountOfMembers = +prompt('Количество участников: ');
    if(amountOfMembers <= 2){
        alert('Кол-во участников должно быть больше двух!');
    }else{
        $membersAreEmpty.remove()

        const allMembersArr = [];

        let tempNum = 0
        for(let i = 0; i < amountOfMembers; i++){

            allMembersArr.push(tempNum)

            $randBody.insertAdjacentHTML('afterbegin', `
                <label>
                    <input type="text" id="member_${i}" placeholder="Имя участника №${(i + 1)}" >
                </label>
            `)

            tempNum++
        }

        $button.remove()
        $randFooter.innerHTML = `<button class="btn btn-danger" onclick="addAllMembers()">Добавить всех участников</button>`
    }
})

function addAllMembers(){
    let inputValues = [];
    for(let i = 0; i < amountOfMembers; i++){
        let member = document.querySelector(`#member_${i}`);
        let memberValue = member.value;
        inputValues.push(memberValue);
    }
    inputValues.reverse()

    $randBody.innerHTML = '<ul></ul>';

    const allMembers = $randBody.firstChild;

    for(let i = 0; i < amountOfMembers; i++){
        allMembers.insertAdjacentHTML('afterbegin', `
            <li id="newMember_${i}">${inputValues[i]}</li>
        `)
    }
    $randFooter.innerHTML = `<button class="btn btn-danger" onclick="chooseWinner()">Сгенерировать победителя</button>`;
}

function chooseWinner(){
    let winnerNum = Math.floor(Math.random() * amountOfMembers);

    const winner = document.querySelector(`#newMember_${winnerNum}`);

    winner.classList.add('winner')
    $randFooter.remove();
}