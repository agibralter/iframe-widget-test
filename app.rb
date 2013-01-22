require 'sinatra/base'
require 'erb' # use Erb templates

class App < Sinatra::Base

  configure :development do
    require 'ruby-debug'
  end

  set :protection, :except => :frame_options

  helpers do
  end

  get '/' do
    @token = "test-#{rand(1000)}"
    erb :base
  end

  get '/iframe-xdomain' do
    @token = params['token']
    response.set_cookie('COOKIE', @token)
    headers('P3P' => 'CP="DSP LAW"')
    erb :frame
  end

  post '/iframe-xdomain' do
    @token = params['token']
    response.set_cookie('COOKIE', @token)
    headers('P3P' => 'CP="DSP LAW"')
    erb :frame
  end

  get '/iframe-xdomain2' do
    @token = params['token']
    response.set_cookie('COOKIE', @token)
    headers('P3P' => 'CP="DSP LAW"')
    erb :frame2
  end

  post '/iframe-xdomain2' do
    @token = params['token']
    response.set_cookie('COOKIE', @token)
    headers('P3P' => 'CP="DSP LAW"')
    erb :frame2
  end

  get '/ajax' do
    "request cookies: #{request.cookies.inspect}"
  end

  get '/ajax' do
    request.cookies['COOKIE']
  end

  get '/popup' do
    response.set_cookie('COOKIE', 'foo')
    erb :popup
  end
end
