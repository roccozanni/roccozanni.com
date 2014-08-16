---
layout: post
title:  "Simulate slow network on MacOS"
date:   2014-01-31
categories: bash networking
---

Sometimes I need to test how some applications behave in case of unreliable or slow network conditions. With just a couple of bash commands it's very easy to simulate bandwith cap o network delays.

First, create a pipe:

{% highlight bash %}
ipfw pipe 1 config bw 56KBytes/s delay 100ms
{% endhighlight %}

Thi pipe, which identifier is `1`, limits the bandwith to `56kbps` and introduce a `100ms` network delay.

Let's do some testing now. For example, if you want to route the traffic to port `12345` through that pipe:

{% highlight bash %}
ipfw add 1 pipe 1 dst-port `12345`
{% endhighlight %}

now, all the outbound network traffic to port `12345` is influenced by the pipe configuration. When you want to
rollback to normal conditions:

{% highlight bash %}
ipfw delete 1
{% endhighlight %}
