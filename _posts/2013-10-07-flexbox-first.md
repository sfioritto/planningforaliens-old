---
layout: post
title: "Flexbox First"
blurb: "CSS sucks at layout. The Flexbox spec is stable and can come to the rescue, but browser support isn't there yet. Damn. But wait...what if you used it anyway?"
author: "sean"
---

CSS sucks at layout.

Actually, no, that's not true. You can create almost any layout imaginable using only HTML and CSS. But the more out of the box-model you get, the bigger your headache. And the farther away you get from the default "blocks stacked on blocks" layout, the more you begin to question your career choices.

Layout is tough. It's not a linear, you-get-what-you-put-in relationship. All of us have one or two layout bugs in our past in which Google and StackOverflow were useless. Every project has a bug you'll never see again.

Time invested in these bugs has a worse ROI than [GovWorks.com](http://en.wikipedia.org/wiki/Startups.com) stock.

Why is layout code so terrible?
---------------

You look at a page and think, "I want this picture over here," and so the pain begins. The distance between your thought and actually putting the damn picture where you want it is <em>vast</em>, because you have to translate your perfectly clear idea into obtuse gobbledegook the browser can only understand using unintuitive syntax written by committee. 

In fact, once you can grok and produce blocks of byzantine layout syntax with some efficiency, it's time to hang out a shingle and charge businesses upper-middle class rates to do it.

That's right. The learning curve for layout in the browser is so bad you can create a career out of punching through it.


The dream
------------

The thing is, I know what you really want.

When you look at a picture, you want it "to the left". You want to put your awesome mousing skills to use and click-drag the freaking picture <em>to the left</em>.

You want to look at the screen and say, "Try this in two columns instead of three," and have the computer just do it.

You want to right-click->sticky-footer the div and call it a day. And you want your copy <em>vertically and horizontally centered</em> without dragging your brain over hot coals while you rewrite ALL THE MARKUP.

Good news, everyone. Flexbox is here, and it will get you one step closer to the dream.

It's not perfect
--------------------

Flexbox is not perfect. You still can't do this:

{% highlight css %}
.somebox {
    layout: next to .otherbox;
}

.otherbox {
    layout: stuck to the bottom;
}
{% endhighlight %}


The syntax is not super intuitive (again with the committees), but it's only one or two levels of abstraction above the ideal "move it over there <em>with your mind</em>" syntax. The learning curve is tiny compared to floats and negative margins and "relative position the parent element but absolute position the child element" and auto-margins and...

But the biggest problem with Flexbox is browser support. The new syntax from the stable spec isn't widely adopted yet. 

What should you do while you wait for Grandma to upgrade her browser?

Use it anyway.


Flexbox first
-------------

About a week ago, Philip Walton produced an excellent resource to show the [common layout problems Flexbox handles easily](http://philipwalton.github.io/solved-by-flexbox/). The top comment on Hacker News was this:

&ldquo;Isn't any "solution" that requires IE 11+ practically useless to the point of being fictional for at least the next decade?&rdquo;

I had similar reactions to my [giant flexbox tutorial](http://sketchingwithcss.com/samplechapter ) because I used webkit prefixes. And it's a rational viewpoint and a valid comment, except for one thing:

Flexbox is so much faster at getting layout right, you should use it regardless of browser support. Use it to get the layout you want, and then redo all of the layout using your ol' bag of float-tricks for browsers that don't support Flexbox.

Every project has a phase where you define visual hierarchy. Maybe you do this before writing back-end code, maybe after. Maybe this step is spread throughout your workflow, but there is always a phase when the layout is in flux. If you are creating in-browser mock-ups as you go, doing and undoing and redoing all that layout code is a ton of work and a big drag on creativity. When getting a layout just right requires hours of head-scratching and Stackoverflow crawling, you are not likely to try many different ideas.

This is not a problem with flexbox. Flexbox is so flexible, it's incredibly easy to make changes and try new things. There are only a few implementation details between your ideas and results. 


A few tips for the flexbox first approach
-----------------------------------

- Keep your layout code separate in your stylesheets.

And keep the flexbox code siloed. If you're using Modernizr and Sass, then nest your flexbox code under the .flexbox class and nest the old-style layout code under no-flexbox. And get all of it in there, padding and margins and floats (Yeah, you may still use those.) included.

- Don't use the order property.

Flexbox will let you define the order your markup is rendered, so order is now separate from markup. Sweet. The problem is that changing the order of your markup using CSS without flexbox is basically impossible. What this means is that you'll have a hard time getting your reordered flexbox layout working in non-flexbox code without adding or changing markup. Of course, it's likely that markup changes will break your flexbox layout and you'll be stuck in a vicious cycle.

Need to learn flexbox?
--------------------

Don't know flexbox yet? You can read a sample chapter from my book [all about flexbox](http://sketchingwithcss.com/samplechapter). If that seems daunting, I'm putting together a series of short, bite-sized videos about the basics. Just put your email address in the little box below, and I'll send you the lessons as I complete them.
