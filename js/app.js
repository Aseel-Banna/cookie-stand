'use strict'

var hours= ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', 
'3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];

// Objects
var Seattle= {
    name: 'Seattle',
    min_custemor: 23,
    max_custemor: 65,
    avg_cookies: 6.3,
    customer_num: [],
    cookies_sold: [],
    total: 0,

    customer_per_hour: function(){
        for (var i=0 ; i < hours.length ; i++) {   
          this.customer_num.push(randomNumber(this.min_custemor, this.max_custemor));
          console.log(this.customer_num);
    }
  },
  cookies_purchased: function(){
      for (var j=0; j < hours.length ; j++){
          this.cookies_sold.push(Math.ceil(multipacation(this.customer_num[j], this.avg_cookies)));
          console.log(this.cookies_sold);
      }
  },

  getTotal: function(){
      for (var c=0 ; c < this.cookies_sold.length ; c++){
         this.total= this.total+ this.cookies_sold[c];

      }
      return this.total;
  }

};

Seattle.customer_per_hour();
console.log(Seattle.customer_num);

Seattle.cookies_purchased();
console.log(Seattle.cookies_sold);


Seattle.getTotal();
console.log(Seattle.total);

var Tokyo= {
    name: 'Tokyo',
    min_custemor: 3,
    max_custemor: 24,
    avg_cookies: 1.2,
    customer_num: [],
    cookies_sold: [],
    total:0,

    customer_per_hour: function(){
        for (var i=0 ; i < 14 ; i++) {   
          this.customer_num.push(randomNumber(this.min_custemor, this.max_custemor));
          console.log(this.customer_num);
    }
  },
  cookies_purchased: function(){
      for (var j=0; j<14; j++){
          this.cookies_sold.push(Math.ceil(multipacation(this.customer_num[j], this.avg_cookies)));
          console.log(this.cookies_sold);
      }
  },
  getTotal: function(){
    for (var c=0; c<this.cookies_sold.length; c++){
       this.total= this.total+ this.cookies_sold[c];

    }
    return this.total;
}


};

Tokyo.customer_per_hour();
console.log(Tokyo.customer_num);

Tokyo.cookies_purchased();
console.log(Tokyo.cookies_sold);

Tokyo.getTotal();
console.log(Tokyo.total);

var Dubai= {
    name: 'Dubai',
    min_custemor: 11,
    max_custemor: 38,
    avg_cookies: 3.7,
    customer_num: [],
    cookies_sold: [],
    total:0,

    customer_per_hour: function(){
        for (var i=0 ; i < 14 ; i++) {   
          this.customer_num.push(randomNumber(this.min_custemor, this.max_custemor));
          console.log(this.customer_num);
    }
  },
  cookies_purchased: function(){
      for (var j=0; j<14; j++){
          this.cookies_sold.push(Math.ceil(multipacation(this.customer_num[j], this.avg_cookies)));
          console.log(this.cookies_sold);
      }
  },
  getTotal: function(){
    for (var c=0; c<this.cookies_sold.length; c++){
       this.total= this.total+ this.cookies_sold[c];

    }
    return this.total;
}

};

Dubai.customer_per_hour();
console.log(Dubai.customer_num);

Dubai.cookies_purchased();
console.log(Dubai.cookies_sold);

Dubai.getTotal();
console.log(Dubai.total);


var Paris= {
    name: 'Paris',
    min_custemor: 20,
    max_custemor: 38,
    avg_cookies: 2.3,
    customer_num: [],
    cookies_sold: [],
    total:0,

    customer_per_hour: function(){
        for (var i=0 ; i < 14 ; i++) {   
          this.customer_num.push(randomNumber(this.min_custemor, this.max_custemor));
          console.log(this.customer_num);
    }
  },
  cookies_purchased: function(){
      for (var j=0; j<14; j++){
          this.cookies_sold.push(Math.ceil(multipacation(this.customer_num[j], this.avg_cookies)));
          console.log(this.cookies_sold);
      }
  },

  getTotal: function(){
    for (var c=0; c<this.cookies_sold.length; c++){
       this.total= this.total+ this.cookies_sold[c];

    }
    return this.total;
}

};

Paris.customer_per_hour();
console.log(Paris.customer_num);

Paris.cookies_purchased();
console.log(Paris.cookies_sold);

Paris.getTotal();
console.log(Paris.total);


var Lima= {
    name: 'Lima',
    min_custemor: 2,
    max_custemor: 16,
    avg_cookies: 4.6,
    customer_num: [],
    cookies_sold: [],
    total:0,

    customer_per_hour: function(){
        for (var i=0 ; i < 14 ; i++) {   
          this.customer_num.push(randomNumber(this.min_custemor, this.max_custemor));
          console.log(this.customer_num);
    }
  },
  cookies_purchased: function(){
      for (var j=0; j<14 ; j++){
          this.cookies_sold.push(Math.ceil(multipacation(this.customer_num[j], this.avg_cookies)));
          console.log(this.cookies_sold);
      }

  },
  getTotal: function(){
    for (var c=0; c<this.cookies_sold.length; c++){
       this.total= this.total+ this.cookies_sold[c];

    }
    return this.total;
} 

};

Lima.customer_per_hour();
console.log(Lima.customer_num);

Lima.cookies_purchased();
console.log(Lima.cookies_sold);

Lima.getTotal();
console.log(Lima.total);



// Declaring Functions

function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function multipacation(customer,cookie){
    var customer;
    var cookie;
    return customer*cookie;
}


// Display Elements on Sales Page

var branches=[Seattle, Tokyo, Dubai, Paris, Lima];
var parentMain= document.getElementById('main-id');

var tot=0;

for (var c=0; c < branches.length; c++ ){
    var branchName= document.createElement('h2');
    var content= branchName.textContent='';
    branchName.textContent=content + branches[c].name;
    branches[c].name;
    console.log(branches[c].name);
    parentMain.appendChild(branchName);

    
     
    for (var j=0; j < hours.length; j++){
        var branchList= document.createElement('ul');
        parentMain.appendChild(branchList);
        var hourList= document.createElement('li');
        var totalList= document.createElement('li')
        hourList.textContent = hours[j] + ': ' +  branches[c].cookies_sold[j] + ' cookies.' ;
        
        branchList.appendChild(hourList);
    }
    totalList.textContent= 'Total: '+ branches[c].total;
    branchList.appendChild(totalList);
}




