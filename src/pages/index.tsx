import { Col, Row } from 'antd';
import React from 'react';
import config from 'src/index';
import Intro from 'src/components/intro';
import Navbar from 'src/components/navbar';
import Spending from 'src/components/spending';
import Stats from 'src/components/stats';
import DaVinci from 'src/services.tsx/da_vinci';
import { Helmet } from 'react-helmet'
import pic from 'src/img/picture.png'

interface AppState{
	changeToStat: boolean;
}
export default class App extends React.Component<{}, AppState> {

	constructor(props: {}){
		super(props);
		this.state = {
			changeToStat: false,
		}
	}

	private redirectToQuestionnaire(){
		this.setState({
			changeToStat: true,
		})
	}

	render() {
		return (
			<>
				<Helmet>
					<title>{config.siteTitle}</title>
					<link rel="icon" type="image/png" href={pic} />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Helmet>
				<Navbar />
				{!this.state.changeToStat &&
				<Row align='middle' type='flex' justify='center'>
					<Col sm={22} md={12}>
						 <Intro callback={this.redirectToQuestionnaire.bind(this)}/>
					</Col>
				</Row>}

				{this.state.changeToStat && <Stats/>}
			</>
		);
	}
}
