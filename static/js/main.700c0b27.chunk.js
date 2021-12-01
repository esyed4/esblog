(this.webpackJsonppolar_graphing=this.webpackJsonppolar_graphing||[]).push([[0],{14:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(7),c=t.n(r),s=t(1),i=t(2),o=t(4),m=t(3),u=(n.a.Component,t(8)),d=t(5);function p(e,a){var t=Math.sqrt(e*e+a*a);t=Math.round(1e4*(t+Number.EPSILON))/1e4;var l=Math.atan2(a,e)/Math.PI;return 0!==l&&(l+="pi"),{r:t,theta:l}}var E=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).state={x_value:"",y_value:"",polar_coordinate:"(0, 0)"},l.handleChange=l.handleChange.bind(Object(d.a)(l)),l.handleSubmit=l.handleSubmit.bind(Object(d.a)(l)),l}return Object(i.a)(t,[{key:"handleChange",value:function(e){var a=e.target,t=a.name,l=a.value;this.setState(Object(u.a)({},t,l))}},{key:"handleSubmit",value:function(e){var a="("+p(this.state.x_value,this.state.y_value).r+", "+p(this.state.x_value,this.state.y_value).theta+")";this.setState({polar_coordinate:a}),console.log(a),e.preventDefault()}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card-columns d-flex justify-content-center"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},"Important equations relating x,y to r,\u03b8"),n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item"},"x = r cos \u03b8"),n.a.createElement("li",{className:"list-group-item"},"y = r sin \u03b8"),n.a.createElement("li",{className:"list-group-item"},"tan \u03b8 = y / x"),n.a.createElement("li",{className:"list-group-item"},"r",n.a.createElement("sup",null,"2")," = x",n.a.createElement("sup",null,"2")," + y",n.a.createElement("sup",null,"2")))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},"Example: (x, y) ","->"," (r, \u03b8)"),n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item"},"(1, 0) ","->"," (",p(1,0).r,", ",p(1,0).theta,")"),n.a.createElement("li",{className:"list-group-item"},"(0, 1) ","->"," (",p(0,1).r,", ",p(0,1).theta,")"),n.a.createElement("li",{className:"list-group-item"},"(1, 1) ","->"," (",p(1,1).r,", ",p(1,1).theta,")"),n.a.createElement("li",{className:"list-group-item"},"(0, 0) ","->"," (",p(0,0).r,", ",p(0,0).theta,")"))))),n.a.createElement("br",null),"Try inputting a few x and y coordinates and see the corresponding (r, \u03b8):",n.a.createElement("br",null),n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("label",null,"(",n.a.createElement("input",{type:"number",name:"x_value",value:this.state.x_value,onChange:this.handleChange}),","),n.a.createElement("label",null,n.a.createElement("input",{type:"number",name:"y_value",value:this.state.y_value,onChange:this.handleChange}),")"),n.a.createElement("input",{type:"submit",value:"Submit"}),n.a.createElement("p",null," ","->"," ",this.state.polar_coordinate)),n.a.createElement("hr",null))}}]),t}(n.a.Component),h=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("p",null,"The following section will cover how curves are drawn in 2 dimensional polar planes."),n.a.createElement("p",null,"The graph of a polar equation can be represented by f(\u03b8) = r, or by F(r,\u03b8) = 0. The following figure demonstrates how circles of various radii look like."),n.a.createElement("div",{className:"d-flex justify-content-center mb-1"},n.a.createElement("figure",null,n.a.createElement("img",{src:"/images/graph_examples/example_circles.png",height:"225px",alt:"Cartesian coordinates example."}),n.a.createElement("figcaption",null,"Circles of various r values"))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",null,"We can see that a circle with radius r can be express simply by r = 1. The equivalent equation in cartesian coordinates would be x",n.a.createElement("sup",null,"2")," + y",n.a.createElement("sup",null,"2")," = 1"),n.a.createElement("p",null,"To proceed, some more complex curves can be more easily plotted on a polar plane than cartesian. Let's consider the following curve: r = cos 2\u03b8"),n.a.createElement("p",null,"We will begin by creating a table of r values based on the angle, \u03b8, then we will plot those values on in cartesian coordinates."),n.a.createElement("div",{className:"d-flex justify-content-center",style:{height:"450px"}},n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"\u03b8"),n.a.createElement("th",{scope:"col"},"r = cos 2\u03b8"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"0"),n.a.createElement("td",null,"1")),n.a.createElement("tr",null,n.a.createElement("td",null,"\u03c0/6"),n.a.createElement("td",null,"1/2")),n.a.createElement("tr",null,n.a.createElement("td",null,"\u03c0/4"),n.a.createElement("td",null,"0")),n.a.createElement("tr",null,n.a.createElement("td",null,"\u03c0/3"),n.a.createElement("td",null,"-1/2")),n.a.createElement("tr",null,n.a.createElement("td",null,"\u03c0/2"),n.a.createElement("td",null,"-1")),n.a.createElement("tr",null,n.a.createElement("td",null,"2\u03c0/3"),n.a.createElement("td",null,"-1/2")),n.a.createElement("tr",null,n.a.createElement("td",null,"3\u03c0/4"),n.a.createElement("td",null,"0")),n.a.createElement("tr",null,n.a.createElement("td",null,"5\u03c0/6"),n.a.createElement("td",null,"1/2")),n.a.createElement("tr",null,n.a.createElement("td",null,"\u03c0"),n.a.createElement("td",null,"1")))),n.a.createElement("br",null),n.a.createElement("figure",null,n.a.createElement("img",{src:"/images/graph_examples/cartesian_plot_of_2costheta.png",height:"225px",alt:"Cartesian coordinates example."}),n.a.createElement("figcaption",null,"\xa0\xa0\xa0\xa0\xa0\xa0Cartesian coordinates of r = cos 2\u03b8"))),n.a.createElement("br",null),n.a.createElement("div",{className:"d-flex justify-content-center mb-3",style:{height:"200px"}},n.a.createElement("figure",null,n.a.createElement("img",{src:"/images/graph_examples/four_leaved_rose.png",height:"225px",alt:"Cartesian coordinates example."}),n.a.createElement("figcaption",null,"Four leaved rose of r = cos 2\u03b8"))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("hr",null),n.a.createElement("div",{className:"container"},n.a.createElement("p",null,"Below are some useful resources regarding polar coordinates, and graphing utilities."),n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"https://www.desmos.com/calculator"},"Desmos, 2d and 3d Graphs"),n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"https://www.geogebra.org/graphing"},"Geogebra, 2d and 3d Graphs"),n.a.createElement("div",{id:"accordian"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header",id:"headingOne"},n.a.createElement("h5",{className:"mb-0"},n.a.createElement("button",{className:"btn btn-link","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"View Resources used regarding this project."))),n.a.createElement("div",{id:"collapseOne",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordion"},n.a.createElement("div",{className:"card-body"},"Dawkins, P. (2018, August 27). Section 3-6 : Polar Coordinates. Calculus II - polar coordinates. Retrieved November 10, 2021, from https://tutorial.math.lamar.edu/classes/calcii/polarcoordinates.aspx.",n.a.createElement("br",null),n.a.createElement("br",null),"Stewart, J. (2016). Calculus: Early transcendentals (8th ed.). Cengage Learning.",n.a.createElement("br",null),n.a.createElement("br",null)))))))}}]),t}(n.a.Component),g=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement("div",{className:"container"},n.a.createElement("br",null),n.a.createElement("p",null," Polar Coordinates can be understood from a perspective coming from the more commonly used Cartesian Coordinates. Polar Coordinates can be an easier coordinate system to use under circumstances. "),n.a.createElement("p",null," Cartesian coordinates contain two perpendicular Axes (x,y) and plot points going in the horizontal and vertical directions cooresponding to the given x and y coordinates. Polar Coordinates can be expressed by an r value to describe the distance from the origin, and a \u03b8 value to describe the angle the point makes from the positive x-axis."),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"d-flex justify-content-center",style:{height:"250px"}},n.a.createElement("figure",null,n.a.createElement("img",{className:"graph-picture",src:"/images/graph_examples/cartesian_coordinates.png",alt:"Cartesian coordinates example."}),n.a.createElement("figcaption",null,"Cartesian Coordinates")),n.a.createElement("div",{className:"vr"}),n.a.createElement("figure",null,n.a.createElement("img",{src:"/images/graph_examples/cartesian_and_polar_coordinates.png",alt:"Cartesian and polar coordinates example."}),n.a.createElement("figcaption",null,"\xa0\xa0Cartesian and Polar Coordinates"))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("hr",null),n.a.createElement("div",{className:"container"}),n.a.createElement(E,null),n.a.createElement(h,null))))}}]),t}(n.a.Component);c.a.render(n.a.createElement(g,null),document.querySelector("#root"))},9:function(e,a,t){e.exports=t(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.700c0b27.chunk.js.map