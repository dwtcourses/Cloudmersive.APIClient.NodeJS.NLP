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
    root.CloudmersiveNlpApiClient.LanguageDetectionResponse = factory(root.CloudmersiveNlpApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LanguageDetectionResponse model module.
   * @module model/LanguageDetectionResponse
   * @version 2.1.0
   */

  /**
   * Constructs a new <code>LanguageDetectionResponse</code>.
   * Output of a language detection operation
   * @alias module:model/LanguageDetectionResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>LanguageDetectionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LanguageDetectionResponse} obj Optional instance to populate.
   * @return {module:model/LanguageDetectionResponse} The populated <code>LanguageDetectionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('DetectedLanguage_ThreeLetterCode')) {
        obj['DetectedLanguage_ThreeLetterCode'] = ApiClient.convertToType(data['DetectedLanguage_ThreeLetterCode'], 'String');
      }
      if (data.hasOwnProperty('DetectedLanguage_FullName')) {
        obj['DetectedLanguage_FullName'] = ApiClient.convertToType(data['DetectedLanguage_FullName'], 'String');
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
   * ISO 639 three letter language code
   * @member {String} DetectedLanguage_ThreeLetterCode
   */
  exports.prototype['DetectedLanguage_ThreeLetterCode'] = undefined;
  /**
   * The full name (in English) of the detected language
   * @member {String} DetectedLanguage_FullName
   */
  exports.prototype['DetectedLanguage_FullName'] = undefined;



  return exports;
}));


