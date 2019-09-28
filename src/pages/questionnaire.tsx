import { AutoComplete, Button, Cascader, Col, DatePicker, Form, Input, InputNumber, Row, Select, Typography } from 'antd';
import { css } from 'emotion'
import React from  "react";
import Navbar from "src/components/navbar";

const {Title } = Typography;
const InputGroup = Input.Group;
const { Option } = Select;

export default class Questionnaire extends React.Component<{}, {}>{
    private options = [
        {
        value: 'Enter Job',
        label: 'Enter Job',
        children: [
        {
        value: 'monthly income',
        label: 'Monthly Income',
        children: [
        {
        value: 'annual income',
        label: 'Annual Income'}
]}]}];

    render(){
        return(<>
        <Navbar/>
				<Row align="middle"type="flex" justify='center'>
					<Col sm={24} md={12}>
						<Title level={1} className={css `text-align: center;`}>Questionnaire</Title>
                        <p className={css `text-align: center;`}>Fill out this quick and simple Questionnaire so that we can get to know you better!</p>
                        <Form>

                        <Title level= {4} className={css `text-align: left;`}>Employment</Title>
                        <br/>
                        <p className={css `text-align: left;`}>What is your Current Job? </p>
                        <InputGroup compact>
                        <Select defaultValue="Select">
                            <Option value="Junior">Junior</Option>
                            <Option value="Senior">Senior</Option>
                            <Option value="Manager">Manager</Option>
                            <Option value="Senior Manager">Senior Manager</Option>
                        </Select>
                        <Input style={{ width: '20%' }} placeholder="Enter Job" />
                        </InputGroup>
                        
                        <br/>
                        <p className={css `text-align: left;`}>  Since the renting expense is on a monthly basis, we ask for both monthly annually. Income includes salaries, bonuses, domestic and foreign investment, family heritage etc.</p>
                        <p className={css `text-align: left;`}>How much is your monthly income after taxes, including all sources of income? </p>
                        <Input style={{ width: '20%' }} placeholder="Enter Income Here" />
                        <p className={css `text-align: left;`}>How much is your annual income after taxes, including all sources of income? </p>
                        <Input style={{ width: '20%' }} placeholder="Enter Income Here" />
                        <br/>
                        <br/>
                        <br/>
                        <Title level= {4} className={css `text-align: left;`}>Marital Status</Title>
                        <p className={css `text-align: left;`}>Are you Married or Single? </p>
                        <InputGroup compact>
                        <Select defaultValue="Select">
                            <Option value="Single">Single</Option>
                            <Option value="Married">Married</Option>
                        </Select>
                        </InputGroup>
                        
                        <p className={css `text-align: left;`}>Do you have any individuals dependant on you? i.e. Parents, Siblings </p>
                        <InputGroup compact>
                        <Select defaultValue="Select">
                            <Option value="Yes">Yes</Option>
                            <Option value="No">No</Option>
                        </Select>
                        </InputGroup>

                        <p className={css `text-align: left;`}>Do you plan to settle down and purchase a home? </p>
                        <InputGroup compact>
                        <Select defaultValue="Select">
                            <Option value="Yes">Yes</Option>
                            <Option value="No">No</Option>
                        </Select>
                        </InputGroup>
                        <br/>
                        <Title level= {4} className={css `text-align: left;`}>Spending and Saving</Title>
                        <p className={css `text-align: left;`}> In order to obtain your Residual Income, we must analyze your spending and saving habits!</p>
                        <p className={css `text-align: left;`}>How much is your monthly spending? </p>
                        <Input style={{ width: '20%' }} placeholder="Enter Amount Here" />
                        <br/>
                        <p className={css `text-align: left;`}>How much is your annual spending? </p>
                        <Input style={{ width: '20%' }} placeholder="Enter Amount Here" />
                        <p className={css `text-align: left;`}>Do you have any loans you must pay off? For example, Student Loans. If so, how much? If not, please enter "N/A" </p>
                        <InputGroup compact>
                        <Select defaultValue="Select">
                            <Option value="Yes">Yes</Option>
                            <Option value="No">No</Option>
                        </Select>
                        <Input style={{ width: '20%' }} placeholder="Enter Amount Here" />
                        </InputGroup>
                        <br/>

                        <p className={css `text-align: left;`}>How much is your monthly saving? </p>
                        <Input style={{ width: '20%' }} placeholder="Enter Amount Here" />
                        <p className={css `text-align: left;`}>How much is your annual saving? </p>
                        <Input style={{ width: '20%' }} placeholder="Enter Amount Here" />

                        
                            <>
                     <Button type='primary' size='large'  className={css`margin: 0 auto; display: table; background: #0059b3;`}> Submit </Button>
    
                        </>
                        <br/>
                        <br/>
                        <br/>
                        </Form>
                    </Col>
				</Row>
        
        </>);
    }
}
