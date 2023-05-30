    const stopWatch = document.getElementById('stopWatch');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');
    
    let hour = 0;
    let min = 0;    
    let sec = 0;
    let msec = 0;

    let displayWatch = () => {
        msec++; 
        if (msec % 10 === 0) {   
            sec++;  
            msec = 0;
            
            if(sec % 60 === 0) {
            min++;
            sec = 0;
             
                if (min % 60 === 0) {
                hour++;
                min = 0;
                }
            }   
        }
        
        stopWatch.innerHTML = 
        ('0' + hour).slice(1) + ":" +
        ('0' + min).slice(1) + ":" + 
        ('0' + sec).slice(1) + ":" +
        ('00' + msec).slice(-1);
    };

    let interval;

        
    start.addEventListener('click' , () => {
        interval = setInterval(displayWatch, 100);
        start.disabled = true; 
        stop.disabled = false; 
        reset.disabled = true; 
    });

    stop.addEventListener('click' , () => {
        clearInterval(interval);   
        start.disabled = false;     
        stop.disabled = true;       
        reset.disabled = false;  
    });
        
    reset.addEventListener('click' , () => {
        stopWatch.innerHTML = '0:0:0:0'; 
        hour = 0;
        min = 0; 
        sec = 0;   
        msec = 0;
        start.disabled = false; 
        stop.disabled = true;   
        reset.disabled = true;  
    })