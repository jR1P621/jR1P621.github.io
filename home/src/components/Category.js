import Item from "./Item"

const Category = ({ catName, catItems }) => {
    return (<>
        <div className="title">{catName}</div>
        <div className="App-category">
            {catItems.map((item) => (<Item key={item.id} item={item}></Item>))}
        </div>
    </>)
}

export default Category