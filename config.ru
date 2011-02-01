require 'rubygems'
require 'bundler'

Bundler.setup(:default, (ENV["RACK_ENV"] || "development").to_sym)

require './app.rb'

run App
