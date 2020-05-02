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
    define(['ApiClient', 'model/WordPosition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WordPosition'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveNlpApiClient) {
      root.CloudmersiveNlpApiClient = {};
    }
    root.CloudmersiveNlpApiClient.CorrectWordInSentence = factory(root.CloudmersiveNlpApiClient.ApiClient, root.CloudmersiveNlpApiClient.WordPosition);
  }
}(this, function(ApiClient, WordPosition) {
  'use strict';




  /**
   * The CorrectWordInSentence model module.
   * @module model/CorrectWordInSentence
   * @version 2.0.4
   */

  /**
   * Constructs a new <code>CorrectWordInSentence</code>.
   * A word in a sentence
   * @alias module:model/CorrectWordInSentence
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CorrectWordInSentence</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CorrectWordInSentence} obj Optional instance to populate.
   * @return {module:model/CorrectWordInSentence} The populated <code>CorrectWordInSentence</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Word')) {
        obj['Word'] = WordPosition.constructFromObject(data['Word']);
      }
      if (data.hasOwnProperty('Correct')) {
        obj['Correct'] = ApiClient.convertToType(data['Correct'], 'Boolean');
      }
      if (data.hasOwnProperty('Suggestions')) {
        obj['Suggestions'] = ApiClient.convertToType(data['Suggestions'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Position of the word
   * @member {module:model/WordPosition} Word
   */
  exports.prototype['Word'] = undefined;
  /**
   * True if the word is spelled correctly, false otherwise
   * @member {Boolean} Correct
   */
  exports.prototype['Correct'] = undefined;
  /**
   * Suggested spelling improvements
   * @member {Array.<String>} Suggestions
   */
  exports.prototype['Suggestions'] = undefined;



  return exports;
}));


