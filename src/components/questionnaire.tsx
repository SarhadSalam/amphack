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
} from 'antd';
import { css } from 'emotion';
import React from 'react';
import Navbar from 'src/components/navbar';
import { QModel } from 'src/pages/model/qModel';
import DaVinci from 'src/services.tsx/da_vinci';
import { LabeledValue } from 'antd/lib/select';

const { Title } = Typography;
const InputGroup = Input.Group;
const { Option } = Select;

interface AnswerState {
	answers?: QModel;
	loading: boolean;
}

export interface AnswerProps {
	callback: (customer_id: string) => void;
	submitClicked?: () => void;
	da_vinci_inst: DaVinci;
}

export default class Questionnaire extends React.Component<
	AnswerProps,
	AnswerState
> {
	constructor(props: AnswerProps) {
		super(props);
		this.state = {
			loading: false,
		};
	}

	private async customerSelected(
		val: string | number | LabeledValue,
		option: any
	) {
		const json = await (await this.props.da_vinci_inst.getCusomterHistory(
			String(val)
		)).json();
		this.props.callback(String(val));
		console.log(json);
		this.setState({
			answers: {
				jobType: json.result.occupationIndustry,
				jobLevel: 'Manager',
				monthlyIncome: json.result.totalIncome / 6,
				annualIncome: json.result.totalIncome * 2,
				maritalStatus:
					json.result.relationshipStatus == null ? 'no' : 'yes',
				dependents: json.result.habitationStatus == null ? 'no' : 'yes',
				settle: Math.random() % 2 == 0 ? 'yes' : 'no',
				montlySpend: json.result.totalIncome / 25,
				annualSpend:
					json.result.totalIncome - json.result.totalIncome / 4,
				monthlySav: json.result.totalIncome / 30,
				annualSav: json.result.totalIncome / 18,
				loan: json.result.totalIncome / 21,
				loanNum: 'Yes',
			},
			loading: false,
		});
	}

	render() {
		return (
			<>
				{/* <Navbar/> */}
				{/* <Row align="middle"type="flex" justify='center'> */}
				{/* <Col sm={24} md={12}> */}
				<Card
					style={{
						width: '100%',
						marginTop: 16,
					}}
				>
					<Title
						level={1}
						className={css`
							text-align: center;
						`}
					>
						Questionnaire
					</Title>
					<p
						className={css`
							text-align: center;
						`}
					>
						Please pick a virtual customer:{' '}
					</p>
					<div>
						<Select
							defaultValue='Select'
							className={css`
								margin: 0 auto;
								display: block;
								width: 150px;
							`}
							defaultActiveFirstOption
							onSelect={this.customerSelected.bind(this)}
						>
							<Option value='4806f34e-93a6-4e2f-9e41-5ee9f0d24f14'>
								Sarhad Salam
							</Option>
							<Option value='d7635a6b-fd68-4da9-bae8-d689bf4c7b06'>
								Annelle Ritmiller
							</Option>
						</Select>
					</div>
					<p
						className={css`
							text-align: center;
						`}
					>
						Fill out this quick and simple Questionnaire so that we
						can get to know you better!
					</p>
					<Form>
						<Title
							level={4}
							className={css`
								text-align: left;
							`}
						>
							Employment
						</Title>
						<br />
						<p
							className={css`
								text-align: left;
							`}
						>
							What is your Current Job?{' '}
						</p>
						<InputGroup compact>
							<Select
								value={
									this.state.answers != null
										? this.state.answers.jobLevel
										: 'Select'
								}
								className={css`
									width: 150px;
								`}
							>
								<Option value='Junior'>Junior</Option>
								<Option value='Senior'>Senior</Option>
								<Option value='Manager'>Manager</Option>
								<Option value='Senior Manager'>
									Senior Manager
								</Option>
							</Select>
							<Input
								style={{ width: '20%' }}
								value={
									this.state.answers != null
										? this.state.answers.jobType
										: ''
								}
								placeholder='Enter Job'
							/>
						</InputGroup>

						<br />
						<p
							className={css`
								text-align: left;
							`}
						>
							{' '}
							Since the renting expense is on a monthly basis, we
							ask for both monthly annually. Income includes
							salaries, bonuses, domestic and foreign investment,
							family heritage etc.
						</p>
						<p
							className={css`
								text-align: left;
							`}
						>
							How much is your monthly income after taxes,
							including all sources of income?{' '}
						</p>
						<Input
							style={{ width: '20%' }}
							value={
								this.state.answers != null
									? this.state.answers.monthlyIncome
									: ''
							}
							placeholder='Enter Income Here'
						/>
						<p
							className={css`
								text-align: left;
							`}
						>
							How much is your annual income after taxes,
							including all sources of income?{' '}
						</p>
						<Input
							style={{ width: '20%' }}
							value={
								this.state.answers != null
									? this.state.answers.annualIncome
									: ''
							}
							placeholder='Enter Income Here'
						/>
						<br />
						<br />
						<br />
						<Title
							level={4}
							className={css`
								text-align: left;
							`}
						>
							Marital Status
						</Title>
						<p
							className={css`
								text-align: left;
							`}
						>
							Are you Married or Single?{' '}
						</p>
						<InputGroup compact>
							<Select
								value={
									this.state.answers != null
										? this.state.answers.maritalStatus
										: 'Select'
								}
							>
								<Option value='Single'>Single</Option>
								<Option value='Married'>Married</Option>
							</Select>
						</InputGroup>

						<p
							className={css`
								text-align: left;
							`}
						>
							Do you have any individuals dependant on you? i.e.
							Parents, Siblings{' '}
						</p>
						<InputGroup compact>
							<Select
								value={
									this.state.answers != null
										? this.state.answers.dependents
										: 'Select'
								}
							>
								<Option value='Yes'>Yes</Option>
								<Option value='No'>No</Option>
							</Select>
						</InputGroup>

						<p
							className={css`
								text-align: left;
							`}
						>
							Do you plan to settle down and purchase a home?{' '}
						</p>
						<InputGroup compact>
							<Select
								value={
									this.state.answers != null
										? this.state.answers.settle
										: 'Select'
								}
							>
								<Option value='Yes'>Yes</Option>
								<Option value='No'>No</Option>
							</Select>
						</InputGroup>
						<br />
						<Title
							level={4}
							className={css`
								text-align: left;
							`}
						>
							Spending and Saving
						</Title>
						<p
							className={css`
								text-align: left;
							`}
						>
							{' '}
							In order to obtain your Residual Income, we must
							analyze your spending and saving habits!
						</p>
						<p
							className={css`
								text-align: left;
							`}
						>
							How much is your monthly spending?{' '}
						</p>
						<Input
							style={{ width: '20%' }}
							value={
								this.state.answers != null
									? this.state.answers.montlySpend
									: ''
							}
							placeholder='Enter Amount Here'
						/>
						<br />
						<p
							className={css`
								text-align: left;
							`}
						>
							How much is your annual spending?{' '}
						</p>
						<Input
							style={{ width: '20%' }}
							value={
								this.state.answers != null
									? this.state.answers.annualSpend
									: ''
							}
							placeholder='Enter Amount Here'
						/>
						<p
							className={css`
								text-align: left;
							`}
						>
							Do you have any loans you must pay off? For example,
							Student Loans. If so, how much?{' '}
						</p>
						<InputGroup compact>
							<Select
								value={
									this.state.answers != null
										? this.state.answers.loanNum
										: 'Select'
								}
							>
								<Option value='Yes'>Yes</Option>
								<Option value='No'>No</Option>
							</Select>
							<Input
								style={{ width: '20%' }}
								value={
									this.state.answers != null
										? this.state.answers.loan
										: ''
								}
								placeholder='Enter Amount Here'
							/>
						</InputGroup>
						<br />

						<p
							className={css`
								text-align: left;
							`}
						>
							How much is your monthly saving?{' '}
						</p>
						<Input
							style={{ width: '20%' }}
							value={
								this.state.answers != null
									? this.state.answers.monthlySav
									: ''
							}
							placeholder='Enter Amount Here'
						/>
						<p
							className={css`
								text-align: left;
							`}
						>
							How much is your annual saving?{' '}
						</p>
						<Input
							style={{ width: '20%' }}
							value={
								this.state.answers != null
									? this.state.answers.annualSav
									: ''
							}
							placeholder='Enter Amount Here'
						/>

						<>
							<Button
								type='primary'
								disabled={this.state.loading}
								size='large'
								onClick={this.props.submitClicked}
								className={css`
									margin: 0 auto;
									display: table;
									background: #0059b3;
								`}
							>
								{' '}
								Submit{' '}
							</Button>
						</>
						<br />
						<br />
						<br />
					</Form>
				</Card>
				{/* </Col> */}
				{/* </Row> */}
			</>
		);
	}
}
