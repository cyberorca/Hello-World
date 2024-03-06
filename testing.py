#! /usr/bin/python3.10
from pywebcopy.configs import default_config
from pywebcopy import save_webpage

print("Version :",default_config['http_headers']['User-Agent'])

default_config['http_headers']['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36'

print("Version :",default_config['http_headers']['User-Agent'])

url = input("Enter URL : ")
pname = input("Project Name : ")
folder = './'
# pywebcopy.configs['http_headers']['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36'

# user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/122.0.0.0'
# config.setup_config()
kwargs = {'bypass_robots': True, 'project_name': pname }
save_webpage(url, folder, **kwargs)
print("webpage saved in the location:",folder)