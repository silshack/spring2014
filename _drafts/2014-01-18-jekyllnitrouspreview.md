---
layout: post
author: elliott
title: Asciicasting (for TAs and Profs)
categories: how-to
published: false
---



## Proof of concept Asciicast post

Here is a screencast of how to start up and preview your changes to our class site before they're pushed to Github Pages.  This assumes you've already `git clone`d the repo.

<script type="text/javascript" src="http://asciinema.org/a/7262.js" id="asciicast-7262" async></script>

You can see there were a few typos and errors (e.g. Jekyll was already running so it threw an error) but you can also see the power.  Note that the video is the same shape as the terminal window I was using.  You may want to resize before recording.

## How to set up Asciicasting (for TAs and Profs)

Asciicasting is really easy to set up.

```bash
$ pip install --user asciinema
```

## How to post ASCIIcasts

You'll need to register via `asciinema auth`.  From there you can embed a cast via the embed code on the site itself or this way:

```
{% raw %}
{% include asciinema number="7263" size="medium" speed="3"%}
{% endraw %}
```

You can parse the number out of the URL pretty easily, so if you use this include code you don't even have to leave your terminal to embed the video :)

The `size` and `speed` parameters are optional, and our custom defaults are shown above.  If you don't use the `include` the embed code defaults to a speed of `1` which is pretty slow.
