#!/usr/bin/ruby
require 'rubygems'
require 'sinatra'

module Constants
  Key = 'ENRLoCfx__0YMg7-cJ8ZsSqI5JTsX4ZxtR3SQECVlqVF6p3NigvCrc7IdWANTtrZ'
  Secret = 'ezgM9tRdTSO7CGvuKCW6itRDrj_IIJRQCx-d08zekmEPhvTJKn49JCwNjm2cRtX1'
  Location = 'localhost:4567'
end

get '/' do
  erb :index
end
