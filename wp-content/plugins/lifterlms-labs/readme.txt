=== LifterLMS Labs ===
Contributors: chrisbadgett, strangerstudios, thomasplevy, d4z_c0nf, lifterlms, codeboxllc
Donate link: https://lifterlms.com
Tags: learning management system, LMS, membership, elearning, online courses, quizzes, sell courses, badges, gamification, learning, Lifter, LifterLMS
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html
Requires at least: 5.3
Tested up to: 6.1.1
Requires PHP: 7.3
Stable tag: 1.6.1

A collection of experimental, conceptual, and possibly silly features which improve and enhance the functionality of the LifterLMS core.

== Description ==

LifterLMS Labs is a collection of experimental, conceptual, and possibly silly features which improve and enhance the functionality of the LifterLMS core.

We've created this free LifterLMS add-on in order to provide these optional features to the LifterLMS community which may or may not be useful to everyone.

Some labs will ultimately find their way into the LifterLMS Core, some may be a lab forever.


### Current Labs

**Action Manager**

Quickly remove specific elements like course author, syllabus, and more without having to write any code. [Documentation and more information](https://lifterlms.com/docs/lab-action-manager/?utm_source=readme&utm_medium=product&utm_campaign=lifterlmslabsplugin&utm_content=actionmanager).

**Beaver Builder**

Add LifterLMS elements as pagebuilder modules and enable row and module visibility settings based on student enrollment in courses and memberships. [Documentation and more information](https://lifterlms.com/docs/lab-beaver-builder/?utm_source=readme&utm_medium=product&utm_campaign=lifterlmslabsplugin&utm_content=beaverbuilder).


**Lifti: Divi Theme Compatibility**

Enable LifterLMS compatibility with the Divi Theme and Page Builder. [Documentation and more information](https://lifterlms.com/docs/lab-lifti/?utm_source=readme&utm_medium=product&utm_campaign=lifterlmslabsplugin&utm_content=lifti).


**Simple Branding**

Customize the default colors of various LifterLMS elements. [Documentation and more information](https://lifterlms.com/docs/simple-branding-lab?utm_source=readme&utm_campaign=lifterlmslabsplugin&utm_medium=product&utm_content=simplebranding).


**Super Sidebars**

Very quickly configure LifterLMS sidebars to work with your theme. [Documentation and more information](https://lifterlms.com/docs/super-sidebars-lab?utm_source=readme&utm_campaign=lifterlmslabsplugin&utm_medium=product&utm_content=supersidebars).


== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/plugin-name` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Use the LifterLMS -> Labs screen to activate and configure the labs you wish to use


== Changelog ==

= v1.6.0 - 2021-07-13 =

+ **Raises the minimum supported WordPress core version to 5.3**.
+ Adds support for LifterLMS Core 5.0+.
+ Fixes issue encountered when activating the Beaver Builder lab.


= v1.5.3 - 2020-01-28 =

+ Tested to WordPress core 5.3.2
+ Beaver Builder: Fix module visibility issue when hiding modules based on enrollment in specific courses or memberships.
+ Action Manager: Remove non-functioning featured image hook. Featured images are output by themes not by LifterLMS.


= v1.5.2 - 2018-07-12 =

+ Beaver Builder: Minor changes to accommodate changes in LifterLMS 3.20.0
+ Lifti: Minor changes to accommodate changes in LifterLMS 3.20.0


= v1.5.1 - 2018-03-13 =

+ Lifti: Custom builder classes will now function as expected when used on free lessons
+ Lifti: Add support for LifterLMS Quiz layouts


= v1.5.0 - 2018-02-15 =

+ Beaver Builder: Updated to support Beaver Builder 2.0 (long over due, I know.)
+ Lifti: Changes to Divi prevent loading programmatically created layouts. The predefined layout for a LifterLMS course can now be downloaded [here](http://lifterlms.com/wp-content/uploads/2017/01/LifterLMS-Divi-Layouts.json).
+ Simple Branding: Add branding overrides for LifterLMS instructor information cards
+ Simple Branding: Add branding overrides for LifterLMS 3.16.0 quiz styles and LifterLMS Advanced Quizzes styles
+ Simple Branding: Save default values in database & generate CSS when the lab is enabled.


= v1.4.0 - 2017-09-05 =

##### Simple Branding Updates

+ Add support for LifterLMS notifications
+ Set default colors for branding options. Fixes issues with invalid CSS when options aren't set after enabling the lab
+ Make all branding color settings required


= v1.3.1 - 2017-08-16 =

+ Ensures BeaverBuilder enabled courses and lessons properly display private areas and private posts generated by LifterLMS Private Areas


= v1.3.0 - 2017-08-03 =

### Beaver Builder Integration Lab

+ Adds LifterLMS-specific modules for course and lesson construction via Beaver Builder
+ Adds row & module visibility settings to conditionally display elements based on course/membership enrollment status of the current visitor
+ Adds a basic LifterLMS course template for quick course building with a layout similar to the standard LifterLMS course layout
+ Full usage documentation and more details [here](https://lifterlms.com/docs/lab-beaver-builder/)


= v1.2.2 - 2017-05-19 =

+ Simple Branding: Automatically brand LifterLMS email templates according to branding color settings (requires LifterLMS 3.8.0 and higher).
+ Fix typo in i18n directory name


= v1.2.1 - 2017-03-28 =

+ Prevent Lifti from returning a builder layout for lessons when retrieving the lesson excerpt


[Read the full changelog](https://make.lifterlms.com/tag/lifterlms-labs/)
