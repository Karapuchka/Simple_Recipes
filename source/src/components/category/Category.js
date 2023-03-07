import './category.css';

function Category(){
    return (
        <div className="category">
            <h4 className='category__title'>категории</h4>

            <ul className='category__list'>
                <li className='category__list__item'>часы</li>
                <li className='category__list__item'>браслеты</li>
                <li className='category__list__item'>ремни</li>
                <li className='category__list__item'>ювелирные изделия</li>
                <li className='category__list__item'>запонки</li>
            </ul>
        </div>
    )
}

export default Category;