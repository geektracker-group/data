<p align="center"><img src="http://www.geektracker.net/data/avatars/gallery/noavatar.png"></p>
contact@geektracker.net
<img src="http://www.geektracker.net/data/images/1.jpg">
<img src="http://www.geektracker.net/data/images/2.jpg">
<img src="http://www.geektracker.net/data/images/3.jpg">
<img src="http://www.geektracker.net/data/images/4.jpg">
<img src="http://www.geektracker.net/data/images/5.jpg">

## About geektracker

geektracker — bull-powered BitTorrent tracker engine, written in php. High speed, simple modification, high load 
architecture, built-in support for alternative compiled announcers (Ocelot, XBT). In addition we have very helpful 
[official support forum](https://geektracker.com/forum), where among other things it is possible to test the live 
demo, get any support and download modifications for engine.

## Current status

geektracker is currently in active development. The goal is to remove all legacy code and rewrite existing to 
modern standards. If you want to go deep on the code, check our [issues](https://github.com/geektracker/geektracker/issues) 
and go from there. The documentation will be translated into english in the near future, currently russian is the main language of it.

## Requirements

* Apache / nginx
* MySQL / MariaDB / Percona
* PHP: 5.6 / 7.0 / 7.1
* PHP Extensions: bcmath, intl, tidy (optional), xml

## Installation

For installation you need to follow a few simple steps:

1. Unpack to the server the contents of the downloaded folder
1. Install [Composer](https://getcomposer.org/) and run `composer install` on the downloaded directory
1. Create database and import dump located at **install/sql/mysql.sql**
1. Edit database configuration settings in the configuration file or a local copy (see below)
1. Edit domain name in the configuration file or a local copy (see below)
1. Edit domain ssl setting in the configuration file or a local copy (see below)
1. Edit this files:
   1. **favicon.png** (change on your own)
   1. **robots.txt** (change the addresses in lines **Host** and **Sitemap** on your own)
   1. **opensearch_desc.xml** (change the description and address on your own)
   1. **opensearch_desc_bt.xml** (change the description and address on your own)
1. Log in to the forum with admin/admin login/password and finish setting up via admin panel

## Access rights on folders and files

You must provide write permissions to the specified folders:
* `data/avatars`
* `data/torrent_files`
* `internal_data/ajax_html`
* `internal_data/atom`
* `internal_data/cache`
* `internal_data/log`
* `internal_data/triggers`
* `sitemap`

The specific settings depend on the server you are using, but in general case we recommend chmod 0755 for folders, 
and chmod 0644 for files in them. If you are not sure, leave it as is.

## The recommended way to run cron.php

For significant tracker speed increase may be required to replace built-in cron.php by operating system daemon. For more 
information about that you can read [this thread](https://geektracker.com/forum/threads/52/) on our support forum.

## Local configuration copy

You can override the settings using one of these methods: configuration file **library/config.local.php** and the environment
file **.env**. Both files are created by copying the appropriate .example templates without extension. Local configuration files 
should not be available for reading to anyone by setting up access rights for your web server.

## Ocelot installation

We have built-in support for alternate compiled announcer — Ocelot. The configuration is in the file **library/config.php**,
the announcer is in the repository [geektracker/ocelot](https://github.com/geektracker/ocelot). You can read assembly instructions
on his repository or in [this thread](https://geektracker.com/forum/threads/26078/) on our support forum.

## Official documentation

Documentation for geektracker can be found on the [geektracker docs website](https://docs.geektracker.com).

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for 
submitting pull requests to us. But we are always ready to renew your pull-request for compliance with 
these requirements. Just send it.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/geektracker/geektracker/tags). 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
