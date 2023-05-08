import { LightningElement } from 'lwc';

export default class Helloworld12345 extends LightningElement {
    greeting='world';
    changeHandler(event){
        this.greeting=event.target.value;
    }
}