import ButtonAdd from "./ButtonAdd";

function ListView(props) {
    return(
        props.products.map(item =>
            <div key={item.img} className="ShopItem">
                <img className="img-list" src={item.img}></img>
                <h1>{item.name}</h1>
                <span>{item.color}</span>
                <span>${item.price}</span>
                <ButtonAdd/>
            </div>
        )
    );
}
export default ListView;