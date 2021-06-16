const textForRole = (roles, textLines) => {
 const lines =  textLines.split('\n')  
 const remap = {} 
 lines.forEach(function(line, idx){
   const splitedLine = line.split(': ');
   
   if(remap[splitedLine[0]] == undefined) {
     remap[splitedLine[0]] = []
   }
   remap[splitedLine[0]].push([idx + 1, splitedLine.slice(1).join(': ')])
 })
 
 let res = '';
 Object.entries(remap).forEach(function(pair) {
   res += pair[0] + ':\n' + pair[1].map((item) => item.join(') ')).join('\n') + '\n\n'
  })

  return res
}

module.exports = textForRole;

