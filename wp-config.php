<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'lab' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ',1_@(t~M77(}7@FTZq:kG4}[Zc<;-lX]aRMZZ]}3#ndIDv#Xd))~l0M#20R7)xT8' );
define( 'SECURE_AUTH_KEY',  '0aP?>B>jm#Bh7u4$*g1T&-Hvj}3$.n-Gk@}loF,]l7)?Zy!cZ|sgZgKFxy98Z=D|' );
define( 'LOGGED_IN_KEY',    'Bi,Eq+7R-krao#;KFNaiUsnX.,te?aKbY`&}ekP#r:VqeK[|fm;CAQ13vNkqa_>{' );
define( 'NONCE_KEY',        'W<>#Fc!?Oj}]<4yV*[m&uA|lf-5eZH8Cr}GW#U^K`.~?#=Q&v`jI*37Lt?i DLWc' );
define( 'AUTH_SALT',        'O}PL^KIa@H&Q/<MB+l3,ibFX]mb=}G5Bp902DK7 q;83V_PT7{jH)Z@.i` B[-/V' );
define( 'SECURE_AUTH_SALT', 'cS;zrdojvnbrBlRA Q8bx>M#eIZ0ePI*0X!B*x-W}+?{<bM0jt68H4X%Dx|WQ&[<' );
define( 'LOGGED_IN_SALT',   '57Z YdQX.ZTJ/i8Ft/8S>o(odw8q;j&8esaJ. Xw$#9HAP[xvU2k9aC{I[@RJY>z' );
define( 'NONCE_SALT',       '9A~Q9qt0U4f +gYR%%bVNB#Q,#]-0/7Wo`+E]N!3D@f9h#19+8PIy[tN~}%OP*|3' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
