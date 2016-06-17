var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        // complete this method
        console.log("Hi, I work as a "+[this.job]);
        
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job="super programmer";

// james' second job
james.sayJob();


var joy = {
    job:"unemployed",
    passion: true,
    SayJob: function(){
        console.log("I am "+[this.job]);
    }
};

joy.SayJob();

joy.job = "employed";

joy.SayJob();
