function Listing(props) {
    const dataItems = props.items.map(item => {
        if(item.state !== 'active') {
            return null;
        }
        const itemActive = item;
        const img = itemActive.MainImage.url_570xN;
        let titleTotal = itemActive.title.length > 20 ? itemActive.title.slice(0, 20) + "..." : itemActive.title;
        let price = getCurrencyCode(itemActive.currency_code) + itemActive.price;
        let classQuantity = "item-quantity" + getLevel(itemActive.quantity);

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
        return  (<div key={itemActive.listing_id} className="item-list">
                    <div className="item">
                        <div className="item-image">
                            <a href={itemActive.url}>
                                <img src={img} alt="Ошибка"/>
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{titleTotal}</p>
                            <p className="item-price">{price}</p>
                            <p className={classQuantity}>{itemActive.quantity}</p>
                        </div>
                    </div>
                </div>)
    })
    return(
        dataItems
    )
}

export default Listing;