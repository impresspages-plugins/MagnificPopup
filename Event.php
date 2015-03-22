<?php

namespace Plugin\MagnificPopup;

class Event
{
    public static function ipBeforeController()
    {
        ipAddCss('assets/magnific-popup/magnific-popup.css');
        ipAddJs('assets/magnific-popup/jquery.magnific-popup.min.js');
        ipAddJs('assets/init.js');
    }
}
