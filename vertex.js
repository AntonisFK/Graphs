var Vertex = (function(){
  function Vertex(data){
    this.data = data;
    this.name = null; 
    this.cost = 0;
    this.visited = false; 
  }

Vertex.prototype.showdata = function(){
  console.log(this.data)
}

  return Vertex; 
})();

module.exports = Vertex; 
