# cloudmersive-nlp-api-client

CloudmersiveNlpApiClient - JavaScript client for cloudmersive-nlp-api-client
The powerful Natural Language Processing APIs (v2) let you perform part of speech tagging, entity identification, sentence parsing, and much more to help you understand the meaning of unstructured text.
[Cloudmersive NLP API](https://www.cloudmersive.com/nlp-api) provides advanced machine learning-based natural language processing to detect language, sentiment, meaning and intent of text content.

- API version: v1
- Package version: 2.0.2


## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install cloudmersive-nlp-api-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your cloudmersive-nlp-api-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('cloudmersive-nlp-api-client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CloudmersiveNlpApiClient = require('cloudmersive-nlp-api-client');

var defaultClient = CloudmersiveNlpApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix['Apikey'] = "Token"

var api = new CloudmersiveNlpApiClient.ExtractEntitiesApi()

var value = new CloudmersiveNlpApiClient.ExtractEntitiesRequest(); // {ExtractEntitiesRequest} Input string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.extractEntitiesPost(value, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.cloudmersive.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CloudmersiveNlpApiClient.ExtractEntitiesApi* | [**extractEntitiesPost**](docs/ExtractEntitiesApi.md#extractEntitiesPost) | **POST** /nlp-v2/extract-entities | Extract entities from string
*CloudmersiveNlpApiClient.LanguageDetectionApi* | [**languageDetectionGetLanguage**](docs/LanguageDetectionApi.md#languageDetectionGetLanguage) | **POST** /nlp-v2/language/detect | Detect language of text
*CloudmersiveNlpApiClient.ParseApi* | [**parseParseString**](docs/ParseApi.md#parseParseString) | **POST** /nlp-v2/parse/tree | Parse string to syntax tree
*CloudmersiveNlpApiClient.PosTaggerApi* | [**posTaggerTagAdjectives**](docs/PosTaggerApi.md#posTaggerTagAdjectives) | **POST** /nlp-v2/pos/tag/adjectives | Part-of-speech tag a string, filter to adjectives
*CloudmersiveNlpApiClient.PosTaggerApi* | [**posTaggerTagAdverbs**](docs/PosTaggerApi.md#posTaggerTagAdverbs) | **POST** /nlp-v2/pos/tag/adverbs | Part-of-speech tag a string, filter to adverbs
*CloudmersiveNlpApiClient.PosTaggerApi* | [**posTaggerTagNouns**](docs/PosTaggerApi.md#posTaggerTagNouns) | **POST** /nlp-v2/pos/tag/nouns | Part-of-speech tag a string, filter to nouns
*CloudmersiveNlpApiClient.PosTaggerApi* | [**posTaggerTagPronouns**](docs/PosTaggerApi.md#posTaggerTagPronouns) | **POST** /nlp-v2/pos/tag/pronouns | Part-of-speech tag a string, filter to pronouns
*CloudmersiveNlpApiClient.PosTaggerApi* | [**posTaggerTagSentence**](docs/PosTaggerApi.md#posTaggerTagSentence) | **POST** /nlp-v2/pos/tag/sentence | Part-of-speech tag a string
*CloudmersiveNlpApiClient.PosTaggerApi* | [**posTaggerTagVerbs**](docs/PosTaggerApi.md#posTaggerTagVerbs) | **POST** /nlp-v2/pos/tag/verbs | Part-of-speech tag a string, filter to verbs
*CloudmersiveNlpApiClient.SegmentationApi* | [**segmentationGetSentences**](docs/SegmentationApi.md#segmentationGetSentences) | **POST** /nlp-v2/segmentation/sentences | Extract sentences from string
*CloudmersiveNlpApiClient.SegmentationApi* | [**segmentationGetWords**](docs/SegmentationApi.md#segmentationGetWords) | **POST** /nlp-v2/segmentation/words | Get words in input string
*CloudmersiveNlpApiClient.SpellcheckApi* | [**spellcheckCheckSentence**](docs/SpellcheckApi.md#spellcheckCheckSentence) | **POST** /nlp-v2/spellcheck/check/sentence | Check if sentence is spelled correctly
*CloudmersiveNlpApiClient.SpellcheckApi* | [**spellcheckCorrectJson**](docs/SpellcheckApi.md#spellcheckCorrectJson) | **POST** /nlp-v2/spellcheck/check/word | Find spelling corrections


## Documentation for Models

 - [CloudmersiveNlpApiClient.CheckSentenceRequest](docs/CheckSentenceRequest.md)
 - [CloudmersiveNlpApiClient.CheckSentenceResponse](docs/CheckSentenceResponse.md)
 - [CloudmersiveNlpApiClient.CheckWordRequest](docs/CheckWordRequest.md)
 - [CloudmersiveNlpApiClient.CheckWordResponse](docs/CheckWordResponse.md)
 - [CloudmersiveNlpApiClient.CorrectWordInSentence](docs/CorrectWordInSentence.md)
 - [CloudmersiveNlpApiClient.Entity](docs/Entity.md)
 - [CloudmersiveNlpApiClient.ExtractEntitiesRequest](docs/ExtractEntitiesRequest.md)
 - [CloudmersiveNlpApiClient.ExtractEntitiesResponse](docs/ExtractEntitiesResponse.md)
 - [CloudmersiveNlpApiClient.GetWordsRequest](docs/GetWordsRequest.md)
 - [CloudmersiveNlpApiClient.GetWordsResponse](docs/GetWordsResponse.md)
 - [CloudmersiveNlpApiClient.LanguageDetectionRequest](docs/LanguageDetectionRequest.md)
 - [CloudmersiveNlpApiClient.LanguageDetectionResponse](docs/LanguageDetectionResponse.md)
 - [CloudmersiveNlpApiClient.ParseRequest](docs/ParseRequest.md)
 - [CloudmersiveNlpApiClient.ParseResponse](docs/ParseResponse.md)
 - [CloudmersiveNlpApiClient.PosRequest](docs/PosRequest.md)
 - [CloudmersiveNlpApiClient.PosResponse](docs/PosResponse.md)
 - [CloudmersiveNlpApiClient.PosSentence](docs/PosSentence.md)
 - [CloudmersiveNlpApiClient.PosTaggedWord](docs/PosTaggedWord.md)
 - [CloudmersiveNlpApiClient.SentenceSegmentationRequest](docs/SentenceSegmentationRequest.md)
 - [CloudmersiveNlpApiClient.SentenceSegmentationResponse](docs/SentenceSegmentationResponse.md)
 - [CloudmersiveNlpApiClient.WordPosition](docs/WordPosition.md)


## Documentation for Authorization


### Apikey

- **Type**: API key
- **API key parameter name**: Apikey
- **Location**: HTTP header
