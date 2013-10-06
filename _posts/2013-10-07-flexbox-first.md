---
layout: post
title: "Flexbox First"
blurb: "CSS sucks at layout. The Flexbox spec is stable and to the rescue, but browser support isn't there yet. Damn. But wait ... what if you used it anyway?"
author: "sean"
---

CSS sucks at layout. Maybe you've been doing this for years and started off with table layouts. Or maybe you're new to the game and are wrestling with floats and clear-fixes. The default web looks terrible, layout options are incredibly limited. Actually, no, that's not true. You can do anything you want with layout, but the farther away you get from the default "blocks stacked on blocks" layout you get out of the box with HTML, the more time you commit. And we're not talking about a linear, you get-out-what-you-put-in relationship. Time spent getting a crazy layout working goes up <em>exponentially</em>. It's insane.

The problem is you are thinking visually "I want this picture over here" and you have to translate your thought to random gobbledegook the browser can understand and some committee managed to agree to. And the distance between your thought and actually putting the damn picture where you want it is <em>vast</em>. In fact, once you know how to do that with some efficiency you can now hang out a shingle and charge upper-middle class wages to do it.

The learning curve for layout in the browser is so bad you can create a career out of punching through it.


The dream
------------

The thing is, I know what you really want.

When you look at a picture, you want it "to the left". You want to put your awesome mousing skills to use and click-drag the freaking picture <em>to the left</em>.

You want to look at the screen and say, "try this in two columns instead of three" and the computer just does it.

You want to right-click->sticky-footer the div and call it a day. And you want your copy <em>vertically and horizontally centered</em> without dragging your brain over hot coals as you rewrite ALL THE MARKUP.

Good news everyone. Flexbox is here and it will get you one step closer to the dream.

It's not perfect
--------------------

Flexbox is not perfect. You still can't just say:

{% highlight css %}
.somebox {
    layout: next to .otherbox;
}

.otherbox {
    layout: stuck to the bottom;
}
{% endhighlight %}


The syntax is not super intuitive, (again with the committees), but it's only one or two levels of abstraction above the idea "move it over there" syntax. The learning curve is tiny compared to floats and negative margins and "relative position the parent element but absolute position the child element" and auto-margins and...

But the biggest problem with Flexbox is browser support. The new syntax from the stable spec isn't widely adopted yet. Soon you can use Flexbox alone, but not yet.

In the meantime? Use it anyway.


Flexbox first
-------------

About a week ago Philip Walton produced an excellent resource to show the [common layout problems Flexbox handles easily](http://philipwalton.github.io/solved-by-flexbox/). The top comment on Hacker News was this:

" Isn't any "solution" that requires IE 11+ practically useless to the point of being fictional for at least the next decade?"

I had similar reactions to my [giant flexbox tutorial](http://sketchingwithcss.com/samplechapter ) because I used webkit prefixes. And it's a rational viewpoint, and a valid comment, except for one thing:

Flexbox is so much faster at getting layout right you should use it first to get the layout you want, and then redo all of the layout using your ol' bag of float-tricks for browsers that don't support Flexbox.

Every project has a phase where you are experimenting with the layout of the information on the page. Maybe you do this before writing back-end code, maybe after, maybe this step is spread throughout your workflow, but there is always a phase when the layout is in flux. And ideally you want to stay in this phase as long as possible.

Flexbox is so flexible, it's incredibly easy to make changes and try new things. There are few implementaiton details between your ideas and results. When getting a layout just right requires hours of head-scratching and Stackoverflow crawling, you are not likely to try many different ideas.


A few tips
-----------

Keep your layout code separate in your stylesheets. And keep the flexbox code siloed. If you're using Modernizr and Sass then just nest your flexbox code under the .flexbox class, and then nest the old-style layout code under no-flexbox.

Don't use the order property. Flexbox will let you define the order your markup is rendered, so order is now separate from markup. Sweet. The problem is changing the order of your markup without flexbox and CSS only is basically impossible. What this means is you'll have a hard time getting your flexbox layout working in non-flexbox code without adding or changing markup. And of course it's likely markup changes will break your flexbox layout, and you'll be stuck in a vicious cycle.

Conclusion
--------------------

The benefit of trying all of the layout ideas you can think of outweighs the extra time you will spend bullet-proofing the layout for old browsers. And before you know it you'll have written your last clear-fix.

Don't know flexbox yet? You can read a sample chapter from my book [all about flexbox](http://sketchingwithcss.com/samplechapter). If that seems daunting, I'm putting together a short video course about the basics. Just put your email address in the little box below and I'll send you the lessons as I complete them.
