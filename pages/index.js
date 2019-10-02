import MasterPage from '../components/Master';

const Index = () => (
	<MasterPage>
		<div className="row">
			<div className="col-12">
				<h2>Precio del Bitcoin</h2>
			</div>

			<div className="col-md-8">
				<h2>Noticias sobre Bitcoin</h2>
			</div>
			<div className="col-md-4">
				<h2>Proximos Eventos Bitcoin</h2>
			</div>
		</div>
	</MasterPage>
);

export default Index;
