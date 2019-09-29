import React from "react";
import Spending from "src/components/spending";
import Questionnaire from "src/components/questionnaire";
import DaVinci from "src/services.tsx/da_vinci";
import {Row, Col} from 'antd';

enum APP_LOAD_STATE{
	Intro_State = 1,
	Questionnare_State = 2,
};


interface StatsState{
    da_vinci_inst: DaVinci;
	state: APP_LOAD_STATE;    
}

export default class Stats extends React.Component<{}, StatsState>{
    constructor(props: {}) {
		super(props);
		this.state = {
			da_vinci_inst: new DaVinci(),
			state: APP_LOAD_STATE.Intro_State,
		};
    }

    private redirectToQuestionnaire(){
		this.setState({
			state: APP_LOAD_STATE.Questionnare_State,
		})
	}

    render(){
        return (
        <>
            <Row align='middle' type='flex' justify='center'>
                <Col sm={22} md={12}>
                    <Questionnaire callback={this.redirectToQuestionnaire.bind(this)} da_vinci_inst={this.state.da_vinci_inst}/>
                </Col>
            </Row>
            <Spending
                da_vinci_inst={this.state.da_vinci_inst}
                customer_id='4806f34e-93a6-4e2f-9e41-5ee9f0d24f14'
            />
        </>)
    }
}