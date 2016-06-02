var Graph = function (v){
  this.vertices = v;
  this.edges = 0;
  this.addj = [];
  for(var i=0; i< this.vertices; i++){
    this.addj[i] = [];
    this.addj[i].push(" ");
  }
  
  this.addEdge = function(v, w){
    this.addj[v].push(w);
    this.addj[w].push(v);
    this.edges ++; 
    return this;
  };
  
  this.showGraph = function() {
    for(var i=0; i <this.vertices; i++){
      console.log(i, "connected to -->");
      for(var j=0; j< this.vertices; j++){
        if(typeof this.addj[i][j] !== "undefined"){
          console.log(this.addj[i][j]);
        }
      }
    }
    return this; 
  };
};

b = new Graph(5);
b.addEdge(0,1);
b.addEdge(0,2);
b.addEdge(1,3);
b.addEdge(2,4);
b.addEdge(4,3)
b.showGraph()
// Output =======================================
// 0 'connected to -->'

// 1
// 2
// 1 'connected to -->'

// 0
// 3
// 2 'connected to -->'

// 0
// 4
// 3 'connected to -->'

// 1
// 4
// 4 'connected to -->'

// 2
// 3