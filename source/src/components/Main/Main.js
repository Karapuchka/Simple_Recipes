import './Main.scss';

function Main({activeModal}){
    return(
        <main className='main'>
            <div onClick={()=> activeModal()}>Btn</div>
        </main>
    )
}

export default Main;