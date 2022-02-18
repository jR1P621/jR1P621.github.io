
const Item = ({ item }) => {
    return (<>
        <div className="App-item-wrapper">
            <div className="App-item">
                <div>
                    <a href={item.url}>
                        <img className="image" src={item.imgPath} alt={`${item.name} screenshot`}></img>
                    </a>
                </div>
            </div>
            <div className="text">{item.desc}</div>
        </div>
    </>
    )
}

export default Item