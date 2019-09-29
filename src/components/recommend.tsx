import {
	AutoComplete,
	Button,
	Cascader,
	Col,
	DatePicker,
	Form,
	Input,
	InputNumber,
	Row,
	Select,
	Typography,
	Card,
	Table,
} from 'antd';
import { css } from 'emotion';
import React from 'react';
import Navbar from 'src/components/navbar';
import { QModel } from 'src/pages/model/qModel';
import DaVinci from 'src/services.tsx/da_vinci';
import rec from 'src/img/rec.png';
import { LabeledValue } from 'antd/lib/select';

const { Title, Paragraph, Text } = Typography;

export default class Recommend extends React.Component<{}, {}> {
	private _mortgage_data: any = [
		{
			total: '200k',
			amortization: 5,
			monthly: 3604,
		},
		{
			total: '',
			amortization: 10,
			monthly: 1942,
		},
		{
			total: '',
			amortization: 25,
			monthly: 961,
		},
		{
			total: '500k',
			amortization: 5,
			monthly: 9011,
		},
		{
			total: '',
			amortization: 10,
			monthly: 3482,
		},
		{
			total: '',
			amortization: 25,
			monthly: 2402,
		},
	];
	private _table_data: any = [
		{
			ward_number: 1,
			ward_name: 'Etobicoke North',
			rented: 44,
			avg_rent: 1064,
			avg_owner: 1425,
		},
		{
			ward_number: 5,
			ward_name: 'York South-Weston',
			rented: 51,
			avg_rent: 957,
			avg_owner: 1406,
		},
		{
			ward_number: 7,
			ward_name: 'Humber River-Black Creek',
			rented: 51,
			avg_rent: 1011,
			avg_owner: 1011,
		},
		{
			ward_number: 19,
			ward_name: 'Beaches-East York',
			rented: 44,
			avg_rent: 1082,
			avg_owner: 1784,
		},
		{
			ward_number: 20,
			ward_name: 'Scarborough South West',
			rented: 44,
			avg_rent: 936,
			avg_owner: 1560,
		},
		{
			ward_number: 21,
			ward_name: 'Scarborough Town Centre',
			rented: 42,
			avg_rent: 1067,
			avg_owner: 1377,
		},
		{
			ward_number: 24,
			ward_name: 'Scarborough Guild Wood',
			rented: 44,
			avg_rent: 950,
			avg_owner: 1430,
		},
	];
	render() {
		return (
			<>
				<Row
					align='middle'
					gutter={12}
					type='flex'
					justify='center'
					className={css`
						margin-bottom: 60px;
					`}
				>
					<Col sm={22} md={10}>
						<Card
							style={{
								width: '100%',
								marginTop: 16,
								height: '440px',
								overflowX: 'auto',
							}}
							title='Recommended Housing in Toronto'
						>
							<Table
								pagination={false}
								dataSource={this._table_data}
								columns={[
									{
										title: 'Ward #',
										dataIndex: 'ward_number',
										key: 'ward_number',
									},
									{
										title: 'Ward Name',
										dataIndex: 'ward_name',
										key: 'ward_name',
									},
									{
										title: 'Rent (%)/Area',
										dataIndex: 'rented',
										key: 'rented',
									},
									{
										title: 'Avg. Rent',
										dataIndex: 'avg_rent',
										key: 'avg_rent',
									},
									{
										title: 'Avg. Homeowner Payment',
										dataIndex: 'avg_owner',
										key: 'avg_owner',
									},
								]}
							/>
						</Card>
					</Col>
					<Col sm={22} md={6}>
						<Card
							style={{
								width: '100%',
								marginTop: 16,
								height: '440px',
							}}
							title='Recommended Savings Plan'
						>
							<Paragraph>
								Based on the results we determined using your
								lifestyle information, tracking your savings and
								spendings, we suggest Renting as a solution for
								you. By using your spending habits, we have
								analyzed that you would have to save $400 a
								month for 7 years to afford a Mortgage in your
								desired area.
							</Paragraph>
						</Card>
					</Col>
					<Col sm={22} md={10}>
						<Card
							title='Location of Housing for you'
							style={{
								width: '100%',
								marginTop: 16,
								height: '440px',
							}}
						>
							<img
								src={rec}
								className={css`
									width: 100%;
									height: 340px;
								`}
							/>
						</Card>
					</Col>
					<Col sm={22} md={6}>
						<Card
							style={{
								width: '100%',
								marginTop: 16,
								height: '440px',
								overflowX: 'auto',
							}}
							title='Get a mortgage?'
						>
							<Table
								pagination={false}
								dataSource={this._mortgage_data}
								columns={[
									{
										title: 'Total Mortgage',
										dataIndex: 'total',
										key: 'total',
									},
									{
										title: 'Amortization Period',
										dataIndex: 'amortization',
										key: 'amortization',
									},
									{
										title: 'Monthly Payment',
										dataIndex: 'monthly',
										key: 'monthly',
									},
								]}
							/>
							<Text
								className={css`
									font-weight: bold;
									line-height: 1.8;
								`}
							>
								*Interest Rate: 3.14%
							</Text>

							<Paragraph>
								<a href='https://www.rbcroyalbank.com/mortgages/mortgage-calculators.html'>
									Check RBC Mortgage Calculators for more
									details!
								</a>
							</Paragraph>
						</Card>
					</Col>
				</Row>
			</>
		);
	}
}
