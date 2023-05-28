export function whichColor(label) {
    let color = 'green';
    switch(label) {
        case '.docx': 
            color ='red';
            break;

        case '.pdf': 
            color = 'blue';
            break;

        case '.mp3': 
            color = 'orange';
            break;
        case '.psd': 
            color = 'brown';
            break;
            
        case '.jpg': 
            color = 'yellow';
            break;
        default:
            color = 'teal';
    }

    return color;
}