var userObj = {
    age:20,
    firstName: 'Nick',
    lastName: 'Smith',
    fullName: function(){
        return this.firstName + " " + this.lastName ;
    }
    
    
}
console.log(userObj)
console.log(userObj.fullName())


function defUpperStr(str) {
    return (str || 'Default text').toUpperCase();
  }
  
  console.log(defUpperStr('My text'));
  console.log(defUpperStr()); 


  function evenFn (n){
      var arr = [];
      for (var i=1; i<=n; i++) if (i %2 ===0) arr.push(i);
      return arr;
  }
  console.log(evenFn(10));
  console.log(evenFn(15));
  console.log(evenFn(20));


  function weekFn (n){
      var x ='';
      switch (n) {
          case 1:
              x = 'Понедельник';
              break;
            case 2:
                x = 'Вторник';
                break;
            case 3:
                x = 'Среда';
                break;
            case 4:
                x = 'Четверг';
                break;
            case 5:
                x = 'Пятница';
                break;
            case 6:
                x = 'Суббота';
                break;
            case 7:
                x = 'Воскресенье';
                break;
            default:
                x = null;
      }
      return x;
  }
console.log(weekFn(1)); 
console.log(weekFn(3)); 
console.log(weekFn(7)); 
console.log(weekFn(9)); 
console.log(weekFn(1.5)); 
console.log(weekFn('2')); 

function ageClassification (n) {
    return n > 0
    ? n > 24
      ? n > 44
        ? n > 65
          ? n > 75
            ? n > 90
              ? n > 122
                ? null
                : 'долгожители'
              : 'старческий возраст'
            : 'пожилой возраст'
          : 'средний возраст'
        : 'молодой возраст'
      : 'детский возраст'
    : null;
}

console.log('-1 :', ageClassification(-1)); 
console.log('5 :', ageClassification(5)); 
console.log('34 :', ageClassification(34)); 
console.log('50 :', ageClassification(50)); 
console.log('65.1 :', ageClassification(65.1)); 
console.log('80 :', ageClassification(80)); 
console.log('110 :', ageClassification(110)); 
console.log('130 :', ageClassification(130));




function oddFn (n){
    var arr = [];
    var i = 0;
    while (i++ < n) if (i % 2 !== 0) arr.push(i);

  return arr;
}

console.log(oddFn(10)); 
console.log(oddFn(15)); 
console.log(oddFn(20));  


function mainFunc(a, b, cb) {
    if (cb && typeof cb === 'function') return cb(a, b);
  
    return false;
  }
  function cbRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function cbPow(num, pow) {
    return Math.pow(num, pow);
  }
 
  function cbAdd(a, b) {
    return a + b;
  }

  console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(2, 5, cbPow)); 
console.log(mainFunc(2, 5, cbAdd)); 
console.log(mainFunc(2, 5, 'not a func')); 
    