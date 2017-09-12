//定義JSON
var myResultChangeBlock = {
 "type": "result",
 "message0": "執行 %1",
 "args0": [
   {"type": "input_value", "name": "exec", "check":"String"}
 ],
 "colour": 120,
 //"helpUrl": "http://www.google.com.tw",
 "inputsInline": false,
 "helpUrl": "",
 "tooltip": "exec Spider Weather Information."   //helpUrl和tooltip是要一起寫, 積木才會顯示"幫助"
};

Blockly.Blocks['my_result_change'] = {
  init: function() {
    this.jsonInit(myResultChangeBlock);
    this.setPreviousStatement(true);     //判斷上接頭是否可以連接
    //this.setNextStatement(true);         //判斷下接頭是否可以連接
    //this.setOutput(true, 'String');      //變成Data Block，從右邊插入其他Block
    // Assign 'this' to a variable for use in the tooltip closure below.
  }
};

//轉換成JS Code
Blockly.JavaScript['my_result_change'] = function(block) {
 // Add to a variable in place.
 var delta = Blockly.JavaScript.valueToCode(block, 'exec', Blockly.JavaScript.ORDER_ADDITION);
 var code ="\n";
  code += '$.ajax({\n';
  code += 'type: "../proc/proc08_new.php"\n';
  code += 'type: "POST"\n';
  code += 'data: \n';
  code += 'error: function(xhr) {console.log("Ajax request 發生錯誤")},\n';
  code += 'success: function(response){console.log(response)}\n';
  code += '});';
 return code;
 /* return name+'=' + '(typeof ' + name + ' == \'number\' ? '
 + name + ' : 0) + ' + delta + ';\n'; */
};