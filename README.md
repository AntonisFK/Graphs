#Graphs Class 
The class keeps track of how may edges are represented in a graph, as well as the number of vertices by utilizing an array whose length is equal
to the number of vertices in the graph. Graph class implements an *adjacency List*. In each element of the array, the for loop adds a sub array to store all the *adjacent vertices* .
<br>
##Adjacency List
**Adjacency List** are two-dimensional arrays. Each row represents the outward connections for a vertex, but only valid edges are stored. 
![](http://ycpcs.github.io/cs360-spring2015/lectures/images/lecture15/adjlistexample.png)

<hr>
##What is a Graph 
Graph consist of a set of vertices and set of edges. Think of a map each town is a vertices and a road that connects them is an Edge.
[A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.](https://en.wikipedia.org/wiki/Graph_(abstract_data_type))

**Edges** defined as a pair(v1, v2) where v1 and v2 are two vertices in a graph 

### Important terms 
* **Vertex**: What we have called a node: a vertex is where connections meet
* **Edge**: runs between two vertices(nodes)
* **Walk**: a walk is any route from a vertex through edges to subsequent vertices 
* **Acyclic**: graphs contaiin only one way to travel between two vertices 
* **cyclic**: cyclic graphs can contain multiple ways of getting from one node to the other 
* **order**: a graph's order is the number of vertices in the graph


