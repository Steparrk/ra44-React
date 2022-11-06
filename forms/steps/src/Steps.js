import React from "react";

function Steps({array}) {
    const[data, setData] = React.useState([]);
    const[date, setDate] = React.useState("");
    const[distance, setDistance] = React.useState(0);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(data.length === 0) {
            setData(prev => [...prev, {date: date, distance: distance}]);
            return;
        }
        console.log(data)
        if(data.find(item => item.date !== date)) {
            setData(prev => [...prev, {date: date, distance: distance}]);
            return;
        }else{
            setData(prev => ({date: date, distance: Number(prev.distance) + Number(distance)}));
        }
        
    }

    const handleChangeDate = ({target}) => {
        const{value} = target;
        setDate(value);
    }

    const handleChangeDistance = ({target}) => {
        const{value} = target;
        setDistance(value);
    }

    const onDelete = (date) => {
        setData(prev => prev.filter(item => item.date !== date))
    }

    return(
        <>
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <h2>Дата</h2>
                    <input type="date" value={date} onChange={handleChangeDate}></input>
                </div>
                <div>
                    <h2>Пройдено км</h2>
                    <input type="number" value={distance} onChange={handleChangeDistance}></input>
                </div>
                <button type="submit">OK</button>
            </form>
        </div>
        <div>
            <h2>Дата</h2>
            <h2>Пройдено км</h2>
            <h2>Действия</h2>
            <div className="items">
                {data.length > 0 ? data.map(item => {
                    return(<div className="item" key={item.date}>
                                <span>{item.date}</span>
                                <span>{item.distance}</span>
                                <button onClick={() => onDelete(item.date)}>X</button>
                        </div>)
                }) : null}
            </div>
        </div>
        </>
    );
}

export default Steps;