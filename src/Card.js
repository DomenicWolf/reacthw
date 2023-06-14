const Card = ({info}) => {
    
    const {image,value,code,suit} = info[0]
    
    
    return (
        <div>
            <img src={image}></img>
            
        </div>
    )
}

export default Card;