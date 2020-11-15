import { LightningElement } from 'lwc';

export default class TestLWC extends LightningElement {
	data;
	output;
	updateOutput(event){
		this.output = event.target.value;
	}
}