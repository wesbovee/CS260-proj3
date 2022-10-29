const profile = () => {
  return <div>
  <html>
    <head>
        <title>Neghborhood</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="styles/main_page.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="styles/profile.css"/>
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
           
            <div class="usrImg">
                <img src="images/landscape.jpg" class="bkgrnd"/>
                <img src = "images/prfle.png" class="prfle-pic"/>
            </div>
           
            <div class="tool-bar">
                <a class="user-links" href="#">About</a>
                <a class="user-links" href="#">Activity</a>
                <a class="user-links" href="#">Neighbors</a>
                <a class="user-links" href="#">Settings</a>
            </div>
            <div class="usr-info">
                <div class="prfle-lft">
                    <div class="projects-hdr">
                        <h4>Your Listings</h4>
                        <div class="add-prjct">+ Listing</div>
                    </div>
                    <div class="prjct">
                        <div class="prjct-hdr">
                            <h4>Project Title</h4>
                        </div>
                        <div class="prjct-bdy">
                            <div class="details">
                                <p class="prjct-info">Dewalt hand-held drill.
                                I will include a battery pack as well</p>
                                <div class="quality">Quality: Good As New</div>
                            </div>
                            
                            <div class="my-listing">
                                <p class="price">$23</p>
                                <img src="images/drill.jpg"/>
                            </div>
                        </div>
                    </div>
                    
                    <div class="prjct">
                        <div class="prjct-hdr">
                            <h4>Project Title</h4>
                        </div>
                        <div class="prjct-bdy">
                            <div class="details">
                                <p class="prjct-info"></p>
                                <div class="quality">Quality: Good</div>
                            </div>
                            
                            <div class="my-listing">
                                <p class="price">$55</p>
                                <img src="images/tableSaw.JPG"/>
                            </div>
                        </div>
                    </div>
                    
                    <div class="prjct">
                        <div class="prjct-hdr">
                            <h4>Project Title</h4>
                        </div>
                        <div class="prjct-bdy">
                            <div class="details">
                                <p class="prjct-info">Dewalt hand-held drill.
                                I will include a battery pack as well</p>
                                <div class="quality">Quality: Good As New</div>
                            </div>
                            
                            <div class="my-listing">
                                <p class="price">$23</p>
                                <img src="images/lathe.jpg"/>
                            </div>
                        </div>
                    </div>
                    
                    <div class="prjct">
                        <div class="prjct-hdr">
                            <h4>Project Title</h4>
                        </div>
                        <div class="prjct-bdy">
                            <div class="details">
                                <p class="prjct-info">Dewalt hand-held drill.
                                I will include a battery pack as well</p>
                                <div class="quality">Quality: Good As New</div>
                            </div>
                            
                            <div class="my-listing">
                                <p class="price">$23</p>
                                <img src="images/hammer.png"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="projects">
                    <div class="projects-hdr">
                        <h4>Your Projects</h4>
                        <div class="add-prjct">+ Project</div>
                    </div>
                    <div class="prjct">
                        <div class="prjct-hdr">
                            <h4>Project Title</h4>
                        </div>
                        <div class="prjct-bdy">
                            <p class="prjct-info">This is my DIY project to 
                            build a new wooden chair. I've bought all the wood 
                            and parts but now I need to begin assembling.</p>
                            <!--<h4></h4>-->
                            <div class="myImg">
                                <img src="images/saw.png"/>
                            </div>
                        </div>
                    </div>
                    
                    <div class="prjct">
                        <div class="prjct-hdr">
                            <h4>Project Title</h4>
                        </div>
                        <div class="prjct-bdy">
                            <p class="prjct-info">This is my DIY project to 
                            build a new wooden chair. I've bought all the wood 
                            and parts but now I need to begin assembling.</p>
                            <!--<h4></h4>-->
                            <div class="myImg">
                                <img src="images/glasses.png"/>
                            </div>
                        </div>
                    </div>
                    <div class="prjct">
                        <div class="prjct-hdr">
                            <h4>Project Title</h4>
                        </div>
                        <div class="prjct-bdy">
                            <p class="prjct-info">This is my DIY project to 
                            build a new wooden chair. I've bought all the wood 
                            and parts but now I need to begin assembling.</p>
                            <!--<h4></h4>-->
                            <div class="myImg">
                                <img src="images/hammer.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer"><p>Wes Bovee</p></div>
        
        <script src="bootstrap.js"></script>
    </body>
</html>
  </div>;
};

export default profile;