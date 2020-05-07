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
    define(['ApiClient', 'model/CorrectWordInSentence'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CorrectWordInSentence'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveNlpApiClient) {
      root.CloudmersiveNlpApiClient = {};
    }
    root.CloudmersiveNlpApiClient.CheckSentenceResponse = factory(root.CloudmersiveNlpApiClient.ApiClient, root.CloudmersiveNlpApiClient.CorrectWordInSentence);
  }
}(this, function(ApiClient, CorrectWordInSentence) {
  'use strict';




  /**
   * The CheckSentenceResponse model module.
   * @module model/CheckSentenceResponse
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>CheckSentenceResponse</code>.
   * Result of spell checking a sentence
   * @alias module:model/CheckSentenceResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CheckSentenceResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CheckSentenceResponse} obj Optional instance to populate.
   * @return {module:model/CheckSentenceResponse} The populated <code>CheckSentenceResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('IncorrectCount')) {
        obj['IncorrectCount'] = ApiClient.convertToType(data['IncorrectCount'], 'Number');
      }
      if (data.hasOwnProperty('Words')) {
        obj['Words'] = ApiClient.convertToType(data['Words'], [CorrectWordInSentence]);
      }
    }
    return obj;
  }

  /**
   * Number of incorrect words
   * @member {Number} IncorrectCount
   */
  exports.prototype['IncorrectCount'] = undefined;
  /**
   * Words in the sentence, both correct and incorrect
   * @member {Array.<module:model/CorrectWordInSentence>} Words
   */
  exports.prototype['Words'] = undefined;



  return exports;
}));


