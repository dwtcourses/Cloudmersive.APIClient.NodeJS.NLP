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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CloudmersiveNlpApiClient);
  }
}(this, function(expect, CloudmersiveNlpApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CloudmersiveNlpApiClient.Entity();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Entity', function() {
    it('should create an instance of Entity', function() {
      // uncomment below and update the code to test Entity
      //var instane = new CloudmersiveNlpApiClient.Entity();
      //expect(instance).to.be.a(CloudmersiveNlpApiClient.Entity);
    });

    it('should have the property entityType (base name: "EntityType")', function() {
      // uncomment below and update the code to test the property entityType
      //var instane = new CloudmersiveNlpApiClient.Entity();
      //expect(instance).to.be();
    });

    it('should have the property entityText (base name: "EntityText")', function() {
      // uncomment below and update the code to test the property entityText
      //var instane = new CloudmersiveNlpApiClient.Entity();
      //expect(instance).to.be();
    });

  });

}));
