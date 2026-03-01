document.addEventListener('DomContentLoaded',function(){
    
    initVisitCounter();

    SatActivePag('home');

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(links =>{
        links.addEventListener('click',function(e)
        {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            seeActivePage(page);
        });
    });

    const colorBth = document.grtElementByld('chance-color-btn');
    colorBth.addEventListener('click',changeBacgroundColor);

    const factBtn = document.getElementById(fact-Btn)
    factBtn.addEventListener('click',showGreeting);

    showRundomFact();
});

function seeActivePage(page){
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(links =>{
        links.classList.remove('active');
    })

    const activeLink = document.querySelector(`[data-page="$(page)"]`)
    activeLink.classList.add('active');

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    })

    const activeContent = document.getElementById(`$(page)-content`);
    activeContent.classList.add('active');
}

function changeBacgroundColor() {
        const colors =[
            '#f4f7fa',
            '#f0f8ff',
            '#f9f1fd',
            '#f2f6e1',
            '#f1f7ea'
        ];
        const randomColor = colors[Math.floor(MAth.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;

        const contentArea = document.querySelector('#content-area .active');
        const message = Document.createElement('div');
        message.className = 'color-message';
        message.innerHTML = `<p>
            color changed
        </p>`;

        contentArea.appendChild(message);

        setTimeout( () => {
                
        message.remove();
        },3000);
    }
