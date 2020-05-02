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
    define(['ApiClient', 'model/GetWordsRequest', 'model/GetWordsResponse', 'model/SentenceSegmentationRequest', 'model/SentenceSegmentationResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetWordsRequest'), require('../model/GetWordsResponse'), require('../model/SentenceSegmentationRequest'), require('../model/SentenceSegmentationResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveNlpApiClient) {
      root.CloudmersiveNlpApiClient = {};
    }
    root.CloudmersiveNlpApiClient.SegmentationApi = factory(root.CloudmersiveNlpApiClient.ApiClient, root.CloudmersiveNlpApiClient.GetWordsRequest, root.CloudmersiveNlpApiClient.GetWordsResponse, root.CloudmersiveNlpApiClient.SentenceSegmentationRequest, root.CloudmersiveNlpApiClient.SentenceSegmentationResponse);
  }
}(this, function(ApiClient, GetWordsRequest, GetWordsResponse, SentenceSegmentationRequest, SentenceSegmentationResponse) {
  'use strict';

  /**
   * Segmentation service.
   * @module api/SegmentationApi
   * @version 2.0.3
   */

  /**
   * Constructs a new SegmentationApi. 
   * @alias module:api/SegmentationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the segmentationGetSentences operation.
     * @callback module:api/SegmentationApi~segmentationGetSentencesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SentenceSegmentationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Extract sentences from string
     * Segment an input string into separate sentences, output result as a string.
     * @param {module:model/SentenceSegmentationRequest} input Input string
     * @param {module:api/SegmentationApi~segmentationGetSentencesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SentenceSegmentationResponse}
     */
    this.segmentationGetSentences = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling segmentationGetSentences");
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
      var returnType = SentenceSegmentationResponse;

      return this.apiClient.callApi(
        '/nlp-v2/segmentation/sentences', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the segmentationGetWords operation.
     * @callback module:api/SegmentationApi~segmentationGetWordsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetWordsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get words in input string
     * Get the component words in an input string
     * @param {module:model/GetWordsRequest} input String to process
     * @param {module:api/SegmentationApi~segmentationGetWordsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetWordsResponse}
     */
    this.segmentationGetWords = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling segmentationGetWords");
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
      var returnType = GetWordsResponse;

      return this.apiClient.callApi(
        '/nlp-v2/segmentation/words', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
