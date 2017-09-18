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
    //this.setPreviousStatement(true);     //判斷上接頭是否可以連接
    //this.setNextStatement(true);         //判斷下接頭是否可以連接
    this.setOutput(true, "String");      //變成Data Block，從右邊插入其他Block
    // Assign 'this' to a variable for use in the tooltip closure below.
  }
};

//轉換成JS Code
Blockly.JavaScript['my_text_change'] = function(block) {
  var text_fieldname = Blockly.JavaScript.quote_(block.getFieldValue('FIELDNAME'));
  // TODO: Assemble JavaScript into code variable.
  // TODO: Change ORDER_NONE to the correct strength.
  return [text_fieldname, Blockly.JavaScript.ORDER_ATOMIC];
  //return text_fieldname;
};