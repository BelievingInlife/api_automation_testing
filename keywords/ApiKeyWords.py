from utils.AssertScript import all_assert
from utils.ResponseParse import response_parse


class ApiKeyWords:

    def __init__(self, request):
        self.request = request

    def http_post_request(self, **kwargs):
        url = kwargs.get('url')
        headers = kwargs.get('headers')
        body = kwargs.get('body')
        response_data = self.request.post(url, headers, json=body)
        all_assert(kwargs, response_data)
        response_parse(response_data, response_extract = kwargs.get('response_extract'))
        return response_data

    def http_get_request(self, **kwargs):
        url = kwargs.get('url')
        headers = kwargs.get('headers')
        body = kwargs.get('body')
        # print(f'{url}:{headers}:{body}')
        response_data = self.request.get(url=url, headers=headers, params=body)
        all_assert(kwargs, response_data)
        response_parse(response_data, response_extract=kwargs.get('response_extract'))
        return response_data


