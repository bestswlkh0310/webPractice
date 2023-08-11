export function calculateDeadTime() {
    var currentTime: Date = new Date();
    var targetTime: Date = new Date("2029-09-22T21:00:00");
    
    var timeDifference = Number(targetTime) - Number(currentTime);
    
    var years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
    timeDifference -= years * 365 * 24 * 60 * 60 * 1000;
    
    var days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    timeDifference -= days * 24 * 60 * 60 * 1000;
    
    var hours = Math.floor(timeDifference / (60 * 60 * 1000));
    timeDifference -= hours * 60 * 60 * 1000;
    
    var minutes = Math.floor(timeDifference / (60 * 1000));
    timeDifference -= minutes * 60 * 1000;
    
    var seconds = Math.floor(timeDifference / 1000);
    
    var formattedResult = years + "년 " + days + "일 " + hours + "시간 " + minutes + "분 " + seconds + "초";
    
    return formattedResult;

}