function greet(callback){
    console.log('Hello!');

    var data = {
        name: 'John Doe'
    };

    callback(data);


}
greet(async function(data){
    console.log('The 1st callback was invoked!');
    await sleep(10000);
    console.log('After sleep');
    console.log(data);
});

greet(function(data){
    console.log('The 2nd callback was invoked!');
    console.log(data);
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}