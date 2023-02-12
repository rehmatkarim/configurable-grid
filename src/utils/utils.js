
export function isTimestamp(str) {
    if( !IsNumeric(str) ){
        const date= new Date(str);
        return !isNaN(date.getTime());
    }
    return false;
}

export function getDisplayableDateString(dateString) {
    var date = new Date(dateString);
    
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date string");
    }
  
    var options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

export function IsNumeric(input){
    var RE = /^-{0,1}\d*\.{0,1}\d+$/;
    return (RE.test(input));
}