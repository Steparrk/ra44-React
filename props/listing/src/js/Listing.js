function Listing(props) {
    const dataItems = props.items.map(item => {
        let titleTotal = item.title.length > 20 ? item.title.slice(0, 21) + "..." : item.title;
        let price = getCurrencyCode(item.currency_code) + item.price;
        let classQuantity = "item-quantity" + getLevel(item.quantity);
        
        function getLevel(quantity) {
            if(quantity <= 10) {
                return "level-low";
            }
            if(quantity >10 && quantity <= 20) {
                return "level-medium";
            }
            return "level-high";
        }
        function getCurrencyCode(code) {
            if(code === "USD") {
                return "$";
            }
            if(code === "EUR") {
                return "€";
            }
            return "GBP";
        }
        return  (<div key={item.listing_id} className="item-list">
                    <div className="item">
                        <div className="item-image">
                            <a href={item.url}>
                                <img src={item.MainImage.url_570xN} alt="Ошибка"/>
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{titleTotal}</p>
                            <p className="item-price">{price}</p>
                            <p className={classQuantity}>{item.quantity}</p>
                        </div>
                    </div>
                </div>)
    })
    return(
        dataItems
    )
}

export default Listing;