---
layout: post
title:  "Start Android application with Intent Uri"
date:   2014-08-08
categories: android display
---

If your Android application supports being launched by specifying an Intent Uri,
this is an easy way to test if it works correctly, directly from the command line:

{% highlight bash %}
./adb shell am start -n com.foobar.app/.MainActivity -d "http://www.roccozanni.com"
{% endhighlight %}