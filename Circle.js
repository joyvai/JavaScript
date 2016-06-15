function Circle (radius) {
    this.radius = radius;
    // this area function calculates Circle area
    this.area = function () {
        return Math.PI * this.radius * this.radius;//pi*r^2
        
    };
    // define a perimeter method here
    this.perimeter = function(){
        return 2*Math.PI*this.radius; //2*pi*r
    };
};

(Circle(4));


