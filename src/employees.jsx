let sally='Sally Smith'
let mark='Mark Martin'
let holly='Holly Unlikely'
let sindhu='Sindhura Surendra Kotian'
let abhi = 'Abhishek Bidaraguppe'
let sanjay = 'Sanjay Shivakumar'
    const ul =  (
        <ul style={{'color':'Blue', 'fontSize': '24px'}}>
            <li>{sally}</li>
            <li>{mark}</li>
            <li>{holly}</li>
            <li>{sindhu}</li>
            <li>{abhi}</li>
            <li>{sanjay}</li>
        </ul>
    )
    ReactDOM.render(ul,document.getElementById('content'))