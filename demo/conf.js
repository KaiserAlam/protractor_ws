var os = require('os');
os.tmpDir = os.tmpdir;

const getSpecsFromFile = function () {

    let fs = require('fs');
    let spec_array = fs.readFileSync('./specs.txt', 'utf8').split('\n');
    let valid_spec_array = [];

    for(let spec of spec_array){
        spec = spec.trim();
        if(spec && spec.indexOf('//') != 0){
            valid_spec_array.push('./tests/' + spec.split(/[,;/]+/)[0]);
        }
    }
    console.log("The Following Spec will be Executed: " + valid_spec_array);

    return valid_spec_array;
};

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: getSpecsFromFile(),

    onPrepare: function(){
        let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    },

    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 50000
    },

    SELENIUM_PROMISE_MANAGER: false
};