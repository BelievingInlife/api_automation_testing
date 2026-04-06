from utils.AssertScript import all_assert
from utils.ResponseParse import response_parse
from utils.TestLogger import insert_log


class ApiKeyWords:

    def __init__(self, request):
        self.request = request

    def http_post_request(self, **kwargs):
        print(f'move in http_post_request function')
        insert_log(f"http_post_request request body", kwargs)
        url = kwargs.get('url')
        headers = kwargs.get('headers')
        body = kwargs.get('body')
        print(f'{url}:{body}')
        response_data = self.request.post(url, headers, json=body)
        all_assert(kwargs, response_data)
        response_parse(response_data, response_extract = kwargs.get('response_extract'))
        return response_data

    def http_get_request(self, **kwargs):
        print(f'move in http_get_request function')
        insert_log(f"http_get_request request body", kwargs)
        url = kwargs.get('url')
        headers = kwargs.get('headers')
        body = kwargs.get('body')
        print(f'{url}:{body}')
        response_data = self.request.get(url=url, headers=headers, params=body)
        all_assert(kwargs, response_data)
        response_parse(response_data, response_extract=kwargs.get('response_extract'))
        return response_data


