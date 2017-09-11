//定義JSON
var myMathChangeBlock = {
 "message0": "input %1",
 "args0": [
   {"type": "field_variable", "name": "VAR", "variable": "item"},
   {"type": "input_value", "name": "DELTA", "check": "Number"}
 ],
 "previousStatement": null,
 "nextStatement": null,
 "colour": 230,
 "helpUrl": "http://www.google.com.tw",
 "tooltip": "Returns number of letters in the provided text."   //helpUrl和tooltip是要一起寫, 積木才會顯示"幫助"
};

Blockly.Blocks['my_math_change'] = {
  init: function() {
    this.jsonInit(myMathChangeBlock);
    // Assign 'this' to a variable for use in the tooltip closure below.
   /* var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    }); */
  }
};

//轉換成JS Code
Blockly.JavaScript['my_math_change'] = function(block) {
 // Add to a variable in place.
 var delta = Blockly.JavaScript.valueToCode(
 block, 'DELTA', Blockly.JavaScript.ORDER_ADDITION) || '0';
 var name = Blockly.JavaScript.variableDB_.getName(
 block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
 return name + ' = ' + '(typeof ' + name + ' == \'number\' ? '
 + name + ' : 0) + ' + delta + ';\n';
};