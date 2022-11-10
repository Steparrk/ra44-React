import React from "react";

function Steps(props) {
    const[data, setData] = React.useState([]);
    const[date, setDate] = React.useState("");
    const[distance, setDistance] = React.useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(data.find(item => item.date === date)){
            setData((prev) => (prev.map(item => {
                if(item.date === date) {
                    setDistance("");
                    return({id: item.date, date: item.date, distance: item.distance + distance});
                }else{
                    return({id: item.date, date: item.date, distance: item.distance})
                }
            })));
            return;
        }    
        setData(prev => ([...prev, {id: date, date: date, distance: distance}]).sort((a, b) => new Date(b.date)- new Date(a.date)));
        setDistance("");
        
    }
    const handleChangeDate = ({target}) => {
        const{value} = target;
        setDate(value);
    }

    const handleChangeDistance = ({target}) => {
        const{value} = target;
        setDistance(Number(value));
    }

    const onDelete = (date) => {
        setData(prev => prev.filter(item => item.date !== date))
    }

    return(
        <>
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="header=form">
                    <h2>Дата</h2>
                    <input type="date" value={date} onChange={handleChangeDate} required></input>
                </div>
                <div className="header=form">
                    <h2>Пройдено км</h2>
                    <input type="number" value={distance} onChange={handleChangeDistance} placeholder="Введите число" required></input>
                </div>
                <button type="submit">OK</button>
            </form>
        </div>
        <div>
            <div className="header">
                <h2>Дата</h2>
                <h2>Пройдено км</h2>
                <h2>Действия</h2>
            </div>
            <div className="items">
                {data.map(item => {
                    return(<div className="item" key={item.id}>
                                <div className="text">
                                    <span>{item.date}</span>
                                    <span>{item.distance}</span>
                                </div>
                                <button onClick={() => onDelete(item.date)}>X</button>
                        </div>)
                })}
            </div>
        </div>
        </>
    );
}

export default Steps;