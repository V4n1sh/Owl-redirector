function getData(name) {
  var rawdata = localStorage.getItem(name)
  try {
    return JSON.parse(rawdata)
  } catch (variable) {
    return
  }
}

function saveData(name, data) {
  localStorage.setItem(name, angular.toJson(data));

  chrome.extension.sendRequest({
      ask: "reload",
      reload: name
  })
}

function removeItem(array, item){
  var index = array.indexOf(item)
  if(index!=-1){
    array.splice(index, 1);
  }
}

function replaceItem(array, item, itemNew){
  var index = array.indexOf(item);
  array[index] = itemNew;
}

var specialChars = /[\^\$\(\)\[\]\{\}\.\?\+\*\|\\\/]/g
var specialCharsSlash = /\\([\^\$\(\)\[\]\{\}\.\?\+\*\|\\])/g
function str2reg(str){
  return '^' + str.replace(specialChars, '\\$&') + '$'
}
function reg2str(regstr){
  return regstr.replace(specialCharsSlash, '$1').replace(/^\^|\$$/g,'')
}