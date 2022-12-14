const about = () => {
  return <div>
  <html>
    <head>
        <link rel="stylesheet" href="styles/main_page.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
        <div class="ext-hdr" id="main-hdr">
            <div class="header">
                <a href="index.html"><img src="images/bizLogo.png" class="biz"/></a>
                <i class="fa fa-bars icon" onclick="displayLinks()" id='bars'></i>
                <div class="links" id="links">
                    <a class="lnk" href="about.html">About</a>
                    <a class="lnk" href="messages.html">Messages</a>
                </div>
                <div class="profile">
                    <a href="profile.html"><img src="images/prfle.png" class="logo"/></a>
                </div>
            </div>
        </div>
        <div class="main-content">
            <img src="images/largeWelcome.png" class="large-welcome"/>
            <p class="mission">At Neighborhood we have one mission:<br/><span class="b-txt">Bring
            community to your neighborhood.</span><br/>With Neighborhood, you can 
            see what necessary equipment those in your vicinity have to offer for 
            your projects. You can then list any tools that you would be willing
            to lease to your neighbors. We want to close the gap in communication
            between neighbors so that you rarely have to buy new equipment.</p>
        </div>
        <script src="bootstrap.js"></script>
    </body>
</html>
  </div>;
};

export default about;