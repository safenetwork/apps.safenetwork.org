require 'octokit'
require_relative 'lib/app'
require_relative 'lib/utils'

# Access Token: https://help.github.com/articles/creating-an-access-token-for-command-line-use/
octokit = Octokit::Client.new(access_token: ENV['GITHUB_ACCESS_TOKEN'])

Utils.for_each_file_in('_posts') do |file|
  app = App.new(file)
  next unless app.github_repo
  puts app.github_repo

  repo = octokit.repo(app.github_repo)
  app.set('stars', repo[:stargazers_count]).write
end
