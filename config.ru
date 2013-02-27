use Rack::Static, 
	:urls => ["/release", "/vendors", "/css"],
	:root => "."

run lambda { |env|
	[
		200, 
		{
			'Content-Type'  => 'text/html', 
			'Cache-Control' => 'public, max-age=86400' 
		},
		File.open('index.html', File::RDONLY)
	]
}
