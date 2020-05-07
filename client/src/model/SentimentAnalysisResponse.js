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
    root.CloudmersiveNlpApiClient.SentimentAnalysisResponse = factory(root.CloudmersiveNlpApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SentimentAnalysisResponse model module.
   * @module model/SentimentAnalysisResponse
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>SentimentAnalysisResponse</code>.
   * Output of a sentiment analysis operation
   * @alias module:model/SentimentAnalysisResponse
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SentimentAnalysisResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SentimentAnalysisResponse} obj Optional instance to populate.
   * @return {module:model/SentimentAnalysisResponse} The populated <code>SentimentAnalysisResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('SentimentClassificationResult')) {
        obj['SentimentClassificationResult'] = ApiClient.convertToType(data['SentimentClassificationResult'], 'String');
      }
      if (data.hasOwnProperty('SentimentScoreResult')) {
        obj['SentimentScoreResult'] = ApiClient.convertToType(data['SentimentScoreResult'], 'Number');
      }
      if (data.hasOwnProperty('SentenceCount')) {
        obj['SentenceCount'] = ApiClient.convertToType(data['SentenceCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * True if the sentiment analysis operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Classification of input text into a sentiment classification; possible values are \"Positive\", \"Negative\" or \"Neutral\"
   * @member {String} SentimentClassificationResult
   */
  exports.prototype['SentimentClassificationResult'] = undefined;
  /**
   * Sentiment classification score between -1.0 and +1.0 where scores less than 0 are negative sentiment, scores greater than 0 are positive sentiment and scores close to 0 are neutral.  The greater the value deviates from 0.0 the stronger the sentiment, with +1.0 and -1.0 being maximum positive and negative sentiment, respectively.
   * @member {Number} SentimentScoreResult
   */
  exports.prototype['SentimentScoreResult'] = undefined;
  /**
   * Number of sentences in input text
   * @member {Number} SentenceCount
   */
  exports.prototype['SentenceCount'] = undefined;



  return exports;
}));


