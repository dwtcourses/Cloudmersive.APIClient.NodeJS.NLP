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
    define(['ApiClient', 'model/CheckSentenceRequest', 'model/CheckSentenceResponse', 'model/CheckWordRequest', 'model/CheckWordResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CheckSentenceRequest'), require('../model/CheckSentenceResponse'), require('../model/CheckWordRequest'), require('../model/CheckWordResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveNlpApiClient) {
      root.CloudmersiveNlpApiClient = {};
    }
    root.CloudmersiveNlpApiClient.SpellcheckApi = factory(root.CloudmersiveNlpApiClient.ApiClient, root.CloudmersiveNlpApiClient.CheckSentenceRequest, root.CloudmersiveNlpApiClient.CheckSentenceResponse, root.CloudmersiveNlpApiClient.CheckWordRequest, root.CloudmersiveNlpApiClient.CheckWordResponse);
  }
}(this, function(ApiClient, CheckSentenceRequest, CheckSentenceResponse, CheckWordRequest, CheckWordResponse) {
  'use strict';

  /**
   * Spellcheck service.
   * @module api/SpellcheckApi
   * @version 2.0.2
   */

  /**
   * Constructs a new SpellcheckApi. 
   * @alias module:api/SpellcheckApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the spellcheckCheckSentence operation.
     * @callback module:api/SpellcheckApi~spellcheckCheckSentenceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CheckSentenceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if sentence is spelled correctly
     * Checks whether the sentence is spelled correctly and returns the result as JSON
     * @param {module:model/CheckSentenceRequest} value Input sentence
     * @param {module:api/SpellcheckApi~spellcheckCheckSentenceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CheckSentenceResponse}
     */
    this.spellcheckCheckSentence = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling spellcheckCheckSentence");
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
      var returnType = CheckSentenceResponse;

      return this.apiClient.callApi(
        '/nlp-v2/spellcheck/check/sentence', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the spellcheckCorrectJson operation.
     * @callback module:api/SpellcheckApi~spellcheckCorrectJsonCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CheckWordResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find spelling corrections
     * Find spelling correction suggestions and return result as JSON
     * @param {module:model/CheckWordRequest} value Input string
     * @param {module:api/SpellcheckApi~spellcheckCorrectJsonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CheckWordResponse}
     */
    this.spellcheckCorrectJson = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling spellcheckCorrectJson");
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
      var returnType = CheckWordResponse;

      return this.apiClient.callApi(
        '/nlp-v2/spellcheck/check/word', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
