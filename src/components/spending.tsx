import { Card, Col, Row, Table } from 'antd';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { TransactionModel } from 'src/pages/model/transaction';
import DaVinci from 'src/services.tsx/da_vinci';

export interface SpendingProps {
	customer_id: string;
	da_vinci_inst: DaVinci;
}

interface PieGraphModel {
	count: number;
	name: string;
}

interface SpendingState {
	transactions?: TransactionModel;
	pieData: PieGraphModel[];
	loading: boolean;
	cPieData?: any;
	cPieLabel?: any;
	cPieColor?: any;
}

export default class Spending extends React.Component<
	SpendingProps,
	SpendingState
> {
	constructor(props: SpendingProps) {
		super(props);
		this.state = {
			pieData: [],
			loading: true,
		};
	}

	private _filterData() {
		const transactionTags: Set<String> = new Set();
		if (this.state.transactions == null) {
			return;
		}
		this.state.transactions.result.forEach((t) => {
			t.categoryTags.forEach((c: string) => {
				if (!transactionTags.has(c)) {
					transactionTags.add(c);
					this.state.pieData.push({ name: c, count: 1 });
				} else {
					this.state.pieData.forEach((e) => {
						if (e.name === c) {
							e.count += 1;
						}
					});
				}
			});
		});

		const arr: number[] = [];
		const color: string[] = [];
		this.state.pieData.forEach((e) => {
			arr.push(e.count);
			const col = `#` + Math.floor(Math.random() * 0xffffff).toString(16);
			color.push(col);
		});

		this.setState({
			loading: false,
			cPieData: arr,
			cPieLabel: Array.from(transactionTags),
			cPieColor: color,
		});
	}

	async componentDidMount() {
		this.setState(
			{
				transactions: await (await this.props.da_vinci_inst.getCusomterTransactionHistory(
					this.props.customer_id
				)).json(),
				pieData: [],
				cPieData: [],
				cPieLabel: [],
				cPieColor: []	
			},
			this._filterData
		);
	}

	componentDidUpdate(prevP:SpendingProps, _:any){
		if(prevP.customer_id === this.props.customer_id) { return; }
		this.componentDidMount();
	}

	render() {
		return (
			<>
				<Row align='middle' gutter={12} type='flex' justify='center'>
					<Col sm={22} md={10}>
						<Card
							style={{
								width: '100%',
								marginTop: 16,
								height: '400px',
							}}
							loading={this.state.loading}
							title="Spending Chart"
						>
							<Pie
								data={{
									labels: this.state.cPieLabel,
									datasets: [
										{
											label: `Money Spent`,
											data: this.state.cPieData,
											backgroundColor: this.state
												.cPieColor,
										},
									],
								}}
							/>
						</Card>
					</Col>
					<Col sm={22} md={6}>
						<Card
							title="Spending Data"
							style={{
								width: '100%',
								marginTop: 16,
								height: '400px',
								overflowX: 'auto',
							}}
							loading={this.state.loading}
						>
							<Table
								pagination={false}
								dataSource={this.state.pieData}
								columns={[
									{
										title: 'Category',
										dataIndex: 'name',
										key: 'name',
									},
									{
										title: 'Spent ($)',
										dataIndex: 'count',
										key: 'count',
									},
								]}
							/>
						</Card>
					</Col>
				</Row>
			</>
		);
	}
}
