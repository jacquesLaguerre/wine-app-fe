import wine from '../wine'

function WineList(){
    return (
        <section id="wine-list-container">
            {wine.map(wine => (

         <div className="wine-card" key={wine.id}>
            <img className='wine-poster' 
            alt={wine.title}
            src={wine.image}/>
            <h3 className='wine-title'>
                {wine.wine}
            </h3>
         </div>
            ))}
        </section>
    )
}

export default WineList;
