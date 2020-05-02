/**
 * nlpapiv2
 * The powerful Natural Language Processing APIs (v2) let you perform part of speech tagging, entity identification, sentence parsing, and much more to help you understand the meaning of unstructured text.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveNlpApiClient) {
      root.CloudmersiveNlpApiClient = {};
    }
    root.CloudmersiveNlpApiClient.WordPosition = factory(root.CloudmersiveNlpApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WordPosition model module.
   * @module model/WordPosition
   * @version 2.0.3
   */

  /**
   * Constructs a new <code>WordPosition</code>.
   * @alias module:model/WordPosition
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>WordPosition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WordPosition} obj Optional instance to populate.
   * @return {module:model/WordPosition} The populated <code>WordPosition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Word')) {
        obj['Word'] = ApiClient.convertToType(data['Word'], 'String');
      }
      if (data.hasOwnProperty('WordIndex')) {
        obj['WordIndex'] = ApiClient.convertToType(data['WordIndex'], 'Number');
      }
      if (data.hasOwnProperty('StartPosition')) {
        obj['StartPosition'] = ApiClient.convertToType(data['StartPosition'], 'Number');
      }
      if (data.hasOwnProperty('EndPosition')) {
        obj['EndPosition'] = ApiClient.convertToType(data['EndPosition'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Word as a string
   * @member {String} Word
   */
  exports.prototype['Word'] = undefined;
  /**
   * Zero-based index of the word; first word has index 0, second word has index 1 and so on
   * @member {Number} WordIndex
   */
  exports.prototype['WordIndex'] = undefined;
  /**
   * Zero-based character offset at which the word begins in the input string
   * @member {Number} StartPosition
   */
  exports.prototype['StartPosition'] = undefined;
  /**
   * Zero-based character offset at which the word ends in the input string
   * @member {Number} EndPosition
   */
  exports.prototype['EndPosition'] = undefined;



  return exports;
}));


