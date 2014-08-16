---
layout: post
title:  "Get some details about the display of your Android device"
date:   2014-08-13
categories: android display
---

An easy way to collect some details and informations about your Android development
device:

{% highlight java %}
Context context = getApplicationContext();
metrics metrics = context.getResources().getDisplayMetrics();
int dpHeight    = (int) metrics.heightPixels / metrics.density;
int dpWidth     = (int) metrics.widthPixels / metrics.density;

System.out.println("density: " + metrics.density);
System.out.println("densityDpi: " + metrics.densityDpi);
System.out.println("pxHeight: " + metrics.heightPixels);
System.out.println("pxWidth: " + metrics.widthPixels);
System.out.println("dpHeight: " + dpHeight);
System.out.println("dpWidth: " + dpWidth);

{% endhighlight %}