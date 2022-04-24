namespace countdown {
    export function countdownTo(start: number, digit: number): void {
        let myCounter = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, digit)
        myCounter.count = start

        game.onUpdateInterval(500, function() {
            
        })
    }
}
