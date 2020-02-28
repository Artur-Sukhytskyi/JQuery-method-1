jQuery.prototype.html = function(text) {
  this.each(element => element.innerHTML = text)
  return this;
}