let ul = document.getElementById('ul');
let imgCont = document.querySelectorAll('.image');

let tabs = [
    {
        header: 'Empire State Building',
        class: 'active',
        target: '#tab1'
    },
    {
        header: 'Statue of Baphomet',
        target: '#tab2',
        class:'gg',
    },
    {
        header: 'Golden Gate Bridge',
        target: '#tab3',
        class:'gg',
    },
    {
        header: 'Christ the Redeemer',
        target: '#tab4',
        class:'gg',
    },
]



tabs.forEach(tab=>{
let li = document.createElement('li');
li.innerHTML = tab.header;
li.classList.add('li');
li.classList.add(`${tab.class}`);
li.addEventListener('click',doActiveTab);
ul.append(li);
});

function doActiveTab(e){
    clearTab();
    console.log(e.target.classList.add('active'));
    // imgCont[1].classList.add('active');
}

function clearTab(){
    [...ul.children].forEach(item=>{
        item.classList.remove('active');
    });
    [...imgCont].forEach(item=>{
        item.classList.remove('active');
    });
}