// var katzDeli = [];
  
function takeANumber(katzDeliLine, newPersonName) {
  katzDeliLine.push(newPersonName);
  return "Welcome, " + newPersonName + ". You are number " + katzDeliLine.length + " in line.";
}

  var i = 0;
function takeANumberOldSchool(){
  i++;
    return "Welcome You are number " + i;
  
}

//it works now:
//takeANumber() Welcome Humzah You are number 1 in line
//takeANumber() Welcome Malcome You are number 2 in line
//nowServing()
//nowServing()
//takeANumber() Welcome Joe You are number 1 in line

//way we want it to work
//takeANumberOldSchool() Welcome  You are number 1 
//takeANumberOldSchool() Welcome You are number 2 
//nowServing()
//nowServing()
//takeANumberOldSchool() Welcome you are number 3





function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
       return ("Currently serving " + katzDeliLine.shift() + ".");
  } else if(window.katzDeliLine === undefined) {
    return ("There is nobody waiting to be served!");
  }
}

function currentLine(katzDeliLine) {
  var orderOfPeopleInLine = [];
  
  if (katzDeliLine.length === 0) {
   return "The line is currently empty." ;
 }
  
  for (var i = 0; i < katzDeliLine.length; i ++) {
    var name = katzDeliLine[i];
   orderOfPeopleInLine.push(' ' + (i + 1) + '. ' + name);
  } 
  return "The line is currently:" + orderOfPeopleInLine;
}
