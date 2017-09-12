/*
顯示code 
*/
function showCode(){
  //alert('showcode');
  // Generate JavaScript code and display it.
  //console.log(Blockly.JavaScript.INFINITE_LOOP_TRAP);
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;   //設定無限窮迴圈
  var code = Blockly.JavaScript.workspaceToCode(workspace);  //Block 轉換不同語言
  document.getElementById("code").innerText = code;
  //get workspace blockly XML
  var xml = Blockly.Xml.workspaceToDom(workspace);
  var xml_text = Blockly.Xml.domToText(xml);
  console.log(xml_text);
}
/*
load workspace blockly XML
*/
function loadBlocklyXML(){
  var xml = Blockly.Xml.textToDom('<xml xmlns="http://www.w3.org/1999/xhtml"><block type="my_math_change" id="g[2^l*Nnz9V[r!XX5Lyb" x="270" y="110"><field name="VAR1">area</field><value name="DELTA1"><block type="text" id="J5`V~+3V~Tp~OeM!vpW6"><field name="TEXT">Taichung</field></block></value></block><block type="procedures_defnoreturn" id="b%Xu0yb:`8jMHwf`S*P9" x="590" y="110"><mutation><arg name="data"></arg></mutation><field name="NAME">getWeatherData</field><comment pinned="false" h="80" w="160">抓取天氣資訊</comment><statement name="STACK"><block type="text_print" id="o*w%c~cFbW=}G?VX^K:*"><value name="TEXT"><block type="variables_get" id="waASw*ldZ%,O%p=I6,Q!"><field name="VAR">data</field></block></value></block></statement></block><block type="procedures_callnoreturn" id="nmj7DoY@n26ab^h*]}Pc" x="270" y="170"><mutation name="getWeatherData"><arg name="data"></arg></mutation><value name="ARG0"><block type="variables_get" id="37rbYwJkj;eSS(;HIIY;"><field name="VAR">area</field></block></value></block></xml>');
  Blockly.Xml.domToWorkspace(xml, workspace);
}
/*
執行JS Code
*/
function showResult(){
  // Generate JavaScript code and run it.
  window.LoopTrap = 1000;
  Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';  //設定無限窮迴圈
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  //document.getElementById("result").innerText = code;
  try {
    eval(code);
  } catch (e) {
    alert(e);
  }
}