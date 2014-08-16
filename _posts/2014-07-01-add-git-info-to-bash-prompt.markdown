---
layout: post
title:  "Add git informations to the bash prompt on Mac"
date:   2014-07-01
categories: bash git
---

When working intensively with branches on git could be very easy to made some
changes on the wrong branch by mistake, luckily there is an easy solution for that.

**NOTE**: these instructions requires [Homebrew](http://http://brew.sh/) installed on
your Mac, and `git` itself installed via `brew`

Install prerequisites:

{% highlight bash %}
brew install git bash-completion
{% endhighlight %}

Then, modify your `~/.bash_profile` accordingly:

{% highlight bash %}
NORMAL="\[\033[00m\]"
BLUE="\[\033[01;34m\]"
RED="\[\e[1;31m\]"
GREEN="\[\e[1;32m\]"

# Bash completion
if [ -f $(brew --prefix)/etc/bash_completion ]; then
    . $(brew --prefix)/etc/bash_completion
fi

# Env settings
export GIT_PS1_SHOWDIRTYSTATE=true

# Prompt
export PS1="${GREEN}\h${NORMAL}:${BLUE}\W ${GREEN}\u${RED}\$(__git_ps1)${NORMAL} \$ "
{% endhighlight %}

And this will be the result:

![Git prompt screenshot](/images/git-prompt.png)
