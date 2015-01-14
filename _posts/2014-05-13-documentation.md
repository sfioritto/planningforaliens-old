---
layout: post
title: "The Infamous Angular Learning Curve"
blurb: "Angular is an extremely powerful tool for creating client-side applications .. that is, if you can figure out how to use it."
author: "sean"
---

The Angular docs are comprehensive, easy to search and clearly written, but are almost universally decried as terrible. Why?

It's because they are a mystery that never resolves itself. You can see all the pieces, but you have no idea how you got there. In other words, the Angular docs are like this picture:

<figure>
    <img src="/images/wrecked-ups-truck-guy-in-tux-with-sewing-machine.jpg" />
</figure>

Here are some prime examples of the UPS-tux-sewing-machine-guy problem from the Angular docs:

"Scope is an object that refers to the application model. It is an execution context for expressions."

Scope is a really important Angular concept, but you'll just have to take my word for it because this sentence is totally inscrutable.

Here's another doozy:

"Angular services are substitutable objects that are wired together using dependency injection (DI)."

The docs keep going like this, sentence after sentence, paragraph after paragraph of abstruse technical vocabulary with no context. It doesn't build on anything. It doesn't tell a story.

It's like, if you were writing Star Wars and you revealed the Death Star is fully operational, Darth Vader is Luke's father and the goofy, green alien is actually Master Yoda and then never tell the viewer who Luke is and what the force is, (IT'S NOT MIDI-CHOLRIANS DAMMIT), and why you should root for the rebellion and not join the Dark Side. 

At least a bad movie might involve something sexy or action-y, but here we get "substitutable objects" and an "execution context." Technical docs can't fall back on Michael Bay-style expensive CG to keep your interest, so they better at least have a plot.

And it's not just Angular. Most technical docs are even worse.

But docs are docs, right? Don't they just document what the code does?
------------------------------

Right, so maybe this assumption is the root of the problem.

How many times in your career have you been told to "just read the code". Yeah, because reading code is so easy.

You probably know that "just read the code" is not a great way to document a code base.

Docs that just document what the code does are almost as bad as telling someone to go read the code.
------------------------------

Think back to the last time you were reading code written by someone else and you couldn't understand what was happening. So basically, think back to the last time you read someone else's code.

You hop from variable to function to method to class trying to follow the call stack and build a model of the state as the code executes, but it's just not coming together in your head. So what do you do?

You rewrite it.

About half the time when you embark on a rewrite, you encounter a problem and end up back in the original code to figure out how they handled it.

My question is, why didn't they tell you about that problem to begin with? Why did it take building the solution from scratch, with your own two hands, before you understood the problems it was solving?

It's because they told you what they did and not why they did it. 

Code describes the what not the why. Code has no context.
------------------------------

And we write our docs like it's code. Hell, some people even strive for executable docs that serve double duty as tests!

By rewriting the code, you filled in the context. When you're looking at code, you're looking at the picture of the tux guy with the sewing machine. No context. It's a mystery.

As you are writing code, the context and the story behind it, the thing that is going to help future you/other programmers understand what you did, is IN YOUR MIND and not in the code.

This is so easy to forget, especially when you go to write docs.

To some extent this is the "curse of knowledge" but with code it's worse because, well, you have the code ... surely that documents something?

Wrong. It only tells part of the story and in the worst possible way.

(P.S. This is why 'tests as documentation' is complete bullshit, it's the same problem. Tests document the what not the why. They just assert a bunch of stuff but give you no context.)

The other reason docs fail
------------------------------

When you are learning something new and complex, you have to actually use it.

Think about when you first learned recursion. There's a good chance you got the general concept but then you blew a few stacks writing your first recursive functions. A conceptual understanding of recursion is not enough for you to successfully write a recursive function.

A conceptual understanding of music theory is not enough for you to sit down and play a piano.

A conceptual understanding of a directive in Angular is not enough to write your first directive.

You have to actually practice using the damn thing. It's so rare for docs to walk you through an example, and yet if you want folks to succeed with your library/framework/api whatever, you absolutely have to get them using it ASAP.

(P.S. This is why I always recommend [Learn Python the Hard Way](http://learnpythonthehardway.org/) to people learning to code. It's the only thing I've seen that actually makes you practice. I suspect it's because Zed plays guitar ... )

(P.P.S. Angular does have a [tutorial app](https://docs.angularjs.org/tutorial), but I haven't tried it yet. If you're stuck wallowing in the regular docs, it might be worth a try.)

Oh, and a "hello world" app is not enough, because again, not enough context. [The first screencast DHH did for Rails.](http://youtu.be/Gzj723LkRJY) is a really good example of the kind of demo your docs should include. It's gold.

I remember following along way back then. As you watch that screencast, you will find yourself asking "how did he do that?" or "what is that tool he's using?" You will almost never ask why he's doing something, because his opinion is so abundantly clear!

The other thing is, as you follow along it's like you keep acquiring new super powers.

* Run script, wow, look at all those files I just created!
* Create controller, load browser window - what, I just made something show up on the screen?
* Create a post table, BOOOM, I'm saving things in a database, woooot.

There are plenty of mysteries along the way, but you can look past them because you are having so much fun getting stuff done and you know you can work your way back to a deeper understanding later. It's like the opening scene of Breaking Bad, it has so many missing pieces but it doesn't matter because you're having fun watching the show and you know you'll find out what is happening later.

 [ end rant ]

So, are you learning Angular right now?
------------------------------

How are the docs treating you? If you're tired of smashing your brain on the docs and  wasting your time culling through scattered tutorials, let me teach you! I do this for a living.

My [next course](http://planningforaliens.com/escape-plan), is all about Angular and I guarantee there will be plenty of context. :-)

Escape Plans, (what I call my training courses), are designed from the ground up for busy people with jobs. Each course fits into an hour or so every night for one week or one long weekend day, however you work best. At the end of a sprint you'll have a working Angular project and a fundamental grasp of the topic that can only come from hands on experience.

Most training or books leave you empty handed. At the end of an Escape Plan course, you'll have a fully functioning project to demonstrate your newly acquired skills.

So if after reading this you were wondering how I might approach teaching someone about Angular, just put your email address in this little form because I'll be giving away a lesson or two. And if you're on the launch list, you get a discount.

{% include angular-escape-form.html %}
