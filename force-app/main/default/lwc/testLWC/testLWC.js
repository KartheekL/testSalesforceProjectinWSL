import { LightningElement } from 'lwc';

export default class TestLWC extends LightningElement {
	data = 4;
	output;
	updateOutput(event){
		this.output = this.data;
	}
}