var obj = {

    name: 'Alam',

    greet: function(param1, param2){
        console.log(`Hello ${ this.name } ${param2}`);
        if(`${param2}` === 'disco'){
            console.log('Let\'s have party');
        }
    }
}

//obj.greet();
obj.greet.call({name: 'Kaiser'}, 'hi', 'party');
obj.greet.apply({name: 'Kaiser'},['hello', 'disco']);