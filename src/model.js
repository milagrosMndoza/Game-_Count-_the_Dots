import React from 'react';

class Model {
	constructor(){
		this.notify = null;
		this.cards = [
			 {
				value: 0,
				state: false,
				srcImg:"direccionIMAgen"
			},
			{
				value: 0,
				state: false,
				srcImg:"direccionIMAgen"
			},
			{
				value: 0,
				state: false,
				srcImg:"direccionIMAgen"
			},
			{
				value: 0,
				state: false,
				srcImg:"direccionIMAgen"
			},
			{
				value: 0,
				state: false,
				srcImg:"https://ugc.kn3.net/i/origin/http://www.definicionabc.com/wp-content/uploads/punto.gif"
			}
		];
	}
	subscribe (render) {
		this.notify = render;
	}
	numberRandom(){
		/*escoge un numero del 1 al 31*/
		let num = Math.floor((Math.random() * 31));
		return num;
	}
	selectionCard (idCard){
		/* si el valor es 0 se convertira en 1 */
		this.cards[idCard].value = (this.cards[idCard].value)? 0 : 1 ;
		/* si es false se convierte en true */
		this.cards[idCard].state = (this.cards[idCard].state)? 0 : 1 ;
		this.notify();
	}

}

export default Model;