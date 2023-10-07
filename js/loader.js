
loader = { 
    render: ({text, width=10, src='img/loader.gif'}) => `
    <div class='loader'>
        <p>${text}...</p>
        <img width="${width}%" src='${src}'/>
    </div>
    `
}