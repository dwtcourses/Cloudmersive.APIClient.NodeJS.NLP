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
    define(['ApiClient', 'model/RephrasedSentence'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RephrasedSentence'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveNlpApiClient) {
      root.CloudmersiveNlpApiClient = {};
    }
    root.CloudmersiveNlpApiClient.RephraseResponse = factory(root.CloudmersiveNlpApiClient.ApiClient, root.CloudmersiveNlpApiClient.RephrasedSentence);
  }
}(this, function(ApiClient, RephrasedSentence) {
  'use strict';




  /**
   * The RephraseResponse model module.
   * @module model/RephraseResponse
   * @version 2.0.3
   */

  /**
   * Constructs a new <code>RephraseResponse</code>.
   * Output of a text rephrasing operation
   * @alias module:model/RephraseResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>RephraseResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RephraseResponse} obj Optional instance to populate.
   * @return {module:model/RephraseResponse} The populated <code>RephraseResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('RephrasedResults')) {
        obj['RephrasedResults'] = ApiClient.convertToType(data['RephrasedResults'], [RephrasedSentence]);
      }
      if (data.hasOwnProperty('SentenceCount')) {
        obj['SentenceCount'] = ApiClient.convertToType(data['SentenceCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * True if the language detection operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Results of the rephrasing, paraphrasing operation, in the order of the input sentences
   * @member {Array.<module:model/RephrasedSentence>} RephrasedResults
   */
  exports.prototype['RephrasedResults'] = undefined;
  /**
   * Number of sentences in input text
   * @member {Number} SentenceCount
   */
  exports.prototype['SentenceCount'] = undefined;



  return exports;
}));


