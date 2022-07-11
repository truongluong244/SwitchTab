var start;
var sumtime =0;
var activeSumTime = 0;
window.addEventListener('load', (event) => {
    start = Date.now();
  });
document.addEventListener('visibilitychange', function(){
    if(document.visibilityState ==='visible'){
        document.title = 'Active tab';
        start = Date.now();
        
    }
    else{
        document.title = 'Switch tab';
        var sumtime = Math.floor((Date.now()-start)/1000);
        console.log('Thời gian hoạt động ' +  sumtime ) 
        activeSumTime = Math.floor(sumtime+activeSumTime );
        console.log('Tổng  ' +  activeSumTime ) 
    }  
})



