// find all emails bookmarklet explained (if mailto: hyperlinks)

/* This expanded version explains the code that comprises the FindAllEmailsOnPage
bookmarklet linked in 3rd paragraph of www.recruiting-online.com/bookmarklets.html
which you can drag into your bookmarks/favorites bar */

/* Everything inside these slash-asterisk pairs is a comment in JavaScript and is
ignored by the computer, but it's helpful to us humans in order to figure out what
was intended by the programmer, so comment generously. If your comment is not more
than one line long, you can use a leading double slash and nothing afterwards. Both
comment types are used below. See http://javascript.crockford.com/code.html for
more tips around recommended syntax in JavaScript */

/* normally, a javascript file ends in filetype .js so you don't have to tell the
computer it's JavaScript, but because you'll place the code in a bookmarklet stored
in your web browser, we must begin the code with javascript: and remove all the
spaces in the code. Spaces, tabs, etc., are ignored in JavaScript but do help
readability so we keep them in .js file versions */

DL = document.links;

/* above code line sets variable DL to equal all hyperlinks on the current webpage
(called "document" in JavaScript), and end your statement with a semicolon */

WN = open('','Z6','width=800,height=400,scrollbars,resizable,menubar');

/* unpacking the above line:
- first we create a variable WN that will open a new window
- inside the parentheses are various parameters, the first being URL of page to
  open in new window, but by making this blank (2 apostrophes and nothing between
  is an empty string), a new window with about:blank is opened
- next parameter is name of the window in case we want to reference it later;
  we'll just call it Z6
- next parameter is specs, each separated by a comma. Like most open parameters,
  these are optional, but a few are worth having for convenience, such as width
  and height in pixels, whether you want the new window to have scrollbars, be
  resizable and have a menu bar
- for details on all parameters, see www.w3schools.com/jsref/met_win_open.asp
*/

for(JK=0; JK < DL.length; JK++) {

/* for loops in JavaScript start w/format: (initialization; condition; update).

Note the use of a semicolon to separate statements, which is only obligatory when
you have 2+ statements on the same line. However, when we remove all the spaces
and line breaks for the bookmarklet, that will cause things to be on the same
line, so it is good practice to end each statement with a semicolon.

Blocks of code are surrounded with curly brackets. If you only have one statement
inside a block, you don't need a semicolon. Never put a semicolon after a closing
curly bracket except for assignment statements. For a great explanation on all
this, see www.codecademy.com/en/forum_questions/507f6dd09266b70200000d7e

So, in the "for" line of code above:
- our new variable JK starts off equalling zero,
- the loop will run as many times as JK is less than the total # of links on page,
- variable increments by 1 each time it loops (what double plus sign does; for
  more, see https://docs.microsoft.com/en-us/scripting/javascript/reference/increment-and-decrement-operators-javascript
- code line ends with a left curly bracket, indicating the start of a code block
  associated with this loop */

    if (DL[JK].protocol == 'mailto:')

/* Indenting code lines by 4 spaces inside your for loop is a convention for
readability, but not required. Above code says: if whatever document link # you're
up to has the protocol (type) mailto: (email address), then do the following */

	{rr = DL[JK].toString() ;

/* another left curly bracket indicates the start of a code block associated with
this "if" statement, followed by
a new variable rr storing the value in the found mailto: link as a string.

FYI, if you used DL[JK].toString().link(DL[JK]) instead of above code, you'd get
the full hyperlink starting with <a href=" ending with ">whatever</a> whereas
DL[lK].toString() just returns what's between the quotation marks being hyper-
linked.  This is advantageous in situations such as where the page displays the
hyperlinked words Email me, but the href is mailto:something@whatever.com --
this script grabs the actual email address rather than the words "Email me". */

	WN.document.write(rr.substring(7, rr.length) + '<br>' ;)

/* let's unpack this one:
- WN.document.write says that we will write what follows to the new window, which
will be wrapped in parentheses
- take the portion (substring) of variable rr starting at character #7, running
  through the end/length of rr, which is because you'll recall what's inside the
  quotation marks of a hyperlink is a string starting with mailto: followed
  immediately by the email address, so this omits those first 7 chars and we're
  left with just the email!
- plus we add a line return after each email address using +'<br>' (<br> is
  HTML's standard tag for a line break) so the final output is easy to read, then
- end-of-statement semicolon, right parentheses to indicate end of what's being
  written to the new window */

}}

/* the first curly bracket ends the "if" loop block (which was nested inside the
"for" loop), and the second curly bracket ends the "for" loop */

// We're done!
/* Once you remove the comments, spaces and line breaks so it looks like the
version at (feel free to copy)
https://github.com/gutmach/SourceConExtras/blob/master/find_MailTo_emails.js
Then just right click/edit any favorite/bookmark in your browser and replace the
URL with that, and save it. Now you can click it to run it on whatever webpage
you're on!  We call it a bookmarklet, but it's just a bookmark containing
JavaScript squished together. */
