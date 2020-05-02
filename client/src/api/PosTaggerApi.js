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
    define(['ApiClient', 'model/PosRequest', 'model/PosResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PosRequest'), require('../model/PosResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveNlpApiClient) {
      root.CloudmersiveNlpApiClient = {};
    }
    root.CloudmersiveNlpApiClient.PosTaggerApi = factory(root.CloudmersiveNlpApiClient.ApiClient, root.CloudmersiveNlpApiClient.PosRequest, root.CloudmersiveNlpApiClient.PosResponse);
  }
}(this, function(ApiClient, PosRequest, PosResponse) {
  'use strict';

  /**
   * PosTagger service.
   * @module api/PosTaggerApi
   * @version 2.0.4
   */

  /**
   * Constructs a new PosTaggerApi. 
   * @alias module:api/PosTaggerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the posTaggerTagAdjectives operation.
     * @callback module:api/PosTaggerApi~posTaggerTagAdjectivesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PosResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Part-of-speech tag a string, filter to adjectives
     * Part-of-speech (POS) tag a string, find the adjectives, and return result as JSON
     * @param {module:model/PosRequest} request Input string
     * @param {module:api/PosTaggerApi~posTaggerTagAdjectivesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PosResponse}
     */
    this.posTaggerTagAdjectives = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling posTaggerTagAdjectives");
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
      var returnType = PosResponse;

      return this.apiClient.callApi(
        '/nlp-v2/pos/tag/adjectives', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the posTaggerTagAdverbs operation.
     * @callback module:api/PosTaggerApi~posTaggerTagAdverbsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PosResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Part-of-speech tag a string, filter to adverbs
     * Part-of-speech (POS) tag a string, find the adverbs, and return result as JSON
     * @param {module:model/PosRequest} request Input string
     * @param {module:api/PosTaggerApi~posTaggerTagAdverbsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PosResponse}
     */
    this.posTaggerTagAdverbs = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling posTaggerTagAdverbs");
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
      var returnType = PosResponse;

      return this.apiClient.callApi(
        '/nlp-v2/pos/tag/adverbs', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the posTaggerTagNouns operation.
     * @callback module:api/PosTaggerApi~posTaggerTagNounsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PosResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Part-of-speech tag a string, filter to nouns
     * Part-of-speech (POS) tag a string, find the nouns, and return result as JSON
     * @param {module:model/PosRequest} request Input string
     * @param {module:api/PosTaggerApi~posTaggerTagNounsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PosResponse}
     */
    this.posTaggerTagNouns = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling posTaggerTagNouns");
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
      var returnType = PosResponse;

      return this.apiClient.callApi(
        '/nlp-v2/pos/tag/nouns', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the posTaggerTagPronouns operation.
     * @callback module:api/PosTaggerApi~posTaggerTagPronounsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PosResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Part-of-speech tag a string, filter to pronouns
     * Part-of-speech (POS) tag a string, find the pronouns, and return result as JSON
     * @param {module:model/PosRequest} request Input string
     * @param {module:api/PosTaggerApi~posTaggerTagPronounsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PosResponse}
     */
    this.posTaggerTagPronouns = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling posTaggerTagPronouns");
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
      var returnType = PosResponse;

      return this.apiClient.callApi(
        '/nlp-v2/pos/tag/pronouns', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the posTaggerTagSentence operation.
     * @callback module:api/PosTaggerApi~posTaggerTagSentenceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PosResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Part-of-speech tag a string
     * Part-of-speech (POS) tag a string and return result as JSON
     * @param {module:model/PosRequest} request Input string
     * @param {module:api/PosTaggerApi~posTaggerTagSentenceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PosResponse}
     */
    this.posTaggerTagSentence = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling posTaggerTagSentence");
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
      var returnType = PosResponse;

      return this.apiClient.callApi(
        '/nlp-v2/pos/tag/sentence', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the posTaggerTagVerbs operation.
     * @callback module:api/PosTaggerApi~posTaggerTagVerbsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PosResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Part-of-speech tag a string, filter to verbs
     * Part-of-speech (POS) tag a string, find the verbs, and return result as JSON
     * @param {module:model/PosRequest} request Input string
     * @param {module:api/PosTaggerApi~posTaggerTagVerbsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PosResponse}
     */
    this.posTaggerTagVerbs = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling posTaggerTagVerbs");
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
      var returnType = PosResponse;

      return this.apiClient.callApi(
        '/nlp-v2/pos/tag/verbs', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
