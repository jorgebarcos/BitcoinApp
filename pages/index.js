import MasterPage from '../components/Master';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
import Eventos from '../components/eventos';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
	<MasterPage>
		<div className="row">
			<div className="col-12">
				<h2>Precio del Bitcoin</h2>
				<Precio precio={props.precioBitcoin} />
			</div>

			<div className="col-md-8">
				<h2 className="my-4">Noticias sobre Bitcoin</h2>
				<Noticias noticias={props.noticias} />
			</div>
			<div className="col-md-4">
				<h2 className="my-4">Proximos Eventos Bitcoin</h2>
				<Eventos eventos={props.eventos} />
			</div>
		</div>
	</MasterPage>
);

Index.getInitialProps = async () => {
	const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
	const noticias = await fetch(
		'https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-04&sortBy=publishedAt&apiKey=e8f71163bb6340cc86dd69f051bc0b7c&language=es'
	);
	const eventos = await fetch(
		'https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Argentina&token=6C5U65Y4EYKNLTFA6U43'
	);

	const resPrecio = await precio.json();
	const restNoticias = await noticias.json();
	const resEventos = await eventos.json();

	return {
		precioBitcoin: resPrecio.data.quotes.USD,
		noticias: restNoticias.articles,
		eventos: resEventos.events
	};
};

export default Index;
