document.write(`
<div class='namer'>
    <label for='name'>Rename this app!</label>
    <input type='text' id='name'/>
</div>
`)

addEventListener('load', () => {
    namer = document.querySelector('.namer')
    const name = document.querySelector('#name')

    name.addEventListener('change', async () => {
        app.updateName(name.value)
        await suggest.getSuggestion()
    })
})