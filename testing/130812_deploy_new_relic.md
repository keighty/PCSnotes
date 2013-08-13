# Deploy new relic

Applications tab

* choose your language
* get your license key
* install the new relic gem
```
$ bundle
Post-install message from newrelic_rpm:
# New Relic Ruby Agent Release Notes #

## v3.6.6 ##

* HTTPClient and Curb support

  The Ruby agent now supports the HTTPClient and Curb HTTP libraries! Cross
  application tracing and more is fully supported for these libraries. For more
  details see https://newrelic.com/docs/ruby/ruby-http-clients.

* Sinatra startup improvements

  In earlier agent versions, newrelic_rpm had to be required after Sinatra to
  get instrumentation. Now the agent should start when your Sinatra app starts
  up in rackup, thin, unicorn, or similar web servers.

* Puma clustered mode support

  Clustered mode in Puma was not reporting data without manually adding a hook
  to Puma's configuration. The agent will now automatically add this hook.

* SSL certificate verification

  Early versions of the agent's SSL support provided an option to skip
  certificate verification. This option has been removed.

See https://github.com/newrelic/rpm/blob/master/CHANGELOG for a full list of
changes.
```
