from requests import Response
from core.GlobalContext import GlobalContext
from jsonpath_ng import parse

from utils.TestLogger import insert_log


def response_parse(response_data, response_extract):
    print(f'move in response_parse function')
    insert_log("response_parse extract body", f"{response_data} and {response_extract}")
    is_response_data = isinstance(response_data, Response)
    is_response_extract = isinstance(response_extract, dict)
    # print(response_extract)
    if is_response_data and is_response_extract:
        response_data = response_data.json()
        for key, value in response_extract.items():
            if key in response_data:
                # print(parse(value).find(response_data))
                data = parse(value).find(response_data)[0].value
                GlobalContext().set_global_context_dict({key: data})
                # print(f"response_extract: {key} = {GlobalContext().show_global_context()}")