import {useState, useEffect} from 'react';

import './envelope.scss';

function List(){

    const [stateKey, setStateKey] = useState([]);

    const addItem = ()=> {

        setStateKey([...stateKey, stateKey.length])
    }

    const Item = ()=>{

        return(
            <li className='list__item'>asdasd</li>
        )
    }

    return(
        <div>

            <ul className='list'>
                {stateKey.map(item => <Item key={item} />)}
            </ul>

            <button onClick={()=> addItem()}>Добавить</button>
        </div>
    )
}

export default List;