var fs = require("fs");
var exports = module.exports = {};

exports.generateSVG = function (data, callback) {
  //here will be creating of SVG graph and save into file
//   fs.writeFile('assets/svg/chart.svg', svg_obj, function (err) {
//     if (err) return callback(err);
//     console.log('It\'s saved!');
//     return callback(null);
//   });
  return callback(null, svg_obj);
}

var svg_obj = '<svg width="800px" height="500px" viewBox="0 0 800 500" class="chart">  \n'+
'<g class="grid x-grid" id="xGrid">                                                    \n'+
'      <line x1="113" x2="113" y1="10" y2="380"></line>                                \n'+
'      <line x1="259" x2="259" y1="10" y2="380"></line>                                \n'+
'      <line x1="405" x2="405" y1="10" y2="380"></line>                                \n'+
'      <line x1="551" x2="551" y1="10" y2="380"></line>                                \n'+
'      <line x1="697" x2="697" y1="10" y2="380"></line>                                \n'+
'    </g>                                                                              \n'+
'    <g class="grid y-grid" id="yGrid">                                                \n'+
'      <line x1="86" x2="697" y1="10" y2="10"></line>                                  \n'+
'      <line x1="86" x2="697" y1="68" y2="68"></line>                                  \n'+
'      <line x1="86" x2="697" y1="126" y2="126"></line>                                \n'+
'      <line x1="86" x2="697" y1="185" y2="185"></line>                                \n'+
'      <line x1="86" x2="697" y1="243" y2="243"></line>                                \n'+
'      <line x1="86" x2="697" y1="301" y2="301"></line>                                \n'+
'      <line x1="86" x2="697" y1="360" y2="360"></line>                                \n'+
'    </g>                                                                              \n'+
    
    
'    <g class="surfaces">                                                              \n'+
'        <path class="first_set" d="M113,360 L113,192 L259,171 L405,179 L551,200 L697,204 L697,360 Z"></path> \n'+
'    </g>                                                                              \n'+
                                                                                     
'    <use class="grid double" xlink:href="#xGrid" style=""></use>                      \n'+
'    <use class="grid double" xlink:href="#yGrid" style=""></use>                      \n'+
                                                                                      
'    <g class="first_set points" data-setname="Our first data set">                    \n'+
'      <circle cx="113" cy="192" data-value="7.2" r="5"></circle>                      \n'+
'        <text x="113" y="182">123</text>                                              \n'+
'      <circle cx="259" cy="171" data-value="8.1" r="5"></circle>                      \n'+
'        <text x="259" y="161">123</text>                                              \n'+
'      <circle cx="405" cy="179" data-value="7.7" r="5"></circle>                      \n'+
'        <text x="405" y="169">123</text>                                              \n'+
'      <circle cx="551" cy="200" data-value="6.8" r="5"></circle>                      \n'+
'        <text x="551" y="190">123</text>                                              \n'+
'      <circle cx="697" cy="204" data-value="6.7" r="5"></circle>                      \n'+
'        <text x="697" y="194">123</text>                                              \n'+
'    </g>                                                                              \n'+
        
    
'    <g class="labels x-labels"></g>                                                   \n'+
'    <g class="labels y-labels">                                                       \n'+
'        <text x="80" y="15">300</text>                                                \n'+
'        <text x="80" y="131">200</text>                                               \n'+
'        <text x="80" y="248">100</text>                                               \n'+
'        <text x="80" y="365">0</text>                                                 \n'+
'    </g>                                                                              \n'+
'</svg>';                                                                              