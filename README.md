# activateActiveX
An ActiveX object activation script for Internet Explorer.

## History
Way back in 2006, Tavis Tucker and I put together this script as a workaround for the then-recent change made to Internet Explorer 6 as [a result of the Eolas patent lawsuit](http://en.wikipedia.org/wiki/Eolas#Effects_on_other_browsers). The change required that users interact with an ActiveX object (most notably Adobe Flash Player) before the element would load in the browser. This was a big hassle for those of us who worked with clients who were in love with Flash-based anything.

I wrote more about the script in an article title [activateActiveX() – A Standards-Based Solution to Internet Explorer’s Active Content Woes](http://sixtwothree.org/blog/archives/2006/05/07/activateactivex-a-standards-based-solution-to-internet-explorers-active-content-woes/). It's pretty old, but still a good read.

At this point, this script is pretty much useless, but I include it here for posterity.

## Requirements
* Internet Explorer 6 (yeah!)

## Usage
Simply include a link to the JavaScript file in your HTML and you should be good to go. Honestly, it's been so long since I've used this that I couldn't tell you if it's more complicated than that.

	<script type="text/javascript" src="/path/to/your/scripts/folder/activateActiveX.js"></script>