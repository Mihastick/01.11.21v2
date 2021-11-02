let i = 0;

let tabs = [
    {
        header: 'Empire State Building',
        img: 'image/1.jpg',
        target: '#tab1'
    },
    {
        header: 'Statue of Baphomet',
        target: '#tab2',
        img: 'image/2.jpg',
    },
    {
        header: 'Golden Gate Bridge',
        target: '#tab3',
        img: 'image/3.jpg',
    },
    {
        header: 'Christ the Redeemer',
        target: '#tab4',
        img: 'image/4.jpg',
    },
]

const ul = document.querySelector('#ul');
const tabBodyItem = document.querySelector('.imgCont');

tabs.forEach(tab=>{

let li = createElement('li');
li.innerHTML = tab.header;
li.dataset.target = i;
li.classList.add('li');
li.addEventListener('click',doActiveTab);
ul.append(li);
i++;
});

function createElement(el){
    let element = document.createElement(el);
    return element;
}

function doActiveTab(e){
    clearTab();
    let currentHeader = e.target;
    currentHeader.classList.add('active');
    let currentBody = tabs[currentHeader.dataset.target];
    tabBodyItem.innerHTML = `<img src='${currentBody.img}'></img>`;
    tabBodyItem.classList.add('active');
}

function clearTab(){
    [...ul.children].forEach(item=>{
        item.classList.remove('active');
    });

}