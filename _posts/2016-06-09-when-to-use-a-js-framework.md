---
layout: post
title: "Should You Ever Use a JS Framework?"
blurb: "Using a JS framework should never be your default decision. On the other hand, there are situations where it begins to make sense."
author: "sean"
---

About a month ago I wrote "Why Javascript Development is
Crazy". 120,000 people hit that page, and 3700 people signed up for my
newsletter, [The Invasion](/the-invasion).

So my internet exploded for a few days. In the aftermath, two
questions emerged:

1. When *should* you use a framework?
2. If you're not using a framework, how should you proceed?

I will try to address the first question here. How you should proceed
without a framework is a much bigger question. I'll be working my way
through answering it in the coming months.

Seven years ago I started a job at a company I'm going to call
Acme. I call it Acme because it's exactly like the Acme in the
roadrunner cartoons. You can order any, wacky thing imaginable
and it'll be at your place of business on the same day or next day.

They have crazy good margins and make a mega-shitload of money. I
learned a lot about business from these folks, but I also learned
about systems.

Acme's website had complicated user interfaces to help customers find
that one hex nut they need for their billion dollar helicopter
prototype. Which is why, in the early 2000's, Acme's website started
to evolve into a single page application, before that term was even
coined to my knowledge.

The Javascript codebase at this place was complicated. But there's more:

* Acme almost never hired developers. They hired people with liberal arts
degrees straight from college.
* They picked YUI JS framework instead of jQuery, because that used to
  be a choice that people made. And then they forked YUI which made it
  almost intractable. So no jQuery.
* For some reason their code standards required Javascript to look
like Visual Basic.
* They used version control from the 80's with only file level locks,
  (that you could completely ignore)
* Their deployment script was a guy named Ed. To deploy to
  production, you would print out a list of files that you changed and
  then Ed would go down the list and copy/paste the new files onto
  each of the servers.
* Half the backend was a mainframe running software written in the
  70's.
 * The shared development environment, let's call it a staging
    server, was updated by hand, by developers, whenever they wanted.

If you're guffawing at this and thinking these people were idiots,
this would be a good time to point out that they had very little down
time, churned out new features regularly and made gigantic mountains
of money year after year. So they are laughing at you and your
snobbery all the way to the bank.

Do you get paid to write code? Then you work for a business. When a
business decides how to spend its developer budget, it doesn't always
make sense to spend money on doing software the "right" way. The point
here is that Acme's choices appear crazy to software developers, but
it's mostly rational to the people who were writing my paycheck, and
that's what actually matters.

Using a JS framework, even in a situation as seemingly bad as Acme's,
isn't necessarily a good business decision.

So how should Acme proceed? How does a business decide if it should
use a JS framework? I've [already explained]({% post_url 2016-04-11-why-js-development-is-crazy %})
why it almost never makes sense to *start* a codebase with a
framework. So if we pretend that something like Angular existed back
when Acme's code was morphing into a SPA. At that point, should they
have used a framework? Should they use one now?

When a company picks a framework, there are costs and risks:

###What if support for this framework disappears in five years?

Can your organization afford to maintain this framework on it's own?
Do you have enough expertise on your team? For most companies this
isn't going to be true, and frameworks die all the time. You have to
put your finger in the air and guess if the productivity you gain from
picking a framework is worth the cost of switching to something else
later, or the cost of dealing with unsupported software for years
while you try to find budget to switch to something new.

If your codebase is smallish and you're in the kind of business
where you're throwing out code and rewriting all the time, (more of us
do this than we'd like to admit), then the framework is probably worth
it.

But if you're code base is huge and you're looking at your 5 year
roadmap and it's filled with ambitious new features that are going to
be core parts of your business, the cost of picking a framework that
dies in 5 years is much greater, and the only way to decide if it's
worth going forward is to think through the rest of these questions
...

###How much productivity will we lose to the learning curve for the new framework?

If you're switching to Angular, unless you hired all Angular
developers, everyone is going to have to get up to speed. You're going
to have to pay for training and then your developers will still spend
the next 3-4 months asking "how do I do this in Angular?" even though
they could have done the same thing with Jquery/vanilla JS without
thinking about it.

###Could we build a feature that makes us more money with the development time we will spend integrating this framework?

For most profitable companies, the answer to this is "yes".

###Will the framework allow us to build more money making features more quickly in the future?

In theory this is the value of a framework. You get more value
from a framework the bigger your team is, the bigger your codebase is
and the speed at which you are building new features. Some codebases
are just coasting along for good business reasons, and wouldn't
benefit from switching to a framework.

Okay, so this probably sounds like a very complicated decision, but
for a lot of companies, it's more straightforward than it seems.

[chart here]

###Fast and Small e.g. Startups
The top, left of this chart is where startups live. The faster your
codebase is changing, the less risk there is when jumping on the
latest framework bandwagon. If you're throwing out features left and
right because you haven't even figured out what makes money yet, it
kind of doesn't matter if the framework you're using dies, because
you're about to throw that code out anyway.

If you're more productive in a framework, and you work for a startup,
I would say using a framework is a good choice. With the caveat that
most people are less productive using JS frameworks than the would
like to admit.

###Slow and Small, Small businesses and small software companies
In the bottom left corner of this is either the classic small business
where software is not a core component of their business, or a small
software company. If you're a developer doing work for small
businesses, you have no business using Angular/React/whatever. Instead
use rock solid, been around forever libraries that work in every
browser ever invented. If you're running a small, software business, I
would say in most cases the risks of committing to a framework
outweigh the benefit.

###Fast and Huge, Google, Amazon, Facebook, etc.
In the top right of the corner are companies where software is a core
part of their business, so they're knocking out new features left and
right and probably throwing away chunks of code and doing more
rewrites than they care to admit. They have big teams, and new
features print money. So it makes perfect sense to train up their
teams to use a framework so everyone is starting from the same place
and features get written more quickly.

The more profitable you are the less risky it is to lose support for a
framework down the road. Because when you're evaluating whether you
should do the work to switch, the long term benefit is almost always
worth it. Heck, if you're big enough and profitable enough and
software is your core business, it makes sense to write your own
framework like Facebook, Google, etc.

###Slow and Huge, Enterprise
The bottom right corner of this quadrant is where Acme sits, and its
far less clear what the right choice is here. Software is not the core
business, but software systems enable the core business. The industry
doesn't move quickly, so the software doesn't need to change that
quickly. But new features help customers buy more widgets. Ideally you
could build on a framework that will be around for 50 years, which
doesn't sound crazy to Acme because most of its codebase is already 40
years old. Of course that doesn't exist, so building a custom
framework starts to sound right, because at least they won't be trapped
in a dead ecosystem in 10 years. So then Acme would have to create
everything from scratch, but that up front cost starts to look pretty
small when you're thinking about the next 50 years...

Should Acme switch to a framework? There's no easy answer. When I was
a developer and thinking only about software, the answer was obvious
to me: of course they should start using Angular! But since I've been
running my own business, I see software through a different lense now,
and the decision is not straightforward.

Pause and think deeply before committing to a framework, and if you're
making the decision on behalf of a business as a consultant, CTO,
whatever, do the business a favor and take off your software developer
blinders.

Want to learn more about how to write Javascript applications without
a framework? Or learn enough Javascript so you can pick up a framework
easily, when it makes good business sense? I'll be writing on these
topics for [The Invasion](/the-invasion) in the coming weeks and
months.

{% include javascript-form.html %}
