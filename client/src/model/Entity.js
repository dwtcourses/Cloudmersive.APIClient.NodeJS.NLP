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
    root.CloudmersiveNlpApiClient.Entity = factory(root.CloudmersiveNlpApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Entity model module.
   * @module model/Entity
   * @version 2.0.3
   */

  /**
   * Constructs a new <code>Entity</code>.
   * @alias module:model/Entity
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Entity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Entity} obj Optional instance to populate.
   * @return {module:model/Entity} The populated <code>Entity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('EntityType')) {
        obj['EntityType'] = ApiClient.convertToType(data['EntityType'], 'String');
      }
      if (data.hasOwnProperty('EntityText')) {
        obj['EntityText'] = ApiClient.convertToType(data['EntityText'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} EntityType
   */
  exports.prototype['EntityType'] = undefined;
  /**
   * @member {String} EntityText
   */
  exports.prototype['EntityText'] = undefined;



  return exports;
}));


