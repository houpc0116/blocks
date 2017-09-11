//定義JSON
var mySetimeChangeBlock = {
 "type": "setime",
 "message0": "set %1 exec %2",
 "args0": [
    {
      "type": "field_input",
      "name": "sec",
      "text": "sec"
    },
    {
      "type": "input_value",
      "name": "input key",
      "check": "String"
    }
 ],
 "colour": 290,
 //"helpUrl": "http://www.google.com.tw",
 "inputsInline": false,
 "helpUrl": "",
 "tooltip": "setime run get Weather Data."   //helpUrl和tooltip是要一起寫, 積木才會顯示"幫助"
};

Blockly.Blocks['my_setime_change'] = {
  init: function() {
    this.jsonInit(mySetimeChangeBlock);
    this.setPreviousStatement(true);     //判斷上接頭是否可以連接
    this.setNextStatement(true);         //判斷下接頭是否可以連接
    //this.setOutput(true, 'String');      //變成Data Block，從右邊插入其他Block
    // Assign 'this' to a variable for use in the tooltip closure below.
  }
};

//轉換成JS Code
Blockly.JavaScript['my_setime_change'] = function(block) {
 var text_sec = block.getFieldValue('sec');
 var value_input_key = Blockly.JavaScript.valueToCode(block, 'input key', Blockly.JavaScript.ORDER_ATOMIC);  //轉換成JS
 return text_sec;
 /* return name+'=' + '(typeof ' + name + ' == \'number\' ? '
 + name + ' : 0) + ' + delta + ';\n'; */
};