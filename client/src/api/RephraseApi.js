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
    define(['ApiClient', 'model/RephraseRequest', 'model/RephraseResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RephraseRequest'), require('../model/RephraseResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveNlpApiClient) {
      root.CloudmersiveNlpApiClient = {};
    }
    root.CloudmersiveNlpApiClient.RephraseApi = factory(root.CloudmersiveNlpApiClient.ApiClient, root.CloudmersiveNlpApiClient.RephraseRequest, root.CloudmersiveNlpApiClient.RephraseResponse);
  }
}(this, function(ApiClient, RephraseRequest, RephraseResponse) {
  'use strict';

  /**
   * Rephrase service.
   * @module api/RephraseApi
   * @version 2.0.4
   */

  /**
   * Constructs a new RephraseApi. 
   * @alias module:api/RephraseApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the rephraseTranslateDeuToEng operation.
     * @callback module:api/RephraseApi~rephraseTranslateDeuToEngCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RephraseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Rephrase, paraphrase English text sentence-by-sentence using Deep Learning AI
     * Automatically rephrases or paraphrases input text in English sentence by sentence using advanced Deep Learning and Neural NLP.  Creates multiple reprhasing candidates per input sentence, from 1 to 10 possible rephrasings of the original sentence.  Seeks to preserve original semantic meaning in rephrased output candidates.  Consumes 1-2 API calls per output rephrasing option generated, per sentence.
     * @param {module:model/RephraseRequest} input Input rephrase request
     * @param {module:api/RephraseApi~rephraseTranslateDeuToEngCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RephraseResponse}
     */
    this.rephraseTranslateDeuToEng = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling rephraseTranslateDeuToEng");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = RephraseResponse;

      return this.apiClient.callApi(
        '/nlp-v2/rephrase/rephrase/eng/by-sentence', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
