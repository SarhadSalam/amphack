import React from 'react';
import Spending from 'src/components/spending';
import Questionnaire from 'src/components/questionnaire';
import DaVinci from 'src/services.tsx/da_vinci';
import { Row, Col, Menu, Icon } from 'antd';
import { css } from 'emotion';
import Recommend from './recommend';

enum APP_LOAD_STATE {
	Intro_State = 1,
	Questionnare_State = 2,
}

interface StatsState {
	da_vinci_inst: DaVinci;
	state: APP_LOAD_STATE;
	customer_id: string;
	current_sel: string;
	submitClicked: boolean;
}

export default class Stats extends React.Component<{}, StatsState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			da_vinci_inst: new DaVinci(),
			state: APP_LOAD_STATE.Intro_State,
			customer_id: '4806f34e-93a6-4e2f-9e41-5ee9f0d24f14',
			current_sel: 'questionnaire',
			submitClicked: false,
		};
	}

	private redirectToQuestionnaire(customer_id: string) {
		this.setState({
			state: APP_LOAD_STATE.Questionnare_State,
			customer_id,
		});
	}

	render() {
		return (
			<>
				<Menu
					selectedKeys={[this.state.current_sel]}
					mode='horizontal'
					onClick={(e: any) => {
						this.setState({ current_sel: e.key });
					}}
					className={css`
						margin-bottom: 20px;
					`}
				>
					<Menu.Item key='questionnaire'>
						<Icon type='question-circle' />
						Questionnaire
					</Menu.Item>
					<Menu.Item
						key='spending'
						disabled={!this.state.submitClicked}
					>
						<Icon type='dollar' />
						Spending
					</Menu.Item>
					<Menu.Item
						key='rec'
						disabled={!this.state.submitClicked}
					>
						<Icon type='check-circle' />
						Recommended Solution
					</Menu.Item>
				</Menu>

				{this.state.current_sel === 'questionnaire' && (
					<Row align='middle' type='flex' justify='center'>
						<Col sm={22} md={12}>
							<Questionnaire
								callback={this.redirectToQuestionnaire.bind(
									this
								)}
								da_vinci_inst={this.state.da_vinci_inst}
								submitClicked={() => {
									this.setState({
										submitClicked: true,
										current_sel: 'spending',
									});
								}}
							/>
						</Col>
					</Row>
				)}
				{this.state.current_sel === 'spending' && (
					<Spending
						da_vinci_inst={this.state.da_vinci_inst}
						customer_id={this.state.customer_id}
					/>
				)}
				{this.state.current_sel === 'rec' && (
					<Recommend/>
				)}
			</>
		);
	}
}
