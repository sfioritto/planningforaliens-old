---
layout: post
title: "Flexbox in the Real World"
blurb: "Flexbox is awesome, but is it possible to use flexbox and
still support IE8? If you follow these guidelines, you can start using
flexbox today."
styles:
- syntax.css
author: "sean"
---

I've been
[writing about](http://www.sketchingwithcss.com/samplechapter/) and
[teaching flexbox](http://www.sketchingwithcss.com/flexbox-tutorial/)
for awhile now, and the most common question people ask is, "When will
support be good enough for me to use flexbox in a real project?"

I've always thought flexbox
[has a place in rapid prototyping](http://www.planningforaliens.com/blog/2013/10/07/flexbox-first/). But
I also think that with a little planning, many of us could be using flexbox in
production today.

In this article, we will explore options for when flexbox can be used
in production, starting with the best case scenario and working our way
down to IE8.

The demo we'll be using is the sign up page for a [side project](http://www.pagesnap.io/)
a [friend of mine](https://twitter.com/zrail) is working on. Pete ran
into a few layout problems using Bootstrap's grid system that are
easily solved with flexbox, so it's a great example. Here's the layout
we'll be creating.

<figure>
    <img src="/images/flexbox-now/layout.png" />
</figure>

The code for the examples is on Github
[here](https://github.com/sfioritto/real-world-flexbox).

The four scenarios we will cover are:

* Supporting only bleeding edge browsers
* You have very little IE traffic
* You have to support IE8, but it can look different
* You have to support IE8 and it has to look the same

Scenario #1: You only need to support bleeding edge browsers.
------------------------------

We're starting with the best case scenario but we'll get
to IE8 soon enough.

You can see a live demo of this scenario
[here](/examples/real-world-flexbox/latest_syntax_only/) and look at
the code [here](https://github.com/sfioritto/real-world-flexbox/tree/master/demos/latest_syntax_only).

When I look at the traffic logs for my sites, IE practically doesn't
exist. Only about 1% of my traffic is IE10/11. This
[blog](http://www.planningforaliens.com/) and my
[product pages](http://www.sketchingwithcss.com/) are made for web
developers like you, so I only need to support the latest
browsers that people like us tend to run.

If your traffic looks like this, then you can use the latest flexbox syntax today, right now,
with a few caveats:

* Don't use flex-wrap, because it's not supported in Firefox until version 28.
* Include the -webkit prefix in addition to the unprefixed syntax.
* Don't use it for [overall page layout](http://jakearchibald.com/2014/dont-use-flexbox-for-page-layout/).

Follow these rules, and you should be good to go.

Let's write the flexbox layout code for the
example. 

The top box with the different pricing plans is a flex
container, and Pete wants the buttons to be lined up at the
bottom. If the outer container is a flex container with align-items
set to stretch, (the default), then all of the boxes will have equal
height and it's easy to put the buttons at the bottom with an auto
margin on the buttons.

First, make the entire section a flex container.

{% highlight css %}
.plans {
  display: -webkit-flex;
  display: flex; }{% endhighlight %}

This puts them into a row and stretches them vertically.

Then make each of the pricing tiers a flex container. Change the direction to column and align-items to flex-start;
otherwise the buttons will stretch to fill the horizontal space.

{% highlight css %}
.plans > div {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: flex-start;
  align-items: flex-start; }{% endhighlight %}

All that's left is to put the buttons at the bottom of each
section. Select each of the buttons and set margin-top: auto.

{% highlight css %}
.plans > div a {
  margin-top: auto; }{% endhighlight %}

I used flexbox in a few other spots on the page in similar ways, but
since I'm assuming you know flexbox already, I won't go into
more detail. (Dont' know flexbox yet? Go [here](http://www.sketchingwithcss.com/flexbox-tutorial/).) 

Scenario #2: You have very little IE traffic.
------------------------------

The live demo for this scenario is
[here](/examples/real-world-flexbox/autoprefixed/) and the code is [here](https://github.com/sfioritto/real-world-flexbox/tree/master/demos/autoprefixed).

Even with only a trickle of traffic from older browsers, it's likely
you'll still want IE10 and Firefox 25 or older to work.

If you combine the previous versions of flexbox with the latest syntax, you bring IE10 and older
versions of Firefox, Safari, and Opera into the fold. (Check out
[caniuse](http://caniuse.com/#feat=flexbox) for more detail on
supported browsers.)

It's tedious to write the syntax for every version of
flexbox plus all the prefixes, so use [Autoprefixer](https://github.com/ai/autoprefixer) instead. If
you're not already using Grunt/Gulp/makefiles/or whatever,
this will
[get you started with Grunt and Autoprefixer](http://www.planningforaliens.com/blog/2014/03/07/grunt/).

Don't use auto margins with this approach, since they won't
work in every version. Also be sure to test thoroughly in IE10, which has a
few bugs. For example, I had to set the
width to 100% on the paragraph above the buttons in the code for the demo. Otherwise, the text
spilled out of the containers for some reason. (Without auto
margins, I had to flex this paragraph to push the buttons to the
bottom.)

To give you some sense of the code generated by autoprefixer, here's
the code for the pricing packages section.

{% highlight css %}
.plans {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex; }
  .plans > div {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 33%;
    -ms-flex: 1 1 33%;
    flex: 1 1 33%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start; }
    .plans > div .stretch {
      width: 100%;
      -webkit-box-flex: 1;
      -webkit-flex: 1 0 auto;
      -ms-flex: 1 0 auto;
      flex: 1 0 auto; }{% endhighlight %}

With Autoprefixer, you get this code automatically, so you only write the
latest syntax. An extra bonus is that you get this for all your CSS, and
not just for flexbox. 

Scenario #3: You have to support IE8, but it doesn't have to look as nice.
------------------------------

The live demo for this scenario is
[here](/examples/real-world-flexbox/progressive_enhancement/) and the
code is [here](https://github.com/sfioritto/real-world-flexbox/tree/master/demos/progressive_enhancement).

Most clients and bosses want their websites to look the same in every
supported browser, but a few of us have clients and bosses who buy into
progressive enhancement.

In this case, progressive enhancement doesn't necessarily mean IE8
users get a single column of content. You can use an older style layout
hand in hand with flexbox. Flexbox will take over when applicable, but
browsers that don't support it will ignore the flexbox layout and
fall back to the simpler layout.

Zoe Gillenwater did a great presentation on this a few months back. [Here's a
link to her presentation](http://zomigi.com/blog/flexbox-presentation/).

This is the most bulletproof way to use flexbox and support older
browsers, but it also means duplicating some of your layout code and
figuring out what's "good enough" with a client or boss can sometimes
be difficult.

To keep things simple for our example, we'll give up on the buttons being lined up at the
bottom in IE8 and IE9. But we still need the
pricing section to line up horizontally, so we can use floats.

{% highlight css %}
.plans > div {
  width: 33%;
  float: left;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start; }{% endhighlight %}

(Note: I'm showing only the latest flexbox syntax here, but this code is
autoprefixed in the live demo.)

The flex-direction is set to column, and each of the elements in the
plan section is a block element. Since they stack in a column already,
we don't need to do anything else there.

The sign up box is a flex container, so we'll set the width and the
display properties.

{% highlight css %}
.well form .inputs #email {
  width: 50%;
  display: inline;
  flex: 1 0 auto; }
.well form .inputs .btn {
  width: 250px;
  width: 25rem;
  margin-left: 16px;
  margin-left: 1rem; }{% endhighlight %}

The footer is also a flexbox, so I made it work with a few floats. You
should get the idea at this point. Here is what it looks like in IE8.

<figure>
    <img src="/images/flexbox-now/progressive.png" />
</figure>
  

Scenario #4: You have to support IE8 and 9, and it needs to look exactly the same.
------------------------------

The live demo for this scenario is
[here](/examples/real-world-flexbox/flexie/) and the code is [here](https://github.com/sfioritto/real-world-flexbox/tree/master/demos/flexie).

If you find yourself in this category, you may not want to use
flexbox at all. You're not completely out of luck, but the options available to
you are limited.

There is a flexbox polyfill called
[flexie.js](https://github.com/doctyper/flexie). It only works with
one of the older syntaxes, and not the new syntax. You might be thinking
that you could use Autoprefixer and load flexie.js for IE9 and
older, but it doesn't work.

There are a few problems. The first problem is that flexie.js looks for
unprefixed CSS. But Autoprefixer does not generate unprefixed CSS for
the old syntax, probably because it's not used by any browser.

You can get around this problem by patching flexie.js, but you're
still not out of the woods. Flexie.js is buggy when you have flexbox
rules within media queries because it has a hard-coded version of Selectivizr, which
[doesn't work with respond.js](http://selectivizr.com/tests/respond/).

Until it's fixed (if ever), the only solution I can think of is to create an
IE8/9 only stylesheet with the old unprefixed flexbox syntax.

Even then, you can't just use flexbox and expect everything to
work. You definitely can't use auto margins. You have to keep the layout as
simple as possible. I found that I couldn't always get the old flexbox
syntax to do exactly the same thing as the new syntax, especially with the
polyfill.

But if you aren't using media queries, with a little love, you can get
flexbox to work back to IE8.

In the [example code](https://github.com/sfioritto/real-world-flexbox/tree/master/demos/flexie),
you can find a copy of the patched version of flexie.js I used. I
did the quickest thing possible to get it to work, so don't use it
in production. If you find yourself needing flexie.js in production,
do everyone a favor, put together a real patch, and send it to
[the author](https://twitter.com/doctyper) of flexie.js.

Polyfill for the modern syntax
------------------------------

What we really need is a polyfill for the modern syntax. The good news
is that Richard Herrera, the guy who wrote flexie.js, is
[working on it](https://github.com/doctyper/reflexie/tree/develop). But right now,
it's not even close to being finished.

Learn the new flexbox syntax
------------------------------

The new flexbox syntax hasn't been stable for very long, so not many 
of us know it yet. If you've been thinking about adding it to your web
development arsenal, I've got the perfect thing for you.

I've been working on a
[free course for flexbox](http://www.sketchingwithcss.com/flexbox-tutorial/), 
and the article you just read happens to
be the last lesson in the series. So if you liked this and you want to
get the rest,
[clicky-click right here](http://www.sketchingwithcss.com/flexbox-tutorial/).

{% include sketching.html %}
