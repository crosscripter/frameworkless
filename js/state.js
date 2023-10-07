state = { debug: false }

addEventListener('load', () => {
    const statePre = document.querySelector('.state')

    state.toggleDebug = () => {
        state.debug = !state.debug
        statePre.classList.toggle('visible')
    }

    document.querySelector('#debug').addEventListener('change', state.toggleDebug)
    // Magic updating state box!
    setInterval(() => statePre.innerText = state.debug ? JSON.stringify(state, null, 2) : null, 1000)
})