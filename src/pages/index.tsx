
import { Col, Row } from 'antd';
import React from 'react';

import Intro from 'src/components/intro';
import Navbar from 'src/components/navbar';

export default class App extends React.Component<{}, {}> {
	render() {
		return (
			<>
      <Navbar/>
				<Row align="middle"type="flex" justify='center'>
					<Col sm={24} md={12}>
						<Intro />
					</Col>
				</Row>
			</>
		);
	}
}