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
  var xml = Blockly.Xml.textToDom('<xml xmlns="http://www.w3.org/1999/xhtml"><block type="my_math_change" id="g[2^l*Nnz9V[r!XX5Lyb" x="270" y="110"><field name="VAR1">area</field><value name="DELTA1"><block type="my_text_change" id="Ml{@f+jX0mC~0A8H{!z|"><field name="FIELDNAME">default city</field></block></value><next><block type="procedures_callnoreturn" id="nmj7DoY@n26ab^h*]}Pc"><mutation name="getWeatherData"><arg name="data"></arg></mutation><value name="ARG0"><block type="variables_get" id="37rbYwJkj;eSS(;HIIY;"><field name="VAR">area</field></block></value></block></next></block><block type="procedures_defnoreturn" id="b%Xu0yb:`8jMHwf`S*P9" x="590" y="110"><mutation><arg name="data"></arg></mutation><field name="NAME">getWeatherData</field><comment pinned="false" h="80" w="160">抓取天氣資訊</comment><statement name="STACK"><block type="text_print" id="K9Kqt,S$5V1J}j[]h|_!"><value name="TEXT"><block type="variables_get" id="W^.hiu5q{k~51%xv76HF"><field name="VAR">data</field></block></value><next><block type="my_result_change" id="`)cXY@];BI`zV{+r5Fa0"><value name="exec"><block type="variables_get" id="O~QY1M57tVw}r))gnsQm"><field name="VAR">data</field></block></value></block></next></block></statement></block></xml>');
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
  /* var delta = Blockly.JavaScript.valueToCode(this, 'exec', Blockly.JavaScript.ORDER_ADDITION);
  alert(delta); */
  //console.log(new Blockly.FieldVariable('area'));  //顯示變數 //DELTA1
  //console.log(new Blockly.FieldTextInput('default text'));  //顯示變數 //DELTA1
  try {
    eval(code);
  } catch (e) {
    alert(e);
  }
}