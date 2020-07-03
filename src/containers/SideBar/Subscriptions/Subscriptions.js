import React from 'react';
import {Subscription} from "./Subscription/Subscription";
import {Divider} from "semantic-ui-react";
import {SideBarHeader} from '../SideBarHeader/SideBarHeader';

export class Subscriptions extends React.Component {
	render() {
		return (
			<React.Fragment>
				<SideBarHeader title='Subscription'/>
				<Subscription label='MusicChannel' broadcasting/>
				<Subscription label='Erics Guitar' amountNewVideos={10}/>
				<Divider/>
			</React.Fragment>
		)
	}
}

export default Subscriptions;