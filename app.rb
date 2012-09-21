require 'sinatra/base'
require 'erb' # use Erb templates

class App < Sinatra::Base

  configure :development do
    require 'ruby-debug'
  end

  helpers do
  end

  get '/base' do
    @token = "test-#{rand(1000)}"
    erb :base
  end

  post '/iframe' do
    @token = params['token']
    response.set_cookie('COOKIE', @token)
    headers('P3P' => 'CP="DSP LAW"')
    erb :frame
  end

  get '/iframe-control' do
    erb :frame_control
  end

  get '/ajax' do
    request.cookies['COOKIE']
  end

  get '/popup' do
    response.set_cookie('COOKIE', 'foo')
    erb :popup
  end
end
