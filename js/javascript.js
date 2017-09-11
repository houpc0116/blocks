/*
顯示code 
*/
function showCode(){
  //alert('showcode');
  // Generate JavaScript code and display it.
  //console.log(Blockly.JavaScript.INFINITE_LOOP_TRAP);
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;   //設定無無窮迴圈
  var code = Blockly.JavaScript.workspaceToCode(workspace);  //Block 轉換不同語言
  document.getElementById("code").innerText = code;
}