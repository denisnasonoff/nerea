<?php
    header("Expires: Mon, 10 Jul 1997 05:00:00 GMT");
    header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
    header("Cache-Control: no-store, no-cache, must-revalidate");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");
    header("Content-type: text/html; charset=utf-8");

    function setClassName($requestUri){
        return (strpos($_SERVER['REQUEST_URI'], $requestUri) !== false) ? 'active' : '';
    }
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <link rel="stylesheet/less" href="styles/styles.less?vf11qq2212ffddыsdfsfffff3dfddfff22f" type="text/css" />
    <!--[if lte IE 7]>
    <script type="text/javascript">
        location.replace("http://browsehappy.com/");
    </script>
    <![endif]-->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="favicon.png" type="image/png" />
    <meta name="title" content="" />
    <meta name="keywords" content="" />
    <meta name="description" content="" />

    <meta HTTP-EQUIV="Expires" CONTENT="0">
    <meta HTTP-EQUIV="Pragma" CONTENT="no-cache">
    <meta HTTP-EQUIV="Cache-Control" CONTENT="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache, must-revalidate">

    <!--<link rel="stylesheet" href="styles/styles.css" type="text/css" media="screen, projection" />-->
    <!--Styles-->
    <!--[if lte IE 8]>
    <link rel="stylesheet" href="styles/styles_ie8.css" type="text/css" media="screen, projection" />
    <![endif]-->

    <!--Scripts-->
    <script type="text/javascript" src="js/less.min.js"></script> <!-- v1.4.1 -->
    <script type="text/javascript" src="js/jquery.min-old.js"></script>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <!--<script type="text/javascript" src="js/jquery-migrate-1.2.1.js"></script>-->
    <script type="text/javascript" src="js/jquery.fancybox.pack.js"></script>
    <script type="text/javascript" src="js/jquery.jcarousel.min.js"></script>
<!--    <script type="text/javascript" src="js/jquery.bxslider.min.js"></script>
    <script type="text/javascript" src="js/jquery.autocolumnlist.js"></script>
    <script type="text/javascript" src="js/jquery.formstyler.min.js"></script>-->
    <!-- <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&language=en"></script> -->

    <script type="text/javascript" src="js/scripts.js"></script>

    <!--[if lte IE 8]>
        <script type="text/javascript" src="js/scripts-ie8.js"></script>
    <![endif]-->

    <title>About-us - Nerea</title>

</head>
<body>
    
<div class="wrapper main-body">
    <div class="wrapper main-header">
        <div class="header-content">
            <div class="clearfix">
                <ul id="lang" class="header-lang-menu">
                    <li><a href="#" class="active">en</a></li>
                    <li><a href="#">fr</a></li>
                </ul>
                <ul class="header-top-menu">
                    <li><a href="#">Why us?</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>    
            </div>
            
            <div class="clearfix">
                <a href="index.php" class="header-logo"></a>
                <ul class="header-main-menu">
                    <li class="dropdown">
                        <a href="microsoft-crm.php">Microsoft CRM</a>
                        <ul class="dropdown-sub-menu">
                            <li><a href="microsoft-crm-overview.php">CRM overview</a></li>
                            <li><a href="microsoft-crm-for-sales.php">CRM for Sales</a></li>
                            <li><a href="microsoft-crm-for-marketing.php">CRM for marketing</a></li>
                            <li><a href="microsoft-crm-for-customer-care.php">CRM for Customer care</a></li>
                            <li><a href="microsoft-crm-bi.php">CRM &amp; Business intelligence</a></li>
                        </ul>
                    </li>
                    <li class="dropdown diff">
                        <a href="crm-services.php">CRM Services</a>
                        <ul class="dropdown-sub-menu v2">
                            <li><a href="crm-project.php">CRM project</a></li>
                            <li><a href="crm-integration.php">Integration</a></li>
                            <li><a href="crm-support.php">CRM Support</a></li>
                            <li><a href="crm-training.php">Training</a></li>
                        </ul>
                    </li>
                    <li class="dropdown diff">
                        <a href="#">Customer refrences</a>
                        <ul class="dropdown-sub-menu v2">
                            <li><a href="#">Industry &amp; Energy</a></li>
                            <li><a href="wealth-management.php">Wealth management</a></li>
                            <li><a href="agrium.php">Public sector</a></li>
                            <li><a href="#">Professional services</a></li>
                            <li><a href="#">Other references</a></li>
                        </ul>
                    </li>
                    <li class="dropdown diff">
                        <a href="news-events.php">News &amp; Events</a>
                        <ul class="dropdown-sub-menu">
                            <li><a href="events.php">Events</a></li>
                            <li><a href="news.php">News</a></li>
                        </ul>
                    </li>
                    <li class="dropdown diff">
                        <a href="about-us.php">About us</a>
                        <ul class="dropdown-sub-menu">
                            <li><a href="#">Our team</a></li>
                            <li><a href="partners.php">Partners</a></li>
                        </ul>
                    </li>
                    <li class="<?php echo setClassName('/contact-us.php'); ?>"><a href="contact-us.php">Contact us</a></li>
                </ul>
            </div>
            <div class="header-sub-menu clearfix">
                
            </div>
        </div>
    </div>