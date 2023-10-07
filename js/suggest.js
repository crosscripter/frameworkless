document.write(`<p class='suggest'></p>`)

addEventListener('load', async () => {
    suggest = document.querySelector('.suggest')
    state.suggest = { loaded: false, data: null }

    suggest.getSuggestion = async () => {
        suggest.innerHTML = loader.render({ text: 'Getting suggestion' })
        const res = await fetch('https://www.boredapi.com/api/activity')
        const data = await res.json()
        state.suggest.loaded = true
        state.suggest.data = data
        console.log('suggest:', data)
        const { activity, link } = data
        suggest.innerHTML = `Wasn't that awesome, now why don't you go and <a href='${link}'>${activity}</a>?`
        return data
    }

    await suggest.getSuggestion()
})
