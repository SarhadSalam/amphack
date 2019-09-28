import { Col, Row } from 'antd';
import React from 'react';

import Intro from 'src/components/intro';
import Navbar from 'src/components/navbar';
import Spending from 'src/components/spending';
import DaVinci from 'src/services.tsx/da_vinci';

interface AppState {
	da_vinc_inst: DaVinci;
}

export default class App extends React.Component<{}, AppState> {
	constructor(props: {}) {
    super(props);
    this.state = {
      da_vinc_inst: new DaVinci(),
    }
	}

	render() {
		return (
			<>
				<Navbar />
				<Row align='middle' type='flex' justify='center'>
					<Col sm={24} md={12}>
						<Intro />
						<Spending
							da_vinci_inst={this.state.da_vinc_inst}
							customer_id='4806f34e-93a6-4e2f-9e41-5ee9f0d24f14'
						/>
					</Col>
				</Row>
			</>
		);
	}
}
