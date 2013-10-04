---
layout: post
title: "Git for Humans: How to Get Started with Git in Your Agency Today"
blurb: "lsakdjf"
author: "sean"
---

Linus Torvalds is a genius, and Git is an amazing feat of software engineering. The internal data structure Git uses is beautiful. It's a perfect blend of computer science and software engineering and it's almost a oe-to-one mapping of solution to problem. If I were still a consultant and did fit-gap analysis on using Git for my every day problems as a developer, there would be no gap (and then I would charge you $10,000).

You may have tried to get your web design agency to start using Git because you know the benefits. You know the power of distributed version control. But you probably ran into this problem: Git was not made for humans. It was made for Linux kernel developers. The interface is ... how shall I say it ... tough to grok.

So how do you start with Git in your agency? How can web designers, (mostly human as far as I can tell), start using a tool built for GCC-toting neckbeards? What if I told you it's not only possible, it's actually downright easy?

The first step
--------------------

The first step in getting started with Git is to adjust your mindset. The first time you wrap your head around the basic use cases for Git you get a little high on power. I know, I was there. The first time I created a local branch without a network connection and later rebased it on someone elses changes without cluttering the history, I became so overconfident I thought I could fly and jumped off a building, just like when kids discover drugs in those after school specials. Don't worry, I'm fine, I was doing Angel Dust at the time and that stuff really does give you super powers!

But it's a mistake to take this confidence and excitement and just plop Git in front of your coworkers. It won't work. You've had the epiphany, they haven't, and they may never. And let's be honest, if you didn't have that glowing insight into what Git can do for you, do you think you would be motivated enough to work through the vicious learning curve? You have the religion my friend, and so you are willing to put up with pain and agony because you know the reward is worth it.

Your coworkers don't have the religion, and proseltyzing is not the answer. You can't just stand on a milk crate in the middle of the office and tell everyone about the Kingdom of Git and expect to get buy-in. People won't believe in miracles unless they see them with their own two eyes. But we both know that Git doesn't exactly offer a rewarding first-use walkthrough &mdash; there are no miracles there.

The point is, you will be tempted to use your new knowledge of distributed source control to craft the perfect solution for your agency. It's easy to go overboard. You'll have three different branches representing production, quality assurance and development. Every feature will get its own branch. All merges will use interactive rebases to keept he history clean. It will be perfect. You create documents with lots of circles and lines explaining how the code will "flow" from repo to repo.

And if you do this you take what is already an incredibly intense learning curve and turn the dial up to 11.

IT WON'T WORK
--------------------

The only way to introduce Git to a novice is to start with the basics. The very basics. And the only way to get your coworkers to start using Git consistently is if they get value out of it immediately and the initial pain is kept to a minimum. Don't forget, this is Git and there will be blood, but you can keep it to a minimum.


Your Git starter kit
----------------------------------

- Create a repo for every client and/or project.
- Have only one central repo for each project/client, no forks or long-lived branches
- Copy-Paste shared code into each new repo when you create it.
- No local branches.
- Merge often, don't use rebase, push often
- Use the command line client
- Only use clone, pull --rebase, push, add, commit, log, diff and status
- Handle merge conflicts manually


Create a repo for every client and/or project, no long-lived branches, copy-paste shared code
--------------------------------------------------------------

Git has performance problems with large code bases. Maybe each of your projects is small, but it won't take many projects to start gunking up the works. Once you start adding large binary files like images, videos, etc. (and you will, it's just easier to put everything in one place and you have work to get done), Git will hit a performance wall quickly. So create a fresh, empty repo for each new project.

You may be tempted to put each project in a folder, so you can share common code. But you aren't going to do this to avoid performance problems, so how do you share common code? Just copy-paste it from each project. Yeah, this somewhat defeats the purpose of version control. If you're a purist you probably stopped reading this a while ago, so I suspect you are someone trying to get work done. Git has mechanisms for sharing common code accross repos, but you're trying to keep the learning curve to a minimum and everyone already knows how to copy-paste. It will be fine, I promise.


Share code often, don't use rebase, no local branches
-------------------------------------------

Long-lived branches are the beginning of the end. You don't know pain until you've tried to merge two months of local, unshared changes with the main repository on a project.

The key to pain-free Git is to get your changes to everyone else on your team as often and as fast as possible. Merge conflicts are totally manageable in small doses. They're like sprint intervals. One is fun, but eight in a row? You'll be "tossin' your cookies" as coach used to say.

How do you avoid the problem? Don't use branches. Yes, local branches are one of the most amazing features in Git. But you should start everyone off as if they don't exist &mdash; add them later when everyone is more comfortable with Git.

Instead, pretend like Git is an old school centralized version control system. Every few commits, any time you hit a somewhat stable point, pull changes from the master repo, merge the changes, then push your changes to the central repository.

Rebase keeps the history clean, but it creates merge conflicts more often and is harder to understand. So don't use it. A clean history is a nice to have, but avoiding painful merge conflicts is mission critical for Git adoption in your company. And that's why you shouldn't use local branches. Local branches encourage people to hide their work, to wait until it's perfect before sharing with everyone. This pattern is how you create [integration risk](http://www.startuplessonslearned.com/2008/12/continuous-integration-step-by-step.html), a recipe for certain disaster.


Use the command line client
------------------------------

This will be the most controversial recommendation in the article.

"The command line," you say, "I thought we were trying to lower the learning curve? How does an archaic, text-based user interface help with that?!?"

Because, it turns out most people are very good at following rote instructions to achieve a result. Most Americans spent over a decade in school learning how to do plug'n chug math &mdash; you can handle a very small, easy to memorize series of incantations typed into a little black box. Trust me.

So the trick here is to not teach someone how to use the command line but instead put together a little cheat sheet for the basic commands they need. You're going to need to CD to the correct place, then clone the repository to get started, so you need a cheatsheet for "How to clone your first repo." Then you need to make some changes and save them to Git. Then you need to merge, handle a merge conflict and then push changes.

All of that can fit on one or two cheatsheets sitting in a shared folder somewhere. People will run into problems the cheatsheets can't handle, but if you keep everything as simple as possible it won't happen often. You do need at least one Git "expert" in the office to help solve those strange problems beginners will inevitably run into from time to time.

Handle merge conflicts manually
------------------------------

Merge conflicts are befuddling the first time you encounter one. This is why you shouldn't add a conflict resolution tool to an already confusing situation. Merge tools and visual diff tools are great once you wrap your head around them, but if you are following the guidelines above, (no long-lived branches, merging often), merge conflicts will be rare and small. A visual diff tool is not necessary.

It's pretty easy to fabricate a merge conflict to show someone how to handle the situation. When you do, open up the "conflicted" file with a text editor and you will see little marks like this:

{% highlight python %}
if __name__ == "__main__":

    text = Text()
<<<<<<< HEAD
    text.packit!!!!
=======
    text.packit???
>>>>>>> master
    text.delete(1.0, END)
{% endhighlight %}

Check it out. The bottom arrows point to "master", so that's on the master branch. The top arrows point to HEAD, so that's your change. Which one do you want? Edit the file to look the way you want it to, save the changes and then commit them. Then try the pull/push process again.

Visual diff tools wrap a pretty simple exercise of editing a file into a complicated application <em>that is awesome for experts</em> but unecessarily confusing for beginners.


Training
-----------

Before you roll out Git to everyone on your team, you should do a little bit of training. I recommend a simple demonstration. Give a high, (really, really high and not complicated), level walk-through of Git and the development model you are recommending.

Be sure to explain the benefits of using Git. Tell everyone how easy this will make it for them to share code and assets, and how it will keep them from losing work. Git is like a giant undo button for your entire project.

Then go through each of the cheat sheets and walk through a merge conflict. After you are done, pass out your cheat sheets and send out instructions for intalling Git.

Conclusion
--------------

It actually took me years to develop this process. I tried to bring distributed version control into my last organization many times, and failed many times. The main point of failure was Git's complexity. There is great power with that complexity, but the learning curve is almost unapproachable for mere mortals.

If you don't have the Git religion yet and are looking for a simple guide to getting up and running with the basics, there's an entire chapter devoted to the topic in my book, (Sketching with CSS)[http://www.sketchingwithcss.com/]. You can pre-order it today for a pretty steep discount, or sign up for my launch list and find out when it's done.
