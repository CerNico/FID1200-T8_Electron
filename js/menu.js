export function handleMenu(){
    const hamburger = document.getElementById('hamburger_icon_setting');
    const hamburgerMain = document.getElementById('hamburger_icon');
    const menu_container = document.getElementById('menu-el')
    const settings_butt = document.getElementById('settings')
    const sett_menu = document.getElementById('menu_sett')
    const main_menu = document.getElementById('menu')

    hamburger.addEventListener('click', () => {
        menu_container.classList.toggle('openmenu');
        hamburger.classList.toggle('openhamenu')
    })

    hamburgerMain.addEventListener('click', () => {
        menu_container.classList.toggle('openmenu');
        hamburger.classList.toggle('openhamenu')
    })

    settings_butt.addEventListener('click', () => {
        main_menu.classList.toggle('hide')
        sett_menu.classList.toggle('hide')
    })

    hamburger.addEventListener('click', () => {
        main_menu.classList.toggle('hide')
        sett_menu.classList.toggle('hide')
    })

    const cloud_rem = document.querySelector('#wed_imp');
    const wed_icon = document.querySelector('.cloud');

    cloud_rem.addEventListener('click', () => {
        wed_icon.classList.toggle('hide')
    })

    const cels_rem = document.querySelector('#temp_imp');
    const temo_icon = document.querySelector('.temrmo');

    cels_rem.addEventListener('click', () => {
        temo_icon.classList.toggle('hide')
    })

    const flipMenu = document.getElementById('chang_pos');
    flipMenu.addEventListener('click', () => {
        menu_container.classList.toggle('menuR')
        menu_container.classList.toggle('menuL')
    });


    // hamburger.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     menu_container.classList.remove('openmenu');
    //     hamburger.classList.remove('openhamenu')
    // })
    
}