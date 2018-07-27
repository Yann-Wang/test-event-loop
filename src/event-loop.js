setTimeout(()=>{
  console.log('timer1')

  new Promise(function(resolve){
    console.log('promise1');
    for(var i = 0; i < 1000; i++) {
        i == 99 && resolve();
    }
    console.log('promise2');
  }).then(function() {
      console.log('promise3')
  })
}, 0)

setTimeout(()=>{
  console.log('timer2')

  new Promise(function(resolve){
    console.log('promise4');
    for(var i = 0; i < 1000; i++) {
        i == 99 && resolve();
    }
    console.log('promise5');
  }).then(function() {
      console.log('promise6')
  })
}, 0)