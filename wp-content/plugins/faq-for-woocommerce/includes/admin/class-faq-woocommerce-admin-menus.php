<?php
/**
 * FAQ Woocommerce Admin Settings
 *
 * @class    FFW_Admin_Menu
 * @package  FAQ_Woocommerce\Admin\Menu
 * @version  1.0.0
 *
 * @link    https://optemiz.com/
 * @since   1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

/**
 * FFW_Admin_Menu class
 */
class FFW_Admin_Menu {

    /**
     * The single instance of the class.
     *
     * @var FFW_Admin_Menu
     * @since 1.0.0
     */
    protected static $_instance = null;

    /**
     * Main FFW_Admin_Menu Instance.
     *
     * Ensures only one instance of FFW_Admin_Menu is loaded or can be loaded.
     *
     * @since 1.4.1
     */
    public static function instance() {
        if ( is_null(self::$_instance) ) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    
    public function __construct() {
        add_action( 'admin_menu', array( $this, 'admin_menu' ), 20 );
    }

    /**
	 * Admin Menus.
	 */
    public function admin_menu() {

        if( ! ffw_is_premium_active() ) {
            add_submenu_page( 'edit.php?post_type=ffw', __('Upgrade', 'faq-for-woocommerce'), __('Upgrade', 'faq-for-woocommerce'), 'manage_options', 'ffw-upgrade-to-pro', array( $this, 'submenu_callback' ), 9999 );
        }
    }

    /**
	 * Submenu callback.
	 */
    public function submenu_callback() {

        // redirect to pro page
        if( isset($_GET['page']) && 'ffw-upgrade-to-pro' == $_GET['page'] ) {
            wp_redirect( FFW_PRO_URL );
            die;
        }
        
    }


}

new FFW_Admin_Menu();