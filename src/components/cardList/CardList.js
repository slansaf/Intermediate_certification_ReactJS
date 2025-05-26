import Card from "./../card/Card";

const CardList = ({cardsPerPage, data}) => {

    const productsPerPage = cardsPerPage;
    const currentProducts = data.slice(0, productsPerPage);
    return (
        
        <div className="fetured_items__grid">
				{currentProducts.map((data) => {
					return <Card key = {data.id} count = {data.count} title={data.title} img={data.img} text={data.text} price={data.price} id={data.id}/>
				})}
		

			</div>
    );
}
 
export default CardList;