/* src/js/main.js */
import {myButton, myDesc} from './init';

myDesc.hide();
myButton.on('click', function(e){
    myDesc.toggle();
});