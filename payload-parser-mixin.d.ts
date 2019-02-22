/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   payload-parser-mixin.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

export {PayloadParserMixin};

declare namespace ArcBehaviors {


  /**
   * A behavior to be implemented to elements that needs to parse
   * request / response body.
   * It contains functions to encode / decode form data and to escape HTML.
   */
  function PayloadParserMixin<T extends new (...args: any[]) => {}>(base: T): T & PayloadParserMixinConstructor;

  interface PayloadParserMixinConstructor {
    new(...args: any[]): PayloadParserMixin;
  }

  interface PayloadParserMixin {

    /**
     * Regexp to search for the `&` character
     */
    readonly AMP_RE: any;

    /**
     * Regexp to search for the `>` character
     */
    readonly GT_RE: any;

    /**
     * Regexp to search for the `<` character
     */
    readonly LT_RE: any;

    /**
     * Regexp to search for the `'` character
     */
    readonly SQUOT_RE: any;

    /**
     * Regexp to search for the `"` character
     */
    readonly QUOT_RE: any;

    /**
     * Escape HTML to save HTML text.
     *
     * @param html A HTML string to be escaped.
     */
    htmlEscape(html: String|null): String|null;

    /**
     * Parse input array to string x-www-form-urlencoded.
     *
     * Note that this function doesn't encodes the name and value. Use
     * `this.formArrayToString(this.encodeUrlEncoded(arr))`
     * to create a encoded string from the array.
     *
     * @param arr Input array. Each element must contain an
     * object with `name` and `value` keys.
     * @returns A parsed string of `name`=`value` pairs of the input objects.
     */
    formArrayToString(arr: Array<object|null>|null): String|null;

    /**
     * Creates a form data string for a single item.
     *
     * @param model The model with `name` and `value` properties.
     * @returns Generated value string for x-www-form-urlencoded form.
     */
    _modelItemToFormDataString(model: object|null): String|null;

    /**
     * Parse input string to array of x-www-form-urlencoded form parameters.
     *
     * This function will not url-decode names and values. Please, use
     * `this.decodeUrlEncoded(this.stringToArray(str))` to create an array
     * of decoded parameters.
     *
     * @param input A string of HTTP x-www-form-urlencoded parameters
     * @returns An array of params with `name` and `value` keys.
     */
    stringToArray(input: String|null): Array<object|null>|null;

    /**
     * Converts a string to an array with objects containing name and value keys
     *
     * @param input An input string
     * @returns An array of params with `name` and `value` keys.
     */
    _createParamsArray(input: String|null): Array<object|null>|null;

    /**
     * Appends form data parameter to an array.
     * If the parameter already exists in the array it creates an array for
     * the value onstead of appending the same parameter.
     *
     * @param array An array to append the parameter
     * @param name Name of the form data parameter
     * @param value Value of the form data parameter
     * @returns Updated array
     */
    _appendArrayResult(array: any[]|null, name: String|null, value: String|null): any[]|null;

    /**
     * Encode payload to x-www-form-urlencoded string.
     *
     * @param input An input data.
     */
    encodeUrlEncoded(input: Array<object|null>|String|null): Array<object|null>|String|null;

    /**
     * URL encodes a value.
     *
     * @param value Value to encode. Either string or
     * array of strings.
     * @returns Encoded value. The same type as the input.
     */
    _encodeValue(value: String|Array<String|null>|null): String|Array<String|null>|null;

    /**
     * Decode x-www-form-urlencoded data.
     *
     * @param input An input data.
     */
    decodeUrlEncoded(input: Array<object|null>|String|null): Array<object|null>|String|null;

    /**
     * URL decodes a value.
     *
     * @param value Value to decode. Either string or
     * array of strings.
     * @returns Decoded value. The same type as the input.
     */
    _decodeValue(value: String|Array<String|null>|null): String|Array<String|null>|null;

    /**
     * Parse input string as a payload param key or value.
     *
     * @param input An input to parse.
     */
    _paramValue(input: String|null): String|null;

    /**
     * Parse a line of key=value http params into an object with `name` and `value` keys.
     *
     * @param input A input line of x-www-form-urlencoded text tike `param=value`
     * @returns A parsed object with `name` and `value` keys.
     */
    _paramLineToFormObject(input: String|null): object|null;

    /**
     * Returns a string where all characters that are not valid for a URL
     * component have been escaped. The escaping of a character is done by
     * converting it into its UTF-8 encoding and then encoding each of the
     * resulting bytes as a %xx hexadecimal escape sequence.
     *
     * Note: this method will convert any space character into its escape
     * short form, '+' rather than %20. It should therefore only be used for
     * query-string parts.
     *
     * The following character sets are **not** escaped by this method:
     * - ASCII digits or letters
     * - ASCII punctuation characters: ```- _ . ! ~ * ' ( )</pre>```
     *
     * Notice that this method <em>does</em> encode the URL component delimiter
     * characters:<blockquote>
     *
     * ```
     * ; / ? : & = + $ , #
     * ```
     *
     * @param str A string containing invalid URL characters
     * @returns a string with all invalid URL characters escaped
     */
    encodeQueryString(str: String|null): String|null;

    /**
     * Returns a string where all URL component escape sequences have been
     * converted back to their original character representations.
     *
     * Note: this method will convert the space character escape short form, '+',
     * into a space. It should therefore only be used for query-string parts.
     *
     * @param str string containing encoded URL component sequences
     * @returns string with no encoded URL component encoded sequences
     */
    decodeQueryString(str: String|null): String|null;
  }
}

export {PayloadParserMixinConstructor};
