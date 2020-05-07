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
    root.CloudmersiveNlpApiClient.SentenceSegmentationResponse = factory(root.CloudmersiveNlpApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SentenceSegmentationResponse model module.
   * @module model/SentenceSegmentationResponse
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>SentenceSegmentationResponse</code>.
   * @alias module:model/SentenceSegmentationResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SentenceSegmentationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SentenceSegmentationResponse} obj Optional instance to populate.
   * @return {module:model/SentenceSegmentationResponse} The populated <code>SentenceSegmentationResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Sentences')) {
        obj['Sentences'] = ApiClient.convertToType(data['Sentences'], ['String']);
      }
      if (data.hasOwnProperty('SentenceCount')) {
        obj['SentenceCount'] = ApiClient.convertToType(data['SentenceCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * @member {Array.<String>} Sentences
   */
  exports.prototype['Sentences'] = undefined;
  /**
   * @member {Number} SentenceCount
   */
  exports.prototype['SentenceCount'] = undefined;



  return exports;
}));


