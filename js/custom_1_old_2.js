//定義JSON
var myMathChangeBlock = {
 "message0": "input %1 value %2",
 "args0": [
   {"type": "field_variable", "name": "VAR1", "variable": "area"},
   {"type": "input_value", "name": "DELTA1", "check":"String"}
 ],
 "output": "String",
 "previousStatement": null,
 "nextStatement": null,
 "colour": 330,
 //"helpUrl": "http://www.google.com.tw",
 "tooltip": "Returns string of letters in the provided text."   //helpUrl和tooltip是要一起寫
};

Blockly.Blocks['my_math_change'] = {
  init: function() {
    this.jsonInit(myMathChangeBlock);
    // Assign 'this' to a variable for use in the tooltip closure below.
  }
};

//轉換成JS Code
Blockly.JavaScript['my_math_change'] = function(block) {
 // Add to a variable in place.
/* var delta = Blockly.JavaScript.valueToCode(
 block, 'DELTA', Blockly.JavaScript.ORDER_ADDITION) || '0'; */
 //設定變數
 var name = Blockly.JavaScript.variableDB_.getName(
 block.getFieldValue('VAR1'), Blockly.Variables.NAME_TYPE);

 return name+"=";
 /* return name+'=' + '(typeof ' + name + ' == \'number\' ? '
 + name + ' : 0) + ' + delta + ';\n'; */
};