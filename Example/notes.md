DOCTYPE -> html version

html tag -> root

head element -> metainformation, stuff that we dont see but it describes the stuff
    * title
    * 


body element -> stuff we see on website
    * headings
        * h1 - h6
        * denote hierarchy
    * paragraphs
        * regular text <p> not numbered

These are to be used inside a paragraph
    * <strong> -> bold
    * <em> -> italic

Anchors and Attributes
<a> -> make links to different locations in same page or other locations

Attributes  -> within the opening tag, give extra info to the browser
    example -> <a href = "httpsL//google.com">GOOGLE</a>


Inline CSS
inside the style property inside the starting tag

font-size:21px
color:white
background-color:black
text-align:left,right,center

colors - set with keywords, hexvalues or hsl values

Lists in html
    <ol> -> ordered list (1,2,3)
    <ul> -> unordered

<li> -> list item


Images
    like links. require attribute, link to image file. *src* attribute

    <img src = "img.png" alt = "about the image">

    self closing
    can include entire url, or point to images in our assets

    images are not valid without *alt* attribute, used to describe the image


Internal CSS
Style Sheets
    Internal style sheets are inside the head


Selectors -> helps us select elements and stuff


External CSS
<link href="css/style.css" rel="stylesheet">

Class selector
.class {}
class is a group

ID selector
#id {}
id is an individual, only one per page

ID overwrites a class if both point to same thing


Comments
HTML -> <!-- COMMENT -->
CSS -> /*  COMMENT */


Layout Tags
    * header
    * main
    * section
    * footer
    * nav
    * div (generic box)


block level properties
    * width of 100% of parents
    * height of 0 -> means they can grow to match content
    * stack one on top of each other
    * we can control width and height



margin-left,margin-right,margin-top,margin-bottom
margin: <top> <right> <bottom> <left>
    clockwise
margin: 10px 20px 100px 40px    

margin:10px -> puts same margin for all 4 sides

margin: <top and bottom> <left and right>
margin: 20px 10px


padding -> control positioning of the content inside the element


Border
    * border-color
    * border-width
    * border-style: solid / dotted / dashed / double / groove / ridge / outset
    * border: <border-style> <border-color> <border-width>



Box model
total width and height, calculated adding the different parts together






for centering and stuff, we can use the auto keyword


on body, we usually do a margin:0px
