//定義JSON
var myMathChangeBlock = {
 "message0": "set %1 value %2",
 "args0": [
   {"type": "field_variable", "name": "VAR1", "variable": "area"},
   {"type": "input_value", "name": "DELTA1", "check":["String", "Number"]}
 ],
 "colour": 230,
 //"helpUrl": "http://www.google.com.tw",
 "inputsInline": false,
 "helpUrl": "",
 "tooltip": "Spider Weather Information."   //helpUrl和tooltip是要一起寫, 積木才會顯示"幫助"
};

Blockly.Blocks['my_math_change'] = {
  init: function() {
    this.jsonInit(myMathChangeBlock);
    this.setPreviousStatement(true);     //判斷上接頭是否可以連接
    this.setNextStatement(true);         //判斷下接頭是否可以連接
  }
};

//定義JSON
var myResultChangeBlock = {
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
    this.setNextStatement(true);         //判斷下接頭是否可以連接
  }
};

//定義JSON
var myTextChangeBlock = {
 "message0": "\" %1 \"",
 "args0": [
    {
      "type": "field_input",
      "name": "FIELDNAME",
      "text": "default city",
    }
  ],
 "colour": 160,
 //"helpUrl": "http://www.google.com.tw",
 "inputsInline": false,
 "helpUrl": "",
 "tooltip": "Please Input City."   //helpUrl和tooltip是要一起寫, 積木才會顯示"幫助"
};

Blockly.Blocks['my_text_change'] = {
  init: function() {
    this.jsonInit(myTextChangeBlock);
    this.setOutput(true, "String");      //變成Data Block，從右邊插入其他Block
  }
};

Blockly.Blocks['settime'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("settimeout")
        .appendField(new Blockly.FieldTextInput("1000"), "sec");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("exec");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("settimeout");
 this.setHelpUrl("");
  }
};

//以下轉換成Codeding
//轉換成JS Code
Blockly.JavaScript['my_math_change'] = function(block) {
 // Add to a variable in place.
 var delta = Blockly.JavaScript.valueToCode(block, 'DELTA1', Blockly.JavaScript.ORDER_ADDITION);
 //設定變數
 var name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR1'), Blockly.Variables.NAME_TYPE);
 return name+"="+delta+";\n";
};

//轉換成JS Code
Blockly.JavaScript['my_result_change'] = function(block) {
 // Add to a variable in place.
 var delta = Blockly.JavaScript.valueToCode(block, 'exec', Blockly.JavaScript.ORDER_ADDITION);
 var code ="\n";
  code += '$.ajax({\n';
  code += 'type: "../proc/proc08_new.php",\n';
  code += 'type: "POST",\n';
  code += 'data: "city="+'+delta+',\n';
  code += 'error: function(xhr) {\nconsole.log("Ajax request 發生錯誤")\n},\n';
  code += 'success: function(response){\nconsole.log(response)\n}\n';
  code += '});\n';
 return code;
};

//轉換成JS Code
Blockly.JavaScript['my_text_change'] = function(block) {
  var text_fieldname = Blockly.JavaScript.quote_(block.getFieldValue('FIELDNAME'));  //新增分號
  
  return [text_fieldname, Blockly.JavaScript.ORDER_ATOMIC];
  //return text_fieldname;
};

Blockly.JavaScript['settime'] = function(block) {
  var text_sec = block.getFieldValue('sec');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = "setTimeout("+statements_name+", "+text_sec+");\n";
  return code;
};

