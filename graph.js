var Vertex = require('./vertex.js')

var Graph = (function(){
  
  function Graph(){
    this.edges = 0;
    this.addj = [];
    this.verticesList = []; 
    var vertId = 0;
  
    Graph.prototype.addVertex = function(vertex){
      this.verticesList.push(vertex);
      this.addj.push([]);
      vertex.name = vertId++;
      console.log(vertex, "Inserted Vertex");
      return vertex.name;
  
    };

    Graph.prototype.removeVertex = function(vertex){
      for(var i=0; i < this.verticesList.length; i++){
        if(this.verticesList[i].name === vertex.name){
          this.verticesList.splice(i, 1);
          this.addj.splice(i,1);
          return true; 
        }
      }
      return false; 
    };
    
    Graph.prototype.setData = function(vertex, data){
      for(var i in this.verticesList){
        if(this.verticesList[i].name === vertex.name){
        this.verticesList[i].data = data;
        return vertex;
        }
      }
      return false;
    };
    //Edges 
  
  Graph.prototype.addEdge = function(name1, name2) {
    for(var i in this.verticesList){
      if(this.verticesList[i].name === name1){
        this.addj[i].push(name2);
        return true;
      }
    }
    return false;
  };
  
  Graph.prototype.neighbors = function(name){
    for(var i in this.verticesList){
      if(this.verticesList[i].name === name){
         console.log(name, "neighbors:",this.addj[i]);
         return this.addj[i];
      }
    }
    return false;
  };
  
  Graph.prototype.isAdjacent = function(name1, name2){
    for(var i in this.verticesList){
      if(this.verticesList[i].name === name1){
        for(var b in this.addj[i]){
          if (this.addj[i][b] === name2){
            console.log("isAdjecent",name1, name2);
            return true;
          }
        }
      return false;
      }
    }
    return false;
    };
}
return Graph; 
})();

module.exports = Graph; 