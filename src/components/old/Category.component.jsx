import '../App.css';

function Category(props) {
    const textInput = props.textInput;

    return (
        <div className='categoryContainer'>
            {textInput.map((text, key) => {
                return <div className='textContainer' key={key}><h1 className='textContent'>{text.title}</h1>{text.desc}</div>
            })}
        </div>
    );
}

export default Category;