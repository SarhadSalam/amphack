import React from 'react';
import { Pie } from 'react-chartjs-2';
import { TransactionModel } from 'src/model/transaction';
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
		this.setState({ loading: false });
	}

	async componentDidMount() {
		this.setState(
			{
				transactions: await (await this.props.da_vinci_inst.getCusomterTransactionHistory(
					this.props.customer_id
				)).json(),
			},
			this._filterData
		);
	}

	render() {
        const pdata:any = this.state.pieData;
		return this.state.loading ? (
			<>Loading;</>
		) : (
			<div>
				Loading Done
				{/* <Pie data={pdata} /> */}
			</div>
		);
	}
}
