addEventListener('load', () => {
    app = document.querySelector('.app')
    state.app = { name: 'VanillaApp', color: 'skyBlue' }
    app.style.color = state.app.color

    app.updateName = value => { 
        app.innerText = value 
        document.title = value
        state.app.name = value
    }

    app.updateName(state.app.name)
    app.addEventListener('click', () => app.updateName(`${state.app.name} v2`))
})

document.write(`<h1 class='app'></h1>`)