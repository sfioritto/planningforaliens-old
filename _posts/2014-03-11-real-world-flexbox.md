---
layout: post
title: "flexbox in the real world"
blurb: "Flexbox is awesome but support for the latest syntax is not good enough
for most of our projects. Is it possible to use flexbox today and
still support IE8? Yup (kinda)."
author: "sean"
---

I've been
[writing about](http://www.sketchingwithcss.com/samplechapter/) and
[teaching flexbox](http://www.sketchingwithcss.com/flexbox-tutorial/)
for a while now and the most common question I am asked is, "when will
support be good enough for me to use flexbox?"

The answer is, it depends on what you have to
support. In this article we will explore options for using flexbox
starting with the best case scenario and working our way down to IE8.

You only need to support bleeding edge browsers
------------------------------

When I look at traffic logs for any of my websites, IE doesn't even
exist. Only 1% of my traffic is IE10. That's because my
[blog](http://www.planningforaliens.com/) and
[product pages](http://www.sketchingwithcss.com/) are made for web
developers like yourself. I only need to support the latest, bleeding
edge browsers.

If your traffic looks like this, you can use flexbox today, right now,
with only a few caveats:

1. Don't use flex-wrap, (not supported in Firefox until version 28)
2. Use the -webkit prefix
3. Don't use it for
   [overall page layout](http://jakearchibald.com/2014/dont-use-flexbox-for-page-layout/)

Follow these rules you won't run into any problems.

You have very little IE traffic
------------------------------

The newest flexbox syntax is only supported in the most recent
versions of browsers. Even with only a trickle of traffic from IE, it's pretty likely you'll want IE10 and Firefox 25 or
older to work.

If you use the previous versions of flexbox, you bring IE10 and older
versions of firefox and Opera into the fold. 

It would be quite tedious to write the syntax for every version of
flexbox plus all of the prefixes, so instead use autoprefixer. If
you're not already using Grunt/Gulp/makefiles, whatever,
this will
[get you started with Grunt and Autoprefixer](http://www.planningforaliens.com/blog/2014/03/07/grunt/).

You have to support IE8, but it doesn't have to look as nice
------------------------------

Most clients and bosses want their website to look the same in every
supported browser, but a lucky few of us have bosses that get behind
progressive enhancement.

In this case, progressive enhancement doesn't necessarily mean IE8
users get a single column of content. You can use old style layout
hand in hand with flexbox. When applicable, flexbox will takeover but
browsers that don't support it will just ignore the flexbox layout and
fall back to the old style layout.

Zoe Gillenwater did a great presentation on this a few months back,
her site is down at the moment, (hopefully back up soon), but [here's a
link to her presentation](http://www.slideshare.net/zomigi/putting-flexbox-into-practice).


You have to support IE8 and 9 and it needs to look exactly they same.
------------------------------

If you find yourself in this category, you may not want to use
flexbox. You're not completely out of luck, but the options available to
you are not great.

There is a flexbox polyfill called
[flexie.js](https://github.com/doctyper/flexie), it only works with
one of the older syntaxes, not the new syntax. You might be thinking
you could just use Autoprefixer and then load flexie.js for IE9 and
older, but it doesn't work.

There are a few problems. The first is flexie.js looks for
unprefixed CSS but Autoprefixer does not generate unprefixed CSS for
the old syntax, probably because it's not used by any browser.

You can get around this problem by patching flexie.js, but you're
still not out of the woods. Flexie.js is buggy when you have flexbox
rules within media queries, which you probably will. Part of the
problem is flexie.js has a hardcoded version of Selectivizr which
[doesn't work with respond.js](http://selectivizr.com/tests/respond/).

Until it's fixed the only solution I can think of is to create an
IE8/9 only stylesheet with the old, unprefixed flexbox syntax.

Even then you can't just use flexbox and expect everything to
work. You can't use auto margins. You have to keep the layout as
simple as possible. I found I couldn't always get the old flexbox
syntax to do exactly the same thing as the new, especially with the
polyfill.




