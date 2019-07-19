function forLoop(array) {
  for(var i = 0;i<25;i++) {
    var sOrNot = "s"
    if(i===0) sOrNot = ""
    array = array.push("I am " + i + "strange loop" + sOrNot + ".")
  }
}