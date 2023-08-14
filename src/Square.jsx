import PropTypes from 'prop-types'; 

const Square = ({value, onHandleClick , index}) => {
    return (
        <button className="square" onClick={()=>onHandleClick(index)}> {value} </button>  
    )
}

Square.propTypes={
value : PropTypes.string,
onHandleClick : PropTypes.func,
index : PropTypes.number
}
export default Square
