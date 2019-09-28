import { Button, Typography } from 'antd';
import { css } from 'emotion';
import React from 'react';
import config from '../index';

const { Title, Paragraph } = Typography;

export default class Intro extends React.Component<{}, {}> {
	render() {
		const title_c = (
			<Title
				level={1}
				className={css`
					text-align: center;
				`}
			>
				Youth Housing Planner
			</Title>
		);

		const body = (
			<>
				<Paragraph>
					Hello, welcome to {config.siteTitle}. We aim to help you
					determine what sort of housing is best for you. Being a
					young adult, in one of the worlds most expensive
					metropolitan cities is difficult.
				</Paragraph>
				<Paragraph>
					So, we have designed a detailed questionnaire that will help
					you determine whether you should consider buying a house
					now, or wait till the future. We will also help you
					determine which neighborhood to buy it in based on your
					income and spending habits.
				</Paragraph>
			</>
		);

		const button = (
			<>
				<Button type='primary' size='large'  className={
                    css`
                        margin: 0 auto;
						display: table;
						background: #0059b3;
                    `
                } href="/questionnaire/">
					Take our questionnaire
				</Button>
			</>
		);
		return (
			<>
				{title_c}
                {body}
                {button}
			</>
		);
	}
}
