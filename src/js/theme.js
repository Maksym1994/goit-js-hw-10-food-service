const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

refs = {
    themeSwitchToggle: document.querySelector('.theme-switch__toggle'),
    body: document.querySelector('body'),
    myDarkTheme: localStorage.getItem('my-theme'),
}

refs.themeSwitchToggle.addEventListener('change', switchToggleThemes);
refs.body.classList.add(`${refs.myDarkTheme}`);

if (refs.myDarkTheme === "dark-theme") {
    refs.themeSwitchToggle.checked;
};


function switchToggleThemes() {

    if (refs.themeSwitchToggle.checked) {
        refs.body.classList.remove("light-theme", "dark-theme");
        localStorage.setItem('my-theme', Theme.DARK);
        refs.body.classList.add(`${localStorage.getItem('my-theme')}`);
    }
    else {
        refs.body.classList.remove("light-theme", "dark-theme");
        localStorage.setItem('my-theme', Theme.LIGHT);
        refs.body.classList.toggle(`${localStorage.getItem('my-theme')}`);
    };
};