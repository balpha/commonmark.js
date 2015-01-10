// commonmark.js - CommomMark in JavaScript
// Copyright (C) 2014 John MacFarlane
// License: BSD3.

// Basic usage:
//
// var commonmark = require('commonmark');
// var parser = new commonmark.DocParser();
// var renderer = new commonmark.HtmlRenderer();
// console.log(renderer.render(parser.parse('Hello *world*')));

"use strict";

var util = require('util');

var renderAST = function(tree) {
    return util.inspect(tree.toAST(), {depth: 20}) + '\n';
};

module.exports.Node = require('./node');
module.exports.DocParser = require('./blocks');
module.exports.HtmlRenderer = require('./html');
module.exports.ASTRenderer = renderAST;