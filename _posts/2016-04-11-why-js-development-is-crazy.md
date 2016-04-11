---
layout: post
title: "Why Javascript Development is Crazy"
blurb: "Grunt/Gulp npm, require.js, browserify, es6, compilers, transpilers, jasmine mocha chai, react/angular/ember, closures, prototypes. *head explodes*"
author: "sean"
---

Web development is fun! Javascript is ... daunting.

Everything else in web development clicks for you, but when you dig into
Javascript it's like you're missing some big, foundational piece of
knowledge that everyone else has that would help you make sense of it
all.

The truth is, yes, you're missing a few pieces to the puzzle.

But also, the current state of the art in frontend development is
actually crazy.

###It's not just you.

Sit down, pull up a chair. It's time to write a Javascript
application.

First step is to get your local development environment up and
running. So Gulp, no wait Grunt, no ... NPM scripts!

Webpack or Browserify? (Sheepishly) Require.js? Make the leap to ES6?
Or is adding Babel to your preprocessing to much?

BDD or regular unit testing? What assert framework should you use? It
sure would be nice to run tests from the command line, so maybe
PhantomJS?

Angular or React? Ember? Backbone?

You read some React docs, "Redux is a predictable state container for
JavaScript apps." Sweet! You'll definitely need one of those.

###Why is it so crazy to build a Javascript application?!?

Let me help you understand why this all seems insane. We'll start with
an example and then move on to pretty pictures.

This is React's "Hello, world!" application.

{% highlight javascript %}
// main.js
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
  );
  {% endhighlight %}

Not quite done.

{% highlight bash %}
$ npm install --save react react-dom babelify babel-preset-react
$ browserify -t [ babelify --presets [ react ] ] main.js -o bundle.js
{% endhighlight %}

There are actually a few missing steps in here, like installing
browserify or what to actually do after you're done here to make it
run on a web page, because it's not like this actually produces a web
page that does anything.  ¯\\\_(ツ)\_/¯

After you're done with that you end up with a file called bundle.js
that contains your new React Hello World application coming in
at 19,374 lines of code. And you only had to install browserify,
babelify and react-dom, weighing in at some unknown tens of thousands
of lines of code.

Ok, now let's do a hello world app with plain Javascript.

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Hello World</title>
  </head>

  <body>
    <div id="container"></div>
    <script>
     document.body.onload = function(){
       var container = document.getElementById("container");
       container.innerHTML = '<h1>"Hello, world!"</h1>';
     }
    </script>
  </body>
  </html>
  {% endhighlight %}

That's the whole thing. 18 lines of code. You can copy/paste that into a file called
index.hml, double click and load it in your browser. Done.

If right at this moment you are thinking to yourself, "But wait, React
does so much more than this dinky little thing you just wrote and you
can't write a Javascript app that way!" you are (mostly) correct, and
you are also one tiny step away from understanding why everything is
crazy.

###Now for that picture I promised.

picture

The vast majority of Javascript web applications you will work on will
fall somewhere in the middle of that bell curve. And in the middle, if
you start with a full React stack you have massively overengineered
your application from the start.

And that is why everything is crazy. Most of these tools you think you
have to have are solving problems you don't have NOR WILL YOU EVER
HAVE.

###Here's that picture again:

add a "you are here" arrow, add "Google, Amazon, Facebook arrow to
the other end.

The state of Javascript development is overwhelming and confusing
because everyone is massively overegnineering their apps by default
without even realizing it.

How should you start a Javascript application? Should you ever use
something like React or Angular? Should you use a package manager?
What do you do if you don't? Are tests even necessary? Should you even
generate the markup with Javascript?

When you start a Javascript application, the key is to pick a spot on
that bell curve just in front of where you think the app could
possibly end up in terms of complexity.

I'm not going to lie, getting this right takes experience. But there
is a pretty large sweet spot where you can start most Javascript
applications: Jquery plus client-side templates and a dead simple
build tool for concatenating and minifying production files (assuming
your backend framework doesn't do this already).

If you learn how to structure a Javscript app correctly, you will
start to understand how, when and why to use a framework or
npm/require/webpack or es6 or when to write tests or when you should
bother to make your tests run locally vs. in the browser, and all of
these other questions and problems that will come up.

Interested in filling in those gaps in your knowledge about Javascript
development? Want to avoid feeling overwhelmed and in the process
massively overengineering your Javascript application? That's what
I'll be focused on in the coming months in this newsletter, so stick
around, there's more coming in a week or two!

{% include javascript-form.html %}
