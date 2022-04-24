//% weight=100 color=#D98880 icon=N

namespace countdown {
    
    /**
     *  start countdown
     */
    //% block
    export function countdownTo(start: number, digit: number): void {
        let myCounter = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, digit)
        myCounter.count = start

       
        game.onUpdateInterval(500, function() {
            myCounter.count += -1
            
            pause(900)
        })
             
        
    }
}

