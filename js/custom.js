var mathChangeJson = {
 "message0": "change %1 by %2",
 "args0": [
 {"type": "field_variable", "name": "VAR", "variable": "item"},
 {"type": "input_value", "name": "DELTA", "check": "Number"}
 ],
 "previousStatement": null,
  "nextStatement": null,
 "colour": 230
};

Blockly.Blocks['math_change'] = {
  init: function() {
    this.jsonInit(mathChangeJson);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};