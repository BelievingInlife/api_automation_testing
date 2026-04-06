from utils.AssertScript import all_assert
from utils.ResponseParse import response_parse
from utils.TestLogger import insert_log


class BusinessKeyWords:

    def __init__(self, request):
        self.request = request

    def login_username(self, **kwargs):
        print(f'move in login_username function')
        insert_log(f"login_username request body", kwargs)
        url = kwargs.get('url')
        method = kwargs.get('method')
        headers = kwargs.get('headers')
        body = kwargs.get('body')
        print(f'{url}:{method}:{body}')
        response_data = self.request.request(url=url, method=method, headers=headers, json=body)
        # print(kwargs)
        all_assert(kwargs, response_data)
        response_parse(response_data, response_extract=kwargs.get('response_extract'))
        return response_data